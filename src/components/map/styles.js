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
    footer: {
        height: 40
    },
    headerBody: {
        flex: 2,
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFill
    },
    mapFuncTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    mapFuncBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: navbarHeight
    },
    itemMapFilter: {
        fontSize: 13
    },
    pickerButton: {
        borderRadius: 17,
        borderWidth: 0,
        height: 34,
        width: 34,
        marginHorizontal: 8,
        backgroundColor: 'darkblue'
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
    address: {
        fontSize: 16
    },
    icon: {
        fontSize: 20,
        color: 'white',
        marginLeft: 9
    }
});