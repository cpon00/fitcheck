import { getAuth } from '@firebase/auth'
import {doc, collection, where, getDoc, getDocs, orderBy, query, Timestamp} from '@firebase/firestore'
import { USER_STATE_CHANGE, USER_STATE_POSTS_CHANGE } from '../constants/index';

import {app, db} from '../../config'


const auth = getAuth()

export function fetchUser(){
  return ((dispatch) => {
    const docRef = doc(db, 'users', auth.currentUser.uid)
    const docSnap = getDoc(docRef)
    .then((snapshot) => {
      if(snapshot.exists){
        dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
      } else {
        console.log('DOES_NOT_EXIST')
      }
    })
  })
}

export function fetchUserPosts(){
  return ((dispatch) => {
    const q = query(collection(db, 'posts'), where('id', '==', auth.currentUser.uid), orderBy("timestamp"))
    const snapshot = getDocs(q).then((snapshot) => {
      let posts = snapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        return {id, ...data}
      })
      console.log(posts)
      dispatch({type: USER_POSTS_STATE_CHANGE, posts})
    })
  })
}