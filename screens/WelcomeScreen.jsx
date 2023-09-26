import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import components
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            source={require("../assets/images/welcome.gif")}
            className="w-96 h-96"
          />
        </View>

        <View className="mx-5 mb-20">
          <Text
            className={`text-center font-bold text-4xl ${colors.heading} mb-10`}
          >
            Expensify
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            className="p-3 shadow rounded-full mb-5"
            style={{ backgroundColor: colors.button }}
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="p-3 shadow rounded-full"
            style={{ backgroundColor: colors.button }}
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
