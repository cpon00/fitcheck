import { getAuth } from '@firebase/auth'

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
import { db, auth } from '../config'
// db represents database, auth = authorization

// We are grabbing posts from the CLOUD FIRESTORE posts bucket
// TODO: Add user information to allPosts:
// HOW TO: Attach unique userID to each post
// ACCOMPLISHES: can reference username from usersRef

// Make postRef, make userRef

const usersRef = collection(db, 'users')

async function populatePosts() {
  const posts = []
  const postsSnapshot = await getDocs(collection(db, 'posts'))

  for (const document of postsSnapshot.docs) {
    const userRef = doc(db, 'users', '1HNBZ0t2lbQuSHIOr7D11YAZNFs2')
    const user = await getDoc(userRef)
    // const userQuery = query(
    //   usersRef,
    //   where('id', '==', '1HNBZ0t2lbQuSHIOr7D11YAZNFs2')
    //) // once we have the user...
    const docData = document.data()
    posts.push({
      id: docData.timestamp.seconds,
      videoUri: docData.url,
      user: {
        id: '1HNBZ0t2lbQuSHIOr7D11YAZNFs2',
        username: user.data().name,
        imageUri: require('../assets/profile.jpg')
      },
      description: docData.caption,
      likes: 0, // need to add a likes attribute to each post in firestore TODO
      comments: 0 // need to add comments list in each post in firestore TODO
    })
  }
  console.log('posts ', posts)
  const populatedPosts = await Promise.all(posts)
  return populatedPosts
}
const goodPosts = populatePosts()
console.log('FUCK')
console.log(goodPosts)

export default goodPosts

//async function appendUserDetailsToPost() {
//   const usersSnapshot = await getDocs(collection(db, 'users'))
// }

//caption, url, timestamp

// allPosts.push({
//   id: "p1",
//   videoUri: docData.url,
//   user: {
//     id: "u1",
//     username: "jkalili",
//     imageUri: require("../assets/profile.jpg"),
//   },
//   description: docData.caption,
//   likes: 0,
//   comments: 0,
// })

//   {
//     id: "p1",
//     videoUri: require("../assets/verttestimage.jpg"),
//     user: {
//       id: "u1",
//       username: "jkalili",
//       imageUri: require("../assets/profile.jpg"),
//     },
//     description:
//       "my first post with a very long description wow this is so long blah blah blah test",
//     likes: 437,
//     comments: 19,
//   },
//   {
//     id: "p2",
//     videoUri: require("../assets/grunge.jpg"),
//     user: {
//       id: "u2",
//       username: "blah",
//       imageUri: require("../assets/profile.jpg"),
//     },
//     description:
//       "my first post with a very long description wow this is so long blah blah blah test",
//     likes: 12,
//     comments: 12,
//   },
//   {
//     id: "p3",
//     videoUri: require("../assets/y2k.jpg"),
//     user: {
//       id: "u3",
//       username: "bleeh",
//       imageUri: require("../assets/profile.jpg"),
//     },
//     description: "blah blah blah test",
//     likes: 15,
//     comments: 3,
//   },
//   // FOR VIDEO INTEGRATION
//   //   {
//   //     id: "p2",
//   //     videoUri: require("../assets/testvid.mp4"),
//   //     user: {
//   //       id: "u2",
//   //       username: "carterpon",
//   //       imageUri: require("../assets/pawn.jpg"),
//   //     },
//   //     description: "hey im stinky",
//   //     likes: 10,
//   //     comments: 1,
//   //   },
// ];
