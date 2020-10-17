import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCCuV7zSMJhG2SGT-8b5FMgpwmYgDHaaQI",
  authDomain: "wireless-buzzer-828e5.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-828e5.firebaseio.com",
  projectId: "wireless-buzzer-828e5",
  storageBucket: "wireless-buzzer-828e5.appspot.com",
  messagingSenderId: "453949687431",
  appId: "1:453949687431:web:b2955585d4f899fe2d9a22",
  measurementId: "G-LRYKNJNBCK"
};
firebase.initializeApp(firebaseConfig)
export default firebase.database();