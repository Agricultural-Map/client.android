import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Icon, Title, Button } from 'native-base';
import { Modal } from 'antd-mobile-rn';
import MapView from 'react-native-maps';
import styles from './styles';
import MapFilter from './map-filter';

export default function Map(props) {

    const { width, height } = Dimensions.get('window');
    const [chooseValue, setChooseValue] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [region, setRegion] = useState({
        latitude: 16.047079,
        longitude: 108.206230,
        latitudeDelta: 15,
        longitudeDelta: 15 + (width / height)
    });

    return (
        <Container>
            <Header style={[styles.header, styles.shadow]}>
                <Left>
                    <Button transparent onPress={onButtonOpenMenu}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body style={styles.headerBody}>
                    <Title style={styles.titleHeader}>Bản đồ nông nghiệp</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='star' />
                    </Button>
                </Right>
            </Header>
            <Content scrollEnabled={false}>
                <View style={{ width, height }}>
                    <MapView
                        style={styles.map}
                        initialRegion={region} />
                    <MapFilter
                        visible={modalVisible}
                        value={chooseValue}
                        onChange={onChange} />
                    <View style={styles.mapFuncBottom}>
                        <Button iconLeft style={[styles.pickerButton, styles.shadow]} onPress={() => setModalVisible(true)}>
                            <Icon name='map' style={styles.icon} />
                        </Button>
                        <Button iconLeft style={[styles.pickerButton, styles.shadow]}>
                            <Icon name='home' style={styles.icon} />
                        </Button>
                    </View>
                </View>
            </Content>
        </Container >
    )

    function onButtonOpenMenu() {
        props.navigation.toggleDrawer();
    }

    function onChange(hasData, data) {
        if (hasData == false) {
            setModalVisible(false);
        }
        else {
            setChooseValue(data);
        }
    }
}