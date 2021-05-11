import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {firebaseDatabase} from '../../components/FirebaseConfig';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Bedroom() {

    return (
        <View style={styles.container}>
            <Text>Bedroom</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFF', 
        alignItems: 'center', 
        justifyContent: 'center',
    }
})

