import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyC2ym9cNY3r0Tms3_X1eqPx9mFWFuaOqjI',
    authDomain: 'crown-clothing-71268.firebaseapp.com',
    projectId: 'crown-clothing-71268',
    storageBucket: 'crown-clothing-71268.appspot.com',
    messagingSenderId: '246585212474',
    appId: '1:246585212474:web:48720eedc6fdc0acec3f03',
    measurementId: 'G-00MF4YRYQJ',
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


/*
const config = {
  apiKey: 'AIzaSyCFvpXWhxLkLRmYuC4GiqMdXSNACASnUgo',
  authDomain: 'cybeleproject.firebaseapp.com',
  projectId: 'cybeleproject',
  storageBucket: 'cybeleproject.appspot.com',
  messagingSenderId: '876652284900',
  appId: '1:876652284900:web:7bca8be72ba0703c6115f1',
  measurementId: 'G-K5HX7WQLHR',
};
*/