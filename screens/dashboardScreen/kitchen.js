import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Switch, Image, Dimensions, FlatList} from 'react-native'
import {firestore} from '../../components/FirebaseConfig';

//import hooks
import { useCollection } from 'react-firebase-hooks/firestore';
import { useFonts } from "@use-expo/font";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import {AntDesign, MaterialCommunityIcons} from 'react-native-vector-icons';


import kitchenImg from '../../assets/image/DashboardImg/kitchen.jpg';

const {width: WIDTH} = Dimensions.get('window')
const customFonts ={
    'UTM-Neutra': require('../../assets/fonts/UTM-Neutra.ttf'),
    'Mako': require('../../assets/fonts/Mako-Regular.ttf'),
    'Slabo': require('../../assets/fonts/Slabo13px-Regular.ttf'),
    'Sora': require('../../assets/fonts/Sora-VariableFont_wght.ttf')
};


export default function Kitchen() {
    const navigation = useNavigation();


    //TODO: we must upload these state tio firebase to sync it woith the house setting p[age]
    const [kitchenLights, setKitchenLights] = useState(false);
    const [kitchenCurtain, setKitchenCurtain] = useState(false);
    const [kitchenSecurity, setKitchenSecurity] = useState(false);

    const toggleKitchenLights = () => setKitchenLights(previousState => !previousState)
    const toggleKitchenCurtain = () => setKitchenCurtain(previousState => !previousState)
    const toggleKitchenSecurity = () => setKitchenSecurity(previousState => !previousState)

    const [isLoaded] = useFonts(customFonts);


    if (!isLoaded) {
        return <AppLoading />;
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerImg}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image source={kitchenImg} style={styles.headImage}/>
                <TouchableOpacity style={styles.gobackBtn}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <AntDesign name={'left'} size={28} color={'white'}/>
                </TouchableOpacity>
                <View style={{position: 'absolute', top: 0, left: 37, right: 0, bottom: 0, justifyContent: 'center'}}>
                    <Text style={styles.headerText}>Kitchen</Text>
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
                            onValueChange={toggleKitchenLights} 
                            value={kitchenLights}
                        />
                    </View>
                </View>

                <View style={styles.menuBtn}>
                    <MaterialCommunityIcons name={'window-closed-variant'} color={'white'} size={45} style={{marginHorizontal:30}}/>
                    <View style={{justifyContent: 'space-evenly', flexDirection:'row'}}>
                        <Text style={styles.btnText}>Curtain</Text>
                        <Switch
                            trackColor={{ false: "black", true: "#81b0ff" }}
                            thumbColor={'white'}
                            onValueChange={toggleKitchenCurtain} 
                            value={kitchenCurtain}
                        />
                    </View>
                </View>
            </View>
                
            <View style={styles.buttonContainer1}>
                <View style={styles.menuBtn1}>
                    <MaterialCommunityIcons name={'shield-home'} color={'white'} size={45} style={{marginHorizontal:30}}/>
                    <View style={{justifyContent: 'space-evenly', flexDirection:'row'}}>
                        <Text style={styles.btnText}>Security</Text>
                        <Switch
                            trackColor={{ false: "black", true: "#81b0ff" }}
                            thumbColor={'white'}
                            onValueChange={toggleKitchenSecurity} 
                            value={kitchenSecurity}
                        />
                    </View>
                </View>

            </View>


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

    buttonContainer1: {
        marginTop: 45,
        flexDirection: 'column',
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

    menuBtn1: {
        backgroundColor:'#74757B',
        borderRadius:20,
        height:180,
        width:180,
        justifyContent: 'center',
        marginHorizontal: 20,
    },

})
