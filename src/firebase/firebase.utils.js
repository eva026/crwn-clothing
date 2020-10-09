import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBrMolSJbW4CIblADzY_lK_ohmp90DZeUQ',
  authDomain: 'crwn-db-f473d.firebaseapp.com',
  databaseURL: 'https://crwn-db-f473d.firebaseio.com',
  projectId: 'crwn-db-f473d',
  storageBucket: 'crwn-db-f473d.appspot.com',
  messagingSenderId: '833011399988',
  appId: '1:833011399988:web:5edfd0cb0e8c53a4a9b961',
  measurementId: 'G-CMYG1N1TCQ',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
