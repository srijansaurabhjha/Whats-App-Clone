import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRo61iwIrf_pUxHa3XnBpRbxSLoYuEBlc",
  authDomain: "whats-app-1c603.firebaseapp.com",
  projectId: "whats-app-1c603",
  storageBucket: "whats-app-1c603.appspot.com",
  messagingSenderId: "448221162381",
  appId: "1:448221162381:web:3ed2d635f02624ee6cebc4",
  measurementId: "G-C6XGDWB6W6"
};

// const firebaseApp=firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp({});
}
const firebaseApp = firebase;
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
