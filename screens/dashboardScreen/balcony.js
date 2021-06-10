import React, {useState, useEffect} from 'react'
import mqtt from '@taoqf/react-native-mqtt'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Switch, Image, Dimensions, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {firestore} from '../../components/FirebaseConfig';


//import hooks
import { useCollection } from 'react-firebase-hooks/firestore';
import { useFonts } from "@use-expo/font";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

//import icon here
import {AntDesign, MaterialCommunityIcons} from 'react-native-vector-icons';

//import image here
import balconyImg from '../../assets/image/DashboardImg/balcony.jpg';

const {width: WIDTH} = Dimensions.get('window')
const customFonts ={
    'UTM-Neutra': require('../../assets/fonts/UTM-Neutra.ttf'),
    'Mako': require('../../assets/fonts/Mako-Regular.ttf'),
    'Slabo': require('../../assets/fonts/Slabo13px-Regular.ttf'),
    'Sora': require('../../assets/fonts/Sora-VariableFont_wght.ttf')
};

const lightSensorFeed = 'nhatnam23012000/feeds/light-sensor'
const humidSensorFeed = 'nhatnam23012000/feeds/humid-sensor'
const lightFeed = 'nhatnam23012000/feeds/balcony-light'
const waterFeed = 'nhatnam23012000/feeds/balcony-water'
const test = 'nhatnam23012000/feeds/noti'

export default function Balcony() {

    
    const client = mqtt.connect("mqtt://io.adafruit.com",{
        username: "nhatnam23012000",
        password: "aio_TBtk19hSbEsXPl37BH2BasRXavEW"
    })

    client.on("connect",function () {
        client.subscribe(test);
        client.subscribe(lightFeed)
    })
    

    const navigation = useNavigation();

    //TODO: we must upload these state tio firebase to sync it woith the house setting p[age]
    const [balconyLights, setBalconyLights] = useState(false);
    const [balconyWater, setBalconyWater] = useState(false);
    


    const toggleBalconyLights = () =>{ 
        if (balconyLights == false){
            setBalconyLights(true);
            client.publish(lightFeed, '1')
        }
        else if (balconyLights == true){
            setBalconyLights(false);
            client.publish(lightFeed, '0')
        }
    }
    const toggleBalconyWater = () => setBalconyWater(previousState => !previousState)
    

    const [isLoaded] = useFonts(customFonts);



    if (!isLoaded) {
        return <AppLoading/>;
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerImg}>
                    <StatusBar translucent backgroundColor="transparent" />
                    <Image source={balconyImg} style={styles.headImage}/>
                    <TouchableOpacity style={styles.gobackBtn}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <AntDesign name={'left'} size={28} color={'white'}/>
                    </TouchableOpacity>
                    <View style={{position: 'absolute', top: 0, left: 37, right: 0, bottom: 0, justifyContent: 'center'}}>
                        <Text style={styles.headerText}>Balcony</Text>
                    </View>                    
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.menuBtn}>
                        <MaterialCommunityIcons name={'lightbulb-on'} color={'white'} size={45} style={{marginHorizontal:30}}/>
                        <View style={{justifyContent: 'space-evenly', flexDirection:'row'}}>
                            <Text style={styles.btnText}>Light</Text>
                            <Switch
                                trackColor={{ false: "black", true: "#81b0ff" }}
                                thumbColor={'white'}
                                onValueChange={toggleBalconyLights} 
                                value={balconyLights}
                            />
                        </View>
                    </View>

                    <View style={styles.menuBtn}>
                        <MaterialCommunityIcons name={'water'} color={'white'} size={45} style={{marginHorizontal:30}}/>
                        <View style={{justifyContent: 'space-evenly', flexDirection:'row'}}>
                            <Text style={styles.btnText}>Water</Text>
                            <Switch
                                trackColor={{ false: "black", true: "#81b0ff" }}
                                thumbColor={'white'}
                                onValueChange={toggleBalconyWater} 
                                value={balconyWater}
                            />
                        </View>
                    </View>
                </View>

                <Grid style={styles.dataTable}>
                    <Row size={30}>
                        <Col style={styles.cell}>
                            <MaterialCommunityIcons name={'clock-outline'} color={'white'} size={28}/>
                        </Col>
                        <Col style={styles.cell}>
                            <MaterialCommunityIcons name={'white-balance-sunny'} color={'white'} size={28}/>
                        </Col>
                        <Col style={styles.cell}>
                            <MaterialCommunityIcons name={'water-percent'} color={'white'} size={28}/>
                        </Col>
                    </Row>
                    

                    {/* TODO  dynamic show this data with firestore*/}
                    <Row size={30}>
                        <Col style={styles.cell}>
                            <Text color={'white'}> TIme goes here</Text>
                        </Col>
                        <Col style={styles.cell}>
                            <Text color={'white'}>Light goes here</Text>
                        </Col>
                        <Col style={styles.cell}>
                            <Text color={'white'}>Humid goes here</Text>
                        </Col>
                    </Row>
                </Grid>
                
            

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#43484D'
    },

    headerImg:{
        backgroundColor: 'rgba(29, 17, 17,1)',
        width: WIDTH,
        height: 198,
    },
    
    headerText:{
        fontFamily:'Sora',
        fontSize:26,
        color:'white',
        
    },

    gobackBtn: {
        position: 'absolute',
        marginTop:28,
        paddingLeft: 14
    },

    headImage:{
        opacity: 0.6,
        width: WIDTH,
        height: 210
    },

    buttonContainer: {
        marginTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },


    btnText:{
        fontFamily:'Sora',
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginTop:10,
    },

    menuBtn: {
        backgroundColor:'#74757B',
        borderRadius:20,
        height:180,
        width:180,
        justifyContent: 'center',
    },

    dataTable: {
        width: WIDTH - 30,
        height: 300,
        padding: 16,
        marginTop: 30,
        backgroundColor: '#74757B',
        borderRadius: 10,
        alignSelf:'center'
    },

    cell: {
        borderWidth: 0,
        borderColor: '#ddd',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
      },


})
