import Menu from '../../../Menu.js'
import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import StartUp from '../../Start-up.js'
import SignIn from '../sign-in/Sign-in.js'
import ForgotPw from '../forgot-pw/Forgot-pw.js'
import forgotPwEmailVerify from '../forgot-pw/Forgot-pw-confirm-email.js'
import resetPassword from '../forgot-pw/Forgot-pw-reset.js'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "startUp" component = {StartUp} title = "StartUp" initial = {true} hideNavBar={true}/>
            <Scene key = "signIn" component = {SignIn} title = "SignIn" hideNavBar={true}/>
            <Scene key = "forgotPw" component = {ForgotPw} title = "ForgotPw" hideNavBar={true}/>
            <Scene key = "forgotPwEmailVerify" component = {forgotPwEmailVerify} title = "forgotPwEmailVerify" hideNavBar={true}/>
            <Scene key = "resetPassword" component = {resetPassword} title = "resetPassword" hideNavBar={true}/>
            <Scene key = "menu" component = {Menu} title = "Menu" />
        </Scene>
    </Router>
)
export default Routes