import React, { useEffect } from 'react'
import { Image, StyleSheet, View, Dimensions, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MainLayout from '../components/MainLayout'

const GetStarted = (props) => {

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setTimeout(() => {
                props.navigation.navigate('Login')
            }, 2000);
            return unsubscribe
        })
    }, [props.navigation])

    return (
        <MainLayout>
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('../images/sgn.png')} />
                <Image style={styles.gif} source={require('../images/gif2.gif')} />
            </View>
        </MainLayout>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778'
    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 100,
        width: 125,
        borderRadius: 10,
        marginBottom: 10
    },
    top: {
        position: 'absolute',
        height: Dimensions.get('window').height * (1 / 3.5),
        width: Dimensions.get('window').width * (1 / 3.5),
        borderBottomRightRadius: 80,
        backgroundColor: 'white'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: Dimensions.get('window').height * (1 / 3.5),
        width: Dimensions.get('window').width * (1 / 3.5),
        borderTopLeftRadius: 80,
        backgroundColor: 'white'
    },
    gif: {
        width: 100,
        height: 20,
        alignSelf: 'center'
    }
})