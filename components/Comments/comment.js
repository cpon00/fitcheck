import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";

const Comment = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/pawn.jpg")}
            style={styles.profile}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.accName}>@Jkalili{" • " + "date"}</Text>
          <Text style={styles.comment}>{"comment"}</Text>
          <Text></Text>
        </View>
      </View>
      <View style={styles.hairline}></View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
  },
  hairline: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
    backgroundColor: "gray",
    alignSelf: "center",
  },
  accName: {
    fontWeight: "bold",
    fontSize: 12,
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 35,
    marginRight: 5,
  },
  comment: {
    fontSize: 15,
    marginRight: 50,
    fontWeight: "300",
  },
  imageContainer: {
    width: 40,
  },
});
export default Comment;
