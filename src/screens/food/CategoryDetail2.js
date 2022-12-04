import React, { useEffect } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { up } from '../../common';
import Header from './components/Header';
import MainLayout from '../../components/MainLayout';

const CategoryDetail2 = (props) => {
    let datas = props?.route?.params
    const [value, setValue] = React.useState([0, 0, 0, 0, 0])
    const [add, setAdd] = React.useState([false, false, false, false, false])
    const [count, setCount] = React.useState(0)

    const increment = (index) => {
        setValue(value => {
            const newVals = [...value];
            const val = newVals[index] + 1
            newVals[index] = val
            return newVals
        })
    }

    const decrement = (index) => {
        value[index] != 1 && setValue(value => {
            const newVals = [...value];
            const val = newVals[index] - 1
            newVals[index] = val
            return newVals
        })
        if (value[index] == 1) {
            setAdd(prevs => {
                const newVals = [...prevs];
                const val = !newVals[index]
                newVals[index] = val
                return newVals
            }),
                setValue(value => {
                    const newVals = [...value];
                    const val = newVals[index] - 1
                    newVals[index] = val
                    return newVals
                })
        }
    }

    const renderDatas = ({ item, index }) => {
        let price = parseInt(item.price) + 50
        return (
            <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => props.navigation.navigate('DetailPage', item)}
                >
                    <View style={{ backgroundColor: '#3cd2a5', borderRadius: 5, padding: 30 }}>
                        <Image resizeMode='cover' source={item.image} style={{ height: 130, width: 100 }} />
                        <View style={{ backgroundColor: 'black', paddingHorizontal: 5, paddingVertical: 2, position: 'absolute', right: 4, top: 4 }}>
                            <Text style={{ color: 'white', fontFamily: 'ChakraPetch-Regular' }}>50% Off</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ marginLeft: 10, width: '70%', justifyContent: 'space-between' }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ width: '75%', fontSize: 20, fontFamily: 'ChakraPetch-SemiBold', color: 'white' }} numberOfLines={2}>{item.name}</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'ChakraPetch-Regular' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'ChakraPetch-Regular', textDecorationLine: 'line-through', color: '#b8b8b8' }}>
                                {'\u20B9'}{price}
                            </Text>
                            <Text style={{ fontSize: 18, fontFamily: 'ChakraPetch-Bold', textDecorationLine: 'none', color: 'white' }}>
                                {' '}Rs.{item.price}
                            </Text>
                        </Text>
                    </View>
                    {add[index] != true &&
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                setAdd(prevs => {
                                    const newVals = [...prevs];
                                    const val = !newVals[index]
                                    newVals[index] = val
                                    return newVals
                                }),
                                    increment(index)
                            }}
                            style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10, width: 110, paddingVertical: 12, paddingHorizontal: 12 }}>
                            <Text style={{ color: 'black', fontFamily: 'ChakraPetch-Bold' }}>Add</Text>
                        </TouchableOpacity>
                    }
                    {add[index] != false &&
                        <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', borderRadius: 10, width: 110 }}>
                            <TouchableOpacity
                                onPress={() => decrement(index)}
                                activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 12, backgroundColor: '#3cd2a5', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'ChakraPetch-Medium', fontWeight: 'bold' }}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#143664', fontSize: 18, fontFamily: 'ChakraPetch-Medium' }}>
                                    {value[index]}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => increment(index)}
                                activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 12, backgroundColor: '#3cd2a5', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                                <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Montserrat-Medium', fontWeight: 'bold' }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        )

    }

    useEffect(() => {
        let cartCount = Object.values(value).reduce((prev, curr) => {
            return prev += curr > 0 ? 1 : 0
        }, 0)
        setCount(cartCount)
    }, [value])

    return (
        <MainLayout>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Header count={count} navigation={props.navigation} />
                    <View style={styles.contents}>
                        <View style={styles.container}>
                            <View style={[styles.categText, { marginTop: 10 }]}>
                                <Text style={styles.catText}>{datas.name}</Text>
                            </View>
                            <FlatList
                                data={up || []}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={(item, index) => renderDatas(item, index)}
                                extraData={value}
                            />
                        </View>
                    </View>
                </View >
            </ScrollView >
        </MainLayout>
    )
}

export default CategoryDetail2

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cart: {
        marginHorizontal: 22
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
    itemText: {
        fontFamily: 'ChakraPetch-Medium',
        color: '#04564B',
        fontSize: 15
    },
    rightSection: {
        width: '60%',
        height: '100%'
    },
    categText: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    catText: {
        fontFamily: 'ChakraPetch-Bold',
        fontSize: 22,
        color: 'white',
    },
    countView: {
        backgroundColor: '#08C6AC',
        zIndex: 999,
        height: 21,
        width: 21,
        position: 'absolute',
        top: -6,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    count: {
        fontFamily: 'ChakraPetch-Bold',
        fontSize: 12,
        color: 'black'
    }
})