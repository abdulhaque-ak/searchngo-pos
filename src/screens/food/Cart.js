import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MainLayout from '../../components/MainLayout'
import Header from './components/Header'

const Cart = (props) => {
    const [like, setLike] = React.useState(false)
    let item = props.route.params
    // let price = parseInt(item.price) + 50

    return (
        <MainLayout>

            <View style={styles.main}>
                <Header navigation={props.navigation} />
                <View style={styles.layout}>
                    <Icon name='cart-minus' size={50} color='white' style={{ marginBottom: 20 }} />
                    <Text style={styles.id}>OOPS!</Text>
                    <Text style={styles.id}>Your cart is empty</Text>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('HomePage')}
                    activeOpacity={0.7}
                    style={styles.sendCode}>
                    <Text style={styles.sndText}>HOME</Text>
                </TouchableOpacity>
            </View >
        </MainLayout>
    )
}

export default Cart

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    layout: {
        flex: 0.5,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    id: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        alignSelf: 'center'
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#3cd2a5',
        paddingVertical: 18,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10
    },
    sndText: {
        color: 'black',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    }
})