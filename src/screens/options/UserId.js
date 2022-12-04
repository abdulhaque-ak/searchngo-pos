import React from 'react'
import { Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import MainLayout from '../../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'

const UserId = (props) => {

    const goNext = () => {
        props.navigation.navigate('Profile')
    }

    return (
        <>

            < MainLayout >
                <View style={styles.top}>
                    <Image style={styles.logo} source={require('../../images/sgn.png')} />
                    <TouchableOpacity
                        onPress={goNext}
                        activeOpacity={0.7}
                        style={styles.profIcon}>
                        <Icon name='person' size={18} color={'#3cd2a5'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.text}>Enter User ID</Text>
                        <TextInput style={styles.input} keyboardType="numeric" />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Services')}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </MainLayout >
        </>
    )
}

export default UserId

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    secondView: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        paddingBottom: 2,
        marginHorizontal: 5,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        width: Dimensions.get('window').width - 50,
    },
    logo: {
        height: 60,
        width: 80,
        marginTop: 10
    },
    profIcon: {
        position: 'absolute',
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: '#3cd2a5'
    },
    top: {
        height: Dimensions.get('window').height * (1 / 6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'ChakraPetch-Medium',
        fontSize: 14,
        marginLeft: 2,
        marginBottom: 8,
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
        backgroundColor: 'rgba(255,255,255, 0.1)'
    },
    sendCode: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3cd2a5',
        paddingVertical: 16,
        marginTop: 20,
        alignItems: 'center',
        elevation: 5
    },
    sndText: {
        color: '#3cd2a5',
        fontFamily: 'ChakraPetch-Bold',
        fontSize: 17
    }
})
