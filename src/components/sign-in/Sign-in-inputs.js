import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux';
const Dimensions = require('Dimensions');

class Inputs extends Component {
   state = {
      username: '',
      password: ''
   }
   handleUsername = (text) => {
      this.setState({ username: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   goToForgotPw = () => {
    Actions.forgotPw()
   }
   login = (username, pass) => {
      //alert('username: ' + username + ' password: ' + pass)
      Actions.menu()
   }
   goToSignUp = () => {
    Actions.signUp()
   }
   render(){
      return (
         <View style = {styles.container}>
            <Image style= {styles.background} source={require('../../../Images/BG.png')}/>
            <View style={styles.content}>
                <Image source={require('../../../Images/Logo.png')}/>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Username"
                placeholderTextColor = "#cccccc"
                autoCapitalize = "none"
                maxLength = {12}
                onChangeText = {this.handleUsername}
                />
                              
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#cccccc"
                autoCapitalize = "none"
                secureTextEntry = {true}
                maxLength = {12}
                onChangeText = {this.handlePassword}
                /> 

                <TouchableOpacity style={styles.forgotPasswordView} onPress = {this.goToForgotPw}
                ><Text style={styles.forgotPasswordText}>Forgot password</Text></TouchableOpacity>
                
                <TouchableOpacity
                style = {styles.OvalShapeView}
                onPress = {
                    () => this.login(this.state.username, this.state.password)
                }>
                <Text style = {styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {this.goToSignUp}>
                  <Text style = {styles.LinkText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#333',
    //alignItems: 'center',
   },
   background: {
    backgroundColor: '#ccc',
    opacity: 0.4,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
   input: {
      justifyContent: 'flex-start',
      textAlign: 'left',
      alignSelf: 'flex-start',
      paddingLeft: 15,
      paddingBottom: 15,
      height: 40,
      fontFamily: 'Helvetica Neue',
      fontSize: 19,
      color: '#fff',
      borderBottomWidth: 0.4,
      borderColor:'#fff',
      width: Dimensions.get('window').width,
   },
   forgotPasswordView: {
      paddingRight: 15,
      margin: 0,
      alignSelf: 'flex-end',
   },
   forgotPasswordText: {
      textAlign: 'right',
      alignSelf: 'flex-end',
      fontFamily: 'Helvetica Neue',
      fontSize: 15,
      color: '#fff',
   },
   lineStyle:{
      borderWidth: 0.4,
      borderColor:'#fff',
      width: Dimensions.get('window').width,
      margin: 0,
      padding: 0,
  },
   OvalShapeView: {
    marginTop: 20,
    width: 315,
    height: 56,
    backgroundColor: '#2C900C',
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    position: 'absolute',
    fontWeight: '500',
    fontFamily: 'Helvetica Neue',
    paddingTop:0,
    marginTop: 0,
    fontSize: 19, 
    },
  LinkText: {
      color: '#fff'
    }
})