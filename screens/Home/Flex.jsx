import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import Post from '../../components/Post/PostFlex'

import {
  getFirestore,
  doc,
  getDocs,
  getDoc,
  collection,
  query,
  where
} from '@firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { db, auth } from '../../config'

const usersRef = collection(db, 'users')

async function populatePosts() {
  const posts = []
  const postsSnapshot = await getDocs(collection(db, 'posts'))

  for (const document of postsSnapshot.docs) {
    const userRef = doc(db, 'users', '1HNBZ0t2lbQuSHIOr7D11YAZNFs2')
    const user = await getDoc(userRef)
    const docData = document.data()
    posts.push({
      id: docData.timestamp.seconds,
      //docData.url
      videoUri: {
        uri: docData.url
      },
      user: {
        id: '1HNBZ0t2lbQuSHIOr7D11YAZNFs2', //Carter's iD
        username: docData.username,
        imageUri: require('../../assets/profile.jpg')
      },
      description: docData.caption,
      likes: 0, // need to add a likes attribute to each post in firestore TODO
      comments: 0 // need to add comments list in each post in firestore TODO
    })
  }
  const populatedPosts = await Promise.all(posts)
  return populatedPosts
}

let posts = []
populatePosts().then(function (response) {
  posts = response
})

const Flex = () => {
  return (
    <View>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Post post={item} />}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  )
}

export default Flex
