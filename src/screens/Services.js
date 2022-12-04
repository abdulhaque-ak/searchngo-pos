import React from 'react'
import { Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import MainLayout from '../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'

const Services = (props) => {

    return (
        <>
            < MainLayout >
                <View style={styles.top}>
                    <Image style={styles.logo} source={require('../images/sgn.png')} />
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Profile')}
                        activeOpacity={0.7}
                        style={styles.profIcon}>
                        <Icon name='person' size={18} color={'#3cd2a5'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <View>
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20 }}>
                                <Text style={styles.text}>Select an option</Text>
                                <View style={[styles.items]}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('WalletMain')} activeOpacity={0.7} style={styles.box}>
                                        <Icon name='wallet-outline' size={25} color='black' style={{ marginBottom: 4 }} />
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium' }}>Wallet</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('FoodScreens')}
                                        activeOpacity={0.7} style={[styles.box, { marginVertical: 14 }]}>
                                        <Icon name='fast-food-outline' size={25} color='black' style={{ marginBottom: 4 }} />
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium' }}>Food Order</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('WaterScreens')}
                                        activeOpacity={0.7} style={styles.box}>
                                        <Icon name='water-outline' size={25} color='black' style={{ marginBottom: 4 }} />
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium' }}>Water Order</Text>
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

export default Services

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
        marginLeft: 4,
        marginBottom: 2,
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
        // backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 4,
        marginBottom: 0,
        // borderWidth: 1,
        // borderColor: '#55f0c2',
    },
    box: {
        backgroundColor: '#3cd2a5',
        height: 90,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
