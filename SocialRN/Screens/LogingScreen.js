import React,{Component} from 'react';
import SingUp from '.../Components/SingUp.js';
import { Component } from 'react';
import Api from '.../Api';
 
export default class SingUpScreen extends Components{
    constructor (props){
        super(props);
        this.state ={
            phone : "",
            code :""
        }
    }
    setPhone = (phone) =>{
        this.state({
            phone:phone
        })
    }
    setCode = (code) =>{
        this.state({
            code:code
        })
    }
   
   loginUser();
       
   
    
    render(){
        return(
            <SingUp setPhone={(this.setPhone),mainButtonTitle="Ingresar", mainAction={this: login}, setCode=(this.setCode) , createUser=(this.login)}/>
        );
    }
}
