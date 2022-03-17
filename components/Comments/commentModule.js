import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Comment from "./comment";
const CommentModule = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={{ flexDirection: "column" }}
    >
      <TouchableWithoutFeedback>
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
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default CommentModule;
