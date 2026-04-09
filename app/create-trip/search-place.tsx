import { Colors } from "@/constants/theme";
import { CreateTripContext } from "@/context/CreateTripContext";
import { useNavigation, useRouter } from "expo-router";
import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchPlace() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "搜索地点",
    });
  }, []);

  useEffect(() => {
    console.log("Trip data updated:", tripData);
  }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="搜索"
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(data.description);
          console.log(details?.geometry.location);
          console.log(details?.photos[0]?.photo_reference);
          console.log(details?.url);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });
          router.push("/create-trip/select-traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "zh-CN",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 25,
          },
        }}
      />
    </View>
  );
}
