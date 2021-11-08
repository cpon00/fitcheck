import React from "react";
import { View, Text } from "react-native";
import Post from "../../components/Post";

const post1 = {
  id: "p1",
  //videoUri: { uri: "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4" },
  user: {
    id: "u1",
    username: "jkalili",
    imageUri: require("../../assets/photos/profile.jpg"),
  },
  description: "my first post",
  likes: 437,
  comments: 19,
};
const post2 = {
  id: "p2",
  videoUri: require("../../assets/photos/testvid.mp4"),
  user: {
    id: "u2",
    username: "carterpon",
    imageUri: require("../../assets/photos/pawn.jpg"),
  },
  description: "hey im stinky",
  likes: 10,
  comments: 1,
};

const Flex = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Flex;
