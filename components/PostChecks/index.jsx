import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { Video } from "expo-av";

const PostChecks = (props) => {
  const { post } = props;

  // const [paused, setPaused] = useState((initialState = false));
  // const onPlayPausePress = () => {
  //   setPaused(!paused);
  // };

  return (
    <View style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={onPlayPausePress}> */}
      <View>
        <Video
          source={post.videoUri}
          style={styles.postVideo}
          resizeMode="contain"
          isLooping
          shouldPlay
        />
      </View>
      {/* </TouchableWithoutFeedback> */}

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image
            style={styles.profilePicture}
            source={post.user.imageUri}
          ></Image>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={"heart"} size={40} color={"white"} />
            <Text style={styles.statsLabel}>{post.likes}</Text>
          </View>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={"message"}
              size={40}
              color={"white"}
            />
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
    </View>
  );
};

export default PostChecks;
