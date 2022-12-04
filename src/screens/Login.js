import React, { useEffect } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainLayout from '../components/MainLayout';

const Login = (props) => {

    const [phone, setPhone] = React.useState('')
    const getData = async () => {
        let uid = await AsyncStorage.getItem('UID')
        setPhone(uid)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <MainLayout>
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../images/sgn.png')} />
            </View>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.phoneNo}>Username</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Password</Text>
                        <TextInput style={styles.input} />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('HomePage', phone)}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>Sign In</Text>
                        </TouchableOpacity>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.continue}>Don't have an account yet?{" "}</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => props.navigation.navigate('SignUp')}
                            >
                                <Text style={styles.signup}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </ScrollView>
        </MainLayout>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    scroll: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    secondView: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 30,
        marginHorizontal: 5,
    },
    container: {
        width: Dimensions.get('window').width - 30,
    },
    continue: {
        fontSize: 15,
        fontFamily: 'ChakraPetch-Regular',
        color: 'rgba(255, 255, 255, 0.75)',
        marginVertical: 18,
        letterSpacing: 1
    },
    signup: {
        textDecorationLine: 'underline',
        color: '#3cd2a5',
        fontFamily: 'ChakraPetch-Bold',
        letterSpacing: 1
    },
    phone: {
        borderRadius: 30,
        backgroundColor: '#94989c',
        paddingLeft: 20,
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 14
    },
    logo: {
        height: 100,
        width: 125,
        marginTop: 20,
    },
    sendCode: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3cd2a5',
        // backgroundColor: '#3cd2a5',
        paddingVertical: 18,
        marginTop: 30,
        alignItems: 'center',
    },
    goBack: {
        borderRadius: 30,
        backgroundColor: 'white',
        paddingVertical: 16,
        alignItems: 'center',
        borderColor: '#1AFF9B',
        borderWidth: 2
    },
    sndText: {
        color: '#3cd2a5',
        fontFamily: 'ChakraPetch-Bold',
        fontSize: 17
    },
    backText: {
        color: '#0e3d6b',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
    phoneNo: {
        fontFamily: 'ChakraPetch-Regular',
        marginBottom: 4,
        marginLeft: 3,
        color: 'rgba(255, 255, 255, 0.75)',
        letterSpacing: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#a1a6a3',
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
        color: 'white',
        fontFamily: 'ChakraPetch-Regular',
        backgroundColor: 'rgba(255,255,255, 0.1)',
        letterSpacing: 1
    }
})