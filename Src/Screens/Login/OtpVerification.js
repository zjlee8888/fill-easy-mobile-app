import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Platform, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Icon } from 'react-native-elements';
import OTPTextView from 'react-native-otp-textinput';

//Component
import { Logo } from './Component/Logo'
import { TEXT } from '../../Component/Text'
import { BUTTON } from '../../Component/Button'

import { Textcolor, Buttoncolor, Bordercolor, Shadowcolor, Backgroundcolor } from '../../Utility/Colors'

const HIGHT = Dimensions.get('screen').height;

const OtpVerification = () => {
    const [success, setSuccess] = useState(false)

    return (
        <TouchableWithoutFeedback
            style={{ flex: 1, alignItems: "center", backgroundColor: Backgroundcolor.whiteback }}
            onPress={() => Keyboard.dismiss()}>
            <View style={{backgroundColor:Backgroundcolor.whiteback,flex:1}}>
                <View style={{ height:170, width: "100%",paddingBottom:10 }}>
                    <Logo />
                </View>
                <View style={{flex:1 ,  width: "100%", alignItems: "center", justifyContent: "space-evenly", backgroundColor: Backgroundcolor.whiteback }}>
                    <View style={{  alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <Image source={require("../../../assets/Image/v_backf.png")}
                            style={{
                                // width: "150%",
                                //height: "65%",
                                width: 603,
                                height: HIGHT < 600 ? 360 : 400,
                                resizeMode: "stretch", marginLeft: 60
                            }} />
                        {!success == false ?
                            <View style={{ position: "absolute", width: "100%", height: 300, justifyContent: "space-around", alignItems: "center" }}>
                                <View style={{ width: "80%" }}>
                                    <TEXT title="Please verify "
                                        size={27}
                                        color={Textcolor.whitetext}
                                        family="Roboto-Bold" />
                                   
                                    <Text style={{ fontSize: 27, color: Textcolor.whitetext,fontFamily:"Roboto-Bold" }}>your<Text style={{ color: "#2b299e" }}> Cell Number</Text></Text>
                                </View>
                                <View style={{ 
                                    width: "90%",
                                     backgroundColor: "#fafafa",
                                      padding: 20,
                                       borderRadius: 15,
                                        alignItems: "center", 
                                        flexDirection: "row", 
                                        flexWrap: "wrap" ,
                                        shadowOffset:{width:5 , height:3},
                                        shadowColor:"rgba(0,0,0,0.1607843137254902 )",
                                        shadowOpacity:0.9,
                                        shadowRadius:10.5
                                        
                                        }}>
                                    <Text style={{ fontSize: 17, lineHeight:22,textAlign: "center", color: "#1d1d1d",fontFamily:"Roboto-Regular" }}>Please enter the 4 digit verification
                                    Code sent to your cell number
                           <Text style={{fontFamily:"Roboto-Bold"}}> 852 1234 5678</Text> via SMS message or<TouchableOpacity style={{ marginTop: -4 }}>
                                            <Text style={{ fontSize: 15, color: "#fed303", fontFamily:"Roboto-Bold",textDecorationLine:"underline",}}> CHANGE</Text>
                                        </TouchableOpacity>
                                        <Text>  your number.</Text></Text>
                                </View>
                                <OTPTextView handleTextChange={(e) => { }}
                                    containerStyle={{ justifyContent: "space-between", width: "80%" }}
                                    textInputStyle={{
                                        width: 58,
                                        height: 58,
                                        borderRadius: 8,
                                        backgroundColor: "#ffffff",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    inputCount={4}
                                    inputCellLength={1}
                                    offTintColor={false}
                                    // inputType="numeric"
                                    tintColor="white"
                                    offTintColor="white"
                                    number={true}
                                />
                                <TouchableOpacity style={{ marginTop: 15 }}>
                                    <Text style={{ fontSize: 15, color: "#2b299e" ,fontFamily:"Poppins-Bold" , textDecorationLine:"underline"}}>Resend OTP</Text>
                                   

                                </TouchableOpacity>

                            </View>
                            :
                            <View style={{ position: "absolute", width: "100%", height: 300, justifyContent: "space-evenly", alignItems: "center" }}>
                                <Text style={{ fontSize: 36, color: "#2b299e",fontFamily:"Roboto-Bold",  width: "85%", textAlign: "center" }}>Your account
                            Has Been Verified Successfully</Text>


                            </View>
                        }
                    </View>
                    <TouchableOpacity
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            backgroundColor: "#2b299e",
                            marginTop: -30,
                            alignItems: "center",
                            justifyContent: "center",
                            //  position:"absolute",
                            // bottom:0,

                        }}>
                        <Icon name="arrowright"
                            type="antdesign"
                            color="#ffffff"
                            size={25} />
                    </TouchableOpacity>
                    {/* <Image source={require("../../../assets/Image/v_back.png")}
                    style={{ width: "130%", height: "45%", resizeMode: "stretch" ,marginLeft:75}} />
                <Image source={require("../../../assets/Image/v_back2.png")}
                    style={{ width: "170%", height: "20%", resizeMode: "stretch", alignSelf: "center", marginTop: -15,marginLeft:35 }} /> */}

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default OtpVerification;

