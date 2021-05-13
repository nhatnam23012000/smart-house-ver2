import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


export default function Setting() {
    return (
        <View style={styles.container}>
            <Text>Setting page</Text>
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