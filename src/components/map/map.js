import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Icon, Title, Button } from 'native-base';
import { Modal } from 'antd-mobile-rn';
import MapView from 'react-native-maps';
import styles from './styles';
import MapFilter from './map-filter';

const defaultGeoJson = { data: null, key: null };

export default function Map(props) {

    const { width, height } = Dimensions.get('window');
    const [chooseValue, setChooseValue] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [curGeoJson, setCurGeoJson] = useState(defaultGeoJson);
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
                        initialRegion={region}
                        geo >
                        <Geojson
                            geojson={curGeoJson.data}
                            strokeColor='blue'
                            fillColor='lightblue'
                            strokeWidth={2}
                        />
                    </MapView>
                    <MapFilter
                        visible={modalVisible}
                        value={chooseValue}
                        onChange={onCloseModal} />
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

    function onCloseModal(hasData, data) {
        if (hasData == false) {
            setModalVisible(false);
        }
        else {
            handleChooseLocation(data, true);
        }
    }

    function handleChooseLocation(value, isFitBounds) {
        let param = '';

        // Get path
        for (let i = 0; i < value.length && i < 2; i++) {
            param += '/' + value[i];
        }

        if (param.length > 0) {
            const path = param == null ? 'vietnam' : ('vietnam' + param);

            // eslint-disable-next-line
            const geoJson = require(`../../../assets/maps/adm/${path}.json`);

            // If there is no file match, then invalid district
            if (geoJson == null) {
                setCurGeoJson(defaultGeoJson);
                return;
            }

            // Change current geojson
            if (value[2] == null) {
                setCurGeoJson({
                    data: geoJson,
                    key: path
                });
                if (mapRef.current && isFitBounds) {
                    mapRef.current.leafletElement.fitBounds(L.geoJson(geoJson).getBounds());
                }
            } else {
                geoJson.features.forEach(feature => {
                    if (feature.properties.NAME_3 === value[2]) {
                        setCurGeoJson({
                            data: feature,
                            key: path + '/' + value[2]
                        });
                        if (mapRef.current && isFitBounds) {
                            mapRef.current.leafletElement.fitBounds(L.geoJson(feature).getBounds());
                        }
                    }
                });
            }
        } else {
            setCurGeoJson(defaultGeoJson);
        }
    }
}