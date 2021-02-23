import React from 'react'
import './Login.css'
import Spotify from '../../assets/images/Spotify.png';
import {loginUrl} from '../../spotify';


function Login() {
    return (
        <div className="login">
           
            <img src={Spotify} alt=""/>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login
