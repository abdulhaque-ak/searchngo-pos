import React from 'react'
import { Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import MainLayout from '../../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

const WalletMain = (props) => {

    return (
        <>
            <MainLayout>
                <View style={styles.top}>
                    <Image style={styles.logo} source={require('../../images/sgn.png')} />
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Profile')}
                        activeOpacity={0.7}
                        style={styles.profIcon}>
                        <Icon name='person' size={18} color={'#3cd2a5'} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.id}>Balance: 1000 د.إ</Text>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <View>
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
                                <Text style={styles.text}>Select an option</Text>
                                <View style={[styles.items]}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('Recharge')} activeOpacity={0.7} style={styles.box}>
                                        <Icon2 name='cash-plus' size={25} color='black' style={{ marginBottom: 4 }} />
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium' }}>Recharge</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('Refund')} activeOpacity={0.7} style={[styles.box, { marginVertical: 14 }]}>
                                        <Icon2 name='cash-refund' size={25} color='black' style={{ marginBottom: 4 }} />
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium' }}>Refund</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('Transfer')} activeOpacity={0.7} style={styles.box}>
                                        <Icon2 name='bank-transfer' size={25} color='black' style={{ marginBottom: 4 }} />
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium' }}>Transfer</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </MainLayout >
        </>
    )
}

export default WalletMain

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
        justifyContent: 'center',
        marginBottom: 10
    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'ChakraPetch-Medium',
        fontSize: 14,
        marginLeft: 2,
        marginBottom: 4,
        letterSpacing: 1
    },
    input: {
        width: '100%',
        backgroundColor: '#01232e',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#55f0c2',
        marginBottom: 10,
        paddingLeft: 10,
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#55f0c2',
        paddingVertical: 18,
        marginTop: 20,
        alignItems: 'center',
    },
    sndText: {
        color: '#214778',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
    items: {
        // backgroundColor: '#021620',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 4,
        marginBottom: 0,
    },
    box: {
        backgroundColor: '#3cd2a5',
        height: 90,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    id: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'ChakraPetch-Medium',
        fontSize: 16,
        alignSelf: 'center',
        marginVertical: 15,
        letterSpacing: 1
        // top: 0,
    }
})
