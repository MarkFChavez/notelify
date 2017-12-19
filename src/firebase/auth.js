import { auth } from './firebase'

const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

export {
  doSignInWithEmailAndPassword
}