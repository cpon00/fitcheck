import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { initializeAuth } from "firebase/auth";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from 'firebase/auth/react-native'

const firebaseConfig = {
    apiKey: "AIzaSyDa0oitU7ovHN2ARWdDf0c3OWm7ytk4wmA",
    authDomain: "fitcheck-3de6c.firebaseapp.com",
    projectId: "fitcheck-3de6c",
    storageBucket: "fitcheck-3de6c.appspot.com",
    messagingSenderId: "406176712188",
    appId: "1:406176712188:web:cff2c250e1ab40fadb9e79",
    measurementId: "G-7RHFFYST2R",
  };

export const app = initializeApp(firebaseConfig);
//https://github.com/firebase/firebase-js-sdk/issues/1847 for fixing AsyncStorage issue.
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(useAsyncStorage)})
export const db = getFirestore(app);