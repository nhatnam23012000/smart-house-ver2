import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {firebaseDatabase} from '../../components/FirebaseConfig';


export default function House() {
    return (
        <View style={styles.container}>
            <Text>House control</Text>
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