// import React from 'react';
// import { Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'
import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux';

class Login extends Component {
  state = {
    myState: 'One less thing to worry about'
  }
  goToMenu = () => {
    Actions.menu()
  }
  // updateState = () => {
  //   this.setState({ myState: 'The state is updated' })
  // }
  render() {
    return (
      <View style={styles.container}>
        <Image style= {styles.background} source={require('./Images/back.jpg')}/>
        <Text style={styles.text}>One less thing to worry about</Text> 
        <TouchableOpacity style={styles.OvalShapeView} onPress = {this.goToMenu}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: '#ccc',
    opacity: 0.4,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    //marginTop: '40%',
    color: '#fff',
    fontWeight: '300',
    fontFamily: 'Helvetica Neue',
    paddingLeft:10,
    paddingRight:10,
    fontSize: 36
  },
  button: {
      backgroundColor: '#333',
      justifyContent: 'center',
      alignSelf: 'stretch',
      alignItems: 'center',
      marginTop: '50%',
      height: '8%',
  },
  buttonText: {
      color: '#fff',
      position: 'absolute',
      fontWeight: '500',
      fontFamily: 'Helvetica Neue',
      paddingTop:0,
      marginTop: 0,
      fontSize: 19, 
    //   justifyContent: 'center',
    //   alignItems: 'center',
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

});