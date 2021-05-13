import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, FlatList} from 'react-native'
import {firestore} from '../../components/FirebaseConfig';

//import hooks
import { useCollection } from 'react-firebase-hooks/firestore';
import { useFonts } from "@use-expo/font";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import {AntDesign, MaterialCommunityIcons} from 'react-native-vector-icons';


import houseImg from '../../assets/image/DashboardImg/house.jpg';



const {width: WIDTH} = Dimensions.get('window')
const customFonts ={
    'UTM-Neutra': require('../../assets/fonts/UTM-Neutra.ttf'),
    'Mako': require('../../assets/fonts/Mako-Regular.ttf'),
    'Slabo': require('../../assets/fonts/Slabo13px-Regular.ttf'),
    'Sora': require('../../assets/fonts/Sora-VariableFont_wght.ttf')
};


export default function House() {

    const navigation = useNavigation();

    const [isLoaded] = useFonts(customFonts);


    if (!isLoaded) {
        return <AppLoading />;
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerImg}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image source={houseImg} style={styles.headImage}/>
                <TouchableOpacity style={styles.gobackBtn}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <AntDesign name={'left'} size={28} color={'white'}/>
                </TouchableOpacity>
                <View style={{position: 'absolute', top: 0, left: 37, right: 0, bottom: 0, justifyContent: 'center'}}>
                    <Text style={styles.headerText}>House</Text>
                </View>                    
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.menuBtn}
                    onPress={() => navigation.navigate('HouseLight')}
                >
                    <MaterialCommunityIcons name={'lightbulb-on'} color={'white'} size={45}/>
                    <Text style={styles.btnText}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuBtn}
                    onPress={() => navigation.navigate('HouseCurtain')}
                >
                    <MaterialCommunityIcons name={'window-closed-variant'} color={'white'} size={45}/>
                    <Text style={styles.btnText}>Curtain</Text>
                </TouchableOpacity>
            </View>
                
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.menuBtn}
                    onPress={() => navigation.navigate('Secure')}
                >
                    <MaterialCommunityIcons name={'shield-home'} color={'white'} size={45}/>
                    <Text style={styles.btnText}>Security</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuBtn}
                    onPress={() => navigation.navigate('HouseWater')}
                >
                <MaterialCommunityIcons name={'water'} color={'white'} size={45}/>
                    <Text style={styles.btnText}>Water</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#2D2E2F'
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
        alignItems:'center',
    },

})