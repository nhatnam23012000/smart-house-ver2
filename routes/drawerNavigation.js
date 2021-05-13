import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { 
    createDrawerNavigator, 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {Feather, AntDesign , Ionicons,FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';

//import the scenes
import Bedroom from '../screens/dashboardScreen/bedroom';
import Balcony from '../screens/dashboardScreen/balcony';
import Home from '../screens/dashboardScreen/home';
import House from '../screens/dashboardScreen/house';
import Setting from '../screens/dashboardScreen/setting';
import Secure from '../screens/dashboardScreen/secure';
import Livingroom from '../screens/dashboardScreen/livingroom';
import Bathroom from '../screens/dashboardScreen/bathroom'
import Kitchen from '../screens/dashboardScreen/kitchen'

import HouseLight from '../screens/dashboardScreen//houseScreen/houseLight'
import HouseCurtain from '../screens/dashboardScreen//houseScreen/houseCurtain'
import HouseWater from '../screens/dashboardScreen//houseScreen/houseWater'

import Homepage from '../screens/homepage';
import appLogo from '../assets/image/icon.png';
import Notifications from '../screens/dashboardScreen/notifications';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tan } from 'react-native-reanimated';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// create stack for bottomtab to nest in

const NotiStack = ({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle: null,
            headerRight: () => (
                <TouchableOpacity style={styles.drawerBtn}>
                    <Icon name = {"bars"} size ={28} color={'white'}
                        onPress = {() => navigation.openDrawer()}
                    />
                </TouchableOpacity>
            ),

            headerLeft: () => null
        }}>
            <Stack.Screen name="notiTab" component={Notifications}/>
        </Stack.Navigator>
    );
}


const SettingStack = ({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle: null,
            headerRight: () => (
                <TouchableOpacity style={styles.drawerBtn}>
                    <Icon name = {"bars"} size ={28} color={'white'}
                    onPress = {() => navigation.openDrawer()}
                    />
                </TouchableOpacity>
            ),

            headerLeft: () => null
        }}>
            <Stack.Screen name="Setting" component={Setting}/>
        </Stack.Navigator>
    );
}

//create the bottomtabn navigator
const customTab = () =>{
    return(
        <Tab.Navigator initialRouteName="HomeDashboard"
            tabBarOptions = {{
                showLabel: false,
                style:{
                    backgroundColor: '#43484D',
                    position: 'absolute',
                },
                
            }}
        >
            <Tab.Screen name="Notifications" component={NotiStack} options={{
                tabBarIcon: () => {
                    return(
                        
                        <MaterialCommunityIcons name="bell" size={28} color="white" />
                        
                    );
                }
            }}/>
            <Tab.Screen name="HomeDashboard" component={Screens} options={{
                tabBarIcon: () => {
                    return(
                        
                        <FontAwesome5 name="home" size={28} color="white" />
                        
                    );
                }
            }}/>
            <Tab.Screen name = "Settings" component={SettingStack} options={{
                tabBarIcon: () => {
                    return(
                        
                        <FontAwesome name="gears" size={28} color="white" />
                        
                    );
                }
            }}/>
        </Tab.Navigator>
    );
}

const Screens = ({navigation}) => {
    
    return(
        <Stack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle: null,
            headerRight: () => (
                <TouchableOpacity style={styles.drawerBtn}>
                    <Icon name = {"bars"} size ={28} color={'white'}
                    onPress = {() => navigation.openDrawer()}
                    />
                </TouchableOpacity>
            ),

            headerLeft: () => null
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Bedroom" component={Bedroom}/>
            <Stack.Screen name="Balcony" component={Balcony}/>
            <Stack.Screen name="Secure" component={Secure}/>
            <Stack.Screen name="HouseControl" component={House}/>
            <Stack.Screen name="Kitchen" component={Kitchen}/>
            <Stack.Screen name="Bathroom" component={Bathroom}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Livingroom" component={Livingroom}/>
            <Stack.Screen name= "Notifications" component={Notifications}/>
            <Stack.Screen name="Login" component={Homepage}/>
            <Stack.Screen name="HouseLight" component={HouseLight}/>
            <Stack.Screen name="HouseCurtain" component={HouseCurtain}/>
            <Stack.Screen name="HouseWater" component={HouseWater}/>
        </Stack.Navigator>
    );
} 


const DrawerContent = props => {
    return(
        //... means spread ope, pass down all contents of props to the new component
        <DrawerContentScrollView {...props}>
            <View>
                
                <View style={styles.upperDrawer}>
                    <Image source={appLogo}  style={styles.profileLogo}/>
                    <Text style={styles.logoText}>SMART HOUSE</Text>
                    <Text style={styles.logoText1}>FOR EVERYONE</Text>
                </View>

                <DrawerItem
                    label="Home"
                    labelStyle = {{
                        color:'white',
                    }}
                    onPress={() => props.navigation.navigate("Home")}
                    icon = {() => <AntDesign name="home" size={24} color="white" />}
                />

                <DrawerItem
                    label= "Security"
                    labelStyle = {{
                        color:'white',
                    }}
                    onPress={() => props.navigation.navigate("Secure")}
                    icon = {() => <Feather name="shield" size={24} color="white" />}
                />

                <DrawerItem
                    label="Settings"
                    labelStyle = {{
                        color:'white',
                    }}
                    onPress={() => props.navigation.navigate("Setting")}
                    icon = {() => <Ionicons name="settings-outline" size={24} color="white" />}
                />

                <View style={styles.bottomSection}>

                </View>
                <DrawerItem
                    label="Sign out"
                    labelStyle = {{
                        color:'white',
                    }}
                    onPress={() => props.navigation.navigate("Login")}
                    icon = {() => <Feather name="log-out" size={24} color="white" />}
                />
            </View>
        </DrawerContentScrollView>
    );
};



const customDrawer = () =>{


    return (
        <Drawer.Navigator 
            initialRouteName="Home" component
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerStyle={{
                width: 200,
                backgroundColor:'#43484D'
            }}
            drawerPosition = {'left'}

        >
            
            <Drawer.Screen name="Tab" component={customTab} />
        </Drawer.Navigator>

    );
};

export default customDrawer;


const styles = StyleSheet.create({
    drawerBtn: {
        paddingTop: 35,
        marginHorizontal: 15,
    },

    upperDrawer: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    profileLogo: {
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:15,
    },

    logoText: {
        fontSize:14,
        fontWeight: 'bold',
        color:'white'     
    },

    logoText1: {
        fontSize:14,
        fontWeight: 'bold',
        color:'white',
        paddingBottom: 20
    },

    bottomSection: {
        borderTopColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 15
    }
})



