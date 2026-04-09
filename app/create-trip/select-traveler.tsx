import OptionCard from "@/components/CreateTrip/OptionCard";
import { Colors } from "@/constants/theme";
import { CreateTripContext } from "@/context/CreateTripContext";
import { useNavigation } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SelectTravelerList } from "../../constants/Option";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const [selectTraveler, setSelectTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "选择同行者",
    });
  }, []);

  useEffect(() => {
    setTripData({
      ...tripData,
      travelerCount: selectTraveler,
    });
  }, [selectTraveler]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "Kalam-Bold",
          marginTop: 30,
        }}
      >
        Who's traveling
      </Text>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Kalam-Light",
          }}
        >
          Choose your traveling companions:
        </Text>

        <FlatList
          scrollEnabled={true}
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectTraveler(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectTraveler={selectTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.white,
            fontSize: 18,
            fontFamily: "Kalam-Bold",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
