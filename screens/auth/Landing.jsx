import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={styles}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  justifyContent: "center",
});
