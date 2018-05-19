import React, {Component} from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux';
const Dimensions = require('Dimensions');

class SignUp extends Component {
    state = {
        username: '',
        emailaddress: '',
        password: '',
        confirmpassword: '',
        hasError: false,
        errorMessage: ''
     }
     handleUsername = (text) => {
        this.setState({ username: text })
        if(this.state.username.length <=0){
          this.setState({hasError: true, errorMessage: "Username field is mandatory"})
        }
        else{
          this.setState({hasError: false})
        }
        
     }
     handleEmailaddress = (text) => {
        this.setState({ emailaddress: text })
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.emailaddress) === false){
          this.setState({hasError: true, errorMessage: "Invalid email address"})
        }
        else{
          this.setState({hasError: false})
        }
     }
     handlePassword = (text) => {
        this.setState({ password: text })
        if(this.state.password.length <=12){
          this.setState({hasError: true, errorMessage: "Password must be at least 12 characters"})
        }
        else{
          this.setState({hasError: false})
        }
     }
     handleConfirmPassword = (text) => {
        this.setState({ confirmpassword: text })
        if(this.state.confirmpassword.length <=12){
          this.setState({hasError: true, errorMessage: "Password must be at least 12 characters"})
        }
        if(this.state.confirmpassword != this.state.password){
          this.setState({hasError: true, errorMessage: "Passwords does not match"})
        }
        else{
          this.setState({hasError: false})
        }
     }
     next = (username, emailaddress, pass, hasError) => {
        //alert('username: ' + username + ' emailaddress: ' + emailaddress + 'password: ' + pass)
        if (hasError) {
          // not a valid email
          alert('Invalid details. Please try again')
        } else {
          // valid email
          Actions.menu()
        }
        
     }
     goToSignIn = () => {
        Actions.signIn()
       }
     render(){
        return (
           <View style = {styles.container}>
              <Image style= {styles.background} source={require('../../../Images/BG.png')}/>
              <View style={styles.content}>
              <Text style={styles.Headertext}>Sign Up</Text> 
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

                  {this.state.hasError ? <Text style={styles.LinkText}>{this.state.errorMessage}</Text> : null}
  
                  <TouchableOpacity
                  style = {styles.OvalShapeView}
                  onPress = {
                      () => this.next(this.state.username, this.state.emailaddress, this.state.password, this.state.hasError)
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