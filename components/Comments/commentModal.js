import React from "react";
import { View, Dimensions } from "react-native";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-paper";
import CommentModule from "./commentModule";
const CommentModal = () => {
  return (
    <View style={modalStyles.modal}>
      <View style={modalStyles.commentContainer}>
        <CommentModule />
      </View>

      <KeyboardAvoidingView
        style={modalStyles.bottomBar}
        behavior="position"
        keyboardVerticalOffset="218"
      >
        <TextInput
          placeholder="Add a comment..."
          right={
            <TextInput.Icon
              name="send"
              onPress={() => alert("comment posted")}
            />
          }
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          selectionColor={"#404040"}
          style={{ height: 60 }}
          blurOnSubmit={false}
          autoFocus={false}
        ></TextInput>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CommentModal;

const modalStyles = StyleSheet.create({
  modal: {
    width: Dimensions.get("window").width,
    bottom: "-3%",
    alignSelf: "center",
    backgroundColor: "#f5f5f5",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: "80%",
  },
  bottomBar: {
    position: "absolute",
    height: "7%",
    width: "100%",
    bottom: "8%",
  },
  commentContainer: {
    alignSelf: "center",
    height: "83%",
    width: "95%",
    top: "2%",
  },
});
