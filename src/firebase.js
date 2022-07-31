import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-6mVi8YQ4MvmiitYTmEBGWSFaQboKd3I',
  authDomain: 'react-hooks-blog-54d6f.firebaseapp.com',
  projectId: 'react-hooks-blog-54d6f',
  storageBucket: 'react-hooks-blog-54d6f.appspot.com',
  messagingSenderId: '1080149615557',
  appId: '1:1080149615557:web:e5ff35e37d9cdfb27da1ac'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
