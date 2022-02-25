import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Icon } from 'react-native-elements';

//component
import { TEXT } from '../../../Component/Text'
import { BUTTON } from '../../../Component/Button'


//Utility
import { Textcolor, Buttoncolor, Bordercolor, Shadowcolor, Backgroundcolor } from '../../../Utility/Colors'

export const Signin = (props) => {
    const { email, password, showpass } = props

    return (
        <View style={{ width: "100%", minHeight: "50%", justifyContent: "space-between", paddingTop: "10%" }}>
            <TEXT title="Hey, Welcome Back!"
                weight="bold"
                size={23}
                color={Textcolor.blacktext}
            />

            <View style={{ ...styles.textview, marginTop: 20 }}>
                <View style={{ width: "20%" }}>
                    <Icon name="email"
                        type="zocial"
                        color="#3C3C4399"
                        size={20} />
                </View>
                <TextInput placeholder="Email......"
                 placeholderTextColor="rgba(60, 60, 67,0.3)"
                    value={email}
                    onChangeText={value => props.setemail(value)}
                    style={{ color: "rgba(60, 60, 67, 1)", fontSize: 15 }}

                />
            </View>

            <View style={{ ...styles.textview, width: "100%", justifyContent: "space-evenly", marginTop: "5%" }}>
                <View style={{ width: "20%" }}>
                    <Icon name="shield-lock"
                        type="material-community"
                        color="#3C3C4399"
                        size={20} />
                </View>

                <TextInput placeholder="Password......"
                        placeholderTextColor="rgba(60, 60, 67,0.3)"
                    value={password}
                    onChangeText={value => props.setpass(value)}
                    style={{ color: "rgba(60, 60, 67, 1)", fontSize: 15, width: "65%", }}
                    textContentType="password"
                    secureTextEntry={showpass ? false : true}
                />
                <TouchableOpacity style={{ marginRight: 0, width: "15%" }} onPress={() => props.setshow(!showpass)}>
                    <Icon name={showpass ? "ios-eye" : "ios-eye-off"}
                        type="ionicon"
                        color="rgba(60, 60, 67, 0.3)"
                        size={15} />
                </TouchableOpacity>
            </View>

            <View style={{ width: "100%", justifyContent: "flex-end", alignItems: "flex-end", marginTop:"5%"}}>
                <TouchableOpacity>
                    <TEXT title="Forgot Password?"
                        color="#3C3C4399"
                        size={13}
                        weight={"500"} />
                </TouchableOpacity>
            </View>

            <BUTTON width="100%"
                height={50}
                background={Buttoncolor.yellowbutton}
                bradius={10}
                title="Continue"
                size={17}
                weight={"800"}
                style={{ marginTop:"5%"}}
                color={Textcolor.whitetext}
                press={props.signin}
            />

        </View>
    );
}



export const Signup = (props) => {
    const { email, password, showpass, usename } = props
    return (
        <View style={{ width: "100%", minHeight: "55%", justifyContent: "space-around", paddingTop: "10%" }}>
            <TEXT title="Create an Account"
                weight="bold"
                size={23}
                color={Textcolor.blacktext}
            />

            <View style={{ ...styles.textview, marginTop: "5%" }}>
                <View style={{ width: "20%" }}>
                    <Icon name="account"
                        type="material-community"
                        color="#3C3C4399"
                        size={20} />
                </View>
                <TextInput placeholder="Name ......"
                    value={usename}
                    onChangeText={value => props.setuser(value)}
                    style={{ color: "rgba(60, 60, 67, 1)", fontSize: 15 }}

                />
            </View>

            <View style={{ ...styles.textview, marginTop: "5%" }}>
                <View style={{ width: "20%" }}>
                    <Icon name="email"
                        type="zocial"
                        color="#3C3C4399"
                        size={20} />
                </View>
                <TextInput placeholder="Email......"
                placeholderTextColor="rgba(60, 60, 67,0.3)"
                    value={email}
                    onChangeText={value => props.setemail(value)}
                    style={{ color: "rgba(60, 60, 67, 1)", fontSize: 15 }}

                />
            </View>

            <View style={{ ...styles.textview, width: "100%", justifyContent: "space-evenly", marginTop: "5%" }}>
                <View style={{ width: "20%" }}>
                    <Icon name="shield-lock"
                        type="material-community"
                        color="#3C3C4399"
                        size={20} />
                </View>

                <TextInput placeholder="Password......"
                placeholderTextColor="rgba(60, 60, 67,0.3)"
                    value={password}
                    onChangeText={value => props.setpass(value)}
                    style={{ color: "rgba(60, 60, 67, 1)", fontSize: 15, width: "65%", }}
                    textContentType="password"
                    secureTextEntry={showpass ? false : true}
                />
                <TouchableOpacity style={{ marginRight: 0, width: "15%" }} onPress={() => props.setshow(!showpass)}>
                    <Icon name={showpass ? "ios-eye" : "ios-eye-off"}
                        type="ionicon"
                        color="rgba(60, 60, 67, 0.3)"
                        size={15} />
                </TouchableOpacity>
            </View>

            <View style={{ width: "100%", marginTop:15}}>
             
                    <TEXT title="By Creating an account you accept the Terms & Condition of the Company"
                        color="rgba(60, 60, 67, 0.6)"
                        size={13}
                        weight={"500"} />
                
            </View>

            <BUTTON width="100%"
                height={50}
                background={Buttoncolor.mainbluebutton}
                bradius={10}
                title="Register"
                size={17}
                weight={"800"}
                style={{marginTop:15}}
                color={Textcolor.whitetext}
                press={props.signup}
            />

        </View>
    );
}

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