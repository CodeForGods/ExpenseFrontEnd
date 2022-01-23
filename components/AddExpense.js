import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  StyleSheet,
} from "react-native";

const AddExpense = (props) => {
  console.log("------------");
  console.log(props.navigate);
  const vis = props.isVisible;
  
  const styles = StyleSheet.create({
    screen: {
      display: vis,
      margin: 50,
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonContainer:{
      flexDirection:'row',
      justifyContent:"center",
      padding:10
    }
  });
  // const [isValid, setIsValid] = useState("");
  const [numValue, setNumValue] = useState("");
  const checkIsNumber = (text) => {
    console.log(text);

    if (isNaN(text)) {
      setNumValue("");
    } else {
      setNumValue(text);
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Description" style={{ width: 100 }} />
        <TextInput
          placeholder="Expense Amount"
          keyboardType="numeric"
          style={{ width: 150 }}
          onChangeText={(text) => checkIsNumber(text)}
          value={numValue}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Discard" color="red" onPress={()=>props.navigate.goBack()} ></Button>
        <Button title="Add"></Button>
      </View>
    </View>
  );
};

export default AddExpense;
