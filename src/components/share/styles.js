import { StyleSheet } from 'react-native';
import { View, Text, Dimensions, StatusBar } from 'react-native';

const navbarHeight = Dimensions.get('screen').height - Dimensions.get('window').height;

export default StyleSheet.create({
    header: {
        height: 40
    },
    titleHeader: {
        fontSize: 16
    },
    headerBody: {
        flex: 2,
        alignItems: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});