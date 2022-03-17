import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Comment from "./comment";
const CommentModule = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={{ flexDirection: "column" }}
    >
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </ScrollView>
  );
};
export default CommentModule;
