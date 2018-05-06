import React, {Component} from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux';
const Dimensions = require('Dimensions');

class SignUp extends Component {
    state = {
        username: '',
        emailaddress: '',
        password: '',
        confirmpassword: ''
     }
     handleUsername = (text) => {
        this.setState({ username: text })
     }
     handleEmailaddress = (text) => {
        this.setState({ emailaddress: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     handleConfirmPassword = (text) => {
        this.setState({ confirmpassword: text })
     }
     next = (username, emailaddress, pass) => {
        alert('username: ' + username + ' emailaddress: ' + emailaddress + 'password: ' + pass)
        Actions.menu()
     }
     goToSignIn = () => {
        Actions.signIn()
       }
     render(){
        return (
           <View style = {styles.container}>
              <Image style= {styles.background} source={require('../../../Images/BG.png')}/>
              <View style={styles.content}>
              <Text style={styles.Headertext}>Recover your password</Text> 
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
                  placeholder = "Email address"
                  placeholderTextColor = "#cccccc"
                  autoCapitalize = "none"
                  maxLength = {12}
                  onChangeText = {this.handleEmailaddress}
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

                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Confirm Password"
                  placeholderTextColor = "#cccccc"
                  autoCapitalize = "none"
                  secureTextEntry = {true}
                  maxLength = {12}
                  onChangeText = {this.handleConfirmPassword}
                  /> 
  
                  <TouchableOpacity
                  style = {styles.OvalShapeView}
                  onPress = {
                      () => this.next(this.state.username, this.state.emailaddress, this.state.password)
                  }>
                  <Text style = {styles.buttonText}>Next</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {this.goToSignIn}>
                    <Text style = {styles.LinkText}>Already have an account? Sign In</Text>
                  </TouchableOpacity>
              </View>
          </View>
        )
     }
}
export default SignUp

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