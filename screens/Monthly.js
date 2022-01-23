import React, { useState } from "react";

import {
  View,
  Text,
  Modal,
  Button,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import AddExpense from "../components/AddExpense";
import ExpenseList from '../components/ExpenseList';
const Monthly = (props) => {

  const { addExpense,navItem } = props.route.params;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View >
        <View>
          <AddExpense isVisible={addExpense} navigate = {navItem} />
        </View>
        <View style={styles.screen}>
          <Text>My Monthly Expense List</Text>
          <ExpenseList/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
    screen:{
      alignItems:'center'
      
      
    }
});
export default Monthly;
