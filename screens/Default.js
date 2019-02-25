/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, TouchableHighlight, TextInput, Alert} from 'react-native';
import ProductCategory from "./ProductCategory";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class Default extends Component<Props> {

    constructor(props) {
        super(props)

        this.state = {
            application: null,
        }

    }

    getBestProducts() {

        fetch("http://androidsupport.ir/market/getBestApplications.php")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({application: responseJson});
                console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    componentDidMount() {
        this.getBestProducts();
    }


    render() {
        return (
            <View style={styles.container}>

                <Text> Default page</Text>


            </View>
        );
    }
}

export default Default;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#88dc08',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});
