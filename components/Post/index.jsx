import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { Video } from "expo-av";

const Post = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity> 
          <Video
            source={{ uri: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4' }}
            style={styles.postVideo}
            resizeMode='contain'
            isLooping
            shouldPlay
          />
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
