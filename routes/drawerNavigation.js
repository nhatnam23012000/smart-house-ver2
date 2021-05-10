import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons'
import { 
    createDrawerNavigator, 
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Bedroom from '../screens/dashboardScreen/bedroom';
import Garden from '../screens/dashboardScreen/garden';
import Home from '../screens/dashboardScreen/home';
import Setting from '../screens/dashboardScreen/setting';
import Secure from '../screens/dashboardScreen/secure';
import appLogo from '../assets/image/icon.png';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



const Screens = ({navigation}) => {
    
    return(
        <Stack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle: null,
            headerLeft: () => (
                <TouchableOpacity style={styles.drawerBtn}>
                    <Icon name = {"bars"} size ={28} color={'rgba( 0, 0, 0, 0.8)'}
                    onPress = {() => navigation.openDrawer()}
                    />
                </TouchableOpacity>
            )
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Bedroom" component={Bedroom} />
            <Stack.Screen name="Garden" component={Garden} />
            <Stack.Screen name="Secure" component={Secure} />
            <Stack.Screen name="Setting" component={Setting} />
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
                />

                <DrawerItem
                    label="Bedroom"
                    onPress={() => props.navigation.navigate("Bedroom")}
                />

                <DrawerItem
                    label="Garden"
                    onPress={() => props.navigation.navigate("Garden")}
                />

                <DrawerItem
                    label= "Security"
                    onPress={() => props.navigation.navigate("Secure")}
                />

                <DrawerItem
                    label="Settings"
                    onPress={() => props.navigation.navigate("Setting")}
                />
            </View>
        </DrawerContentScrollView>
    );
};

export default() =>{

    return (
        <Drawer.Navigator 
            initialRouteName="Home" component
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerStyle={{
                width: 200,
            }}
        >
            <Drawer.Screen name="Screens" component={Screens} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawerBtn: {
        paddingTop: 35,
        marginHorizontal: 15,
    },

    upperDrawer: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    profileLogo: {
        height:80,
        width:80,
        borderRadius:30,
        marginBottom:15,
    },

    logoText: {
        fontSize:14,
        fontWeight: 'bold',
        
        
    }
})



