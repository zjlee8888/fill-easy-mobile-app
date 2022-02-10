import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Icon } from 'react-native-elements';

//component
import { TEXT } from '../../../Component/Text'
import {BUTTON} from '../../../Component/Button'

//Utility
import {Textcolor , Buttoncolor , Bordercolor , Shadowcolor} from '../../../Utility/Colors'

export const Signin = (props) => {
    console.log(props)

    return (
        <View style={styles.container}>
         
            <TEXT title="Sign In"
                size={32}
                color={Textcolor.blacktext}
                family="Roboto-Bold"
                 />

            <View style={styles.textinput}>
                <TextInput placeholder="Email"
                    placeholderTextColor={Textcolor.graytext}
                    value={props.email}
                    onChangeText={value => props.setemail(value)}
                    style={{ fontSize: 16, }}
                    
                />
            </View>

            <View style={{ ...styles.textinput, justifyContent: "center", flexDirection: "row" }}>
                <TextInput placeholder="Password"
                    placeholderTextColor={Textcolor.graytext}
                    value={props.password}
                    onChangeText={value => props.setpassword(value)}
                    style={{ width: "85%",textAlign: "center", paddingLeft: "5%", fontSize: 16, }}
                />
                <TouchableOpacity style={{}} onPress={() => console.log("Password visibility")}>
                    <Icon name="eye"
                        type="simple-line-icon"
                        size={25}
                        color="rgba(0,0,0,0.2)" />
                </TouchableOpacity>
            </View>

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
                    press={props.signin}
                    />
        </View>
    );
}

export const Login = (props) => {
    return (
        <View style={styles.container}>
            <View style={{width:"100%",paddingLeft:"10%",}}>
            <TEXT title="Log In"
                size={32}
                color={Textcolor.blacktext}
                family="Roboto-Bold"

                 />
                 </View>
            <View style={{
                ...styles.textinput,
                flexDirection: "row",
                justifyContent: "flex-start",
                borderWidth: 0,
                backgroundColor: "#ffffff",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 2.5,
                shadowColor: "rgba(0,0,0,0.1607843137254902 )",
                elevation: 5
            }}>
                <View style={{ width: "20%", paddingLeft: 5 }}>
                    <Image source={require("../../../../assets/Image/HK_Logo.png")}
                        style={{ width: 35, height: 35, resizeMode: "contain" }} />
                </View>
                <TextInput placeholder="HONG KONG (+852)"
                    placeholderTextColor="#878787"
                    value={props.email}
                    onChangeText={value => props.setemail(value)}
                    style={{ width: "80%", textAlign: "center", paddingRight: "20%" }}
                />
            </View>

            <View style={{
                ...styles.textinput, justifyContent: "center", flexDirection: "row", borderWidth: 0,
                backgroundColor: "#ffffff",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 2.5,
                shadowColor: "rgba(0,0,0,0.1607843137254902 )",
                elevation: 5
            }}>
                <TextInput placeholder="Enter Phone Number"
                    placeholderTextColor="#878787"
                    value={props.number}

                    onChangeText={value => props.setnumber(value)}
                    style={{ width: "100%", textAlign: "center", paddingLeft: "5%" }}
                />

            </View>

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
                    title="NEXT"
                    size={17}
                   family="Roboto-Bold"
                    color={Textcolor.whitetext}
                    weight="bold"
                    press={props.signin}
                    />
        </View>
    );

}

export const Signup = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.signininput}>
                <TextInput placeholder="First Name"
                    placeholderTextColor="rgba(93,94,96,0.2)"
                    value={props.fname}
                    onChangeText={value => props.setfname(value)}
                />
            </View>

            <View style={styles.signininput}>
                <TextInput placeholder="Last Name"
                    placeholderTextColor="rgba(93,94,96,0.2)"
                    value={props.lname}
                    onChangeText={(value) => props.setlname(value)}
                />
            </View>

            <View style={styles.signininput}>
                <TextInput placeholder="Email"
                    placeholderTextColor="rgba(93,94,96,0.2)"
                    value={props.email}
                    onChangeText={(value) => props.setemail(value)}

                />
            </View>

            <View style={styles.signininput}>
                <TextInput placeholder="Password"
                    placeholderTextColor="rgba(93,94,96,0.2)"
                    value={props.password}
                    onChangeText={(value) => props.setpassword(value)}

                />
            </View>
            <View style={styles.signininput}>
                <TextInput placeholder="Cell Number"
                    placeholderTextColor="rgba(93,94,96,0.2)"
                    value={props.number}
                    onChangeText={(value) => props.setnumber(value)}

                />
            </View>
            <View style={styles.signininput}>
                <TextInput placeholder="Zip Code"
                    placeholderTextColor="rgba(93,94,96,0.2)"
                    value={props.code}
                    onChangeText={(value) => props.setcode(value)}

                />
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: { width: "100%", alignItems: "center", justifyContent: "space-evenly", flex: 1 },
    heading: {
        fontSize: 32,
        color: "#000000",
        width: "100%",
        background:"pink"

    },
    textinput: {
        width: "80%",
        height: 57,
        borderWidth: 1,
        borderColor: "#ebebeb",
        borderRadius: 25,
        alignItems: "center",
        marginTop: "5%",
        justifyContent: "center"
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
    signininput: { width: "90%", borderBottomWidth: 1, padding: 5, paddingVertical: 5, borderBottomColor: "rgba(177 , 179 , 183 , 0.5)", marginTop: 8 }




})