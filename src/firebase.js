import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCwJXe5dHqS0kkV8GpHNQufbOmnaBAnPSw",
    authDomain: "reactbase-22be2.firebaseapp.com",
    databaseURL: "https://reactbase-22be2.firebaseio.com"
};
firebase.initializeApp(config);
//export default firebase;

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
