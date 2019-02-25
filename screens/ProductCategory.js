/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Card} from 'native-base';


type Props = {};

class ProductCategory extends Component<Props> {


    render() {
        return (
            <Container style={{width: '100%'}}>


                <Header>
                    <Left>

                        <Button>

                            <Icon name='menu'/>

                        </Button>
                    </Left>

                    <Body>

                    <Title> دسته بندی محصولات </Title>


                    </Body>

                    <Right/>

                </Header>


                <Content>


                </Content>


                <Footer>

                </Footer>


            </Container>
        );
    }
}

export default ProductCategory;
