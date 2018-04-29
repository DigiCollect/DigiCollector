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
   goToSignIn = () => {
    Actions.startUp()
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
                maxLength = '12'
                //onChangeText = {this.handleUsername}
                />
                {/* <View style = {styles.lineStyle} /> */}
                              
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#cccccc"
                autoCapitalize = "none"
                secureTextEntry = {true}
                maxLength = '12'
                onChangeText = {this.handlePassword}
                /> 
                {/* <View style = {styles.lineStyle} /> */}

                 {/* <TextInput
                style={styles.textInput} 
                onSubmitEditing={this.onNewItem}
                placeholder='Add New Item'
                returnKeyType="done"
                onChangeText={this.onChangeText}
                value={this.state.item}
                />  */}
                
                <TouchableOpacity
                style = {styles.OvalShapeView}
                onPress = {
                    () => this.login(this.state.username, this.state.password)
                }>
                <Text style = {styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {this.goToSignIn}>
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
    alignItems: 'center',
    // justifyContent: 'center',
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
      alignItems: 'center',
      textAlign: 'right',
      margin: 15,
      padding: 10,
      height: 40,
      fontFamily: 'Helvetica Neue',
      fontSize: 19,
      color: '#fff',
      // borderBottomWidth: 1,
      // borderColor: '#fff'
   },
   lineStyle:{
      borderWidth: 0.5,
      borderColor:'#fff',
      margin:10,
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