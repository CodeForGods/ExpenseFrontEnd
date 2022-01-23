import React ,{useState}from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const SignInComp = (props) => {
  const styles = StyleSheet.create({
    screen: {
      justifyContent: "center",
      alignItems: "center",
      display: props.visibility,
    },
    username: {
      height: 50,
      width: "80%",
      // backgroundColor: "red",
      justifyContent: "center",
      alignItems: "flex-start",
      borderBottomColor: "black",
      borderBottomWidth: 2,
      fontWeight: "bold",
    },
    userNameInput: {
      fontWeight: "bold",
      fontSize: 20,
      color: "white",
    },
    buttonContainer: {
      margin: 10,
      width: 100,
      
    },
    errorMessage:{
      color:'red',
      fontSize:30,
      fontWeight:'bold'
    }
  });

  const [userName,setUserName] = useState('');
  const [userPassword,setUserPassword] = useState('');
  const handleUserName = (text)=>{
    setUserName(text);

  }
  const handleUserPassword = (text)=>{
    setUserPassword(text);

  }
  const [userResponse,setUserResponse] = useState('');
  const loginUser = ()=>{
    var formJson = {
      userName:userName,
      userPassword:userPassword
    };
    axios
    .post("http://192.168.1.40:8080/api/v1/loginUser/",formJson)
    .then((response)=>{
      console.log(response.data);
      setUserResponse(response.data);
      //  navigateToHomePage();
    }).catch((error)=>{
      setUserResponse(error.response.data.message);
    });
    
  }
  const navigateToHomePage=()=>{
    props.navigationHandler.navigation.navigate("Home");
  }
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
        Sign In Page
      </Text>
      <View style={styles.username}>
        <TextInput
          placeholder="User Name"
          placeholderTextColor={"rgb(72, 0, 241)"}
          style={styles.userNameInput}
          width="100%"
          value={userName}
          onChangeText={(text)=>{
            handleUserName(text)
          }}
        />
      </View>
      <View style={styles.username}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={"rgb(72, 0, 241)"}
          style={styles.userNameInput}
          width="100%"
          value={userPassword}
          onChangeText={(text)=>{
            handleUserPassword(text)
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign In" color="green" onPress={()=>{
          loginUser()
        }}  />
      </View>
      <View >
      <Text style={styles.errorMessage}>{userResponse}</Text>
      </View>
    </View>
  );
};

export default SignInComp;
