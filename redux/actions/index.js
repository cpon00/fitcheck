import { getAuth } from '@firebase/auth'
import {doc, getDoc, orderBy, Timestamp} from '@firebase/firestore'
import { USER_STATE_CHANGE } from '../constants/index';

import {app, db} from '../../config'


export function fetchUser(){
  return ((dispatch) => {
    const auth = getAuth()
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
    const auth = getAuth()
    const docRef = doc(db, 'posts', auth.currentUser.uid)
    const docSnap = getDoc(docRef)
    .then((snapshot) => {
      if(snapshot.exists){
        console.log(snapshot.docs)
        console.log("DOCS HERE")
      } else {
        console.log('DOES_NOT_EXIST')
      }
    })
  })
}