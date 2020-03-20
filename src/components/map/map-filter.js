import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Picker, Button, Icon } from 'native-base';
import { Modal } from 'antd-mobile-rn';
import administrative from '../../../assets/statistics/administrative';
import SearchableDropdown from 'react-native-searchable-dropdown';
import styles from './styles';

export default function MapFilter(props) {

    const { visible } = props;
    const { onChange } = props;
    const { value } = props;

    const [adm2Items, setAdm2Items] = useState([]);
    const [adm3Items, setAdm3Items] = useState([]);
    const [adm4Items, setAdm4Items] = useState([]);
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [village, setVillage] = useState('');

    useEffect(() => {
        setAdm2Items(administrative.map((x, i) => {
            return {
                id: i,
                name: x.value
            }
        }));
        if (value[0] != null) {
            setProvince(value[0]);
        }
        if (value[1] != null) {
            setDistrict(value[1]);
        }
        if (value[2] != null) {
            setVillage(value[2]);
        }
    }, []);

    const footerButtons = [
        { text: 'Hủy', onPress: () => onClose() },
        { text: 'Chọn', onPress: () => onClose() }
    ];

    return (
        <Modal
            title='Đi đến địa điểm'
            transparent
            maskClosable
            visible={visible}
            footer={footerButtons}>
            <View>
                <SearchableDropdown
                    onItemSelect={onProvinceSelect}
                    onRemoveItem={onRemoveItem}
                    containerStyle={styles.containerStyle}
                    itemStyle={styles.searchableItemStyle}
                    itemsContainerStyle={styles.searchableHeight}
                    items={adm2Items}
                    resetValue={false}
                    textInputProps={{
                        placeholder: "Tỉnh / Thành phố",
                        style: styles.searchableInput,
                        value: province,
                        onChange: (v) => setProvince(v)
                    }}
                    listProps={{
                        nestedScrollEnabled: false,
                    }}
                />
                <SearchableDropdown
                    onItemSelect={onDistrictSelect}
                    onRemoveItem={onRemoveItem}
                    containerStyle={styles.containerStyle}
                    itemStyle={styles.searchableItemStyle}
                    itemsContainerStyle={styles.searchableHeight}
                    items={adm3Items}
                    resetValue={false}
                    textInputProps={{
                        placeholder: "Quận / Huyện / Thị xã",
                        style: styles.searchableInput,
                        editable: province.length > 0,
                        value: district,
                        onChange: (v) => setDistrict(v)
                    }}
                    listProps={{
                        nestedScrollEnabled: false,
                    }}
                />

                <SearchableDropdown
                    onItemSelect={onVillageSelect}
                    onRemoveItem={onRemoveItem}
                    containerStyle={styles.containerStyle}
                    itemStyle={styles.searchableItemStyle}
                    itemsContainerStyle={styles.searchableHeight}
                    items={adm4Items}
                    resetValue={false}
                    textInputProps={{
                        placeholder: "Phường / Trị trấn",
                        style: styles.searchableInput,
                        editable: district.length > 1,
                        value: village,
                        onChange: (v) => setVillage(v)
                    }}
                    listProps={{
                        nestedScrollEnabled: false,
                    }}
                />
            </View>
        </Modal>
    )

    function onClose() {
        let result = [];
        if (province.length > 0) {
            result.push(province);
        }
        if (district.length > 0) {
            result.push(district);
        }
        if (village.length > 0) {
            result.push(village);
        }
        onChange(result);
    }

    function onRemoveItem(item, index) {
        alert(item)
    }

    function onProvinceSelect(item) {
        setProvince(item.name);
        setDistrict('');
        setVillage('');
        setAdm3Items(administrative[item.id].children.map((x, i) => {
            return {
                id: item.id * 1000 + i,
                name: x.value
            }
        }))
        setAdm4Items([]);
    }

    function onDistrictSelect(item) {
        setDistrict(item.name);
        setVillage('');
        setAdm4Items(administrative[(item.id / 1000) >> 0].children[item.id % 1000].children.map((x, i) => {
            return {
                id: item.id * 1000 + i,
                name: x.value
            }
        }))
    }

    function onVillageSelect(item) {
        setVillage(item.name);
    }
}