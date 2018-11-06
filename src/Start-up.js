import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux';
// import PresentationalComponent from './src/components/sign-in/PresentationalComponent'

class Login extends Component {
  state = {
    myState: 'One less thing to worry about'
  }
  goToSignIn = () => {
    Actions.signIn()
  }
  goToSignUp = () => {
    Actions.signUp()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style= {styles.background} source={require('./../Images/BG.png')}/>
        <View style={styles.header}>
          <Image source={require('./../Images/Logo.png')}/>
        </View>
        <View style={styles.center}>
          <Text style={styles.text}>A solution for your digital needs</Text> 
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.OvalShapeView} onPress = {this.goToSignUp}>
              <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {this.goToSignIn}>
            <Text style = {styles.LinkText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login

const styles = StyleSheet.create(
{
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
  background: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '300',
    fontFamily: 'Helvetica Neue',
    paddingLeft:10,
    paddingRight:10,
    fontSize: 36
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
});