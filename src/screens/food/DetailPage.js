import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MainLayout from '../../components/MainLayout'
import Header from './components/Header'

const DetailPage = (props) => {
    const [like, setLike] = React.useState(false)
    let item = props.route.params
    let price = parseInt(item.price) + 50

    return (
        <MainLayout>

            <View style={styles.main}>
                <Header navigation={props.navigation} />
                <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.offerView}>
                            <Text style={styles.offer}>50%{"\n"}Off</Text>
                        </View>
                        <Image source={require('../../images/hfood.png')} />
                        <Text style={styles.prodName} numberOfLines={2}>{item.name}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                        <Text style={{ color: 'white', fontFamily: 'ChakraPetch-Regular', lineHeight: 27 }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages,
                        </Text>
                    </View>
                    <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, marginHorizontal: 5 }}>
                        <View
                            style={{
                                alignSelf: 'center',
                                width: '50%',
                                borderRadius: 10,
                                flexDirection: 'row',
                                marginTop: 30,
                                height: 40
                            }}>
                            <View style={{ flex: 1, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={{ height: 40, width: 40, backgroundColor: '#3cd2a5', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'black', fontSize: 28 }}>-</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ height: 38, width: 38, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'ChakraPetch-Bold', fontSize: 15, color: 'black' }}>
                                        0
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center' }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={{ height: 40, width: 40, backgroundColor: '#3cd2a5', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'black', fontSize: 28 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                backgroundColor: 'white',
                                alignSelf: 'center',
                                width: '35%',
                                paddingVertical: 15,
                                marginVertical: 30,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text style={{ color: 'black', fontFamily: 'ChakraPetch-SemiBold', fontSize: 16 }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View >
        </MainLayout>
    )
}

export default DetailPage

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    layout: {
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        // backgroundColor: 'white',
        flex: 1,
    },
    container: {
        marginHorizontal: 20,
        marginBottom: 210,
    },
    prodName: {
        alignSelf: 'center',
        marginVertical: 15,
        color: 'white',
        fontSize: 20,
        fontFamily: 'ChakraPetch-Medium',
        textAlign: 'center'
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        alignSelf: 'center',
    },
    buttView: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    offerView: {
        backgroundColor: '#ff1b62',
        position: 'absolute',
        right: 10,
        top: 10,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    offer: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'ChakraPetch-Bold'
    }
})