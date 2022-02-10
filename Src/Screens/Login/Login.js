import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity,SafeAreaView, Modal, ScrollView, TouchableWithoutFeedback,StatusBar } from 'react-native'
import OTPTextView from 'react-native-otp-textinput';

import { Background } from './Component/background'
import { Logo } from './Component/Logo'
import { Icon } from 'react-native-elements';
import { TEXT } from '../../Component/Text'
import { BUTTON } from '../../Component/Button'
import { Signin, Login, Signup } from './Component/SLS'

import { Textcolor, Buttoncolor, Bordercolor, Shadowcolor,Backgroundcolor } from '../../Utility/Colors'



const LoginScreen = () => {







   // const [type, setType] = useState(1)
  //  const [type, setType] = useState(2)
const [type, setType] = useState(3)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState()
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [code, setCode] = useState("")
    const [visible, setVisible] = useState(false)


    console.log("$$$$$", email)



    const MyStatusBar = ({ backgroundColor, ...props }) => (
        <View style={{}}>
            <SafeAreaView style={{ backgroundColor: Backgroundcolor.whiteback }}>
                <StatusBar translucent backgroundColor={Backgroundcolor.whiteback} {...props} />
            </SafeAreaView>
        </View>
    );

    const signin = () => {
        console.log("HEllo", signin)
    }

    const next = () => {
        console.log("HEllo", signin)
    }
    return (
        <View style={styles.container}>
             <MyStatusBar backgroundColor={Backgroundcolor.whiteback} barStyle="light-content" />
            <Background />


            <View style={styles.subcontainer}>
                <View style={{ height: "25%", width: "100%" ,justifyContent:"flex-end"}}>
                    <Logo />
                </View>

                <View style={styles.bottomview}>
                    <View style={styles.cord}>
                        <View style={{ width: "100%", flex: 1 }}>
                            {type == 1 &&
                                <Signin
                                    email={email}
                                    setemail={setEmail}
                                    password={password}
                                    setpassword={setPassword}
                                    signin={signin}
                                />}

                            {type == 2 &&
                                <Login
                                    email={email}
                                    setemail={setEmail}
                                    number={number}
                                    setnumber={setNumber}
                                    signin={next}
                                />}

                            {type == 3 &&
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <TEXT title="SignUp"
                                        size={32}
                                        color={Textcolor.blacktext}
                                        textAlign="center"
                                        family="Roboto-Bold"
                                    />
                                    <ScrollView style={{ maxHeight: "100%", marginTop: 15, width: "100%" }} showsVerticalScrollIndicator={true} >
                                        <Signup
                                            fname={fname}
                                            setfname={setFname}
                                            lname={lname}
                                            setlname={setLname}
                                            email={email}
                                            setemail={setEmail}
                                            password={password}
                                            setpassword={setPassword}
                                            number={number}
                                            setnumber={setNumber}
                                            code={code}
                                            setcode={setCode}
                                            signin={signin}
                                        />

                                    </ScrollView>

                                    <BUTTON width="80%"
                                        height={56}
                                        background={Buttoncolor.yellowbutton}
                                        bwidth={1}
                                        bcolor={Bordercolor.grayborder}
                                        bradius={25}
                                        shight={3}
                                        swidth={0}
                                        scolor={Shadowcolor.shadow1}
                                        sopacity={1}
                                        elevation={5}
                                        title="SIGN IN"
                                        size={17}
                                        family="Roboto-Bold"
                                        color={Textcolor.whitetext}
                                        weight="bold"
                                        press={signin}
                                    />
                                </View>
                            }
                        </View>

                        {type == 3 ? null :
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                                {type == 2 ?
                                    <TouchableOpacity onPress={() => console.log("pressed")}>
                                        <TEXT title="LOGN WITH EMAIL"
                                            size={14}
                                            color={Textcolor.bluetext}
                                            family="Roboto-Regular"
                                        />
                                    </TouchableOpacity>
                                    :
                                    <>
                                        <TouchableOpacity>
                                            <TEXT title="Forgot  Password  "
                                                size={14}
                                                color={Textcolor.bluetext}
                                                family="Roboto-Regular"
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.text}>|</Text>
                                        <TouchableOpacity onPress={() => setVisible(true)}>
                                            <TEXT title="OTP LOGIN"
                                                size={14}
                                                color={Textcolor.bluetext}
                                                style={{ marginLeft: 15 }}
                                                family="Roboto-Regular"
                                            />
                                        </TouchableOpacity>
                                    </>
                                }

                            </View>
                        }

                    </View>
                </View>

                <View style={{ height: "20%", width: "100%", alignItems: "center", paddingTop: 10, }}>
                    {type == 3 &&
                        <TouchableOpacity style={{ marginBottom: 15 }}>
                            <TEXT title="Already have an account?"
                                size={16}
                                color={Textcolor.bluetext}
                                family="Montserrat-Medium"
                            />
                        </TouchableOpacity>
                    }
                    <BUTTON width={249}
                        height={58}
                        background={Buttoncolor.whitebutton}
                        bwidth={2}
                        bcolor={Bordercolor.blueborder}
                        bradius={50}
                        title="SIGNUP"
                        family="Roboto-Bold"
                        size={17}
                        color={Textcolor.bluetext}
                        press={signin}
                    />
                </View>
            </View>

            {visible &&
                <TouchableOpacity
                    style={styles.modalcontainer}
                    onPress={() => setVisible(false)}
                >

                    <Modal
                        visible={visible}
                        transparent={true}
                    >
                        <TouchableOpacity
                            style={styles.modal}
                            onPress={() => setVisible(false)}>
                            <TouchableWithoutFeedback style={styles.modalview} onPress={() => setVisible(true)}>
                                <View style={styles.modalview}>
                                    <View style={{ flexDirection: "row" ,marginBottom:10}}>
                                        <View style={styles.round}>

                                            <Image source={require("../../../assets/Image/mobile.png")}
                                                style={{ width: 35, height: 35, resizeMode: "contain" }} />

                                        </View>
                                        <View style={styles.msgview}>
                                            <Image source={require("../../../assets/Image/message.png")}
                                                style={{ width: 26, height: 23 }} />
                                        </View>
                                    </View>

                                    <TEXT title="Enter 4 Digits code"
                                        size={12}
                                        color={Textcolor.darkgray}
                                        family="Roboto-Bold"
                                    />
                                    <OTPTextView handleTextChange={(e) => { }}
                                        containerStyle={{ justifyContent: "space-between", width: "80%",marginTop:10 }}
                                        textInputStyle={{
                                            width: 45,
                                            height: 45,
                                            borderRadius: 8,
                                            backgroundColor: "#ffffff",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            shadowOffset: { width: 0, height: 3 },
                                            shadowColor: "rgba(0,0,0,0.1607843137254902 )",
                                            shadowRadius: 3,
                                            shadowOpacity: 1,
                                            elevation: 15,
                                            fontSize: 20
                                        }}
                                        inputCount={4}
                                        inputCellLength={1}
                                        offTintColor={false}
                                        // inputType="numeric"
                                        tintColor="white"
                                        offTintColor="white"
                                        number={true}
                                    />

                                    <View style={{ 
                                        flexDirection: "row",
                                         width: "70%", 
                                         padding: 1, 
                                         marginTop: 15 ,
                                         justifyContent:"center"}}>
                                        <TEXT title="3.45"
                                            size={12}
                                            color={Textcolor.bluetext}
                                            family="Poppins-Regular"
                                        />
                                        <TouchableOpacity style={{ marginLeft: 35 }}>
                                            <TEXT title="Resend >"
                                                size={13}
                                                color={Textcolor.bluetext}
                                                weight={"600"}
                                                family="Roboto-Bold"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                        </TouchableOpacity>
                    </Modal>
                </TouchableOpacity>
            }

        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#ffffff" },
    subcontainer: { flex: 1, position: "absolute", width: "100%", height: "100%" },
    bottomview: { height: "60%", alignItems: "center", justifyContent: "center", },
    cord: {
        width: "90%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingVertical: "5%",
        borderRadius: 16,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOpacity: 1,
        elevation: 5,
        minHeight: "50%"
    },
    heading: {
        fontSize: 32,
        color: "#000000",
        width: "100%",
    },

    button:
    {
        width: "80%",
        height: 56,
        borderWidth: 1,
        borderColor: "#ebebeb",
        backgroundColor: "#fed200",
        borderRadius: 25,
        alignItems: "center",
        marginTop: 15,
        justifyContent: "center",
        shadowOffset: { width: 0, height: 3 },
        shadowColor: "rgba(0,0,0,0.1607843137254902 )",
        shadowOpacity: 1,
        elevation: 5,

    },
    cardbuttontext: { fontSize: 17, color: "#ffffff", fontWeight: "bold" },
    text: { fontSize: 14, color: "#2b299e" },
    bottombutton: {
        width: 249,
        height: 58,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#2b299e",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center"
    },
    //Modal
    modalcontainer: { backgroundColor: "rgba(244,244,244,0.85)", flex: 1, width: "100%", height: "100%", position: "absolute", alignItems: "center", justifyContent: "center" },
    modal: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", },
    modalview: { width: "70%", height: 325, backgroundColor: "#ffffff", borderRadius: 20, alignItems: "center", justifyContent: "center" },
    round: { width: 84, height: 84, borderRadius: 75, borderWidth: 8, borderColor: "#f0f0f0", alignItems: "center", justifyContent: "center" },
    msgview: { position: "absolute", marginTop: -15, marginLeft: 50 },
    
})

