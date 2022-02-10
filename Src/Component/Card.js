import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements';

import { Backgroundcolor, Textcolor, Buttoncolor, Bordercolor, Shadowcolor } from '../Utility/Colors'
import { Cirle } from '../Component/Cirle'
import { TEXT } from '../Component/Text'
import { BUTTON } from '../Component/Button'


export const Card = (props) => {
    const { title, desc, time, date, width } = props
    return (
        <View style={{
            width: width,
            minHeight:74,
            backgroundColor: Backgroundcolor.whiteback,
            borderRadius: 5,
            flexDirection: "row",
            padding: 10
        }}>
            <View>
                <Cirle />
            </View>
            <View style={{ marginLeft: 10}}>
                <TEXT title={title}
                    size={16}
                    color={Textcolor.blacktext}
                    weight={"bold"}
                    style={{marginBottom:0}}
                    family="Poppins-Bold"
                    />

                <TEXT title={desc}
                    size={10}
                    color={Textcolor.grayoptext}
                    style={{marginBottom:2}}
                    family="Roboto-Regular"
                    
                />
                <TEXT title={date}
                    size={10}
                    color={Textcolor.grayoptext}
                    family="Roboto-Regular"
                />
            </View>

            <View style={{flex:1,marginRight:0,justifyContent:"space-between",alignItems:"flex-end"}}>
                <View style={{ flexDirection: "row" ,width:"100%",justifyContent:"flex-end"}}>
                    <TEXT title={time}
                        size={10}
                        color={Textcolor.grayoptext}
                        family="Roboto-Regular"
                    />
                    <Icon name="more-vertical"
                        type="feather"
                        size={15}
                        color={Backgroundcolor.buleback} />
                </View>

                <BUTTON width={59}
                    height={22}
                    background={Buttoncolor.mainbluebutton}
                    bcolor={Bordercolor.grayborder}
                    bradius={15}
                    shight={3}
                    swidth={0}
                    scolor={Shadowcolor.shadow1}
                    sopacity={1}
                    elevation={5}
                    title="To Do"
                    size={9}
                    color={Textcolor.whitetext}
                    weight="bold"
                    press={props.signin}
                    family="Poppins-Bold"
                />

            </View>
        </View>
    );
}