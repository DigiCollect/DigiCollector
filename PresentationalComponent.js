import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.boxOne} />  
            <View>
                <Text style = {styles.boxTwo}>
                    {props.myState}      
                </Text>
            </View>  
             <View style = {styles.boxThree} /> 
        </View>     
    )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
    container: {
       flexDirection: 'column',
       justifyContent: 'space-between',
       alignItems: 'center',
       backgroundColor: 'white',
       height: 700
    },
    boxOne:{
        width: 200,
        height: 100,
        backgroundColor: 'green'
    },
    boxTwo:{
        marginTop: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    boxThree: {
        width: 200,
        height: 100,
        backgroundColor: 'green'
    },
 })