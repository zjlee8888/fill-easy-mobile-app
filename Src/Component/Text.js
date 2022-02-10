import React from 'react'
import { View, Text } from 'react-native'

export const TEXT = (props) => {
    const { title, style, size, color, weight ,family} = props
    return (
        <View>
            <Text style={{
                fontSize: size,
                color: color,
             //fontWeight: weight,
            // fontFamily:"Poppins-ExtraBold",
            fontFamily:family,
                ...style,
                

            }}>{title}</Text>
        </View>
    );
}