import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { Video } from "expo-av";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import TagModal from "../Tag/tagModal";
import CommentModal from "../Comments/commentModal";

const PostFlex = (props) => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [paused, setPaused] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCommentModalVisible, setCommentModalVisible] = useState(false);
  const isVideo = false;

  //for video
  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const toggleTagModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleCommentModal = () => {
    setCommentModalVisible(!isCommentModalVisible);
  };

  // const ifVideo = () => {
  //   if (post.videoUri.includes(".mp4")) {
  //     isVideo=true
  //     console.log(isVideo)
  //     console.log(isVideo)
  //     console.log(isVideo)
  //     console.log(isVideo)
  //   }
  // }

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
      {/* FOR VIDEO INTEGRATION  */}
      {/* <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={post.videoUri}
          style={styles.postVideo}
          resizeMode="contain"
          isLooping
          shouldPlay={paused}
        />
      </TouchableWithoutFeedback> */}

      <Image source={post.videoUri} style={styles.postVideo} />

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

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={toggleCommentModal}
        >
          <MaterialCommunityIcons name={"message"} size={40} color={"white"} />
          <Text style={styles.statsLabel}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={toggleTagModal}>
          <MaterialCommunityIcons name={"tag"} size={40} color={"white"} />
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        swipeDirection={["down"]}
        onBackdropPress={toggleTagModal}
        style={{ zIndex: -100 }}
      >
        <TagModal />
      </Modal>

      <Modal
        isVisible={isCommentModalVisible}
        swipeDirection={["down"]}
        onBackdropPress={toggleCommentModal}
        style={{ justifyContent: "flex-end" }}
      >
        <CommentModal />
      </Modal>

      <View style={styles.bottomContainer}>
        <Text style={styles.handle}>@{post.user.username}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
    </View>
  );
};

export default PostFlex;
