import React, { useState, useEffect, useRef } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
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
  const cameraRef = useRef()

  //camera settings
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flash, setFlash] = useState("off");
  const [flashIcon, setFlashIcon] = useState("flash-off");

  useEffect(() => {
    (async () => {
      const cameraPermissions = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermissions.granted)
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const galleryPermissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryPermissions.granted)
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.1, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri
      if (source) {
        navigateToSave(source)
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      const source = result.uri
      navigateToSave(source);
    }
  };

  const navigateToSave = ( source ) => {
    navigation.navigate("New Post", { source });
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

  if (!hasCameraPermission || !hasGalleryPermission) {
    return <Text style={styles.access}>Access Required</Text>;
  }

  return (
    <View>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
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
  },
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
