import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux';

class Inputs extends Component {
   state = {
      emailaddress: '',
   }
   handleEmailAddress = (text) => {
      this.setState({ emailaddress: text })
   }
   goToSignUp = () => {
      Actions.signUp()
   }
   goToVerifyEmail = () => {
      Actions.forgotPwEmailVerify()
   }
   login = (emailaddress) => {
      alert('emailaddress: ' + emailaddress)
      //Actions.menu()
      Actions.startUp()
   }
   render(){
      return (
         <View style = {styles.container}>
            <Image style= {styles.background} source={require('../../../Images/BG.png')}/>
            <View style={styles.content}>

                <Text style={styles.Headertext}>Recover your password</Text> 
                  <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Email Address"
                  placeholderTextColor = "#cccccc"
                  autoCapitalize = "none"
                  onChangeText = {this.handleEmailAddress}
                  />

                  <Text style={styles.text}>
                  Before we can reset your password, please enter your email address to help identify your account</Text>
              {/* </View> */}
                
                <TouchableOpacity style = {styles.OvalShapeView} onPress = {this.goToVerifyEmail}>
                  <Text style = {styles.buttonText}>Search Account</Text>
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
    alignItems: 'center',
    // justifyContent: 'center',
   },
   background: {
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
  textContent: {
    //flexDirection: 'column',
    //justifyContent: 'space-evenly',
    //alignItems: 'center',
  },
  Headertext: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '300',
    fontFamily: 'Helvetica Neue',
    paddingLeft:10,
    paddingRight:10,
    fontSize: 36
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
   },
   text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18
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