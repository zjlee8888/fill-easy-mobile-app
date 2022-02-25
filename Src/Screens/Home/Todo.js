import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';


import { Header } from './Component/Screeheader'
import { Textcolor } from '../../Utility/Colors'
import { Icon } from 'react-native-elements';
//components
import { Company } from './Component/Todo/company'
import { Fillin } from './Component/Todo/fillin'
import { TEXT } from '../../Component/Text'
import { BUTTON, Button } from '../../Component/Button'
import { Colors } from '../../Utility/Colors'
import { Buttoncolor, Bordercolor } from '../../Utility/Colors'
import { FillinAddress } from './Component/Todo/address'
import { FillAccount } from './Component/Todo/account'
import {FormDownload} from './Component/Todo/finished'


const data = [
    {
        name: "Service",
        color: "25%"
    },
    {
        name: "Companies",
        color: "52%"
    },
    {
        name: "Fill-in",
        color: "75%"
    },
    {
        name: "Finished!",
        color: "100%"
    },
]





const TodoScreen = () => {
    const navigation = useNavigation();

    const [Htitle1, setHtitle1] = useState("2. Select your")
    const [Htitle2, setHtitle2] = useState(" Companies")
    const [open, setOpen] = useState("Companies")
    const [color, setColor] = useState("52%")
    const [stepcolor, setStepcolor] = useState("25%")
    const [step, setStep] = useState(1)



    const handlebutton = (type) => {
        switch (type) {
            case "c2f":
                setOpen("Fill-in")
                setColor("75%")
                setHtitle1("2. Fill your")
                setStep(1)
                setStepcolor("25%")
                setHtitle2(" Basic Information")
                break;

            case "company":
                setOpen("Companies")
                setColor("52%")
                setHtitle1("2. Select your")
                setHtitle2(" Companies")
                break;
       
            case "in2add":
                setOpen("Fill-address")
                setColor("75%")
                setHtitle1("3. Fill your")
                setHtitle2(" Address")
                setStep(2)
                setStepcolor("50%")
                break;
            case "add2acc":
                setOpen("Account")
                setColor("75%")
                setHtitle1("4. Fill your")
                setHtitle2(" Account No.")
                setStep(3)
                setStepcolor("75%")
                break;
            case "acc2finish":
                setOpen("Finished!")
                setHtitle1("5. Download &")
                setHtitle2(" Send Forms")
                setColor("98%")
                    break;
            case "finish":
                navigation.navigate("Home")
                break;

            default:
                break;
        }
    }
    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
            <Header title={Htitle1}
                title2={Htitle2}
            />
            {/* HEader VIew */}
            <View style={{
                marginTop: '0%',
                height: 32,
                width: "100%",
                backgroundColor: Textcolor.bluetext,
                justifyContent: "space-around",
                alignItems: "center",
                shadowOffset: { width: 5, height: 6 },
                shadowColor: "#00000029",
                shadowRadius: 6,
                shadowOpacity: 0.5,
                elevation: 10,
                zIndex: 1

            }}>
                <View style={{ flexDirection: 'row', height: 30, width: "100%", justifyContent: "space-around", alignItems: "center" }}>
                    {data.map((item, i) => {
                        return (
                            <View style={{ alignItems: "center", }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: 'white',
                                    letterSpacing: 1,
                                }}>{item.name}</Text>

                                {open == "Fill-address" &&
                                    <>
                                        {item.name == "Fill-in" &&
                                            <View style={{
                                                position: "absolute",
                                                backgroundColor: "red",
                                                marginTop: -15,
                                                ...styles.triAngle
                                            }}>

                                            </View>
                                        }
                                    </>
                                }

                                {open == "Account" &&
                                    <>
                                        {item.name == "Finished!" &&
                                            <View style={{
                                                position: "absolute",
                                                backgroundColor: "red",
                                                marginTop: -15,
                                                ...styles.triAngle
                                            }}>

                                            </View>
                                        }
                                    </>
                                }

                                {item.name == open && open !== "Fill-address" && open !== "Account" && 
                                 <View style={{
                                    position: "absolute",
                                    backgroundColor: "red",
                                    marginTop: -15,
                                    ...styles.triAngle
                                }}>
                                </View>
                                }



                                {/* {open == "Fill-address"
                                    ?
                                    <>
                                        {item.name == "Fill-in" &&
                                            <View style={{
                                                position: "absolute",
                                                backgroundColor: "red",
                                                marginTop: -15,
                                                ...styles.triAngle
                                            }}>

                                            </View>
                                        }
                                    </>
                                    :
                                    <>
                                        {item.name == open &&
                                            <View style={{
                                                position: "absolute",
                                                backgroundColor: "red",
                                                marginTop: -15,
                                                ...styles.triAngle
                                            }}>
                                            </View>
                                        }
                                    </>
                                } */}
                                {/* {open == "Fill-address" ?
                                <>
                                {item.name == open && 
                                    <View style={{
                                        position: "absolute",
                                        backgroundColor: "red",
                                        marginTop: -15,
                                        ...styles.triAngle
                                    }}>
                                    </View>
                                } 
                                </> :
                                    
                                    <View style={{
                                        position: "absolute",
                                        backgroundColor: "red",
                                        marginTop: -15,
                                        ...styles.triAngle
                                    }}>
                                    </View>
                                    } */}

                            </View>
                        );
                    })}
                </View>
                <View style={{ height: 2, backgroundColor: "#FED200", width: color, alignSelf: "flex-start" }}></View>
            </View>
            {/* Main view */}
            {/* status bar */}
            {open !== "Companies" && open !== "Finished!" &&
                <View style={{
                    height: 95,
                    width: "100%",
                    padding: 25,
                    backgroundColor: "rgba(234, 234, 232, 1)",
                    justifyContent: "space-around"
                }}>
                    <TEXT title={`Step ${step} of 4`}
                        size={12}
                        color={Textcolor.blacktext}
                        family="Roboto-Black"
                    />
                    <View style={{
                        width: "100%",
                        height: 6,
                        marginTop: 10,
                        backgroundColor: "#ffff",
                        borderRadius: 3
                    }}>
                        <View style={{
                            width: stepcolor,
                            height: 6,
                            backgroundColor: "rgba(43, 41, 158, 1)",
                            borderRadius: 3
                        }}>

                        </View>

                    </View>
                </View>
            }

            {open == "Companies" &&
                <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "white", }}>

                    <Company handlebutton={handlebutton} />

                </View>
            }

            {open == "Fill-in" &&
                <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "white", }}>

                    <Fillin handlebutton={handlebutton} />

                </View>
            }

            {open == "Fill-address" &&
                <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "white", }}>

                    <FillinAddress handlebutton={handlebutton} />

                </View>
            }

            {open == "Account" &&
                <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "white", }}>

                    <FillAccount handlebutton={handlebutton} />

                </View>
            }

            {open == "Finished!" &&
                <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "white", }}>

                    <FormDownload handlebutton={handlebutton} />

                </View>
            }

        </View>
    );
}

export default TodoScreen

const styles = StyleSheet.create({
    triAngle: {
        //top: 95,
        // left: 125,
        //  position: "absolute",
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 15,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: Textcolor.bluetext,
    },
    triangle2: {
        backgroundColor: 'pink'
    }
})