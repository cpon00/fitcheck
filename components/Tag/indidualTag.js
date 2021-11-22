import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndividualTag = (props) => {
  const { post } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(`${post.tagUrl}`)}
    >
      <Image source={post.tagImageUri} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.brandText}>{post.tagBrandText}</Text>
        <Text style={styles.clothingText}>{post.tagClothingText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IndividualTag;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "90%",
    borderRadius: 15,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    borderRadius: 15,
    height: 75,
    width: 75,
    margin: 7.5,
  },
  textContainer: {
    width: 230,
    height: 75,
    top: 7.5,
    right: 7.5,
    position: "absolute",
  },
  brandText: {
    marginBottom: 5,
    fontWeight: "600",
  },
  clothingText: {
    fontWeight: "300",
  },
});
