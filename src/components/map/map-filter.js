import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { Picker, Button, Icon } from 'native-base';
import { Modal } from 'antd-mobile-rn';
import administrative from '../../../assets/statistics/administrative';
import SearchableDropdown from 'react-native-searchable-dropdown';
var items = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
];

export default function MapFilter(props) {

    const { visible } = props;
    const { onChange } = props;
    const { value } = props;

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
            <View style={{ paddingVertical: 20 }}>
                <SearchableDropdown
                    onItemSelect={(item) => {
                        // const items = this.state.selectedItems;
                        // items.push(item)
                        // this.setState({ selectedItems: items });
                    }}
                    containerStyle={{ padding: 5 }}
                    onRemoveItem={(item, index) => {
                        // const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                        // this.setState({ selectedItems: items });
                    }}
                    itemStyle={{
                        marginTop: 2,
                        backgroundColor: '#ddd',
                        borderColor: '#bbb',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ maxHeight: 140 }}
                    items={items}
                    defaultIndex={2}
                    resetValue={false}
                    textInputProps={
                        {
                            placeholder: "placeholder",
                            underlineColorAndroid: "transparent",
                            style: {
                                padding: 12,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                            },
                            onTextChange: text => alert(text)
                        }
                    }
                    listProps={
                        {
                            nestedScrollEnabled: false,
                        }
                    }
                />
            </View>
        </Modal>
    )

    function onClose(selectedValue) {
        onChange(selectedValue != null, selectedValue);
    }
}