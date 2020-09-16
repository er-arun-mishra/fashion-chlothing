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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;//This is basically to to check if user is sing out as if user sign out userAuth object that is recived is null.
// if userAuth is not null then we need to query in firestore to chck if user document is already present in firestore or not
    // console.log(firestore.doc('users/jkashfkjhfllj'));
    // const userRef = firestore.doc('users/jkashfkjhfllj');    //Just to check what is returned by fake userId
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();//snapshot cnow contains the key uid that is the actual id that is passed.
    console.log(snapShot);

    if(!snapShot.exists){
        const {displayName, email}  = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log(error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;