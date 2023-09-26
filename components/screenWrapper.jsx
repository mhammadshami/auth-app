import { View, Text, Platform, StatusBar } from "react-native";
import React from "react";

export default function screenWrapper({ children }) {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS === "ios"
    ? 30
    : 0;

  return <View style={{ paddingTop: statusBarHeight }}>{children}</View>;
}
