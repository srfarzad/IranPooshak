/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, Alert} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Image
                    source={{uri: 'https://www.iranpooshak.com/skin/frontend/codazon_fastest/default/images/logo.gif'}}
                    style={{width: '100%', height: 100}}
                />

                <Text>به اپلیکیشن ایران پوشاک خوش آمدید</Text>


                <Button title='وورد به برنامه' style={styles.buttons}> </Button>
                <Button title='ثبت نام' style={styles.buttons}> </Button>
                <Button title='درباره ما' style={styles.buttons}> </Button>
                <Button title='تنظیمات ما' style={{width: '100%', height: 40}}

                        onPress={() => {

                            Alert.alert('Gps', 'Please turn on Gps',  [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ]);

                        }}

                            > </Button>


                            </View>

                            );
                            }
                }

                const styles=StyleSheet.create({
                container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            },
                welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
            },
                instructions: {
                textAlign: 'center',
                color: '#333333',
                marginBottom: 5,
            },

                buttons: {

                width: '100%',
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                alignSelf: 'stretch',
            },


            });
