import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/dashboardScreen/home';
import Setting from '../screens/dashboardScreen/setting';
import Notifications from '../screens/dashboardScreen/notifications';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Stack = createStackNavigator();
const tabNavi = createBottomTabNavigator();

const NotiStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle: null,
            headerRight: () => (
                <TouchableOpacity style={styles.drawerBtn}>
                    <Icon name = {"bars"} size ={28} color={'rgba( 0, 0, 0, 0.8)'}
                    onPress = {() => navigation.openDrawer()}
                    />
                </TouchableOpacity>
            ),

            headerLeft: () => null
        }}>
            <Stack.Screen name = 'Notifications' component={Notifications}/>
        </Stack.Navigator>
    );
}   

const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle: null,
            headerRight: () => (
                <TouchableOpacity style={styles.drawerBtn}>
                    <Icon name = {"bars"} size ={28} color={'rgba( 0, 0, 0, 0.8)'}
                    onPress = {() => navigation.openDrawer()}
                    />
                </TouchableOpacity>
            ),

            headerLeft: () => null
        }}>
            <Stack.Screen name = 'Home' component={Home}/>
        </Stack.Navigator>
    );
}  

const SettingStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle: null,
            headerRight: () => (
                <TouchableOpacity style={styles.drawerBtn}>
                    <Icon name = {"bars"} size ={28} color={'rgba( 0, 0, 0, 0.8)'}
                    onPress = {() => navigation.openDrawer()}
                    />
                </TouchableOpacity>
            ),

            headerLeft: () => null
        }}>
            <Stack.Screen name = 'Setting' component={Setting}/>
        </Stack.Navigator>
    );
} 



const BotTab =  () => {
    return(
        <tabNavi.Navigator>
            <tabNavi.Screen name = "Notifications" component = {NotiStack}/>
            <tabNavi.Screen name = "Home" component = {HomeStack}/>
            <tabNavi.Screen name = "Setting" component = {SettingStack}/>
        </tabNavi.Navigator>
    );
};

export default BotTab;

const styles = StyleSheet.create({
    drawerBtn: {
        paddingTop: 35,
        marginHorizontal: 15,
    },
});