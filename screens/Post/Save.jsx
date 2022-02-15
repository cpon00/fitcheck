import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { app, db } from "../../config";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "@firebase/auth";
import {
  doc,
  collection,
  addDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Icon } from "react-native-elements";

export default function SaveScreen(props) {
  const [caption, setCaption] = useState("");
  const storage = getStorage(app);
  const auth = getAuth();
  const metadata = {
    contentType: "image/jpeg",
  };

  const uploadImage = async () => {
    
    const storage = getStorage();
    const imageRef = ref()

    const response = await fetch(props.route.params.image);
    const blob = await response.blob();
    const storagePath = `posts/${auth.currentUser.uid}/${Math.random().toString(
      36
    )}`;
    const storageRef = ref(storage, storagePath);
    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error.code)
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error.code);
            break;
          case "storage/canceled":
            console.log(error.code);

            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            console.log(error.code);

            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const docRef = doc(collection(db, "posts"));
          const postData = {
            caption: caption,
            //tags: TODO,
            //likes: TODO,
            //comments: TODO,
            timestamp: serverTimestamp(),
            url: downloadURL,
          };
          const docTask = setDoc(docRef, postData).then(
            console.log("Doc Uploaded!")
          );
        });
      }
    );
  };

  console.log(props.route.params)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Pressable onPress={() => props.navigation.pop()}>
          <Icon name={"chevron-left"} size={35} />
        </Pressable>
        <Text style={styles.headerText}>New Post</Text>
        <Pressable onPress={() => uploadImage()}>
          <Text style={{ color: "blue", fontWeight: "bold", fontSize: 16 }}>
            Share
          </Text>
        </Pressable>
      </View>
      <View style={styles.hairline} />
      <View style={styles.descriptionContainer}>
        <Image
          source={{uri: props.route.params.source}}
          style={{ height: 100, width: 100, marginLeft: "2%" }}
        />
        <TextInput
          multiline={true}
          placeholder="Write a description..."
          onChangeText={(caption) => setCaption(caption)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.hairline} />
      <Pressable style={styles.pressableContainer}>
        <Text style={styles.descriptionText}>Add Location</Text>
        <Icon name="chevron-right" style={{ marginRight: "10%" }} />
      </Pressable>
      <View style={styles.hairline} />
      <Pressable style={styles.pressableContainer}>
        <Text style={styles.descriptionText}>Add Tags</Text>
        <Icon name="chevron-right" style={{ marginRight: "10%" }} />
      </Pressable>
      <View style={styles.hairline} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "8%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  inputStyle: {
    marginRight: "30%",
    fontSize: 16,
    padding: 10,
    paddingTop: 10,
  },
  hairline: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 5,
  },
  descriptionContainer: {
    flexDirection: "row",
  },
  descriptionText: {
    fontWeight: "400",
    marginLeft: "5%",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  pressableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
