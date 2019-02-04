/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, Alert,TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {


    gotoScreen(screenName) {


        Navigation.showModal({
            stack: {
                children: [{
                    component : {
                        name : screenName,
                    }

                }]

            }

        })

    }

    gotoScreenPush(screenName) {


        Navigation.push(this.props.componentId, {
            component: {
                name: screenName,
                passProps: {
                    text: screenName
                },
                options: {
                    topBar: {
                        title: {
                            text: screenName
                        }
                    },
                    bottomTabs: {
                        visible: true,
                        children: [{
                            stack: {
                                children: [{
                                    component: {
                                        name: 'Category',
                                        passProps: {
                                            text: 'This is tab 1'
                                        }
                                    }
                                }],
                                options: {
                                    bottomTab: {
                                        text: 'Tab 1',
                                        icon: require('../assets/images/login.png'),
                                        testID: 'FIRST_TAB_BAR_BUTTON'
                                    }
                                }
                            }
                        },
                            {
                                component: {
                                    name: 'Category',
                                    passProps: {
                                        text: 'This is tab 2'
                                    },
                                    options: {
                                        bottomTab: {
                                            text: 'Tab 2',
                                            icon: require('../assets/images/login.png'),
                                            testID: 'SECOND_TAB_BAR_BUTTON'
                                        }
                                    }
                                }
                            }]
                    }//end  botom tabs
                }//end option
            }
        });

    }




    render() {
        return (

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Image
                    source={{uri: 'https://www.iranpooshak.com/skin/frontend/codazon_fastest/default/images/logo.gif'}}
                    style={{width: '100%', height: 100}}
                />


                <TouchableOpacity style={styles.buttons}  onPress={()=> this.gotoScreen('SignUp') }>

                    <Text >عضویت در ایران پوشاک</Text>

                </TouchableOpacity>



                <TouchableOpacity style={styles.buttons}  onPress={()=> this.gotoScreen('SignIn') }>

                    <Text >ورود به ایران پوشاک</Text>

                </TouchableOpacity>


                <TouchableOpacity style={styles.buttons} onPress={()=> this.gotoScreenPush('Default') }    >

                    <Text >ورود مهمان</Text>

                </TouchableOpacity>



            </View>

        );
    }
}

const styles = StyleSheet.create({
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
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        width:250,
    },


});
