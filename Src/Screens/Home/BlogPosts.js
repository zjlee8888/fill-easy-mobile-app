import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Header } from "./Component/Screeheader";
import { Textcolor } from "../../Utility/Colors";
import { Icon } from "react-native-elements";
import { TEXT } from "../../Component/Text";
import { useDispatch, useSelector } from "react-redux";

import { Allblogpost , blogdetailapi } from '../../Helper/Blogpost'



//components
const TodoScreen = () => {
  const navigation = useNavigation();
  const [Htitle3, setHtitle3] = useState("Blog Posts");

  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogReducer.all_blogs);

  const blogdetail =  async (id) =>{
    const token = await AsyncStorage.getItem("accessToken");

    blogdetailapi(dispatch , id , token)
  }
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Header title3={Htitle3} />

         <FlatList data={blogs}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => {
            const blogs = item.item
            const id = blogs.blog_id
            
            const uri = `https://fill-easy.com${blogs.blog_imageLink}`
            const finaluri = uri.replaceAll('\\', '/')
      
            return (
              <View
                style={{
                  marginTop: 20,
                }}
              >
                <Image source={{uri :  finaluri}} 
                      style={{width:"100%",height:150,borderRadius:15,}}
                      onError={e => console.log("ERROR" , e)}/>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      width: 280,
                    
                    }}
                  >
                    <TEXT
                      title={blogs.blog_author}
                      size={15}
                      color={"black"}
                      weight={"bold"}
                    />
                  </View>
                  <TouchableOpacity onPress={() => blogdetail(id)}>
                    <TEXT
                      title="more >"
                      size={12}
                      color={Textcolor.bluetext}
                      family="Roboto-Regular"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: 325,
                    marginTop: 10,
                  }}
                >
                  <TEXT
                    style={{
                      lineHeight: 25,
                    }}
                    title={blogs.blog_title}
                    size={15}
                    color={"#555555"}
                    family="Roboto-Regular"
                  />
                </View>
              </View>
            );


          }}
        /> 
        {/* {ImageShow.map((item, i) => {
          return (
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Image source={item.image} />
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View
                  style={{
                    width: 280,
                  }}
                >
                  <TEXT
                    title={item.name}
                    size={15}
                    color={"black"}
                    weight={"bold"}
                  />
                </View>
                <TouchableOpacity>
                  <TEXT
                    title="more >"
                    size={12}
                    color={Textcolor.bluetext}
                    family="Roboto-Regular"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 325,
                  marginTop: 10,
                }}
              >
                <TEXT
                  style={{
                    lineHeight: 25,
                  }}
                  title={item.description}
                  size={15}
                  color={"#555555"}
                  family="Roboto-Regular"
                />
              </View>
            </View>
          );
        })} */}
      </View>
    </View>
  );
};

export default TodoScreen;
