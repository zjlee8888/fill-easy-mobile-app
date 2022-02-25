import React from 'react'
import { View, Text, Dimensions } from 'react-native'

import { BUTTON } from '../../../../Component/Button'
import { Textcolor } from '../../../../Utility/Colors'

const windowWidth = Dimensions.get('screen').width;

console.log(windowWidth)
export const Bottom = (props) => {

    const formDownload = (type) => {
        switch (type) {
            case 'con':
                return 'Continue';
            case 'send':
                return 'Send(1)'
            case 'submit':
                return 'Submit'
            default:
                return 'Continue'
        }
    }

    const { contiue, FillAccount, type, Company, back, style } = props
    return (
        <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            ...style

        }}>
            <BUTTON
                width={windowWidth < 330 ? 135 : 146}
                height={50}
                background={'transparent'}
                bwidth={2}
                bcolor={Company ? 'white' : "black"}
                bradius={50}
                title={Company ? "Search Now" : "Back"}
                family="Poppins-Bold"
                size={14}
                color={Company ? 'white' : "black"}
                press={() => props.handlebutton(back)}
                style={{
                    shadowColor: "rgba(0, 0, 0, 0.16)",
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 5,
                    elevation: 25,
                }}

            />

            <BUTTON
                width={windowWidth < 330 ? 135 : 146}
                height={50}
                background={type == 'send' ? '#EB632E' : Textcolor.yellowtext}
                bradius={50}
                title={formDownload(type)}
                family="Poppins-Bold"
                size={14}
                color={type == 'send' ? Textcolor.whitetext : Textcolor.blacktext}
                press={() => { props.handlebutton(contiue) }}
                style={{
                    shadowColor: "rgba(0, 0, 0, 0.16)",
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    shadowOpacity: 0.6,
                    shadowRadius: 3,
                    elevation: 25,
                }}
            />
        </View>
    );
}