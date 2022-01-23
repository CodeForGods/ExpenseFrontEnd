import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  StyleSheet,
  FlatList,
  Modal,
} from "react-native";
import NativeModalManager from "react-native/Libraries/Modal/NativeModalManager";
import AddExpense from "../components/AddExpense";
import Card from "../components/Card";

const catagories = ["Daily", "Monthly", "Yearly"];

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textHeader}>Here Is Your Daily Report</Text>

      <FlatList
        data={catagories}
        renderItem={(itemData) => (
          <Card data={itemData.item} data2={props.navigation} />
        )}
      />
    </View>
     
    
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "900",
  },
});
export default Home;
