import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA6xFyQ6sDYNZVUOMWUpt29yFpOCJZfJIo",
    authDomain: "wily-9645f.firebaseapp.com",
    databaseURL: "https://wily-9645f.firebaseio.com",
    projectId: "wily-9645f",
    storageBucket: "wily-9645f.appspot.com",
    messagingSenderId: "1020893199517",
    appId: "1:1020893199517:web:07a637b042768b2fb76874"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();