import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Switch, Image, Dimensions, FlatList} from 'react-native';

import { useCollection } from 'react-firebase-hooks/firestore';
import { useFonts } from "@use-expo/font";
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import {AntDesign} from 'react-native-vector-icons';

const customFonts ={
    'UTM-Neutra': require('../../../assets/fonts/UTM-Neutra.ttf'),
    'Mako': require('../../../assets/fonts/Mako-Regular.ttf'),
    'Slabo': require('../../../assets/fonts/Slabo13px-Regular.ttf'),
    'Sora': require('../../../assets/fonts/Sora-VariableFont_wght.ttf')
};
const {width: WIDTH} = Dimensions.get('window');

export default function HouseLight() {
    const navigation = useNavigation();
    const [isLoaded] = useFonts(customFonts);

    const [autoLight, setAutoLight] = useState(false);
    const [allLight, setAllLight] = useState(false);
    const [livingRoomLights, setLivingRoomLights] = useState(false);
    const [bedroomLights, setBedroomLights] = useState(false);
    const [kitchenLights, setKitchenLights] = useState(false);
    const [balconyLights, setBalconyLights] = useState(false);
    
    const toggleAutoLight = () => setAutoLight(previousState => !previousState);
    const toggleAllLight = () => {
        if (allLight === true) {
            setAllLight(false);
            setLivingRoomLights(false);
            setBedroomLights(false);
            setKitchenLights(false);
            setBalconyLights(false);
        }
        else if (allLight === false) {
            setAllLight(true);
            setLivingRoomLights(true);
            setBedroomLights(true);
            setKitchenLights(true);
            setBalconyLights(true);
        }
    };
    const toggleLivingRoomLights = () => setLivingRoomLights(previousState => !previousState)
    const toggleBedroomLights = () => setBedroomLights(previousState => !previousState)
    const toggleKitchenLights = () => setKitchenLights(previousState => !previousState)
    const toggleBalconyLights = () => setBalconyLights(previousState => !previousState)

    if (!isLoaded) {
        return <AppLoading />;
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backBtn}
                    onPress={() =>navigation.goBack()}
                >
                    <AntDesign name={'left'} size={28} color={'white'}/>
                </TouchableOpacity>
                <Text style={styles.title}>Light</Text>
            </View>

            <View style={styles.autoTab}>
                <Text style={styles.optionText}>Auto lighting</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleAutoLight} 
                    value={autoLight}
                />
            </View>

            <View style={styles.houseTab}>
                <Text style={styles.optionText}>All lights in house</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleAllLight} 
                    value={allLight}
                    disabled = {autoLight == false ? false : true}
                />
            </View>

            <View style={styles.controlTab}>
                <Text style={styles.optionText}>Living room</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleLivingRoomLights} 
                    value={livingRoomLights}
                    disabled = {autoLight == false ? false : true}
                />
            </View>
            <View style={styles.controlTab}>
                <Text style={styles.optionText}>Bedroom</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleBedroomLights} 
                    value={bedroomLights}
                    disabled = {autoLight == false ? false : true}
                />
            </View>
            <View style={styles.controlTab}>
                <Text style={styles.optionText}>Kitchen</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleKitchenLights} 
                    value={kitchenLights}
                    disabled = {autoLight == false ? false : true}
                />
            </View>
            <View style={styles.controlTab}>
                <Text style={styles.optionText}>Balcony</Text>
                <Switch
                    trackColor={{ false: "black", true: "#81b0ff" }}
                    thumbColor={'white'}
                    onValueChange={toggleBalconyLights} 
                    value={balconyLights}
                    disabled = {autoLight == false ? false : true}
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
