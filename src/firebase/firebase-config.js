import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8yRYzYPttT8B6LEX_WP2nFWfBEO4WNGI",
    authDomain: "my-todo-39f08.firebaseapp.com",
    projectId: "my-todo-39f08",
    storageBucket: "my-todo-39f08.appspot.com",
    messagingSenderId: "83614745067",
    appId: "1:83614745067:web:daf5df5668b93a806d19ae",
    measurementId: "G-5SJ65WELQZ",
    databaseURL: "https://my-todo-39f08.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}