import React from 'react'
import { Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import MainLayout from '../../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'

const Refund = (props) => {
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
                        <View style={{ paddingVertical: 30 }}>
                            <Text style={styles.id}>123-456-789</Text>
                            <Text style={[styles.id, { top: 4 }]}>Balance: 1000 د.إ</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 30 }}>
                            <Text style={styles.text}>Enter Refund Amount</Text>
                            <TextInput style={styles.input} keyboardType="numeric" />
                            <View style={[styles.input, { backgroundColor: 'black' }]}>
                                <Text style={styles.note}>Note: If refund amount is less than 500 د.إ, a service charge of 10 د.إ will be deducted.</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('HomePage')}
                                activeOpacity={0.7}
                                style={styles.sendCode}>
                                <Text style={styles.sndText}>SUBMIT</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </MainLayout >
        </>
    )
}

export default Refund

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
    id: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'ChakraPetch-Medium',
        fontSize: 16,
        alignSelf: 'center',
        letterSpacing: 1
    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'ChakraPetch-Medium',
        fontSize: 14,
        marginLeft: 2,
        marginBottom: 6,
        letterSpacing: 1
    },
    note: {
        color: '#999999',
        fontFamily: 'ChakraPetch-Medium',
        fontSize: 14,
        marginLeft: 2,
        paddingVertical: 10,
        letterSpacing: 1
    },
    input: {
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
        color: 'black',
        fontFamily: 'ChakraPetch-Bold',
        backgroundColor: 'white'
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#3cd2a5',
        paddingVertical: 16,
        marginTop: 20,
        alignItems: 'center',
        elevation: 5
    },
    sndText: {
        color: 'black',
        fontFamily: 'ChakraPetch-Bold',
        fontSize: 17
    }
})
