import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet,
    TouchableOpacity,
    TextInput,
    Modal,
    Pressable,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Textcolor } from '../../../../Utility/Colors';
import { Icon } from 'react-native-elements';
import { TEXT } from '../../../../Component/Text'

//component
import { Bottom } from '../Todo/buttoncontainer'

const data2 = [
    {
        name: "CITIBANK, N.A.",
        type: 'INSURANCE',
        selected: true
    },
    {
        name: "HSBC",
        type: 'INSURANCE',
        selected: false
    },
    {
        name: "DBC",
        type: 'INSURANCE',
        selected: false
    },
    {
        name: "FUBON BANK",
        type: 'INSURANCE',
        selected: false
    },
]
export const Company = (props) => {
    const navigation = useNavigation();

    const [banks, setBanks] = useState([]);
    const [selected, setSelected] = useState("CITIBANK, N.A.")
    const [used, setUsed] = useState()




    const handleSearch = (queryText) => {
        {
            data.map((item, i) => {
                setSearchdata(item.title)
            })
        }
        setShowsearch(true)
        let filteredData = data.filter(function (item) {
            const itemdata = `${item.title.toUpperCase()}`;
            const itemtext = queryText.toUpperCase();
            return itemdata.includes(itemtext);
        });

        if (filteredData == null) {
            setShowsearch(false)

        } else {

        }
        setSearchdata(filteredData);

        if (filteredData.length == 0) {
            setShowsearch(false)

        }

        if (queryText.length == 0) {
            setShowsearch(false)
        }

    }

    // selectNewBank = (item) => {
    //     let changedStatusData = [...banks].map((bank) => {
    //         if (bank?.selected) {
    //             return {
    //                 ...bank,
    //                 selected: false
    //             }
    //         } else {
    //             if (item.name == bank.name) {
    //                 return {
    //                     ...bank,
    //                     selected: true
    //                 }
    //             } else {
    //                 return { ...bank }
    //             }
    //         }
    //     });
    //     console.log("Changed data", changedStatusData);
    //     setBanks(changedStatusData)
    // }



    const BankOptionUI = (props) => {

        const { item } = props;

        console.log(props)

        return (
            <View style={{
                flex: 1,
                alignItems: "center",
                flexDirection: 'row',
            }}>
                <View style={{}}
                >
                    <TouchableOpacity style={{
                        borderRadius: 15,
                        borderWidth: 5,
                        borderColor: '#0000000F',
                        backgroundColor: '#0000000F',
                        //  opacity: 0.9,
                        height: 24,
                        width: 24,
                    }}
                        onPress={() => setSelected(item.name)}>
                        <View style={{
                            width: 14,
                            height: 14,
                            backgroundColor: item?.name == selected ? '#2B299E' : '#ffffff',
                            // backgroundColor: item?.selected ? '#2B299E' : '#ffffff',
                            borderRadius: 14 / 2
                        }}></View>
                    </TouchableOpacity>

                </View>
                <View style={{
                    marginLeft: 10
                }}>
                    <View style={{
                        backgroundColor: '#A4A4A4',
                        opacity: 0.20,
                        borderRadius: 49 / 2,
                        height: 49,
                        width: 49,
                    }}>
                    </View>
                </View>
                <View style={{
                    marginLeft: 15,
                    flex: 1,


                }}>
                    <View style={{
                        // borderWidth: 1
                    }}>
                        <TEXT
                            title={item?.name ?? ''}
                            size={16}
                            color={Textcolor.blacktext}
                            family="Roboto-Black"

                            numline={1}
                        /></View>


                    <View style={{
                        marginTop: 5,
                    }}>
                        <TEXT title={item?.type ?? ''}
                            size={12}
                            color={'rgba(191,191,191,1)'}
                            family="Roboto-Regular"
                            numline={1}
                        /></View>
                </View>

                {item && !item.selected && <View style={{
                    width: "20%",
                    justifyContent: 'flex-end',
                }}>
                    <TouchableOpacity >
                        <Icon
                            name="arrowright"
                            type="antdesign"
                            size={15} />
                    </TouchableOpacity>
                </View>}
            </View>
        )
    }

    const recentlyused = async () => {
        setBanks(data2);
        let selectedItem = banks.filter((bank) => bank && bank.selected);
        console.log("!!!!!", selectedItem)
        setUsed(selectedItem[0])
        // setSelected(used?.name)

    }

    useEffect(() => {
        setBanks(data2);
        recentlyused()

    }, [banks])

    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {

    //     });

    //     return unsubscribe;
    //   }, [navigation]);



    console.log("$$$$$", selected)

    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View style={{ flex: 1, width: "100%", }}>
            <ScrollView style={{ flex: 1, width: "100%", }}>

                <View style={{
                    width: "100%",
                    padding: 15
                }}>
                    <View style={{
                        height: 30,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: "space-between"
                    }}
                    >
                        <View style={{}}>
                            <TEXT
                                title={'Recently used'}
                                size={16}
                                color={Textcolor.blacktext}
                                family="Roboto-Black"
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{
                                flexDirection: 'row',
                                marginRight: 15,
                            }}>
                            <Icon
                                color='rgba(164, 164, 164, 1)'
                                name="filter"
                                type="antdesign"
                                size={12} />
                            <TEXT size={12}
                                title="Filter"
                                color="rgba(164, 164, 164, 1)"
                                family="Roboto-Regular"
                                style={{ marginLeft: 5 }}
                            />

                            {modalVisible &&
                                <View style={{
                                    position: "absolute",
                                    marginTop: 30,
                                    width: 95,
                                    backgroundColor: "white",
                                    borderRadius: 8,
                                    marginLeft: -48,
                                    shadowColor: "rgba(70, 88, 131, 0.13)",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4
                                    },
                                    shadowOpacity: 0.6,
                                    shadowRadius: 4,
                                    elevation: 25,
                                    padding: 10
                                }}>
                                    <TouchableOpacity style={{ marginBottom: 5 }}>
                                        <TEXT size={9}
                                            title="Option 1"
                                            color="rgba(164, 164, 164, 1)"
                                            family="Roboto-Regular"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginBottom: 5 }}>
                                        <TEXT size={9}
                                            title="Option 2"
                                            color="rgba(164, 164, 164, 1)"
                                            family="Roboto-Regular"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginBottom: 5 }}>
                                        <TEXT size={9}
                                            title="Option 3"
                                            color="rgba(164, 164, 164, 1)"
                                            family="Roboto-Regular"
                                        />
                                    </TouchableOpacity>

                                </View>
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        alignItems: "center",
                        paddingVertical: 18,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: "rgba(70, 88, 131, 0.04)",
                        marginTop: 15,
                        zIndex: -1
                    }}>

                        <BankOptionUI item={used} />
                    </View>
                    <View style={{
                        marginLeft: '1%',
                        marginTop: 20
                    }}>
                        <TEXT
                            title={'Other Companies'}
                            size={16}
                            color={Textcolor.blacktext}
                            family="Roboto-Black"
                        />
                    </View>
                    <View style={{
                        marginTop: 15,
                        //  paddingVertical:18,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: "rgba(70, 88, 131, 0.04)",
                        paddingBottom: 15
                    }}>
                        {banks.map((item) => {
                            if (item && !item.selected) {
                                return (
                                    <View style={{ marginTop: 12 }}>
                                        <BankOptionUI item={item} />
                                    </View>
                                )
                            }
                        }
                        )}
                    </View>
                </View>

            </ScrollView>
            <View style={{
                height: "30%",
                backgroundColor: "rgba(43, 41, 158, 1)",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                

                <View style={{
                    height: 40,
                    width: "87%",
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    alignItems: 'center',
                }}>

                    <Icon
                        color='rgba(183, 190, 198, 1)'
                        name="search1"
                        type="antdesign"
                        size={15} />
                    <TextInput
                        style={{
                            paddingLeft: 10,
                            fontSize: 14,
                            color: "black"
                        }}
                        placeholder={'Search for Company..'}
                        placeholderTextColor="rgba(183, 190, 198, 1)"
                    >
                    </TextInput>
                </View>
                <View style={{ width: "87%" }}>
                    <Bottom handlebutton={props.handlebutton}
                        Company={true}
                        contiue="c2f" />
                </View>
            </View>
        </View>


        // <View style={{ flex: 1, width: "100%", }}>
        //     <ScrollView style={{ flex: 1, width: "100%", }}>
        //         <View style={{
        //             width: "100%",
        //             padding: 15
        //         }}>
        //             <View style={{
        //                 height: 30,
        //                 alignItems: 'center',
        //                 flexDirection: 'row',
        //                 justifyContent: "space-between"
        //             }}
        //             >
        //                 <View style={{}}>
        //                     <TEXT
        //                         title={'Recently used'}
        //                         size={16}
        //                         color={Textcolor.blacktext}
        //                         family="Roboto-Black"
        //                     />
        //                 </View>
        //                 <TouchableOpacity
        //                     onPress={() => setModalVisible(!modalVisible)}
        //                     style={{
        //                         flexDirection: 'row',
        //                         marginRight: 15,
        //                     }}>
        //                     <Icon
        //                         color='rgba(164, 164, 164, 1)'
        //                         name="filter"
        //                         type="antdesign"
        //                         size={12} />
        //                     <TEXT size={12}
        //                         title="Filter"
        //                         color="rgba(164, 164, 164, 1)"
        //                         family="Roboto-Regular"
        //                         style={{ marginLeft: 5 }}
        //                     />

        //                     {modalVisible &&
        //                         <View style={{
        //                             position: "absolute",
        //                             marginTop: 30,
        //                             width: 95,
        //                             backgroundColor: "white",
        //                             borderRadius: 8,
        //                             marginLeft: -48,
        //                             shadowColor: "rgba(70, 88, 131, 0.13)",
        //                             shadowOffset: {
        //                                 width: 0,
        //                                 height: 4
        //                             },
        //                             shadowOpacity: 0.6,
        //                             shadowRadius: 4,
        //                             elevation: 25,
        //                             padding: 10
        //                         }}>
        //                             <TouchableOpacity style={{ marginBottom: 5 }}>
        //                                 <TEXT size={9}
        //                                     title="Option 1"
        //                                     color="rgba(164, 164, 164, 1)"
        //                                     family="Roboto-Regular"
        //                                 />
        //                             </TouchableOpacity>
        //                             <TouchableOpacity style={{ marginBottom: 5 }}>
        //                                 <TEXT size={9}
        //                                     title="Option 2"
        //                                     color="rgba(164, 164, 164, 1)"
        //                                     family="Roboto-Regular"
        //                                 />
        //                             </TouchableOpacity>
        //                             <TouchableOpacity style={{ marginBottom: 5 }}>
        //                                 <TEXT size={9}
        //                                     title="Option 3"
        //                                     color="rgba(164, 164, 164, 1)"
        //                                     family="Roboto-Regular"
        //                                 />
        //                             </TouchableOpacity>

        //                         </View>
        //                     }
        //                 </TouchableOpacity>
        //             </View>

        //             <View style={{
        //                 alignItems: "center",
        //                 paddingVertical: 18,
        //                 paddingHorizontal: 10,
        //                 borderWidth: 1,
        //                 borderRadius: 5,
        //                 borderColor: "rgba(70, 88, 131, 0.04)",
        //                 marginTop: 15,
        //                 zIndex: -1
        //             }}>

        //                 <BankOptionUI item={selectedBank()} />
        //             </View>
        //             <View style={{
        //                 marginLeft: '1%',
        //                 marginTop: 20
        //             }}>
        //                 <TEXT
        //                     title={'Other Companies'}
        //                     size={16}
        //                     color={Textcolor.blacktext}
        //                     family="Roboto-Black"
        //                 />
        //             </View>
        //             <View style={{
        //                 marginTop: 15,
        //                 //  paddingVertical:18,
        //                 paddingHorizontal: 10,
        //                 borderWidth: 1,
        //                 borderRadius: 5,
        //                 borderColor: "rgba(70, 88, 131, 0.04)",
        //                 paddingBottom: 15
        //             }}>
        //                 {banks.map((item) => {
        //                     if (item && !item.selected) {
        //                         return (
        //                             <View style={{ marginTop: 12 }}>
        //                                 <BankOptionUI item={item} />
        //                             </View>
        //                         )
        //                     }
        //                 }
        //                 )}
        //             </View>
        //         </View>

        //     </ScrollView>
        //     <View style={{
        //         height: "30%",
        //         backgroundColor: "rgba(234, 234, 232, 1)",
        //         borderTopLeftRadius: 20,
        //         borderTopRightRadius: 20,
        //         width: "100%",
        //         justifyContent: "space-evenly",
        //         alignItems: "center"
        //     }}>
        //         <View style={{
        //             height: 40,
        //             width: "87%",
        //             backgroundColor: 'white',
        //             flexDirection: 'row',
        //             borderRadius: 10,
        //             paddingHorizontal: 15,
        //             alignItems: 'center',
        //         }}>

        //             <Icon
        //                 color='rgba(183, 190, 198, 1)'
        //                 name="search1"
        //                 type="antdesign"
        //                 size={15} />
        //             <TextInput
        //                 style={{
        //                     paddingLeft: 10,
        //                     fontSize: 14,
        //                     color:"black"
        //                 }}
        //                 placeholder={'Search for Company..'}
        //                 placeholderTextColor="rgba(183, 190, 198, 1)"
        //             >
        //             </TextInput>
        //         </View>
        //         <Bottom handlebutton={props.handlebutton}
        //                 Company={true}
        //                 contiue="c2f"/>
        //     </View>
        // </View>
    );
}
const styles = StyleSheet.create({
    triAngle: {
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