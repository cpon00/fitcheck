import React, { useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

export default function Post({ navigation }) {
  //camera and gallery permissions
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  //camera and image hooks
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  //camera settings
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flash, setFlash] = useState("off");
  const [flashIcon, setFlashIcon] = useState("flash-off");
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
      console.log(data.uri);
      navigateToSave();
    }
  };

  const toggleFlash = () => {
    if (flash === "off") {
      setFlash("on");
      setFlashIcon("flash-on");
    } else {
      setFlash("off");
      setFlashIcon("flash-off");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      navigateToSave();
    } else {
    }
  };

  const navigateToSave = () => {
    navigation.navigate("New Post", { image });
  };

  if (!hasCameraPermission || !hasGalleryPermission) {
    return <Text style={styles.access}>ACCESS REQUIRED</Text>;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          flashMode={flash}
          style={styles.fixedRatio}
          type={type}
          ratio={"1:1"}
        />
      </View>

      <View style={styles.topContainer}>
        <Pressable
          style={styles.topContainerButtons}
          onPress={() => {
            navigation.pop();
          }}
        >
          <Icon size={50} name="chevron-left" color={"#f8f4f4"} />
        </Pressable>
        <Pressable onPress={() => toggleFlash()}>
          <Icon size={30} name={flashIcon} color={"#f8f4f4"} />
        </Pressable>
      </View>

      <View style={styles.cameraButtonContainer}>
        <Pressable
          style={styles.cameraButton}
          onPress={() => {
            pickImage();
          }}
        >
          <Icon name="collections" color={"#f8f4f4"} />
        </Pressable>

        <Pressable
          style={styles.captureCamera}
          onPress={() => {
            takePicture();
          }}
        >
          <Icon size={70} name="adjust" color={"#f8f4f4"} />
        </Pressable>
        <Pressable
          style={styles.cameraButton}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Icon name="switch-camera" color={"#f8f4f4"} />
        </Pressable>

        {console.log(image) && (
          <Image source={{ uri: image }} style={{ flex: 1 }} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  fixedRatio: {
    //aspectRatio: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  cameraButton: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginTop: 10,
    marginHorizontal: 5,
  },
  cameraButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    top: "175%",
    // paddingBottom: 10,
  },
  // screen: {
  //   backgroundColor: 'red',
  // },
  captureCamera: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    color: "white",
    borderRadius: 100,
    marginTop: 10,
    marginHorizontal: 5,
  },
  access: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "700",
  },
  topContainer: {
    top: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
    alignSelf: "center",
  },
  topContainerButtons: {},
});
