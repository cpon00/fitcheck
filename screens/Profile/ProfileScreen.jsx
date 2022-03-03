import React from "react";
import FlexView from "./FlexView.jsx"
import ChecksView from "./ChecksView.jsx"
import { View, Text, StyleSheet, Button, Alert} from "react-native";
import {Avatar} from 'react-native-elements';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import {useNavigation} from '@react-navigation/native'

import { getAuth } from '@firebase/auth'

import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {app, db} from '../../config'
//import storage from '@react-native-firebase/storage';

const Tab = createMaterialTopTabNavigator()

const auth = getAuth()

function Profile() {
  const navigation = useNavigation()
  const [index, setIndex] = useState(0);
  const [userName, setUserName] = useState();
  const [following, setFollowing] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [postNumber, setPostNumber] = useState(0);
  const [bio, setBio] = useState();
  const [pronouns, setPronouns] = useState();
  const [website, setWebsite] = useState();
  const firestore = getFirestore();
  const [imageUrl, setImageUrl] = useState(undefined);

  
  // useEffect(() => {
  //   storage()
  //     .ref('/pfp/IMG_8322.jpeg') //name in storage in firebase console
  //     .getDownloadURL()
  //     .then((url) => {
  //       console.log("img url:" + url)
  //       setImageUrl(url);
  //     })
  //     .catch((e) => console.log('Errors while downloading => ', e));
  // }, []);

  // async function getpfp() {
  //   //const ref = firebase.storage().ref('/pfp/IMG_8322.jpeg');
  //   //this.pfp = await storage().ref.getDownloadURL();
  //   setImageUrl(await storage().ref('/pfp/IMG_8322.jpeg').getDownloadURL())
  //   console.log("ran")
  // }
  // getpfp()
  
  
  const user = doc(firestore, `users/${auth.currentUser.uid}`)

  async function readASingleDocument() {
    // const storageRef = storage.getReference('/pfp/IMG_8322.jpeg')
    // setImageUrl(storageRef.getDownloadUrl())
    const userSnapshot = await getDoc(user);
    const docData = userSnapshot.data();
    setUserName(docData.name)
    setFollowers(docData.followers)
    setFollowing(docData.following)
    setPostNumber(docData.postNumber)
    setPronouns(docData.pronouns)
    setWebsite(docData.website)
    setBio(docData.bio)
}
readASingleDocument()

const storage = getStorage()
const pfpRef = ref(storage, '/pfp/IMG_8322.jpeg')

getDownloadURL(pfpRef)
  .then((url) => {
    setImageUrl(url)
    // `url` is the download URL for 'images/stars.jpg'
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  })
  .catch((error) => {
    console.log("error");
    //put a default picture here
  });


  return (
    //<View style={{ flex: 1, alignItems: 'center' }}></View>

    <SafeAreaProvider>
      <View style={{ top: "0.2%", alignItems: 'center' }}>
        <Avatar 
        rounded
        size = 'large'
        source={{uri: imageUrl}}>
        </Avatar>
        <Text style = {styles.username}> {userName} </Text>
        <View style ={{flexDirection: "row"}}>
          <View style = {styles.left}>
            <Text style = {styles.followersTextNumber}>{following}</Text>
            <Text style = {styles.followersText}>Following</Text>
          </View>

          <View style = {styles.middle}>
            <Text style = {styles.followersTextNumber}>{followers}</Text>
            <Text style = {styles.followersText}>Followers</Text>
          </View>

          <View style = {styles.right}>
            <Text style = {styles.followersTextNumber}>{postNumber}</Text>
            <Text style = {styles.followersText}>Posts</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} 
          onPress={() => navigation.push('SettingsScreen')}>
          <Text style = {styles.followersTextNumber}>Edit Profile</Text>
        </TouchableOpacity>

        <Text style = {styles.bio}>{bio}</Text>
        <Text style = {styles.pronouns}>{pronouns}</Text>
      </View>

      <Tab.Navigator>
        <Tab.Screen
          name = "Flex"
          component = {FlexView}
          options = {{
            tabBarLabel: "Flex",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="fire" color={color} size ={24}/>
            ),
          }}
        />

          <Tab.Screen
            name = "Checks"
            component = {ChecksView}
            options = {{
              tabBarLabel: "Checks",
              tabBarShowLabel: false,
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="check-outline" color={color} size={24}/>
              )
            }}
          />
      </Tab.Navigator>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  
  profilePicture: {
    marginTop: 15
  },
  
  username: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 20
    
  },

  left: {
    top: 0,
    right: 30,
    bottom: 10,
    alignItems: 'center'
  },

  middle: {
    top: 0,
    right: 7,
    bottom: 10,
    alignItems: 'center'
  },

  right: {
    top: 0,
    left: 23,
    bottom: 10,
    alignItems: 'center'
  },

  followers: {
    marginTop: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
  },

  followersText: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'

  },

  followersTextNumber: {
    fontWeight: 'bold'
  },

  button: {
    top: 15,
    marginBottom: 10,
    width: "200%",
    borderWidth: 1,
    borderRadius:7,
    borderColor:'grey',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    alignSelf: 'center'
  },

  bio: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 5
  },
  pronouns: {
    fontSize: 12,
    marginBottom: 8
  }
})

export default Profile;