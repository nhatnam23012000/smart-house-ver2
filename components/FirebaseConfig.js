import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCT5Ry6dNGsl2FiQ-J7z_M5Tum-219Hvuk",
    authDomain: "intelligent-house-ca004.firebaseapp.com",
    databaseURL: "https://intelligent-house-ca004-default-rtdb.firebaseio.com",
    projectId: "intelligent-house-ca004",
    storageBucket: "intelligent-house-ca004.appspot.com",
    messagingSenderId: "1062289314961",
    appId: "1:1062289314961:web:c5db2db9e8d1a2efd99b30",
    measurementId: "G-DF53QMYQSN"
};
  // Initialize Firebase


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  
  
  export const firebaseAuth = firebase.auth() ;
  export const firebaseDatabase = firebase.database();
  export const firestore = firebase.firestore();