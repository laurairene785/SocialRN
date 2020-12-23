import React, { Component } from 'react';
import {View, TouchableHighlight} from 'react-native';
import {TextInput, Button, Title} from 'react-native-paper';
import styles from '.../Stylesheet/login.stylesheet';
import AuthLogin from '../Screens/AuthLoginScreen.js';

let AuhLogin = (props)=>{

    return(
        <View style={styles.container}>
            <Title font={medium}>Klin Klin </Title>

            <Text>
               Bienvenido a KlinKlin, debe loguearse
            </Text>
            <TouchableHighlight>
                <Button
                onPress={()=> props.mainAction()}
            mode ="contained"
            >
                  Aceptar
                </Button>
            </TouchableHighlight>

        </View>
    );
}

export default withTheme(AuthLogin);