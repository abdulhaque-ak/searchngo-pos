import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MainLayout from '../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'

const Profile = (props) => {
    const goNext = () => {
        props.navigation.navigate('HomePage')
    }
    return (
        <MainLayout>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ height: Dimensions.get('window').height * (1 / 6), alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.logo} source={require('../images/sgn.png')} />
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.continue}>Your SG ID</Text>
                        <Text style={[styles.continue, styles.id]}>123-456-789</Text>
                        <View style={styles.qrView}>
                            <Icon name='qr-code-sharp' size={70} color='black' />
                        </View>
                        <View style={styles.inputView}>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Name</Text>
                                <Text style={[styles.fieldValue, { width: 200 }]} numberOfLines={1}>:{"   "}Mohammed Shiyas</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Nation</Text>
                                <Text style={styles.fieldValue}>:{"   "}Indian</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>DOB</Text>
                                <Text style={styles.fieldValue}>:{"   "}10 May 1985</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Gender</Text>
                                <Text style={styles.fieldValue}>:{"   "}Male</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={goNext}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </MainLayout>
    )
}

export default Profile

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    secondView: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        marginHorizontal: 5,
        zIndex: -9999,
        marginTop: -40,
        marginBottom: 10
    },
    container: {
        width: Dimensions.get('window').width - 50,
    },
    continue: {
        fontSize: 16,
        fontFamily: 'ChakraPetch-Medium',
        color: 'rgba(255, 255, 255, 0.75)',
        textAlign: 'center',
        marginTop: 20
    },
    inputView: {
        marginTop: 10,
        textAlign: 'center',
        alignSelf: 'center'
    },
    logo: {
        height: 60,
        width: 85,
        marginTop: 10
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
    },
    fieldName: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'ChakraPetch-Regular',
        fontSize: 17,
        width: 65,
    },
    fieldValue: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'ChakraPetch-Regular',
        fontSize: 17,
    },
    input: {
        backgroundColor: '#01232e',
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 10,
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 10
    },
    id: {
        fontSize: 20,
        marginTop: 2,
        fontFamily: 'ChakraPetch-SemiBold'
    },
    qrView: {
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6
    }
})
