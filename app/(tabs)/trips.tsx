import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Trips = () => {
  const { userInfo, isAuthenticated, name } = useSelector(
    (state: RootState) => state.authReducer
  );

  return (
    <View>
      <Text
        onPress={() =>
          console.log({
            userInfo,
            isAuthenticated,
            name,
          })
        }
      >
        Trips
      </Text>
      <Text>Trips</Text>
      <Text>Trips</Text>
      <Text>Trips</Text>
      <Text>Trips</Text>
      <Text>Trips</Text>
      <Text>Trips</Text>
      <Text>Trips</Text>
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({});
