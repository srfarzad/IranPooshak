/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight, TextInput, Alert} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Card,
    CardItem,Tabs,Tab
} from 'native-base';
import StarRating from 'react-native-star-rating';


import DetailTab from './tabs/DetailTab';
import CommentsTab from './tabs/CommentsTab';

type Props = {};
export default class ProductDescription extends Component<Props> {


    render() {
        return (
            <Container>


                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{this.props.item.title}</Title>
                    </Body>
                    <Right/>
                </Header>


                <Content>
                    <Card>
                        <CardItem>
                            <Body>

                            <Image source={{
                                uri: "http://androidsupport.ir/market/images/" +
                                this.props.item.icon
                            }} style={{width: 144, height: 144}}/>


                            <StarRating
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                maxStars={7}
                                rating={this.props.item.rate}
                                fullStarColor={'red'}
                            />

                            </Body>
                        </CardItem>
                    </Card>


                    <Tabs>
                        <Tab heading="Tab1">
                            <DetailTab />
                        </Tab>
                        <Tab heading="Tab2">
                            <CommentsTab />
                        </Tab>
                        <Tab heading="Tab3">
                            <DetailTab />
                        </Tab>
                    </Tabs>


                </Content>


            </Container>
        );
    }
}

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
