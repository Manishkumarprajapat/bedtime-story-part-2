import firebase from 'firebase';
require('@firebase/firestore');

  var firebaseConfig = {
    apiKey: "AIzaSyCy95xKXxsfhM0yy7_4HpLncOodKv7qrGw",
    authDomain: "story-hub-4e34f.firebaseapp.com",
    databaseURL: "https://story-hub-4e34f-default-rtdb.firebaseio.com",
    projectId: "story-hub-4e34f",
    storageBucket: "story-hub-4e34f.appspot.com",
    messagingSenderId: "970725953347",
    appId: "1:970725953347:web:96cd8ecbea0583929d29f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();