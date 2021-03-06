/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image,TouchableHighlight,TextInput, Alert} from 'react-native';
import call from 'react-native-phone-call';
import { Navigation } from 'react-native-navigation';



const prompts= {
    number : '9093900003',
    prompt : true
}

type Props = {};
class Setting extends Component<Props> {


    goToScreen = (screenName) => {

        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: screenName,
                        options: {
                            topBar: {
                                title: {
                                    text: screenName,
                                    fontSize: 14,
                                    color: 'red',
                                }
                            }
                        },
                    }
                }]
            }
        });
    }


    render() {
        return (
            <View style={styles.container}>

                <Text>  Setting page</Text>
                <Button title="Call" onPress={ ()=> call(prompts).catch(console.log('Error')) }  />

                <Button title="visit our website" onPress={()=>  this.goToScreen('Webview')  }  />


            </View>
        );
    }
}



export default Setting;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});
