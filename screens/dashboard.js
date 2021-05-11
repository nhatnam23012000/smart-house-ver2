import React, { Component} from "react";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import DrawerNavigation from '../routes/drawerNavigation';
import {NavigationContainer} from 'react-navigation';
import BottomTab from "../routes/bottomTabNavigator";


export default class Dashboard extends Component {
    render() {
        return(
            <DrawerNavigation/>
        );
    }
}

const styles = StyleSheet.create({

})