import 'react-native-gesture-handler';
import React, { Component} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import Navigator from './routes/stackNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './screens/homepage';
import Register from './screens/register';

export default class App extends Component {
  render(){
    return(
      <Navigator/>
    );
  }
}

