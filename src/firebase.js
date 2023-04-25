import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7uEKS1ZscPFYzrZpdKLVfpQFhxKuG76I",
  authDomain: "twitter-clone-def.firebaseapp.com",
  projectId: "twitter-clone-def",
  storageBucket: "twitter-clone-def.appspot.com",
  messagingSenderId: "815148805778",
  appId: "1:815148805778:web:1ff2f513aa11c38e2c004b",
  measurementId: "G-4MXV7KKY4W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;