import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

class Menu extends Component {
    state = {
        contents: [
            {
                id: 0,
                name: 'Home',
            },
            {
                id: 1,
                name: 'Profile',
            },
            {
                id: 2,
                name: 'Service',
            },
            {
                id: 3,
                name: 'Notifications',
            },
            {
                id: 4,
                name: 'Messages',
            },
            {
                id: 5,
                name: 'Contact',
            },
            {
                id: 6,
                name: 'Settings',
            },
            {
                id: 7,
                name: 'Sign Out',
            }
        ]
    }
    alertItemName = (item) => {
        alert(item.name)
    }

    render() {
        return (
            <View> 
            {
                this.state.contents.map((item, index) => (
                    <TouchableOpacity
                        key = {item.id}
                        style = {styles.container}
                        onPress = {() => this.alertItemName(item)}>

                        <Text style = {styles.menuContent}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
            </View>
        )
    }

}
export default Menu

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 8,
        backgroundColor: '#2C900C',
        alignItems: 'center',
    },
    menuContent: {
        color: '#fff'
    }
})