import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrOZgTWnA3DKoF7K1hS0aQljKWhDkGZuY",
    authDomain: "build-7187d.firebaseapp.com",
    projectId: "build-7187d",
    storageBucket: "build-7187d.appspot.com",
    messagingSenderId: "853126510246",
    appId: "1:853126510246:web:169e21005a51e2cbdd2667",
    measurementId: "G-MCFSHSJCTD"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app()

  const db = app.firestore()

  export default db