import React, { useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { Video } from "expo-av";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostChecks = (props) => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [paused, setPaused] = useState(true);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  //need variable to tell if we like the post or not from backend TODO BACKEND
  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={post.videoUri}
          style={styles.postVideo}
          resizeMode="contain"
          isLooping
          shouldPlay={paused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.rightContainer}>
        <Image
          style={styles.profilePicture}
          source={post.user.imageUri}
        ></Image>

        <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
          <MaterialCommunityIcons
            name={"heart"}
            size={40}
            color={isLiked ? "red" : "white"}
          />
          <Text style={styles.statsLabel}>{post.likes}</Text>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={"message"} size={40} color={"white"} />
          <Text style={styles.statsLabel}>{post.comments}</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={"tag"} size={40} color={"white"} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.handle}>@{post.user.username}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
    </View>
  );
};

export default PostChecks;