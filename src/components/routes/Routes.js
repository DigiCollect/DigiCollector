import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import StartUp from '../../Start-up.js'
import SignIn from '../sign-in/Sign-in.js'
import Menu from '../../../Menu.js'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "startUp" component = {StartUp} title = "StartUp" initial = {true} hideNavBar={true}/>
            <Scene key = "signIn" component = {SignIn} title = "SignIn" hideNavBar={true}/>
            <Scene key = "menu" component = {Menu} title = "Menu" />
        </Scene>
    </Router>
)
export default Routes