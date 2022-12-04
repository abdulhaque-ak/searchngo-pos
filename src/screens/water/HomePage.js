import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { primaryColor } from '../../common'
import MainLayout from '../../components/MainLayout'

const HomePage = () => {
    const [twenty, setTwenty] = React.useState(1)
    const [five, setFive] = React.useState(1)
    const [one, setOne] = React.useState(1)
    const [modalVisible, setModal] = React.useState(false)

    const increment = (value) => {
        if (value == 'twenty') {
            setTwenty(twenty + 1);
        } else if (value == 'five') {
            setFive(five + 1);
        } else if (value == 'one') {
            setOne(one + 1);
        } else {
            return null
        }
    }

    const decrement = (value) => {
        if (value == 'twenty') {
            twenty != 1 && setTwenty(twenty - 1);
        } else if (value == 'five') {
            five != 1 && setFive(five - 1);
        } else if (value == 'one') {
            one != 1 && setOne(one - 1);
        } else {
            return null
        }
    }

    return (
        <MainLayout>

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <Modal
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={{ flex: 1, backgroundColor: '#000000aa', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{
                            backgroundColor: '#021d24',
                            width: '90%',
                            paddingTop: 20,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'white',
                            marginVertical: 2
                        }}>
                            <ScrollView>
                                <Text style={{ fontFamily: 'ChakraPetch-Medium', color: 'white', fontSize: 18, marginBottom: 5, paddingLeft: 10 }}>Confirm your order</Text>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                                        <View style={{ height: 120, width: 120, borderRadius: 10, justifyContent: 'center' }}>
                                            <Image style={{ height: 100, width: 60, alignSelf: 'center' }} source={require('../../images/bottle.png')} />
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, marginLeft: 20, marginBottom: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                        {twenty > 0 || five > 0 || one > 0 ?
                                            <>
                                                <View>
                                                    <Text style={{ color: 'white', fontFamily: 'ChakraPetch-SemiBold', fontSize: 18, marginVertical: 10, textAlign: 'center' }}>Litre</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', fontSize: 18, textAlign: 'center' }}>20</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                                        <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', fontSize: 18, textAlign: 'center' }}>10</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', fontSize: 18, textAlign: 'center' }}>5</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ marginLeft: 30 }}>
                                                    <Text style={{ color: 'white', fontFamily: 'ChakraPetch-SemiBold', fontSize: 18, marginVertical: 10, textAlign: 'center' }}>Qty</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', fontSize: 18, textAlign: 'center' }}>{twenty}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                                        <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', fontSize: 18, textAlign: 'center' }}>{five}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', fontSize: 18, textAlign: 'center' }}>{one}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </>

                                            : null
                                        }
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 15, justifyContent: 'space-between', marginHorizontal: 10 }}>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={() => setModal(false)}
                                        style={{ width: '49%', alignItems: 'center', justifyContent: 'center', borderColor: '#3cd2a5', borderWidth: 1, paddingVertical: 14, borderRadius: 10 }}>
                                        <Text style={{ color: 'white', fontFamily: 'ChakraPetch-Medium', fontSize: 18 }}>No</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={() => setModal(false)}
                                        style={{ width: '49%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3cd2a5', paddingVertical: 17, borderRadius: 10 }}>
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', fontSize: 18 }}>Yes</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <Text style={styles.text}>Water Order</Text>
                        <View style={styles.iconView}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.cart}>
                                <Icon name='notifications-outline' color={'white'} size={26} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Icon name='person-circle-outline' color={'white'} size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.searchSection}>
                        <Icon style={styles.searchIcon} name="ios-search" size={20} color="white" />
                        <TextInput
                            style={styles.input}
                            placeholder="Search here.."
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <View style={styles.contents}>
                        <View style={styles.container}>
                            <View style={{ alignSelf: 'center', marginVertical: 30, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.recShape}>
                                    <Image style={{ height: 100, width: 60 }} source={require('../../images/bottle.png')} />
                                </View>
                                <View>
                                    <Text style={styles.ltr}>20 Ltr</Text>
                                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginBottom: 10, justifyContent: 'space-between', borderRadius: 10, width: 110, marginVertical: 5 }}>
                                        <TouchableOpacity
                                            onPress={() => decrement('twenty')}
                                            activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#3cd2a5', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium', fontWeight: 'bold' }}>
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium' }}>
                                                {twenty}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => increment('twenty')}
                                            activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#3cd2a5', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium', fontWeight: 'bold' }}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            ToastAndroid.showWithGravity(
                                                `${twenty} item(s) added`,
                                                ToastAndroid.SHORT,
                                                ToastAndroid.BOTTOM,
                                            )
                                        }}
                                        activeOpacity={0.7} style={styles.button}>
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', }}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.recShape}>
                                    <Image style={{ height: 100, width: 60 }} source={require('../../images/bottle.png')} />
                                </View>
                                <View>
                                    <Text style={styles.ltr}>10 Ltr</Text>
                                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginBottom: 10, justifyContent: 'space-between', borderRadius: 10, width: 110, marginVertical: 5 }}>
                                        <TouchableOpacity
                                            onPress={() => decrement('five')}
                                            activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#3cd2a5', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium', fontWeight: 'bold' }}>
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium' }}>
                                                {five}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => increment('five')}
                                            activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#3cd2a5', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium', fontWeight: 'bold' }}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            ToastAndroid.showWithGravity(
                                                `${five} item(s) added`,
                                                ToastAndroid.SHORT,
                                                ToastAndroid.BOTTOM,
                                            )
                                        }}
                                        activeOpacity={0.7} style={styles.button}>
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', }}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ alignSelf: 'center', marginVertical: 40, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.recShape}>
                                    <Image style={{ height: 100, width: 60 }} source={require('../../images/bottle.png')} />
                                </View>
                                <View>
                                    <Text style={styles.ltr}>5 Ltr</Text>
                                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginBottom: 10, justifyContent: 'space-between', borderRadius: 10, width: 110, marginVertical: 5 }}>
                                        <TouchableOpacity
                                            onPress={() => decrement('one')}
                                            activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#3cd2a5', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium', fontWeight: 'bold' }}>
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium' }}>
                                                {one}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => increment('one')}
                                            activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#3cd2a5', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium', fontWeight: 'bold' }}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            ToastAndroid.showWithGravity(
                                                `${one} item(s) added`,
                                                ToastAndroid.SHORT,
                                                ToastAndroid.BOTTOM,
                                            )
                                        }}
                                        activeOpacity={0.7} style={styles.button}>
                                        <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Medium', }}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => setModal(true)}
                                activeOpacity={0.7}
                                style={[styles.bottomBut, { borderColor: '#3cd2a5', borderWidth: 1, }]}>
                                <Text style={{ color: 'white', fontFamily: 'ChakraPetch-Bold', }}>
                                    Order Now
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={[styles.bottomBut, { backgroundColor: '#3cd2a5', marginBottom: 50 }]} >
                                <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Bold', }}>
                                    Order History
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View >
            </ScrollView >
        </MainLayout>

    )
}

export default HomePage

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cart: {
        marginHorizontal: 18
    },
    text: {
        fontFamily: 'ChakraPetch-SemiBold',
        color: 'white',
        fontSize: 18
    },
    contents: {
        flex: 1,
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
        marginHorizontal: 5
    },
    container: {
        marginHorizontal: 20,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#021d24',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        marginBottom: 10
    },
    searchIcon: {
        paddingLeft: 20,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        color: 'white',
        fontFamily: 'ChakraPetch-Regular',
    },
    recShape: {
        height: 130,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius: 20
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ltr: {
        color: 'white',
        fontFamily: 'ChakraPetch-SemiBold',
        fontSize: 24,
        // marginLeft: 5,
        // marginBottom: 10
    },
    bottomBut: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        alignSelf: 'center',
        paddingVertical: 18,
        borderRadius: 30,
        marginBottom: 20
    }
})