/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Image,
    TouchableHighlight,
    TextInput,
    Alert,
    FlatList, TouchableOpacity
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {Navigation} from 'react-native-navigation';
import ProductCategory from "./ProductCategory";
import {Card, CardItem, Body} from 'native-base';


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
            newApplications: null,
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


    getNewProducts() {

        fetch("http://androidsupport.ir/market/getNewApplications.php")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({newApplications: responseJson});
                console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    goToScreen = (screenName, params) => {


        Navigation.showModal({

            stack: {
                children:[ {
                    component: {
                        name: screenName,
                        passProps: {
                            title: 'Hello',
                            item: params
                        },options : {
                            topBar : {
                                title :{
                                    text : params.title,
                                }
                            }
                        }
                    }
                }]


            }


        })

    };


    componentDidMount() {
        this.getBestProducts();
        this.getNewProducts();
    }


    render() {
        return (
            <ScrollView>

                <View style={styles.container}>


                    <View style={{height: 220}}>

                        <ImageSlider
                            loopBothSides
                            autoPlayWithInterval={3000}
                            images={["https://fecdn.cafebazaar.ir/promos/promo2446_l_fa.webp",
                                "https://fecdn.cafebazaar.ir/promos/promo2992_l_fa.webp",
                                "https://fecdn.cafebazaar.ir/promos/promo2620_l_fa.webp"]}

                        />

                    </View>


                    <Text style={styles.rightViews}>برترین محصولات </Text>

                    <FlatList

                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.application}

                        renderItem={({item}) =>


                            <Card>


                                <CardItem  button onPress={()=>   this.goToScreen('ProductDescription', item)  }>

                                    <Body>


                                    <Image source={{uri: "http://androidsupport.ir/market/images/" + item.icon}}
                                           style={{width: 96, height: 96}}/>
                                    <Text> {item.title} </Text>


                                    </Body>

                                </CardItem>


                            </Card>


                        }

                    />


                    <Text style={styles.rightViews}>جدیدترین محصولات </Text>


                    <FlatList

                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.newApplications}

                        renderItem={({item}) =>

                            <Card>
                                <CardItem>

                                    <Body>

                                    <Image source={{uri: "http://androidsupport.ir/market/images/" + item.icon}}
                                           style={{width: 96, height: 96}}/>
                                    <Text> {item.title} </Text>

                                    </Body>

                                </CardItem>

                            </Card>

                        }

                    />


                </View>

            </ScrollView>
        );
    }
}

export default Default;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    rightViews: {
        fontFamily: 'irsans',
        marginTop: 10,
    },
});
