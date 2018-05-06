import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import StartUp from '../../Start-up.js'
import SignIn from '../sign-in/Sign-in.js'
import SignUp from '../sign-up/Sign-up.js'
import ForgotPw from '../forgot-pw/Forgot-pw.js'
import Menu from '../../../Menu.js'
import forgotPwEmailVerify from '../forgot-pw/Forgot-pw-confirm-email.js'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "startUp" component = {StartUp} title = "StartUp" initial = {true} hideNavBar={true}/>
            <Scene key = "signIn" component = {SignIn} title = "SignIn" hideNavBar={true}/>
            <Scene key = "signUp" component = {SignUp} title = "SignUp" hideNavBar={true}/>
            <Scene key = "forgotPw" component = {ForgotPw} title = "ForgotPw" hideNavBar={true}/>
            <Scene key = "forgotPwEmailVerify" component = {forgotPwEmailVerify} title = "forgotPwEmailVerify" hideNavBar={true}/>
            <Scene key = "menu" component = {Menu} title = "Menu" />
        </Scene>
    </Router>
)
export default Routes