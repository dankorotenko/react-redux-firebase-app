 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDdCRWQDtp7K4k8vXc-7la102hLhUqiqvg",
    authDomain: "react-redux-magmaplan.firebaseapp.com",
    projectId: "react-redux-magmaplan",
    storageBucket: "react-redux-magmaplan.appspot.com",
    messagingSenderId: "323454082790",
    appId: "1:323454082790:web:d8fe599cd7f31050d32527",
    measurementId: "G-H19QHLR57Y"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;