import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndividualTag = (props) => {
  const { post } = props;

  return (
    <Pressable>
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
    </Pressable>
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
    width: 210,
    height: 75,
    top: 7.5,
    position: "absolute",
    alignSelf: "flex-end",
  },
  brandText: {
    marginBottom: 5,
    fontWeight: "600",
  },
  clothingText: {
    fontWeight: "300",
  },
});
