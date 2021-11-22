import React from "react";
import { View, Text } from "react-native";
import IndividualTag from "./indidualTag";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function TagModal() {
  return (
    <View style={modalStyles.modal}>
      <Text style={modalStyles.tag}>Tags</Text>

      <IndividualTag />
      <IndividualTag />
      <IndividualTag />
      <IndividualTag />
    </View>
  );
}

export default TagModal;

const modalStyles = StyleSheet.create({
  modal: {
    position: "absolute",
    width: "100%",
    bottom: -20,
    backgroundColor: "black",
    alignSelf: "center",
    backgroundColor: "#f5f5f5",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  tag: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "300",
  },
});
