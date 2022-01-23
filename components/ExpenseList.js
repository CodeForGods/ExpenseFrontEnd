import React from "react";
import { View, Text, FlatList } from "react-native";

const ExpenseList = (props) => {
  let data = [
    {
      id: 1,
      country: "Germany",
      population: 83623528,
    },
    {
      id: 2,
      country: "Austria",
      population: 8975552,
    },
    {
      id: 3,
      country: "Switzerland",
      population: 8616571,
    },
  ];
  console.log(data[1].id);
  return <View>
      
  </View>;
};

export default ExpenseList;
