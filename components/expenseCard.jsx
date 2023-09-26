import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { categoryBG, colors } from "../theme";

const ExpenseCard = ({ item }) => {
  return (
    <View
      style={{ backgroundColor: categoryBG[item.category] }}
      className="flex-row justify-between items-center p-3 mb-2 bg-red-300 rounded-2xl px-5"
    >
      <View>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>
      <View>
        <Text>$ {item.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({});
