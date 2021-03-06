import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Homepage from '../screens/homepage';
import Register from '../screens/register';
import Dashboard from '../screens/dashboard';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="Login"
                component={Homepage}
                options={{ 
                    title: null,
                    headerTitleAlign: 'center', 
                    headerTransparent:true
                }}
            />
            <Stack.Screen
                name = "Register"
                component={Register}
                options={{ 
                    title: null,
                    headerTitleAlign: 'center', 
                    headerLeft: ()=> null,
                    headerTransparent:true
                }}
            />
            <Stack.Screen
                name = "Dashboard"
                component = {Dashboard}
                options={{ 
                    headerTransparent: true,
                    title: null,
                    headerTitleAlign: 'center',
                    headerTransparent:true, 
                    headerLeft: ()=> null
                }}
            />
        </Stack.Navigator>
    );
};


export default AuthStack;
