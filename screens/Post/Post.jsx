import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { Camera } from 'expo-camera'
import { Icon } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'

export default function Post({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [camera, setCamera] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.front)

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted')

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, [])

  const takePicture = async () => {
    if(camera){
        console.log("here")
        const data = await camera.takePictureAsync(null)
        setImage(data.uri)
    }
  }

  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
      })
      console.log(result)

      if (!result.cancelled) {
          setImage(result.uri)
      }
  }

  if (!hasCameraPermission|| !hasGalleryPermission) {
    return <Text>Access required :(</Text>;
  }

  return (
  <View style={styles.screen}>
    <View style={styles.cameraContainer}>
      <Camera 
        ref={ref => setCamera(ref)}
        style={styles.fixedRatio} 
        type={type} 
        ratio={'1:1'}
        />
    </View>

    <View style={styles.cameraButtonContainer}>
      <Pressable
          style={styles.cameraButton}
          onPress={() => {
          setType(
              type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
          }}>
          <Icon name='switch-camera'/>
      </Pressable>
      <Pressable style={styles.cameraButton} onPress={() => takePicture()}><Icon name="adjust"/></Pressable>
      <Pressable style={styles.cameraButton} onPress={() => pickImage()}><Icon name="collections"/></Pressable>
      {console.log(image) && <Image source={{ uri: image }} style={{ flex: 1 }} />}
     </View>
  </View>   
  );
}

const styles = StyleSheet.create({
    cameraContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    fixedRatio: {
      flex: 1,
      aspectRatio: 1,
      backgroundColor: 'white',
    },
    cameraButton: {
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      backgroundColor: 'red',
      color: 'black',
      borderRadius: 100,
      marginTop: 10,
      marginHorizontal: 5
    },
    cameraButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    screen: {
      backgroundColor: 'white',
    }
})