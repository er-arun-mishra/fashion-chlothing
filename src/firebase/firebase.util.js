import firebase from 'firebase/app';
import 'firebase/firestore';//for databse
import 'firebase/auth';//for authentication

const config = {
    apiKey: "AIzaSyDW36S5cyMXffpTIxVvkMSfdpVwFxt7kws",
    authDomain: "fashion-db-d3e52.firebaseapp.com",
    databaseURL: "https://fashion-db-d3e52.firebaseio.com",
    projectId: "fashion-db-d3e52",
    storageBucket: "fashion-db-d3e52.appspot.com",
    messagingSenderId: "114380322748",
    appId: "1:114380322748:web:25e7ed47d13fe23637ddb9",
    measurementId: "G-C6TB9C2JFE"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;