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
        <TouchableOpacity style={styles.button} onPress = {this.goToMenu}>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    // textAlign: 'center',
    marginTop: '40%',
    color: '#333',
    fontWeight: 'bold',
    fontSize: 22
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
      paddingTop:0,
      marginTop: 0,
      fontSize: 28, 
    //   justifyContent: 'center',
    //   alignItems: 'center',
  }
});