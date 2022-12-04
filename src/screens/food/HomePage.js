import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Header from './components/Header';
import MainLayout from '../../components/MainLayout';

const data = [
    {
        id: 1,
        name: 'First time User Pack',
        offer: '50%',
    },
    {
        id: 2,
        name: 'Food Pack 2',
        offer: '45%',
    },
    {
        id: 3,
        name: 'Food Pack 3',
        offer: '50%',
    }
]

const HomePage = (props) => {

    const { width } = useWindowDimensions()

    const [type, setType] = React.useState('')

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselView}>
                <Image style={{ width: 100, height: 100 }} source={require('../../images/foodimg.png')} />
                <View style={styles.rightSection}>
                    <Text style={[styles.itemText, { marginTop: 5 }]}>Enjoy {item.offer} Off</Text>
                    <Text style={[styles.itemText, { fontFamily: 'ChakraPetch-SemiBold', fontSize: 18 }]} numberOfLines={2}>{item.name}</Text>
                    <Text style={[styles.itemText, { position: 'absolute', bottom: 0 }]}>*Order on above 150</Text>
                </View>
            </View>
        )
    }

    return (
        <MainLayout>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Header navigation={props.navigation} />
                    <View style={styles.contents}>
                        <View style={styles.container}>

                            <View style={[styles.categText, { marginTop: 10 }]}>
                                <Text style={styles.catText}>Select Category</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        setType('vg')
                                    }}
                                    style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ height: 20, width: 20, borderRadius: 20, borderWidth: 1, borderColor: '#807d7d', backgroundColor: type == 'vg' ? '#ff1b62' : 'white' }} />
                                    <Text style={styles.cats}>Veg</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        setType('nvg')
                                    }}
                                    style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                                    <View style={{ height: 20, width: 20, borderRadius: 20, borderWidth: 1, borderColor: '#807d7d', backgroundColor: type == 'nvg' ? '#ff1b62' : 'white' }} />
                                    <Text style={styles.cats}>Non-Veg</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        setType('snvg')
                                    }}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ height: 20, width: 20, borderRadius: 20, borderWidth: 1, borderColor: '#807d7d', backgroundColor: type == 'snvg' ? '#ff1b62' : 'white' }} />
                                    <Text style={styles.cats}>Semi-non-Veg</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.categText, { marginTop: 20, marginBottom: 10 }]}>
                                <Text style={styles.catText}>What would you like to have?</Text>
                            </View>
                            <View style={{ marginHorizontal: 10, paddingBottom: 20 }}>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "North Indian" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#3cd2a5' }}>
                                            <Image source={require('../../images/north.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>North Indian</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "South Indian" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#3cd2a5' }}>
                                            <Image source={require('../../images/south.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>South Indian</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "Arabian" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#3cd2a5' }}>
                                            <Image source={require('../../images/arabic.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>Arabian</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "Turkish" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#3cd2a5' }}>
                                            <Image source={require('../../images/kebab.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>Turkish</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "Chinese" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#3cd2a5' }}>
                                            <Image source={require('../../images/chinese.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>Chinese</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "Russian" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#3cd2a5' }}>
                                            <Image source={require('../../images/russian.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>Russian</Text>
                                    </View>
                                </View>
                            </View>
                            <Carousel
                                data={data}
                                inactiveSlideOpacity={0.4}
                                autoplay={true}
                                removeClippedSubviews={false}
                                autoplayDelay={300}
                                loop={true}
                                style={{ backgroundColor: 'red' }}
                                sliderWidth={width}
                                itemWidth={width - 20}
                                renderItem={renderItem}
                                containerCustomStyle={{ marginTop: 0, marginBottom: 10, alignSelf: 'center' }}
                                enableMomentum={true}
                                decelerationRate={'fast'}
                            />
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
        paddingVertical: 20
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center'
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
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
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
        color: '#04564B',
        fontFamily: 'ChakraPetch-Regular',
    },
    itemText: {
        fontFamily: 'ChakraPetch-Medium',
        color: '#04564B',
        fontSize: 15
    },
    carouselView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    rightSection: {
        width: '60%',
        height: '100%'
    },
    categText: {
        marginHorizontal: 10,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    catText: {
        fontFamily: 'ChakraPetch-Bold',
        fontSize: 22,
        color: 'white',
    },
    cAll: {
        fontFamily: 'ChakraPetch-Medium',
        fontSize: 14,
        color: '#04564B'
    },
    recShape: {
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cats: {
        fontFamily: 'ChakraPetch-Medium',
        fontSize: 18,
        color: 'white',
        marginLeft: 10
    },
    foodName: {
        color: 'white',
        fontFamily: 'ChakraPetch-Medium',
        textAlign: 'center',
        marginTop: 5
    }
})