import React, { Component, useState} from 'react'
import { Text, View, TextInput, Image, Button } from 'react-native'
import { app, db} from '../../config'

import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { getAuth } from '@firebase/auth'
import { doc, collection, addDoc, setDoc, serverTimestamp } from 'firebase/firestore'

export default function Save(props) {
    const [caption, setCaption] = useState("")

    const storage = getStorage(app)
    const auth = getAuth()
    const metadata = {
        contentType: 'image/jpeg'
    }

    const uploadImage = async () => {
        const response = await fetch(props.route.params.image)
        const blob = await response.blob()
        const storagePath = `posts/${auth.currentUser.uid}/${Math.random().toString(36)}`
        const storageRef = ref(storage, storagePath)
        const uploadTask = uploadBytesResumable(storageRef, blob, metadata)

        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
          }, 
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;

                // ...

              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            const docRef = doc(collection(db, 'posts'))
            const postData = {
                caption: caption,
                //tags: TODO,
                //likes: TODO,
                //comments: TODO,
                timestamp: serverTimestamp(),
                url: downloadURL,
            }
            const docTask = setDoc(docRef, postData).then(
                console.log("Doc Uploaded!")
            )
            });
          }
        )
      }
    return(
        <View style={{flex: 1}}>
            <Image source={{uri: props.route.params.image}}/>
            <TextInput placeholder="Write a description..." onChangeText={(caption) => setCaption(caption)}/>
            <Button title="Save" onPress={() => uploadImage()}/>

        </View>
    )
}