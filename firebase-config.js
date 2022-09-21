// Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyBgFl_brUXyBwzWAzGIL6SHB_aLdy3WPZA',
  authDomain: 'bapenda-2c454.firebaseapp.com',
  databaseURL: 'https://bapenda-2c454-default-rtdb.firebaseio.com',
  projectId: 'bapenda-2c454',
  storageBucket: 'bapenda-2c454.appspot.com',
  messagingSenderId: '92751038746',
  appId: '1:92751038746:web:66c35b96f96bf4fc05c4a3',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
