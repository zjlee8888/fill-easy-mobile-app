import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "./Component/Screeheader";
import { Textcolor } from "../../Utility/Colors";
import { Icon } from "react-native-elements";
//components
import { Company } from "./Component/Todo/company";
import { Fillin } from "./Component/Todo/fillin";
import { TEXT } from "../../Component/Text";
import { BUTTON, Button } from "../../Component/Button";
import { Colors } from "../../Utility/Colors";
import { Buttoncolor, Bordercolor } from "../../Utility/Colors";
import { FillinAddress } from "./Component/Todo/address";
import { FillAccount } from "./Component/Todo/account";
import { FormDownload } from "./Component/Todo/finished";
import { useDispatch, useSelector } from "react-redux";

const data = [
  {
    name: "Service",
    color: "25%",
  },
  {
    name: "Companies",
    color: "52%",
  },
  {
    name: "Fill-in",
    color: "75%",
  },
  {
    name: "Finished!",
    color: "100%",
  },
];

const TodoScreen = (props) => {
  const [Htitle1, setHtitle1] = useState("2. Select your");
  const [Htitle2, setHtitle2] = useState(" Companies");
  const [open, setOpen] = useState("Companies");
  const [color, setColor] = useState("52%");
  const [stepcolor, setStepcolor] = useState("25%");
  const [step, setStep] = useState(1);

  const [companies, setCompanies] = useState("");
  const [cfId, setCfId] = useState([]);
  const [formField, setformField] = useState("");
  const navigation = useNavigation();

  const  selected  = props?.route?.params;
  const dispatch = useDispatch();
  const list = useSelector(state => state.formReducer.companylist)


  const GenerateFormEndpoint = () => {
    console.log("cfID 888888=>", cfId);
    var obj = cfId?.reduce(function (obj, v) {
      obj[v] = v;
      return obj;
    }, {});
    obj["csrf_test_name"] = "b9ceea154bfbc8cdd3528da8c6a6120c";
 
    var raw = JSON.stringify({
      lang: "en",
      user_hash: "0f86e23331a27b3761f70408cfa85699f08ce9f5e6b8c2ad",
      FormID: obj,
      Serviceline: [selected],
    });

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };
    fetch("https://fill-easy.com/serviceline/formfields", requestOptions)
      .then((response) => response.json())
      .then((result) => {
       
        dispatch({
          type: "DYNAMIC_FORM_GENRATE",
          payload: result,
        });
        setformField(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    if (list !== undefined || list !== []) {
      setCompanies(list);
    }
  });



  const handlebutton = (type) => {
    switch (type) {
      case "c2f":
        setOpen("Fill-in");
        setColor("75%");
        setHtitle1("2. Fill your");
        setStep(1);
        setStepcolor("25%");
        setHtitle2(" Basic Information");

        GenerateFormEndpoint();
        break;

      case "company":
        setOpen("Companies");
        setColor("52%");
        setHtitle1("2. Select your");
        setHtitle2(" Companies");

        break;

      case "in2add":
        setOpen("Fill-address");
        setColor("75%");
        setHtitle1("3. Fill your");
        setHtitle2(" Address");
        setStep(2);
        setStepcolor("50%");
        break;
      case "add2acc":
        if (Object.keys(formField["formfields"]).length == 3) {
          setOpen("Account");
          setColor("75%");
          setHtitle1("4. Fill your");
          setHtitle2(" Account No.");
          setStep(3);
          setStepcolor("75%");
        } else {
          setOpen("Finished!");
          setHtitle1("5. Download &");
          setHtitle2(" Send Forms");
          setColor("98%");
        }
  
        break;
      case "acc2finish":
        setOpen("Finished!");
        setHtitle1("5. Download &");
        setHtitle2(" Send Forms");
        setColor("98%");
        break;
      case "finish":
        navigation.navigate("Home");
        break;
      default:
        break;
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
      <Header title={Htitle1} title2={Htitle2} />

      <View style={styles.trinagleContainer}>
        <View
          style={{
            flexDirection: "row",
            height: 30,
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {data.map((item, i) => {
            return (
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: "white",
                    // letterSpacing: 0.5,
                  }}
                >
                  {item.name}
                </Text>

                {open == "Fill-address" && (
                  <>
                    {item.name == "Fill-in" && (
                      <View
                        style={{
                          position: "absolute",
                          marginTop: -15,
                          ...styles.triAngle,
                        }}
                      ></View>
                    )}
                  </>
                )}

                {open == "Account" && (
                  <>
                    {item.name == "Finished!" && (
                      <View
                        style={{
                          position: "absolute",
                          backgroundColor: "red",
                          marginTop: -15,
                          ...styles.triAngle,
                        }}
                      ></View>
                    )}
                  </>
                )}

                {item.name == open &&
                  open !== "Fill-address" &&
                  open !== "Account" && (
                    <View
                      style={{
                        position: "absolute",
                        backgroundColor: "red",
                        marginTop: -15,
                        ...styles.triAngle,
                      }}
                    ></View>
                  )}
              </View>
            );
          })}
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: "#FED200",
            width: color,
            alignSelf: "flex-start",
          }}
        ></View>
      </View>
      {open !== "Companies" && open !== "Finished!" && (
        <View
          style={{
            height: 95,
            width: "100%",
            padding: 25,
            backgroundColor: "rgba(234, 234, 232, 1)",
            justifyContent: "space-around",
          }}
        >
          <TEXT
            title={`Step ${step} of 4`}
            size={12}
            color={Textcolor.blacktext}
            family="Roboto-Black"
          />
          <View
            style={{
              width: "100%",
              height: 6,
              marginTop: 10,
              backgroundColor: "#ffff",
              borderRadius: 3,
            }}
          >
            <View
              style={{
                width: stepcolor,
                height: 6,
                backgroundColor: "rgba(43, 41, 158, 1)",
                borderRadius: 3,
              }}
            ></View>
          </View>
        </View>
      )}

      {open == "Companies" && (
        <View style={styles.mainContainer}>
          <Company
            handlebutton={handlebutton}
            otherCompanyDetails={companies}
            cfId={cfId}
            setCfId={setCfId}

          // setCfId={(data) => {
          //   GenerateFormEndpoint(data);
          // }}
          />
        </View>
      )}

      {open == "Fill-in" && (
        <View style={styles.mainContainer}>
          <Fillin handlebutton={handlebutton} formField={formField} />
        </View>
      )}

      {open == "Fill-address" && (
        <View style={styles.mainContainer}>
          <FillinAddress
            handlebutton={handlebutton}
            formField={formField}
            selected={selected}
          />
        </View>
      )}

      {open == "Account" && (
        <View style={styles.mainContainer}>
          <FillAccount handlebutton={handlebutton} />
        </View>
      )}

      {open == "Finished!" && (
        <View style={styles.mainContainer}>
          <FormDownload handlebutton={handlebutton} />
        </View>
      )}
    </View>
  );
};

export default TodoScreen;

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
    backgroundColor: "pink",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  trinagleContainer: {
    marginTop: "0%",
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
    zIndex: 1,
  },
});
