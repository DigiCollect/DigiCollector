import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import StartUp from '../../../Start-up.js'
import Menu from '../../../Menu.js'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "login" component = {StartUp} title = "Login" initial = {true} hideNavBar={true}/>
            <Scene key = "menu" component = {Menu} title = "Menu" />
        </Scene>
    </Router>
)
export default Routes