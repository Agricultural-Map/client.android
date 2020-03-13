import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    banner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        marginTop: -5,
        marginBottom: 5,
        padding: 0
    },
    flexVertical: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 15
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 5
    },
    textWhite: {
        color: 'white'
    },
    button: {
        padding: 10
    }
});