import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainLayout from '../components/MainLayout'

const VerifyOTP = (props) => {
    let phone = props.route.params
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch()

    const verifyOTP = () => {
        // if (otp == '') {
        //     alert('OTP cannot be empty!')
        //     return
        // } else {
        //     AsyncStorage.setItem('logged', 'true')
        //     AsyncStorage.setItem('UID', phone)
        //     dispatch({
        //         type: 'ADD_USER',
        //         payload: {
        //             mobile: phone,
        //             type: 'logged'
        //         }
        //     })
        // }
        props.navigation.navigate('UserDetails')
    }
    return (
        <MainLayout>
            <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../images/sgn.png')} />
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.continue}>Enter the OTP number</Text>
                        <OTPInputView
                            style={{ width: '80%', height: '20%', marginBottom: 40, alignSelf: 'center' }}
                            pinCount={4}
                            autoFocusOnLoad
                            code={otp}
                            selectionColor='red'
                            keyboardType='number-pad'
                            // placeholderCharacter='_'
                            codeInputFieldStyle={{
                                height: 60,
                                borderRadius: 10,
                                borderBottomWidth: 1,
                                color: 'white',
                                fontFamily: 'Montserrat-Regular',
                                backgroundColor: '#012530',
                                fontWeight: 'bold',
                                fontSize: 20,
                                borderColor: '#015c67'
                            }}
                            codeInputHighlightStyle={{
                                // borderColor: '#292929',
                            }}
                            onCodeChanged={(code => {
                                setOtp(code)
                            })}
                        />
                        <TouchableOpacity
                            onPress={verifyOTP}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>VERIFY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* <View style={styles.main}>
                <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.logo} source={require('../images/logo.jpg')} />
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.continue}>Enter 4 Digit Code</Text>
                        <OTPInputView
                            style={{ width: '80%', height: '20%', marginBottom: 40, alignSelf: 'center' }}
                            pinCount={4}
                            autoFocusOnLoad
                            code={otp}
                            keyboardType='number-pad'
                            codeInputFieldStyle={{
                                height: 60,
                                borderRadius: 10,
                                borderBottomWidth: 1,
                                color: '#214778',
                                fontFamily: 'Montserrat-Regular',
                                backgroundColor: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                                borderColor: '#214778'
                            }}
                            codeInputHighlightStyle={{
                                // borderColor: '#292929',
                            }}
                            onCodeChanged={(code => {
                                setOtp(code)
                            })}
                        />
                        <TouchableOpacity
                            onPress={verifyOTP}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>Verify and Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View > */}
        </MainLayout>
    )
}

export default VerifyOTP

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    secondView: {
        borderRadius: 20,
        backgroundColor: '#02253790',
        alignItems: 'center',
        paddingVertical: 20,
        marginHorizontal: 5,
    },
    container: {
        width: Dimensions.get('window').width - 60,
    },
    continue: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        marginBottom: 30,
        color: 'white',
        textAlign: 'center'
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
        // marginLeft: 30,
        marginTop: 20
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#55f0c2',
        paddingVertical: 18,
        // marginVertical: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    goBack: {
        borderRadius: 30,
        backgroundColor: 'white',
        paddingVertical: 18,
        alignItems: 'center',
        borderColor: '#0e3d6b',
        borderWidth: 3
    },
    sndText: {
        color: '#214778',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
    backText: {
        color: '#0e3d6b',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    }
})
