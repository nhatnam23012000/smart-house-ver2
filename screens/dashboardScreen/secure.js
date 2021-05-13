import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Secure() {
    return (
        <View style={styles.container}>
            <Text>Security page</Text>
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