import React from 'react'
import { View, Text } from 'react-native'

export const TEXT = (props) => {
    const { title, style, size, color, weight ,family , numline} = props
    return (
        <View>
            <Text style={{
                fontSize: size,
                color: color,
                letterSpacing:0.5,
             fontWeight: weight,
            // fontFamily:"Poppins-ExtraBold",
            fontFamily: family,
                ...style,
                

            }}
            numberOfLines={numline}
            >{title}</Text>
        </View>
    );
}