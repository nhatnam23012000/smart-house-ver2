import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Bedroom from '../screens/dashboardScreen/bedroom';
import Garden from '../screens/dashboardScreen/garden';
import Home from '../screens/dashboardScreen/home';
import Setting from '../screens/dashboardScreen/setting';
import Secure from '../screens/dashboardScreen/secure';


const Drawer = createDrawerNavigator();


export default() =>{
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Bedroom" component={Bedroom} />
            <Drawer.Screen name="Garden" component={Garden} />
            <Drawer.Screen name="Secure" component={Secure} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
    );
};



