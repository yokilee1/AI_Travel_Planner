import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function StartNewTripCard() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={24} color="black" />

      <Text
        style={{
          fontFamily: "Kalam-Bold",
          fontSize: 25,
        }}
      >
        No trip planned yet
      </Text>
      <Text
        style={{
          fontFamily: "Kalam-Light",
          fontSize: 15,
          textAlign: "center",
          color: Colors.gray,
        }}
      >
        Looks like its time to plan a new travel experinece! Get Started below
      </Text>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: "Kalam-Regular",
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
