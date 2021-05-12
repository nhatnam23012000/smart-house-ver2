import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, ImageBackground, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import * as Font from 'expo-font';
import { useFonts } from "@use-expo/font";
import AppLoading from 'expo-app-loading';
import balconyImg from '../../assets/image/DashboardImg/balcony.jpg';
import bathroomImg from '../../assets/image/DashboardImg/bathroom.jpg';
import bedroomImg from '../../assets/image/DashboardImg/bedroom.jpg';
import houseImg from '../../assets/image/DashboardImg/house.jpg';
import kitchenImg from '../../assets/image/DashboardImg/kitchen.jpg';
import livingroomImg from '../../assets/image/DashboardImg/livingroom.jpg';


const customFonts ={
    'UTM-Neutra': require('../../assets/fonts/UTM-Neutra.ttf'),
    'Mako': require('../../assets/fonts/Mako-Regular.ttf'),
    'Slabo': require('../../assets/fonts/Slabo13px-Regular.ttf'),
    'Sora': require('../../assets/fonts/Sora-VariableFont_wght.ttf')
};




export default function Home() {
    const navigation = useNavigation();

    const [isLoaded] = useFonts(customFonts);


    if (!isLoaded) {
        return <AppLoading />;
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={'#43484D'}/>
                <Text style={styles.title1}>
                    Welcome Home,
                </Text>

                <Text style={styles.title2}>
                    Master
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                
                <TouchableOpacity style={styles.houseBtn}
                    onPress={() => navigation.navigate('HouseControl')}
                >
                    <Image source={houseImg} style={styles.houseBackground}/>
                    <Text style={styles.houseBtnText}>House</Text>                    
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.livingroomBtn}
                    onPress={() => navigation.navigate('Livingroom')}
                >
                    <Image source={livingroomImg} style={styles.livingroomBackground}/>
                    <Text style={styles.livingroomBtnText}>Living room</Text>                    
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.bedroomBtn}
                    onPress={() => navigation.navigate('Bedroom')}
                >
                    <Image source={bedroomImg} style={styles.bedroomBackground}/>
                    <Text style={styles.bedroomBtnText}>Bedroom</Text>                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.kitchenBtn}
                    onPress={() => navigation.navigate('Kitchen')}
                >
                    <Image source={kitchenImg} style={styles.kitchenBackground}/>
                    <Text style={styles.kitchenBtnText}>Kitchen</Text>                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.bathroomBtn}
                    onPress={() => navigation.navigate('Bathroom')}
                >
                    <Image source={bathroomImg} style={styles.bathroomBackground}/>
                    <Text style={styles.bathroomBtnText}>Bathroom</Text>                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.balconyBtn}
                    onPress={() => navigation.navigate('Balcony')}
                >
                    <Image source={balconyImg} style={styles.balconyBackground}/>
                    <Text style={styles.balconyBtnText}>Balcony</Text>                    
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    title1: {
        fontFamily:'Mako',
        fontSize: 20,
        color: '#FFFFFF',
        marginTop:20,
        marginHorizontal: 20,
    },

    title2: {
        fontFamily:'Slabo',
        fontSize: 30,
        color: '#FFFFFF',
        marginHorizontal:20,
    },

    headerContainer: {
        backgroundColor: '#43484D',
        height: 110,
        borderBottomColor:'black',
        borderBottomWidth:2,
    },

    bodyScroll: {
        
    },

    contentContainer:{
        alignItems:'center',
        paddingBottom:56
    },

    // house button
    houseBackground:{
        opacity:0.5,
        width:380,
        height:120,
        borderRadius:20
    },
    houseBtn: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(29, 17, 17,1)',
        marginTop: 15,
        height: 120,
        width: 380,   
        borderRadius:20
    },
    houseBtnText: {
        position: 'absolute',
        fontFamily:'Sora',
        fontSize: 26,
        color:'white',
        paddingLeft: 7,
        paddingTop:5,
    },

    //Living room Button
    livingroomBackground:{
        opacity:0.5,
        width:380,
        height:120,
        borderRadius:20
    },
    livingroomBtn: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(29, 17, 17,1)',
        marginTop: 15,
        height: 120,
        width: 380,  
        borderRadius:20    
    },
    livingroomBtnText: {
        position: 'absolute',
        fontFamily:'Sora',
        fontSize: 26,
        color:'white',
        paddingLeft: 7,
        paddingTop:5,
    },

    //Bedroom button
    bedroomBackground:{
        opacity:0.5,
        width:380,
        height:120,
        borderRadius:20
    },
    bedroomBtn: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(29, 17, 17,1)',
        marginTop: 15,
        height: 120,
        width: 380, 
        borderRadius:20     
    },
    bedroomBtnText: {
        position: 'absolute',
        fontFamily:'Sora',
        fontSize: 26,
        color:'white',
        paddingLeft: 7,
        paddingTop:5,
    },

    //kitchen Button
    kitchenBackground:{
        opacity:0.5,
        width:380,
        height:120,
        borderRadius:20
    },
    kitchenBtn: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(29, 17, 17,1)',
        marginTop: 15,
        height: 120,
        width: 380,  
        borderRadius:20    
    },
    kitchenBtnText: {
        position: 'absolute',
        fontFamily:'Sora',
        fontSize: 26,
        color:'white',
        paddingLeft: 7,
        paddingTop:5,
    },

    //Bathroom button
    bathroomBackground:{
        opacity:0.5,
        width:380,
        height:120,
        borderRadius:20
    },
    bathroomBtn: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(29, 17, 17,1)',
        marginTop: 15,
        height: 120,
        width: 380,  
        borderRadius:20    
    },
    bathroomBtnText: {
        position: 'absolute',
        fontFamily:'Sora',
        fontSize: 26,
        color:'white',
        paddingLeft: 7,
        paddingTop:5,
    },

    //Balcony button
    balconyBackground:{
        opacity:0.5,
        width:380,
        height:120,
        borderRadius:20
    },
    balconyBtn: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(29, 17, 17,1)',
        marginTop: 15,
        height: 120,
        width: 380,  
        borderRadius:20    
    },
    balconyBtnText: {
        position: 'absolute',
        fontFamily:'Sora',
        fontSize: 26,
        color:'white',
        paddingLeft: 7,
        paddingTop:5,
    },

    container: {
        flex: 1, 
        backgroundColor: '#66738B'
    }
})
