import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


const MainLayout = (props) => {

    const { height, width } = useWindowDimensions()

    return (
        <ImageBackground resizeMode='cover' style={[styles.back, { width: width, height: height }]} source={require('../images/cover.png')} >
            <LinearGradient
                colors={['rgba(50,70,80,0.999)', 'rgba(13,16,27,0.9)', 'rgba(13,16,27,0.9999)']}
                style={{ flex: 1 }}
                useAngle
                angle={180}
            >
                {props?.children}
            </LinearGradient>
        </ImageBackground >
    )
}

export default MainLayout

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    view: {
        flex: 1,
        backgroundColor: 'rgba(50,70,80,.9)'
    },
    back: {
        flex: 1,
    }
})