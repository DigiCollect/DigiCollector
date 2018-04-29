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

  render() {
    return (
      <View style={styles.container}>
          <Image style= {styles.background} source={require('./Images/BG.jpg')}/>
          <View style={styles.content}>
            <Image source={require('./Images/Logo.png')}/>
            <Text style={styles.text}>One less thing to worry about</Text> 
            <TouchableOpacity style={styles.OvalShapeView} onPress = {this.goToSignIn}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
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
  text: {
    textAlign: 'center',
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