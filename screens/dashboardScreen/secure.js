import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Switch, Image, Dimensions, FlatList} from 'react-native';

import { useCollection } from 'react-firebase-hooks/firestore';
import { useFonts } from "@use-expo/font";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import {AntDesign} from 'react-native-vector-icons';

const customFonts ={
    'UTM-Neutra': require('../../assets/fonts/UTM-Neutra.ttf'),
    'Mako': require('../../assets/fonts/Mako-Regular.ttf'),
    'Slabo': require('../../assets/fonts/Slabo13px-Regular.ttf'),
    'Sora': require('../../assets/fonts/Sora-VariableFont_wght.ttf')
};
const {width: WIDTH} = Dimensions.get('window');

export default function HouseLight() {
    const navigation = useNavigation();
    const [isLoaded] = useFonts(customFonts);

    const [securityMode, setSecurityMode] = useState(false);
    const [allSensors, setAllSensors] = useState(false);
    const [livingRoomSensor, setLivingRoomSensor] = useState(false);
    const [bedroomSensor, setBedroomSensor] = useState(false);
    const [kitchenSensor, setKitchenSensor] = useState(false);
    const [balconySensor, setBalconySensor] = useState(false);
    
    const toggleSecurityMode = () => setSecurityMode(previousState => !previousState);
    const toggleAllSensors = () => {
        if (allSensors === true) {
            setAllSensors(false);
            setLivingRoomSensor(false);
            setBedroomSensor(false);
            setKitchenSensor(false);
            setBalconySensor(false);
        }
        else if (allSensors === false) {
            setAllSensors(true);
            setLivingRoomSensor(true);
            setBedroomSensor(true);
            setKitchenSensor(true);
            setBalconySensor(true);
        }
    };
    const toggleLivingRoomSensor = () => setLivingRoomSensor(previousState => !previousState)
    const toggleBedroomSensor = () => setBedroomSensor(previousState => !previousState)
    const toggleKitchenSensor = () => setKitchenSensor(previousState => !previousState)
    const toggleBalconySensor = () => setBalconySensor(previousState => !previousState)

    if (!isLoaded) {
        return <AppLoading/>;
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backBtn}
                    onPress={() =>navigation.goBack()}
                >
                    <AntDesign name={'left'} size={28} color={'white'}/>
                </TouchableOpacity>
                <Text style={styles.title}>Security</Text>
            </View>

            <View style={styles.autoTab}>
                <Text style={styles.optionText}>Security mode</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleSecurityMode} 
                    value={securityMode}
                />
            </View>

            <View style={styles.houseTab}>
                <Text style={styles.optionText}>All sensors in house</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleAllSensors} 
                    value={allSensors}
                    
                />
            </View>

            <View style={styles.controlTab}>
                <Text style={styles.optionText}>Living room sensors</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleLivingRoomSensor} 
                    value={livingRoomSensor}
                    
                />
            </View>
            <View style={styles.controlTab}>
                <Text style={styles.optionText}>Bedroom sensors</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleBedroomSensor} 
                    value={bedroomSensor}
                    
                />
            </View>
            <View style={styles.controlTab}>
                <Text style={styles.optionText}>Kitchen sensors</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleKitchenSensor} 
                    value={kitchenSensor}
                    
                />
            </View>
            <View style={styles.controlTab}>
                <Text style={styles.optionText}>Balcony sensors</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleBalconySensor} 
                    value={balconySensor}
                    
                />
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

    autoTab:{
        flexDirection:'row',
        marginTop: 50,
        backgroundColor: '#747578',
        height:64,
        borderBottomColor:'black',
        borderBottomWidth: 1,
        borderTopColor:'black',
        borderTopWidth: 1,
        justifyContent: 'space-between'
    },

    optionText:{
        fontSize: 20,
        fontFamily: 'Sora',
        color: 'white',
        marginTop: 10,
        marginHorizontal: 15
    },

    houseTab:{
        flexDirection:'row',
        marginTop: 50,
        marginBottom:50,
        backgroundColor: '#747578',
        height:64,
        borderBottomColor:'black',
        borderBottomWidth: 1,
        borderTopColor:'black',
        borderTopWidth: 1,
        justifyContent: 'space-between'
    },

    controlTab: {
        flexDirection:'row',
        backgroundColor: '#747578',
        height:64,
        borderBottomColor:'black',
        borderBottomWidth: 1,
        borderTopColor:'black',
        borderTopWidth: 1,
        justifyContent: 'space-between'
    }
})
