import React, { useState } from "react";
import { View, Text, TextInput, Platform,StyleSheet, TouchableOpacityBase, TouchableOpacity,Image } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

import { Backgroundcolor} from '../../Utility/Colors'
import { Cirle } from '../../Component/Cirle'
import { Icon } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { TEXT } from '../../Component/Text'
import { Textcolor } from "../../Utility/Colors";
import {BUTTON} from '../../Component/Button';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const QrcodeScreen = (props) => {
  const [data, setdata] = useState("");
  const onSuccess = (e) => {
    setdata(e.data);
  };
  return (
    <View style={styles.container}>
     <View style={styles.header}>
       <TouchableOpacity style={{backgroundColor:'#FED200',borderRadius:10,padding:10,alignItems:'center',marginLeft:'8%'}} onPress={()=>props.navigation.navigate("Home")}>
         <Icon color={"#171717"}
                  name="close"
                  type="antdesign"
                  size={25}/>
               
       </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'#FED200',borderRadius:10,padding:10,alignItems:'center',marginRight:'8%'}}>
       <Image source={require("../../../assets/Image/Rectangle.png")} style={{width:45,height:45}}/>
                 
       </TouchableOpacity>
     </View>
     <View>
       <View style={{height:'60%'}}>
      <QRCodeScanner
      //  cameraStyle={{width:'100%',marginTop:'10%',height:50,borderWidth:5,borderColor:'blue'}}
          // cameraContainerStyle={{width:'100%',height:'50%',borderWidth:5,borderColor:'yellow'}}
          // containerStyle={{backgroundColor:'blue',height:'50%',width:'100%',borderWidth:5}}
          reactivate={true}
          showMarker={true}
          customMarker={
            <View style={{ width: "100%", height: "100%",marginTop:Platform.OS=='ios'?"12%":0}}>
             <View
               style={{
                 height: "20%",
                 width: "20%",
                 marginLeft: "10%",
                 borderLeftColor: "#FED200",
                 borderLeftWidth: 5,
                 borderTopColor: "#FED200",
                 borderTopWidth: 5,
                 borderTopLeftRadius: 25,
               }}
             ></View>
             <View
               style={{
                 height: "20%",
                 width: "15%",
                 marginLeft: "10%",
                 borderRightColor: "#FED200",
                 borderRightWidth: 5,
                 borderTopColor: "#FED200",
                 borderTopWidth: 5,
                 borderTopRightRadius: 25,
                 position: "absolute",
                 right: "10%",
               }}
             ></View>
             <View
               style={{
                 height: "20%",
                 width: "15%",
                 marginLeft: "10%",
                 borderBottomColor: "#FED200",
                 borderBottomWidth: 5,
                 borderRightColor: "#FED200",
                 borderRightWidth: 5,
                 borderBottomRightRadius: 25,
                 position: "absolute",
                 bottom: "20%",
                 right: "10%",
               }}
             ></View>
             <View
               style={{
                 height: "20%",
                 width: "15%",
                 marginLeft: "10%",
                 borderBottomColor: "#FED200",
                 borderBottomWidth:5,
                 borderLeftColor: "#FED200",
                 borderLeftWidth: 5,
                 borderBottomLeftRadius: 25,
                 position: "absolute",
                 bottom: "20%",
               }}
             ></View>
           </View>
         }
      />
       </View>
       <View style={{height:"28%",backgroundColor:'#52AF8A',alignItems:'center',justifyContent:'center'}}>
            <View style={{backgroundColor:'white',width:'90%',height:'60%',flexDirection:'row',alignItems:'center'}}>
                <View style={{width:80,height:80,borderRadius:80/2,backgroundColor:'#FED200',marginHorizontal:'5%'}}>
                </View>
              
                <View style={{width:'33%'}}>
                <TEXT
                      title={"AIA"}
                      size={15}
                      color={'#000000'}
                      style={{ opacity: 0.6899999976158142 ,fontWeight:'900'}}
                      family="Roboto-Bold"
                    />
                     <TEXT
                      title={"Change Address"}
                      size={12}
                      color={'rgba(56, 56, 56, 1)'}
                      style={{ opacity: 0.6899999976158142 ,fontWeight:'900'}}
                      family="Roboto-Bold"
                    />
                </View>
                <View style={{width:'30%'}}>
                  <BUTTON
                    title={'Fill Form'}
                    style={{backgroundColor:'rgba(0, 13, 174, 1)',borderRadius:50,padding:'10%'}}
                    color={'rgba(255, 255, 255, 1)'}
                    family="Roboto-Bold"
                  />
                </View>
            </View>
       </View>
     </View>
    </View>
  );
};
export default QrcodeScreen;


const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%'
  },
  header:{
        flexDirection: 'row',
        alignItems: 'center',
        height: '25%',
        width: deviceWidth,
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:'#52AF8A'

  }
})