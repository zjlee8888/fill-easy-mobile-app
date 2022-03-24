
import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator
} from "react-native";


export default LoaderScreen = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
          }, 2000);
    })
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator />
    </View>
    )
    }