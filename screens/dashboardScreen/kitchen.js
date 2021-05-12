import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {firebaseDatabase} from '../../components/FirebaseConfig';


export default function Kitchen() {
    return (
        <View style={styles.container}>
            <Text>Kitchen control</Text>
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