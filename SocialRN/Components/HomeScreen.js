import React, { Component } from 'react';
import {View, TouchableHighlight} from 'react-native';
import {TextInput, Button, Title} from 'react-native-paper';
import styles from '.../Stylesheet/login.stylesheet';

let Home = (props)=>{

    return(
        <View style={styles.container}>
            <Title font={medium}> Cargando</Title>

            <Text>
               Lee los terminos y condiciones y toca en aceptar para continuar
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

export default withTheme(Home);