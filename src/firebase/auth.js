import { auth } from './firebase'

const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

export {
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword
}
