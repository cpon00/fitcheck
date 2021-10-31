import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

function SearchWindow({ name, img}) {
  return [
    <ImageBackground
      // style={[styles.image, {height:{height}}]}
      // style = {{height:{height}}}
      style={styles.image}
      source={img}
      imageStyle={{ borderRadius: 5 }}
    >
      <View
        style={styles.imgTextStyle}
      >
        <Text style={styles.imgText}>{name}</Text>
      </View>
    </ImageBackground>,
  ];
}
const styles = StyleSheet.create({
  image: {
    width: 160,
    height:90,
    marginRight:20,
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
  imgText: {
    fontSize: 15,
    fontWeight: "300",
    letterSpacing: 0.5,
    color: "#fff",
    position: "absolute",
  },
  imgTextStyle:{
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  shadowContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
  },
});
export { SearchWindow };
