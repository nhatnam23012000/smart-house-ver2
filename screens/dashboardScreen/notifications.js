import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Switch, Image, Dimensions, FlatList} from 'react-native';

import { useCollection } from 'react-firebase-hooks/firestore';
import { useFonts } from "@use-expo/font";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import {AntDesign, MaterialCommunityIcons} from 'react-native-vector-icons';

const customFonts ={
    'UTM-Neutra': require('../../assets/fonts/UTM-Neutra.ttf'),
    'Mako': require('../../assets/fonts/Mako-Regular.ttf'),
    'Slabo': require('../../assets/fonts/Slabo13px-Regular.ttf'),
    'Sora': require('../../assets/fonts/Sora-VariableFont_wght.ttf')
};
const {width: WIDTH} = Dimensions.get('window');

//TODO: at the moment this is fake data, next time we need to transfer data here from firebase (format will be if the string of type is a then notifications will be a) 

export default function Notifications() {

    const navigation = useNavigation();
    const [isLoaded] = useFonts(customFonts);


    if (!isLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <StatusBar translucent backgroundColor="transparent" />
                <TouchableOpacity style={styles.backBtn}
                    onPress={() =>navigation.goBack()}
                >
                    <AntDesign name={'left'} size={28} color={'white'}/>
                </TouchableOpacity>
                <Text style={styles.title}>Notifications</Text>
            </View>
            <View style={styles.notiTab}>
                <View style={styles.notiIcon}>
                    <MaterialCommunityIcons name={'water'} color={'white'} size={45}/>
                </View>
                <View style={styles.notiText}>
                    <Text style={styles.notiTextUpper}>
                        The garden was watered at 4:00PM
                    </Text>
                    <Text style={styles.notiTextLower}>
                        5 minutes ago
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#43484D'
    },
    headerContainer: {
        backgroundColor: '#2D2E2F',
        height: 110,
        borderBottomColor:'black',
        borderBottomWidth:2,
        justifyContent: 'center',
        
    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Sora',
        fontSize: 22,
        alignSelf: 'center'
    },
    backBtn:{
        marginHorizontal:14,
        marginTop:14
    },
    notiTab: {
        height:75,
        backgroundColor: '#747578',
        borderBottomColor:'black',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },

    notiIcon:{
        paddingLeft:15
    },

    notiText:{
        marginHorizontal:10
    },

    notiTextUpper:{
        fontFamily:'Sora',
        fontSize: 18,
    },

    notiTextLower:{
        fontFamily:'Sora',
        fontSize: 10,
    }
})