import React from "react";
import { OpenCamera } from "./OpenCamera";
import { View, Text } from "react-native";

function Upload() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Upload</Text>
      <OpenCamera />
    </View>
  );
}

export { Upload };
