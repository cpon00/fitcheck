import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

function ProfileWindow({ name, img}) {
  return [
    <ImageBackground
      style={styles.image}
      source={img}
      imageStyle={{ borderRadius: 5 }}
    >
    </ImageBackground>,
  ];
}
const styles = StyleSheet.create({
  image: {
    width: 160,
    height:160,
    marginRight:30,
    marginBottom:20,
    borderRadius: 16,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation: 3,
  },

  shadowContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
  },
});
export { ProfileWindow };