import React from 'react'
import { Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainLayout from '../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'

const HomePage = (props) => {

    const goNext = () => {
        props.navigation.navigate('Profile')
    }

    return (
        <>
            <MainLayout>
                <View style={styles.top}>
                    <Image style={styles.logo} source={require('../images/sgn.png')} />
                    <TouchableOpacity
                        onPress={goNext}
                        activeOpacity={0.7}
                        style={styles.profIcon}>
                        <Icon name='person' size={18} color={'rgb(60, 210, 165)'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20 }}>
                            <View style={{ borderWidth: 0.5, borderColor: '#b7fc62', width: '40%' }}>
                                <View style={{ backgroundColor: 'white', paddingVertical: 50, margin: 2 }}>
                                    <Icon name='location' color={'black'} size={50} style={{ alignSelf: 'center' }} />
                                </View>
                                <View style={{ padding: 10, alignItems: 'flex-start', backgroundColor: "rgba(255,255,255,.1)" }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={[styles.text, { fontSize: 25 }]} numberOfLines={2}>Al Camp 1</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={[styles.text, { width: 70 }]}>Location:</Text>
                                        <Text style={[styles.text, { width: 130 }]} numberOfLines={2}>AL AGhar</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Text style={[styles.text, { width: 70 }]}>Status:</Text>
                                        <Text style={[styles.text, { width: 130 }]} numberOfLines={2}>Online</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={[styles.text, { width: 70 }]}>Other:</Text>
                                        <Text style={[styles.text, { width: 130 }]} numberOfLines={3}>Lorem Ipsum</Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#3cd2a5', marginTop: 20, borderRadius: 4, paddingVertical: 10, width: '100%' }}>
                                        <Text style={[styles.text, { color: 'black', textAlign: 'center' }]}>View</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <View style={{ borderWidth: 0.5, borderColor: 'white', borderRadius: 4 }}>
                                <View style={{ paddingVertical: '2%' }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Text style={styles.text}>Your SG ID</Text>
                                        <Text style={[styles.text, { fontSize: 17, fontFamily: 'ChakraPetch-Bold' }]}>123-456-789</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Connected at</Text>
                                        <Text style={[styles.text, { fontSize: 17, fontFamily: 'ChakraPetch-Bold' }]}>Al Shuwaib System 1</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.items, { marginTop: 40 }]}>

                                <TouchableOpacity onPress={() => props.navigation.navigate('UserId')} activeOpacity={0.7} style={styles.box}>
                                    <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', letterSpacing: 1 }}>User ID</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Scan')} activeOpacity={0.7} style={styles.box}>
                                    <Icon name='qr-code-sharp' size={25} color='black' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Mobile')} activeOpacity={0.7} style={styles.box}>
                                    <Icon name='phone-portrait-outline' size={25} color='black' />
                                </TouchableOpacity>
                            </View> */}
                        </ScrollView>
                    </View>
                </View>
            </MainLayout >
        </>
    )
}

export default HomePage

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
        marginBottom: 10
    },
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        width: Dimensions.get('window').width - 50,
    },
    logo: {
        height: 60,
        width: 85,
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
        borderColor: 'rgb(60, 210, 165)'
    },
    top: {
        height: Dimensions.get('window').height * (1 / 6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontFamily: 'ChakraPetch-Regular',
        fontSize: 14,
        letterSpacing: 1
    },
    items: {
        backgroundColor: '#021620',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 0,
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        backgroundColor: 'rgb(60, 210, 165)',
        height: 90,
        width: '30%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
