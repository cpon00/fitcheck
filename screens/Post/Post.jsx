import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { Camera } from 'expo-camera'
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
  <View>
    <View style={styles.cameraContainer}>
      <Camera 
        ref={ref => setCamera(ref)}
        style={styles.fixedRatio} 
        type={type} 
        ratio={'1:1'}
        />
    </View>

    <Button
        title="Flip Image"
        style={{ flex: 1 }}
        onPress={() => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
        }}>
        </Button>
        <Button title="Take Picture" style={{ flex: 1 }} onPress={() => takePicture()}/>
        <Button title="Pick Image From Gallery" style={{ flex: 1 }} onPress={() => pickImage()} />
        <Button title="Save" onPress={() => navigation.navigate('Save', {image})}/>

        {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
  </View>   
  );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    }
})