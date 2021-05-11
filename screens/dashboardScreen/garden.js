import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {firebaseDatabase} from '../../components/FirebaseConfig';


export default function Garden() {
    return (
        <View style={styles.container}>
            <Text>Garden control</Text>
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