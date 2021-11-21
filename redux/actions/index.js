import { getAuth } from '@firebase/auth'
import {db} from '../../App'
import {doc, getDoc} from '@firebase/firestore'
import { USER_STATE_CHANGE } from '../constants/index';

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