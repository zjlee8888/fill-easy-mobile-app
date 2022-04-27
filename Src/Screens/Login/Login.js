import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
  Platform,
  SafeAreaView,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TEXT } from "../../Component/Text";
import { Signin, Signup } from "./Component/SLS";

import { Backgroundcolor } from "../../Utility/Colors";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login, userRegistration } from "../../API/authentication/LoginApi";
const LoginScreen = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const navigation = useNavigation();

  const [login, setLogin] = useState(true);
  const [showpass, setShowpass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [remail, setRemail] = useState("");
  const [rpass, setRpassword] = useState("");
  const [token, setToken] = useState("");
  const [alertmsg, setalertmsg] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
 const dispatch = useDispatch();
  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={{}}>
      <SafeAreaView style={{ backgroundColor: Backgroundcolor.whiteback }}>
        <StatusBar
          translucent
          backgroundColor={Backgroundcolor.whiteback}
          {...props}
        />
      </SafeAreaView>
    </View>
  );

  const signin = async () => {
    if (email == "" && password == "") {
      setModalVisible(true);
      setalertmsg("Please Enter Email and Password!");
    } else if (email == "") {
      setModalVisible(true);
      setalertmsg("Please Enter Email");
    } else if (password == "") {
      setModalVisible(true);
      setalertmsg("Please Password!");
    } else if (email.length > 0) {
      const parsedData = await Login(email, password);
      if (parsedData.email != undefined) {
        setModalVisible(true);
        return setalertmsg("Email is  not-verified!");
      }
      if (parsedData.login_message != undefined) {
        setModalVisible(true);
        return setalertmsg("User does not exist!");
      }
      if (parsedData.email == undefined) {
        dispatch({
          type: "SET_TOKEN",
          payload: parsedData.token,
        });
        setToken(parsedData.token);
       AsyncStorage.setItem("accessToken", parsedData.token);
      }
    }
  };

  const signup = async () => {
  
    if (remail == "" && username == "" && rpass == "") {
      setModalVisible(true);
      return setalertmsg("Please fill up all of the fields!");
    } else if (remail == "") {
      setModalVisible(true);
      return setalertmsg("Please enter your email!");
    } else if (username == "") {
      setModalVisible(true);
      return setalertmsg("Please enter your username!");
    } else if (rpass == "") {
      setModalVisible(true);
      return setalertmsg("Please enter your password!");
    } else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(remail)) {
        const data = await userRegistration(remail, username, rpass);
        console.log("data==>", data);
        if (data.username != undefined) {
          setModalVisible(true);
          return setalertmsg("Username  already registered!");
        } else if (data.email != undefined) {
          setModalVisible(true);
          return setalertmsg("Email  already registered!");
        } else {
          setModalVisible(true);
          setalertmsg("Please check your mailbox!");
        }
      } else {
        setModalVisible(true);
        return setalertmsg("You have entered an invalid email address!");
      }
    }
  };

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss()}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Backgroundcolor.whiteback,
          paddingHorizontal: "10%",
        }}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            style={styles.centeredView}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{alertmsg}</Text>
            </View>
          </TouchableOpacity>
        </Modal>
        <View
          style={{
            flex: 1,
            marginTop: "15%",
            width: "100%",
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoContainerImage}>
              <Image
                source={require("../../../assets/Image/logo2.png")}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            </View>

            <View style={{ width: 160, paddingLeft: "10%" }}>
              <View style={styles.firstCircle}></View>
              <View style={styles.secoundCircle}></View>
              <View style={styles.thiredCircle}></View>
            </View>
          </View>

          <ScrollView scrollEnabled={login ? false : true} style={{}}>
            {login ? (
              <Signin
                email={email}
                password={password}
                showpass={showpass}
                setemail={setEmail}
                setpass={setPassword}
                setshow={setShowpass}
                signin={signin}
                emailRef={emailRef}
                passwordRef={passwordRef}
              />
            ) : (
              <Signup
                email={remail}
                password={rpass}
                usename={username}
                showpass={showpass}
                setuser={setUsername}
                setemail={setRemail}
                setpass={setRpassword}
                setshow={setShowpass}
                signup={signup}
                usernameRef={usernameRef}
                emailRef={emailRef}
                passwordRef={passwordRef}
              />
            )}

            <View style={styles.linkContainer}>
              <View style={{ width: "105%", alignItems: "center" }}>
                <View style={styles.firstBorder}></View>
                <View style={styles.secoundBorder}>
                  <TEXT title={"Or Log In Using"} color="#3C3C4399" size={12} />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginTop: "10%",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity style={styles.ScanButton}>
                  <Image
                    source={require("../../../assets/Image/IamSmart_logo.png")}
                    style={{ width: 89, height: 33 }}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleLogin}>
                  <Image
                    source={require("../../../assets/Image/google.png")}
                    style={{ width: 18, height: 18 }}
                  />
                  <TEXT
                    title="Google"
                    size={14}
                    color="#3C3C4399"
                    style={{ marginLeft: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", marginTop: "10%" }}>
                <TEXT
                  title={login ? "New to FillEasy? " : "Already a member? "}
                  size={16}
                  color="#000000"
                />
                {login ? (
                  <TouchableOpacity onPress={() => setLogin(false)}>
                    <TEXT
                      title="Sign Up"
                      color="#2B299E"
                      weight={"bold"}
                      size={16}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setLogin(true)}>
                    <TEXT
                      title="Log In"
                      color="#2B299E"
                      weight={"bold"}
                      size={16}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textview: {
    width: "100%",
    height: 66,
    borderRadius: 10,
    backgroundColor: Backgroundcolor.dark1gray,
    alignItems: "center",
    flexDirection: "row",
  },
  logoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  logoContainerImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowColor:
      Platform.OS === "android" ? "#fed303" : "rgba(242, 147, 0, 0.15)",
    elevation: 25,
  },
  firstCircle: {
    height: 30,
    width: 30,
    borderRadius: 40 / 2,
    backgroundColor: "rgba(254, 210, 0, 0.1)",
    marginLeft: 110,
  },
  secoundCircle: {
    height: 40,
    width: 40,
    borderRadius: 50 / 2,
    backgroundColor: "rgba(43, 41, 158, 0.1)",
    marginLeft: 50,
    marginTop: 15,
  },
  thiredCircle: {
    height: 40,
    width: 40,
    borderRadius: 50 / 2,
    backgroundColor: "rgba(29, 29, 29, 0.1)",
    marginLeft: 145,
    marginTop: -25,
  },
  ScanButton: {
    width: "48%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4CAE72",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
  linkContainer: {
    width: "100%",
    marginTop: "10%",
    alignItems: "center",
    alignSelf: "center",
  },
  firstBorder: {
    height: 1,
    width: "100%",
    backgroundColor: "#7070702C",
  },
  secoundBorder: {
    position: "absolute",
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginTop: -8,
  },
  googleLogin: {
    width: "48%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#707070",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto-Light",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
