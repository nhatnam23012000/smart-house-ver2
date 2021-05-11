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
import Bedroom from '../screens/dashboardScreen/bedroom';
import Garden from '../screens/dashboardScreen/garden';
import Home from '../screens/dashboardScreen/home';
import Setting from '../screens/dashboardScreen/setting';
import Secure from '../screens/dashboardScreen/secure';
import Lighting from '../screens/dashboardScreen/lighting';
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
                    <Icon name = {"bars"} size ={28} color={'rgba( 0, 0, 0, 0.8)'}
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
                    <Icon name = {"bars"} size ={28} color={'rgba( 0, 0, 0, 0.8)'}
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
        <Tab.Navigator initialRouteName="Home"
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
            <Tab.Screen name="Home" component={Screens} options={{
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
                    <Icon name = {"bars"} size ={28} color={'rgba( 0, 0, 0, 0.8)'}
                    onPress = {() => navigation.openDrawer()}
                    />
                </TouchableOpacity>
            ),

            headerLeft: () => null
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Bedroom" component={Bedroom}/>
            <Stack.Screen name="Garden" component={Garden}/>
            <Stack.Screen name="Secure" component={Secure}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Lighting" component={Lighting}/>
            <Stack.Screen name= "Notifications" component={Notifications}/>
            <Stack.Screen name="Login" component={Homepage}/>
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
                    <Text style={styles.logoText}>FOR EVERYONE</Text>
                </View>

                <DrawerItem
                    label="Home"
                    onPress={() => props.navigation.navigate("Home")}
                    icon = {() => <AntDesign name="home" size={24} color="black" />}
                />

                <DrawerItem
                    label= "Security"
                    onPress={() => props.navigation.navigate("Secure")}
                    icon = {() => <Feather name="shield" size={24} color="black" />}
                />

                <DrawerItem
                    label="Settings"
                    onPress={() => props.navigation.navigate("Setting")}
                    icon = {() => <Ionicons name="settings-outline" size={24} color="black" />}
                />

                <View style={styles.bottomSection}>

                </View>
                <DrawerItem
                    label="Sign out"
                    onPress={() => props.navigation.navigate("Login")}
                    icon = {() => <Feather name="log-out" size={24} color="black" />}
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
    },

    bottomSection: {
        borderTopColor:'black',
        borderBottomWidth: 2,
        marginBottom: 15
    }
})



