import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

const SignUpComp = (props) => {
  console.log(props);
  console.log("Hello")
  //---------------------------------------------------------
  const [userNameValue, setUserNameValue] = useState("");
  //--1-------------------------------------------------------
  const [userPasswordValue, setUserPasswordValue] = useState("");
  const [isValidUserPassword, setIsValidUserPassword] = useState("");
  //----------------------------------------------------------
  const [addUserResponse, setAddUserResponse] = useState("");
  const [confirmuserpassword, setConfirmUserPassword] = useState("");
  const validityHandler = (text, inputName) => {
    // User Name Setting/Validation
    if (inputName === "username") {
      setUserNameValue(text);
    }
    if (inputName === "userpassword") {
      var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      setUserPasswordValue(text);
      if (re.test(text)) {
        setIsValidUserPassword("");
      } else {
        setIsValidUserPassword("User Password Not Valid");
      }
    }
    //User Confirm password Setting/ Validation
    if (inputName === "confirmuserpassword") {
      setConfirmUserPassword(text);
      if (text != userPasswordValue) {
        setIsValidUserPassword("");
        setIsValidUserPassword("Password Does Not MAtch");
      } else {
        setIsValidUserPassword("");
      }
    }
  };
  const addUser = () => {
    var formJSON = {
      userName: userNameValue,
      userPassword: userPasswordValue,
    };
    axios
      .post("http://192.168.1.40:8080/api/v1/addUser/", formJSON)
      .then((response) => {
        setAddUserResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    clearInputFields();

  };
  const clearInputFields = () => {
    setUserNameValue("");
    setUserPasswordValue("");
    setConfirmUserPassword("");
  };
  
  const styles = StyleSheet.create({
    screen: {
      justifyContent: "center",
      alignItems: "center",
      display: props.visibility,
    },
    username: {
      height: 50,
      width: "80%",
      justifyContent: "center",
      alignItems: "flex-start",
      borderBottomColor: "black",
      borderBottomWidth: 2,
    },
    userNameInput: {
      fontWeight: "600",
      fontSize: 25,
      color: "white",
    },
    buttonContainer: {
      margin: 10,
      width: 100,
    },
  });
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 30, color: "black", fontWeight: "bold" }}>
        Sign Up Page
      </Text>

      <View style={styles.username}>
        <TextInput
          placeholder="User Name"
          placeholderTextColor={"rgb(72, 0, 241)"}
          style={styles.userNameInput}
          width="100%"
          alid
          onChangeText={(text) => {
            validityHandler(text, "username");
          }}
          value={userNameValue}
        />
      </View>

      <View style={styles.username}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={"rgb(72, 0, 241)"}
          style={styles.userNameInput}
          width="100%"
          onChangeText={(text) => {
            validityHandler(text, "userpassword");
          }}
          value={userPasswordValue}
        />
      </View>
      <Text>{isValidUserPassword}</Text>
      <View style={styles.username}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor={"rgb(72, 0, 241)"}
          style={styles.userNameInput}
          width="100%"
          onChangeText={(text) => {
            validityHandler(text, "confirmuserpassword");
          }}
          value={confirmuserpassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign In"
          color="green"
          onPress={() => {
            addUser();
          }}
        />
      </View>
      <Text>{addUserResponse}</Text>
    </View>
  );
};

export default SignUpComp;
