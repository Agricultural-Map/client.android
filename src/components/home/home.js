import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { StatusBar, ImageBackground, Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'native-base';
import styles from './styles';
import Map from '../map';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            {/* Banner */}
            <ImageBackground
                style={styles.banner}
                source={require('../../../assets/images/banner.png')}>
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/560907/screenshots/4888083/nimmymelvin.jpg' }}
                    style={styles.avatar} />
                <View style={styles.flexVertical}>
                    <Text style={[styles.name, styles.textWhite]}>
                        Trịnh Quang Nghĩa
                    </Text>
                    <Button small style={styles.button} success>
                        <Text style={styles.textWhite}>Đăng nhập</Text>
                    </Button>
                </View>

            </ImageBackground>
            {/* List screens */}
            <DrawerItemList {...props} />
            {/* Add more item */}
            <DrawerItem label='Thông báo' onPress={() => alert('Đang thử nghiệm')} />
        </DrawerContentScrollView >
    );
}

export default function Home() {
    return <>
        <StatusBar hidden={true} />
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => CustomDrawerContent(props)}
                drawerContentOptions={{
                    itemStyle: {}
                }}>
                <Drawer.Screen
                    name='Agricultural Maps'
                    component={Map}
                    options={{ title: 'Bản đồ nông nghiệp' }} />
                {/* Add more screen here */}
            </Drawer.Navigator>
        </NavigationContainer>
    </>
}