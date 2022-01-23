import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from "react-native";

import axios from "axios";
const LoginScreen = (props) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleUserName = (text) => {
    setUserName(text);
  };
  const handleUserPassword = (text) => {
    setUserPassword(text);
  };

  const loginUser = () => {
    var formJson = {
      userName: userName,
      userPassword: userPassword,
    };

    axios
      .post("http://192.168.1.40:8080/api/v1/loginUser/", formJson)
      .then((response) => {
        console.log(response);
        navigateToHomePage();
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };

  const navigateToHomePage = () => {
    props.navigation.navigate("Home");
  };

  const createTwoButtonAlert = (myMessage) =>
    Alert.alert("Authentication Error", JSON.stringify(myMessage), [
      { text: "OK" },
    ]);

  const styles = StyleSheet.create({
    screen: {
      backgroundColor: "black",
      height: "120%",
    },
    loginStyles: {
      flex: 0.8,
      justifyContent: "center",
      alignItems: "center",

      // textDecorationColor:"blue"
    },
    brandName: {
      fontWeight: "400",
      fontSize: 30,
      color: "white",
    },
    textInput: {
      backgroundColor: "rgb(80,80,80)",
      alignItems: "flex-start",
      padding: 10,
      borderRadius: 5,
      margin: 10,
    },
    bottomContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      position: "relative",
      bottom: 10,
      width: "80%",
      alignItems: "center",
      borderTopColor: "rgb(80,80,80)",
      borderWidth: 1,
    },
    error: {
      borderRadius: 10,
      height: 40,
      justifyContent: "center",
      backgroundColor: "rgb(180,80,80)",
      padding: 10,
    },
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={styles.loginStyles}>
          <Text style={styles.brandName}>Expense Tracker</Text>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Phone number, email address or username"
              placeholderTextColor={"rgb(200,200,200)"}
              style={{
                color: "white",
                width: 300,
                maxWidth: 300,
                height: 30,
              }}
              value={userName}
              onChangeText={(text) => {
                handleUserName(text);
              }}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={"rgb(200,200,200)"}
              style={{
                color: "white",
                width: 300,
                maxWidth: 300,
                height: 30,
              }}
              value={userPassword}
              onChangeText={(text) => {
                handleUserPassword(text);
              }}
            />
          </View>
          <View style={{ width: 320, margin: 10 }}>
            <Button
              title="Log In"
              onPress={() => {
                loginUser();
              }}
            />
            <View
              style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
            >
              <Text style={{ color: "rgb(200,200,200)", fontSize: 13 }}>
                Facing Problem with logging in?
              </Text>
              <TouchableWithoutFeedback>
                <Text
                  style={{ color: "rgba(120, 255, 255, 0.9)", fontSize: 13 }}
                >
                  Get help .
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={{ color: "rgb(200,200,200)", fontSize: 13 }}>
            Don't have an Account?
          </Text>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={{ color: "rgba(120, 255, 255, 0.9)", fontSize: 13 }}>
              Sign up.
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
