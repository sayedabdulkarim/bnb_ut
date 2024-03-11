import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux"; // Import useDispatch
import { setAuthenticated } from "@/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch(); // Get the dispatch function

  const handleLogin = () => {
    dispatch(setAuthenticated(true)); // Dispatch the logOutUser action
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
