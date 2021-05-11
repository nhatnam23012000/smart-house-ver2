import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {firebaseDatabase} from '../../components/FirebaseConfig';


export default function Lighting() {
    return (
        <View style={styles.container}>
            <Text>Lighting</Text>
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
