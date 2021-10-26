import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const Post = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image
            style={styles.postVideo}
            source={require("../../assets/photos/testPhoto.jpg")}
          ></Image>
        </View>
      </TouchableOpacity>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image
            style={styles.profilePicture}
            source={require("../../assets/photos/pawn.jpg")}
          ></Image>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={"heart"} size={40} color={"white"} />
            <Text style={styles.statsLabel}>5.7k</Text>
          </View>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={"message"}
              size={40}
              color={"white"}
            />
            <Text style={styles.statsLabel}>132</Text>
          </View>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={"share"} size={40} color={"white"} />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>@jkalili</Text>
          <Text style={styles.description}>My first post!</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
