    import firebase from 'firebase';
    require('@firebase/firestore');
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDNyILwYNqZGFGp95Qa-rjUsiy8bd1GSQE",
    authDomain: "willy-app-2c7c1.firebaseapp.com",
    projectId: "willy-app-2c7c1",
    storageBucket: "willy-app-2c7c1.appspot.com",
    messagingSenderId: "803299881205",
    appId: "1:803299881205:web:a56b5e1891c9182a4815bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();