import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import styles from '.../Stylesheet/login.stylesheet';
import { DropDown } from 'react-native-material-dropdown';
import React, { Component } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import { View, Text } from "react-native";


let SingUp = (props) => {
    return (
        <View style={styles.container}>
            <Title font={medium}> Crear mi cuenta</Title>
            <Text>
                Seleccione su Pais 
            </Text>

            <DropdownMenu
                style={{ flex: 0.5 }}
                bgColor={'#2A2A72'}
                tintColor={'#000000'}
                activityTintColor={'#C2AFF0'}
                handler={(selection, row) => this.setState({ text: data[selection][row] })}
                data={data}
            >
            </DropdownMenu>
            <Text>
                Entre su numero de telefono
            </Text>
            <TextInput onChangeText={(text) => props.setPhone(text)} />
            <Text>
                Entre el codigo recibido
            </Text>
            <TextInput onChangeText={(text) => props.setCode(text)} />
            <TouchableHighlight>
                <Button onPress={() => props.mainAction()}
                    mode="contained"
                >
                    {props.secondaryButtonTitle}
                </Button>
            </TouchableHighlight>

        </View>
    );
}

export default withTheme(SingUp);