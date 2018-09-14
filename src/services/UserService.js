import { ref, firebaseAuth } from '../firebase';

export function auth (email, pw, fn, ln) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then( (user) => saveUser(user, fn, ln))
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (savedUser, ...moreInfo) {
  let { user } = savedUser;
  return ref.child(`users/${user.uid}`)
    .set({
      email: user.email,
      uid: user.uid,
      firstname: moreInfo[0],
      lastname : moreInfo[1]
    })
    .then(() => user)
}
