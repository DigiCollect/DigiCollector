import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux';

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
   login = (username, pass) => {
      alert('username: ' + username + ' password: ' + pass)
      Actions.menu()
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
                placeholderTextColor = "#fff"
                autoCapitalize = "none"
                onChangeText = {this.handleUsername}/>
                
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#fff"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
                
                <TouchableOpacity
                style = {styles.OvalShapeView}
                onPress = {
                    () => this.login(this.state.username, this.state.password)
                }>
                <Text style = {styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <Text style = {styles.LinkText}>Don't have an account? Sign Up</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
   },
   background: {
    backgroundColor: '#ccc',
    opacity: 0.5,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
   input: {
     justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 15,
      height: 40,
      fontFamily: 'Helvetica Neue',
      fontSize: 19,
      borderBottomWidth: 1,
      borderColor: '#fff'
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
