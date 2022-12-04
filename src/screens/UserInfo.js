import React, { useEffect } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput, Alert, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainLayout from '../components/MainLayout';
import { launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const UserInfo = (props) => {

    const [phone, setPhone] = React.useState('')
    const [calendar, setCalendar] = React.useState(false)
    const [markedDates, setMarkedDates] = React.useState({})
    const [date, setDate] = React.useState('')

    const getData = async () => {
        let uid = await AsyncStorage.getItem('UID')
        setPhone(uid)
    }

    useEffect(() => {
        getData()
    }, [])

    const chooseFile = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchCamera(options, (res) => {
            if (res.didCancel != true) {
                if (res?.assets[0]?.fileSize > 1000000) {
                    Alert.alert("Maximum size of Logo is 1MB")
                    return
                } else {
                    Alert.alert("Photo is uploaded")
                }
                // setImage(res.uri)
                // setImgName(res.fileName)
            }
        })
    }

    const onDayPress = (day) => {
        console.log('day', day);
        let markedDates = {}
        markedDates[day.dateString] = { startingDay: true, selected: true, selectedColor: '#3cd2a5' };
        setMarkedDates(markedDates)
    }

    return (
        <MainLayout>
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../images/sgn.png')} />
            </View>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.phoneNo}>Fullname</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Profile Photo</Text>
                        <TouchableOpacity onPress={chooseFile} activeOpacity={0.7} style={[styles.input, styles.dob]}>
                            <Text style={{ color: 'white', fontFamily: 'ChakraPetch-Regular' }}>Choose File</Text>
                            <Icon name='caret-down-circle' color='#3cd2a5' size={25} />
                        </TouchableOpacity>
                        <Text style={styles.phoneNo}>Nationality</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>DOB</Text>
                        <TouchableOpacity onPress={() => setCalendar(prev => !prev)}
                            activeOpacity={0.7} style={[styles.input, styles.dob]}>
                            <Text style={{ color: 'white', fontFamily: 'ChakraPetch-Regular' }}>Choose DOB</Text>
                            <Icon name={calendar ? 'caret-up-circle' : 'caret-down-circle'} color='#3cd2a5' size={25} />
                        </TouchableOpacity>
                        {calendar &&
                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                                <TextInput keyboardType='number-pad' style={styles.dobFields} placeholder='Day' placeholderTextColor={'white'} maxLength={2} />
                                <TextInput
                                    keyboardType='number-pad'
                                    style={[styles.dobFields, { marginHorizontal: 10 }]}
                                    placeholder='Month'
                                    placeholderTextColor={'white'} maxLength={2}
                                />
                                <TextInput keyboardType='number-pad' style={styles.dobFields} placeholder='Year' placeholderTextColor={'white'} maxLength={4} />
                            </View>
                        }
                        <Text style={styles.phoneNo}>Phone Number</Text>
                        <TextInput style={styles.input} keyboardType='number-pad' />
                        <Text style={styles.phoneNo}>Email</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Passport Number</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Passport Expiry Date</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Document Photo Scanner</Text>
                        <TouchableOpacity onPress={chooseFile} activeOpacity={0.7} style={[styles.input, styles.dob]}>
                            <Text style={{ color: 'white', fontFamily: 'ChakraPetch-Regular' }}>Choose File</Text>
                            <Icon name='caret-down-circle' color='#3cd2a5' size={25} />
                        </TouchableOpacity>
                        <Text style={styles.phoneNo}>EID Number</Text>
                        <TextInput style={styles.input} keyboardType='number-pad' />
                        <Text style={styles.phoneNo}>EID Expiry Date</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Document Photo Scanner</Text>
                        <TouchableOpacity onPress={chooseFile} activeOpacity={0.7} style={[styles.input, styles.dob]}>
                            <Text style={{ color: 'white', fontFamily: 'ChakraPetch-Regular' }}>Choose File</Text>
                            <Icon name='caret-down-circle' color='#3cd2a5' size={25} />
                        </TouchableOpacity>
                        <Text style={styles.phoneNo}>Company Name</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Building Name</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Floor Number</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Room Number</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.phoneNo}>Payment Day</Text>
                        <TextInput style={styles.input} keyboardType="number-pad" />
                        <Text style={styles.phoneNo}>Salary Amount</Text>
                        <TextInput style={styles.input} keyboardType="number-pad" />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('HomePage', phone)}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </MainLayout>
    )
}

export default UserInfo

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    scroll: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    secondView: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 30,
        marginHorizontal: 5,
    },
    container: {
        width: Dimensions.get('window').width - 30,
    },
    continue: {
        fontSize: 15,
        fontFamily: 'ChakraPetch-Regular',
        color: 'rgba(255, 255, 255, 0.75)',
        marginVertical: 18,
        letterSpacing: 1
    },
    signup: {
        textDecorationLine: 'underline',
        color: '#3cd2a5',
        fontFamily: 'ChakraPetch-Bold',
        letterSpacing: 1
    },
    phone: {
        borderRadius: 30,
        backgroundColor: '#94989c',
        paddingLeft: 20,
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 14
    },
    logo: {
        height: 100,
        width: 125,
        marginTop: 20,
    },
    sendCode: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3cd2a5',
        paddingVertical: 18,
        marginTop: 30,
        alignItems: 'center',
    },
    goBack: {
        borderRadius: 30,
        backgroundColor: 'white',
        paddingVertical: 16,
        alignItems: 'center',
        borderColor: '#1AFF9B',
        borderWidth: 2
    },
    sndText: {
        color: '#3cd2a5',
        fontFamily: 'ChakraPetch-Bold',
        fontSize: 17
    },
    backText: {
        color: '#0e3d6b',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
    phoneNo: {
        fontFamily: 'ChakraPetch-Regular',
        marginBottom: 4,
        marginLeft: 3,
        color: 'rgba(255, 255, 255, 0.75)',
        letterSpacing: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#a1a6a3',
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
        color: 'white',
        fontFamily: 'ChakraPetch-Regular',
        backgroundColor: 'rgba(255,255,255, 0.1)',
        letterSpacing: 1
    },
    dob: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10
    },
    dobFields: {
        width: '20%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#3cd2a5',
        paddingLeft: 10,
        fontFamily: 'ChakraPetch-Regular',
        color: 'white'
    }
})