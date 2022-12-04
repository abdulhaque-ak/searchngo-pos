import React, { FC, ReactElement } from 'react'
import { StyleSheet, Text, View, Linking, ScrollView, Dimensions, useWindowDimensions } from 'react-native'
// import Button from '@components/Button'
// import { fontBold, fontReg } from '@config/'
// import FastImage from 'react-native-fast-image'
import QRSanner from 'react-native-qrcode-scanner'

const scanned = (e) => {
    Linking.openURL(e.data)
        .catch(e => {
            console.log(e)
        })
}

const Scan = () => {
    const { height, width } = useWindowDimensions()

    const next = () => {
        // props.navigation.navigate('Percentage')
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, backgroundColor: 'white', height: height, width: width }}>
                <ScrollView contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                    <QRSanner
                        containerStyle={{ marginBottom: "2%", marginTop: 0 }}
                        onRead={scanned}
                        reactivate={true}
                        permissionDialogMessage='Need permission to access camera'
                        reactivateTimeout={10}
                        showMarker={true}
                        markerStyle={{ borderColor: '#3cd2a5', borderRadius: 10, height: 200, width: 200 }}
                        cameraStyle={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignSelf: 'center', justifyContent: 'center' }}
                    />
                    <Text style={{ color: 'white', position: 'absolute', fontSize: 20, textAlign: 'center', marginTop: 20, fontFamily: 'ChakraPetch-Medium' }}>Scan QR Code</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        alignItems: 'center',
        marginVertical: 60,
    },
    scan: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15
    },
    button: {
        paddingHorizontal: 50,
        marginVertical: 35
    }
})

export default Scan

