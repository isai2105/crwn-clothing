import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

/* This was obtained from the firebase website, after we registered our app */
const config = {
    apiKey: "AIzaSyAar-jJK8NMz-yYOKO4zrmWGX_4HVuPnTQ",
    authDomain: "crwn-db-8ab91.firebaseapp.com",
    projectId: "crwn-db-8ab91",
    storageBucket: "crwn-db-8ab91.appspot.com",
    messagingSenderId: "477946424899",
    appId: "1:477946424899:web:3dae635f498c3b9a386ef6"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
  