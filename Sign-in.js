import PresentationalComponent from './src/components/app-start/PresentationalComponent'
import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import Inputs from './Inputs.js'
import {Actions} from 'react-native-router-flux';

class SignIn extends Component {

  goToMenu = () => {
    Actions.menu()
  }

  render() {
    return (
      <View style={styles.container}>
          <Image style= {styles.background} source={require('./Images/BG.png')}/>
          <View style={styles.content}>
            <Image source={require('./Images/Logo.png')}/>
            <Inputs />
            <TouchableOpacity style={styles.OvalShapeView} onPress = {this.goToMenu}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SignIn

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