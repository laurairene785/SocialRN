import React,{Component} from 'react';
import SingUp from '.../Components/SingUp.js';
import { Component } from 'react';
import Api from '.../Api';
let data = fetch ('https://api-with-mongo.herokuapp.com/country/list');

export default class SingUpScreen extends Components{
   
    state = {
        ddlSelectedValue:1
        }
        setSelectedStateValue = (ddlValue) =>{
            this.setState({
            ddlSelectedValue:ddlValue
            });
            console.log('ddlValue: ' + ddlValue)
            }
            
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
   
  createUser();


    
    render(){
        return(

            <SingUp setPhone={(this.setPhone),mainButtonTitle="Ingresar", mainAction={this:createUser}, setCode=(this.setCode) , createUser=(this.createUser)}/>
        );
    }
}
