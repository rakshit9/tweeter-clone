import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-_aaz57Vbx-2pL2NfYq7h0iW4G3UALhU",
  authDomain: "twitter-clone-47b5b.firebaseapp.com",
  databaseURL: "https://twitter-clone-47b5b.firebaseio.com",
  projectId: "twitter-clone-47b5b",
  storageBucket: "twitter-clone-47b5b.appspot.com",
  messagingSenderId: "290066656277",
  appId: "1:290066656277:web:9d78c4a57287fb9dd4f21c",
  measurementId: "G-GVS4FFWX61",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
