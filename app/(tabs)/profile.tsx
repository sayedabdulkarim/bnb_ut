import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux"; // Import useDispatch
import { logOutUser } from "@/slices/authSlice";

const Profile = () => {
  const dispatch = useDispatch(); // Get the dispatch function

  const handleLogout = () => {
    dispatch(logOutUser(null)); // Dispatch the logOutUser action
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      {/* Call handleLogout when the Button is pressed */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
