import React, {useState, useEffect} from 'react'
import client from '../../components/MqttConfig'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Switch, Image, Dimensions, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {firestore} from '../../components/FirebaseConfig';
import firebase from "firebase/app"


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

const lightFeed = 'nhatnam23012000/feeds/balcony-light'
const waterFeed = 'nhatnam23012000/feeds/balcony-water'
const lightSensorFeed = 'nhatnam23012000/feeds/light-sensor'
const humidSensorFeed = 'nhatnam23012000/feeds/humid-sensor'

export default function Balcony() {
    const navigation = useNavigation();


    
    //TODO: we must upload these state to firebase to sync it with the house setting p[age]
    const [balconyLights, setBalconyLights] = useState(false);
    const [balconyWater, setBalconyWater] = useState(false);
    const [currentLightLevel, setCurrentLightLevel] = useState("")
    const [currentHumidity, setCurrentHumidity] = useState("")
    const [dt, setDt] = useState(new Date().toLocaleString())
    const [autoLight, setAutoLight] = useState(false)
    const [autoWater, setAutoWater] = useState(false)


    //check auto light and time
    useEffect(() => {
        let secTimer = setInterval( () => {
            setDt(new Date().toLocaleString())
            firestore.collection('AutoLighting')
            .orderBy('time','desc')
            .limit(1)
            .get()
            .then(snapshot =>{
                setAutoLight(snapshot.docs[0].data().value)
            })
            firestore.collection('AutoWater')
            .orderBy('time','desc')
            .limit(1)
            .get()
            .then(snapshot =>{
                setAutoWater(snapshot.docs[0].data().value)
            })
        },1000)
    
        return () => clearInterval(secTimer);
    })
    

    //MQTT listener
    client.on('message', function (topic, message){
        if(topic == lightSensorFeed){
            setCurrentLightLevel(message.toString())
        }
        else if(topic == humidSensorFeed){
            setCurrentHumidity(message.toString())
        }
    })


    const toggleBalconyLights = () =>{ 
        if (balconyLights == false){
            setBalconyLights(true);
            client.publish(lightFeed, '1')
            firestore.collection('BalconyLight').add({
                time: firebase.firestore.Timestamp.now(),
                value: true
            })
        }
        else if (balconyLights == true){
            setBalconyLights(false);
            client.publish(lightFeed, '0')
            firestore.collection('BalconyLight').add({
                time: firebase.firestore.Timestamp.now(),
                value: false
            })
        }
    }
    const toggleBalconyWater = () => {
        if (balconyWater == false){
            setBalconyWater(true);
            client.publish(waterFeed, '1')
            firestore.collection('Water').add({
                time: firebase.firestore.Timestamp.now(),
                value: true
            })
        }
        else if (balconyWater == true){
            setBalconyWater(false)
            client.publish(waterFeed, '0')
            firestore.collection('Water').add({
                time: firebase.firestore.Timestamp.now(),
                value: false
            })
        }
    }
    

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
                                disabled = {autoLight == false ? false : true}
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
                                disabled = {autoWater == false ? false : true}
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
                            <Text style={styles.infoText}>{dt}</Text>
                        </Col>
                        <Col style={styles.cell}>
                            <Text style={styles.infoText}>{currentLightLevel}</Text>
                        </Col>
                        <Col style={styles.cell}>
                            <Text style={styles.infoText}>{currentHumidity}</Text>
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

    infoText: {
        color: 'white',
        alignSelf: 'center'
    }


})
