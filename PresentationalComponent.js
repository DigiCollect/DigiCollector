import React, {Component} from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
    return (
        <View style = {styles.container}>
            <Image style= {styles.background} source={require('../../../Images/BG.png')}/>
        </View>     
    )
}
export default PresentationalComponent

const styles = StyleSheet.create ({

      background: {
        backgroundColor: '#ccc',
        opacity: 0.5,
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
 })