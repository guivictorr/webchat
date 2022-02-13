import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyBUsNJr6gTs1Gp89xGBZZrbe-ManG_yRqg',
  authDomain: 'webchat-a39a8.firebaseapp.com',
  databaseURL: 'https://webchat-a39a8.firebaseio.com',
  projectId: 'webchat-a39a8',
  storageBucket: 'webchat-a39a8.appspot.com',
  messagingSenderId: '982247412559',
  appId: '1:982247412559:web:320c48672ace905bd7eb3a',
  measurementId: 'G-3HMJGL7X2B',
});

export { firebase };

export const auth = firebase.auth();
export const firestore = firebase.firestore();
