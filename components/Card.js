import React, { useState } from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableHighlight,
  Button,
} from "react-native";
import {} from "react-native-web";
import AddExpense from "./AddExpense";

const Card = (props) => {
  const prevFiveExpenses = ["-300", "-200", "-100", "-700", "-900"];
  return (
    <View style={styles.carContainer}>
      <View style={styles.upperHeader}>
        <Text style={{ fontWeight: "bold", fontSize: 19 }}>
          {props.data} Expense :
        </Text>
        <Text style={{ fontWeight: "300", fontSize: 19 }}>Number INR</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ alignItems: "center" }}>
          <Text>Last 5</Text>
          <FlatList
            data={prevFiveExpenses}
            renderItem={(itemData) => (
              <View style={styles.listContainer}>
                <Text>{itemData.item}</Text>
              </View>
            )}
          />
        </View>
        <View style={{ flex: 1, maxWidth: 150, justifyContent: "center" }}>
          <View style={{ marginBottom: 10 }}>
            <Button title="You are Balanced??" color="red" />
          </View>
          <Button
            title="Add +"
            color="violet"
            onPress={() =>
              props.data2.navigate("Month", {
                addExpense: "flex",
                navItem: props.data2,
              })
            }
          />
        </View>
      </View>
      <View style={{ margin: 5 }}>
        <Button
          title="Show More Details"
          onPress={() =>
            props.data2.navigate("Month", {
              addExpense: "none",
            })
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  carContainer: {
    height: 200,
    width: 300,
    padding: 10,
    margin: 20,
    shadowOffset: { width: 5, height: 10 },
    shadowColor: "blue",
    shadowOpacity: 1,
    elevation: 6,
    backgroundColor: "white",
    borderRadius: 5,
  },
  upperHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    fontWeight: "bold",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  listContainer: {
    margin: 1,
    borderBottomColor: "black",
    backgroundColor: "#0000",
  },
});
export default Card;
