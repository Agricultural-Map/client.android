import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Icon, Title, Button } from 'native-base';
import { Modal } from 'antd-mobile-rn';
import MapView, { Geojson } from 'react-native-maps';
import styles from './styles';

export default function Share(props) {

    const { width, height } = Dimensions.get('window');

    return (
        <Container>
            <Header style={[styles.header, styles.shadow]}>
                <Left>
                    <Button transparent onPress={onButtonOpenMenu}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body style={styles.headerBody}>
                    <Title style={styles.titleHeader}>Chia sẻ dữ liệu nuôi trồng</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='star' />
                    </Button>
                </Right>
            </Header>
            <Content scrollEnabled={true}>
                <View style={{ width, height }}>

                </View>
            </Content>
        </Container>
    )

    function onButtonOpenMenu() {
        props.navigation.toggleDrawer();
    }
}