import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useGetAllPostsQuery } from "@/apiSlices/postApiSlice";

const Trips = () => {
  //misc
  const { userInfo, isAuthenticated, name } = useSelector(
    (state: RootState) => state.authReducer
  );

  //queries n mutation
  const { data: posts, error, isLoading } = useGetAllPostsQuery();

  //async
  useEffect(() => {
    if (posts) {
      console.log(posts);
    }
  }, [posts]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error occurred</Text>;

  return (
    <View>
      <Text
        onPress={() =>
          console.log({
            userInfo,
            isAuthenticated,
            name,
            posts,
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
