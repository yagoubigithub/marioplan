import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDvaSAyiC_V9RETzb8MUkXthwens-Hj7dQ",
    authDomain: "marioplan-dc09e.firebaseapp.com",
    databaseURL: "https://marioplan-dc09e.firebaseio.com",
    projectId: "marioplan-dc09e",
    storageBucket: "marioplan-dc09e.appspot.com",
    messagingSenderId: "198176863488",
    appId: "1:198176863488:web:9dc72f21f8ac11b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots : true});

  export default firebase;