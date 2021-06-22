import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'

function Login() {
    const [{},dispath] = useStateValue();
    const signIn = ()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispath({
                type:actionTypes.SET_USER,
                user:result.user
            })
        }).catch(error=>{
            alert(error.message)
        });
    }
    return (
        <div className="login">
            <div className="login__container">
            <div className="login__text">
            <h1>Sign in to whattsapp</h1>
            </div>
            <Button  onClick={signIn}>
                Sign in with google
            </Button>
            </div>
          
        </div>
    )
}

export default Login
