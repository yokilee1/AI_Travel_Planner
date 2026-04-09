import { Colors } from "@/constants/theme";
import React from "react";
import { Text, View } from "react-native";

export default function OptionCard({ option, selectTraveler }) {
  return (
    <View
      style={[
        {
          padding: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.light_gray,
          borderRadius: 15,
        },
        selectTraveler?.id == option?.id && {
          borderWidth: 3,
          borderColor: Colors.primary,
        },
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Kalam-Bold",
          }}
        >
          {option?.title}
          {option.icon}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "Kalam-Light",
            color: Colors.gray,
          }}
        >
          {option?.desc}
        </Text>
      </View>
    </View>
  );
}
