import React, { Component} from "react";
import { 
    View, Text, StyleSheet, TextInput, Alert, Button, ImageBackground, Image, Dimensions, TouchableOpacity
} from "react-native";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-vector-icons/Ionicons';
import bgImage from "../assets/image/background.jpg";
import logo from "../assets/image/icon.png";
import {firebaseAuth} from "../components/FirebaseConfig"



const {width: WIDTH} = Dimensions.get('window')


let customFonts ={
    'UTM-Neutra': require('../assets/fonts/UTM-Neutra.ttf')
};
export default class Homepage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            hidePassword: true,
            eyePressed: false,
            email: '',
            password: '',
        }
    }
    
    loginAccount() {
        firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            this.props.navigation.navigate('Dashboard');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(
                "BKU Smart house register",
                errorMessage,
                [
                    {
                        text: "Cancel",
                        onPress: () => {
                            this.setState({
                                email: '',
                                password: '',
                            })
                        },
                        style: "cancel"
                    },
                ]
            );
        });
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontLoaded: true });
    }
    
    componentDidMount() {
        this._loadFontsAsync();
    }
    

    onEyePress = () => {
        this.setState({
            hidePassword: !this.state.hidePassword,
            eyePressed: !this.state.eyePressed,
        });
    }

    render() {
        if (this.state.fontLoaded){
        return(
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logoText}>BKU SMART HOUSE</Text>                    
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-person-outline'} size={28} color={'rgba( 0, 0, 0, 0.8)'} style={styles.InputIcon}/>
                    <TextInput 
                        style = {styles.Input}
                        placeholder = {'Email'}
                        placeholderTextColor = {'rgba( 255, 255, 255, 0.7)'}
                        underlineColorAndroid = 'transparent'
                        onChangeText = {(email) => this.setState({email})}
                        value = {this.state.email}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-lock-closed-outline'} size={28} color={'rgba( 0, 0, 0, 0.8)'} style={styles.InputIcon}/>
                    <TextInput 
                        style = {styles.Input}
                        placeholder = {'Password'}
                        secureTextEntry = {this.state.hidePassword}
                        placeholderTextColor = {'rgba( 255, 255, 255, 0.7)'}
                        underlineColorAndroid = 'transparent'
                        onChangeText = {(password) => this.setState({password})}
                        value = {this.state.password}
                    />

                    <TouchableOpacity onPress={this.onEyePress} style={styles.eyeBtn}>
                        <Icon name={this.state.eyePressed == false ? 'md-eye-outline' : 'eye-off-outline'} 
                            size={28} color={'rgba( 0, 0, 0, 0.8)'}/>
                    </TouchableOpacity>
                    
                </View>

                <TouchableOpacity style={styles.loginBtn}
                    onPress = {() =>{
                        this.loginAccount();
                    }}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerBtn}
                    onPress = {() => {
                            this.props.navigation.navigate('Register')
                        }
                    
                    }
                >
                    <Text style={styles.registerText}>Don't have an account? Create one</Text>
                </TouchableOpacity>

            </ImageBackground>
        );
        } else{
            return <AppLoading/>
        }
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: "100%",
        height: "100%",        
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },

    logo: {
        height: 100,
        width: 100,
        borderRadius:30,
    },

    logoText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.6,
        fontFamily: "UTM-Neutra",
    },
    
    inputContainer: {
        marginTop: 10,

    },

    InputIcon: {
        position: 'absolute',
        top: 10,
        left: 37,
    },

    Input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,   
        
    },
    
    eyeBtn:{
        position: 'absolute',
        top: 10,
        right: 37,
    },

    loginBtn: {
        width: WIDTH - 225,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        marginTop: 20,
    },

    loginText: {
        color:'rgba(0, 0, 0, 0.7)',
        fontSize: 14,
        textAlign: 'center',
    },
    
    registerBtn:{
        width: WIDTH - 125,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        marginTop: 30,
    },

    registerText:{
        color:'rgba(0, 0, 0, 0.7)',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})