import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Keyboard, Platform, SafeAreaView, KeyboardAvoidingView, Modal, Alert, ScrollView, TouchableWithoutFeedback, StatusBar, TouchableWithoutFeedbackBase } from 'react-native'
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation } from '@react-navigation/native';
import Elevations from 'react-native-elevation'

import { Background } from './Component/background'
import { Logo } from './Component/Logo'
import { Icon } from 'react-native-elements';
import { TEXT } from '../../Component/Text'
import { BUTTON } from '../../Component/Button'
import { Signin, Login, Signup } from './Component/SLS'

import { Textcolor, Buttoncolor, Bordercolor, Shadowcolor, Backgroundcolor } from '../../Utility/Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen';



const LoginScreen = () => {
    const navigation = useNavigation();

    const [login, setLogin] = useState(true)
    const [showpass, setShowpass] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [remail, setRemail] = useState("")
    const [rpass, setRpassword] = useState("")


    console.log("Email", email)

    const MyStatusBar = ({ backgroundColor, ...props }) => (
        <View style={{}}>
            <SafeAreaView style={{ backgroundColor: Backgroundcolor.whiteback }}>
                <StatusBar translucent backgroundColor={Backgroundcolor.whiteback} {...props} />
            </SafeAreaView>
        </View>
    );

    const signin = () => {
        navigation.navigate("TabScreen")
    }

    const signup = () => {
        setLogin(true)
    }

    console.log(login)

    // useEffect(() =>{

    // },[])

    const data = [
        {
            name: "data1",
            subdata: [
                {
                    subname: "sub1",
                },
                {
                    subname: "sub2",
                },
            ]
        },
        {
            name: "data2",
            subdata: [
                {
                    subname: "sub12",
                },
                {
                    subname: "sub22",
                },
            ]
        },
    ]

    const [open , setOpen] = useState(false)
    return (
       
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>

            <View style={{ flex: 1, alignItems: "center", backgroundColor: Backgroundcolor.whiteback, paddingHorizontal: "10%" }}>


                <View style={{
                    flex: 1,
                    marginTop: "15%",
                    width: "100%",
                    height: "100%",
                    justifyContent:"space-around"

                }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <View style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            backgroundColor: "white",
                            shadowOffset: { width: 0, height: 3 },
                            shadowRadius: 15,
                            shadowOpacity: 1,
                            shadowColor:Platform.OS === 'android' ? "#fed303" : "rgba(242, 147, 0, 0.15)",
                           // shadowColor: "rgba(242, 147, 0, 0.15)",
                            elevation:25
                        }}>
                            <Image source={require("../../../assets/Image/logo2.png")}
                                style={{
                                    width: 100,
                                    height: 100,
                                }} />
                        </View>

                        <View style={{ width: 160, paddingLeft: "10%" }}>
                            <View style={{ height: 30, width: 30, borderRadius: 40 / 2, backgroundColor: "rgba(254, 210, 0, 0.1)", marginLeft: 110 }}></View>
                            <View style={{ height: 40, width: 40, borderRadius: 50 / 2, backgroundColor: "rgba(43, 41, 158, 0.1)", marginLeft: 50, marginTop: 15 }}></View>
                            <View style={{ height: 40, width: 40, borderRadius: 50 / 2, backgroundColor: "rgba(29, 29, 29, 0.1)", marginLeft: 145, marginTop: -25 }}></View>
                        </View>



                    </View>

                    <ScrollView scrollEnabled={login ? false : true} style={{}}>
                        {login ?
                            <Signin email={email}
                                password={password}
                                showpass={showpass}
                                setemail={setEmail}
                                setpass={setPassword}
                                setshow={setShowpass}
                                signin={signin} />
                            :
                            <Signup email={remail}
                                password={rpass}
                                usename={username}
                                showpass={showpass}
                                setuser={setUsername}
                                setemail={setRemail}
                                setpass={setRpassword}
                                setshow={setShowpass}
                                signup={signup} />
                        }


                    <View style={{ width: "100%", marginTop: "10%", alignItems: "center", alignSelf: "center" }}>

                        <View style={{ width: "105%", alignItems: "center" }}>
                            <View style={{ height: 1, width: "100%", backgroundColor: "#7070702C", }}></View>
                            <View style={{ position: "absolute", backgroundColor: "white", paddingHorizontal: 10, marginTop: -8 }}>
                                <TEXT title="Or Log In Using"
                                    color="#3C3C4399"
                                    size={12} />
                            </View>
                        </View>


                        <View style={{ flexDirection: "row", width: "100%", marginTop: "10%", justifyContent: "space-around" }}>
                            <TouchableOpacity style={{
                                width: "48%",
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "#4CAE72",
                                height: 54,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image source={require("../../../assets/Image/IamSmart_logo.png")}
                                    style={{ width: 89, height: 33 }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                width: "48%",
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "#707070",
                                height: 54,
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Image/google.png')}
                                    style={{ width: 18, height: 18 }} />
                                <TEXT title="Google"
                                    size={14}
                                    color="#3C3C4399"
                                    style={{ marginLeft: 5 }} />
                            </TouchableOpacity>


                        </View>
                        <View style={{ flexDirection: "row", marginTop: "10%" }}>
                            <TEXT title={login ? "New to FillEasy? " : "Already a member? "}
                                size={16}
                                color="#000000" />
                            {login ? 
                            <TouchableOpacity onPress={() =>setLogin(false)}>
                                <TEXT title= "Sign Up"
                                    color="#2B299E"
                                    weight={"bold"}
                                    size={16} />
                            </TouchableOpacity>
                            : 
                            <TouchableOpacity onPress={() =>setLogin(true)}>
                                <TEXT title= "Log In"
                                    color="#2B299E"
                                    weight={"bold"}
                                    size={16} />
                            </TouchableOpacity>
                            }
                        </View>
                    </View>
                    </ScrollView>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    textview: {
        width: "100%",
        height: 66,
        borderRadius: 10,
        backgroundColor: Backgroundcolor.dark1gray,
        alignItems: "center",
        flexDirection: "row"
    }

})

