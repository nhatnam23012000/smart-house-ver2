import 'react-native-gesture-handler';
import React, { Component} from 'react';
import AuthStack from './routes/stackNavigator'
import { NavigationContainer } from '@react-navigation/native';




export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    );
  }
}

