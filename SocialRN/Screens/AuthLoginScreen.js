import React, { Component, useReducer } from 'react';
import Api from '.../Api';
import AuthLoginScreen from '../Components/AuthLogin.js';

export default class AuthLogin extends Component{
componentDidMount(){
    this.getUser();
    if (this.getUser(user)){
        return{
            LogingScreen
        }

    } else {
        return{
            SingUpScreen
        }
    }
  
};


render(){
    return(
        AuthLoginScreen
    );
}
}
 
 

