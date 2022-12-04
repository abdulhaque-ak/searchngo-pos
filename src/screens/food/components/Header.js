
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = (props) => {
    let count = props?.count || 0
    let navigation = props?.count || 0
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Food Order</Text>
            <View style={styles.iconView}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Icon name='notifications-outline' color={'white'} size={26} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('FoodCart')}
                    activeOpacity={0.7}>
                    <View style={styles.countView}>
                        <Text style={styles.count}>
                            {count}
                        </Text>
                    </View>
                    <Icon name='cart-outline' color={'white'} size={28} style={styles.cart} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <Icon name='person-circle-outline' color={'white'} size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        // backgroundColor: '#0e3d6b'
    },
    text: {
        fontFamily: 'ChakraPetch-SemiBold',
        color: 'white',
        fontSize: 18
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countView: {
        backgroundColor: '#3cd2a5',
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
    },
    cart: {
        marginHorizontal: 22
    }
})