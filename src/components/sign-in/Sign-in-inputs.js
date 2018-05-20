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
            <View style={styles.header}>
              <Image source={require('../../../Images/Logo.png')}/>
            </View>
            <View style={styles.center}>
              <View style= {styles.textView}>
                <Image style= {styles.icon} source={require('../../../Images/Username.png')}/>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Username"
                placeholderTextColor = "#cccccc"
                autoCapitalize = "none"
                maxLength = {12}
                onChangeText = {this.handleUsername}
                />
              </View>
              <View style={styles.lineStyle}/>
              <View style= {styles.textView}>
                <Image style= {styles.icon} source={require('../../../Images/lockPad.png')}/>             
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#cccccc"
                autoCapitalize = "none"
                secureTextEntry = {true}
                maxLength = {12}
                onChangeText = {this.handlePassword}
                /> 
              </View>
              <View style={styles.lineStyle}/>
              <TouchableOpacity style={styles.forgotPasswordView} onPress = {this.goToForgotPw}>
                <Text style={styles.forgotPasswordText}>Forgot password</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style = {styles.OvalShapeView} onPress = { () => this.login(this.state.username, this.state.password)}>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header:{
    height: 100,
    marginTop: 50, 
    alignItems: 'center'
  },
  footer: {
    height: 100,
    marginBottom: 50,
    alignItems: 'center'
  },
  center: {
    height: 100,
  },
  textView: {
    flex: 1, 
    flexDirection: 'row',
    marginTop: 30,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 15,
    opacity: 0.7,
  },
  background: {
    backgroundColor: '#ccc',
    opacity: 0.4,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    color: '#FFFFFF50',
    width: Dimensions.get('window').width,
  },
  forgotPasswordView: {
    paddingRight: 15,
    paddingTop: 15,
    margin: 0,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    color: '#FFFFFF95',
  },
  lineStyle:{
    flex: 1, 
    borderBottomWidth: 0.4,
    borderColor:'#FFFFFF60',
    marginTop: 40,
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
    color: '#fff',
    marginTop: 20,
  }
})