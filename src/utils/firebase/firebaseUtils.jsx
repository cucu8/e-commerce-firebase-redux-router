import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth"

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGjk0ElmMDwEij3A6EigSHq4rNnIfCEP8",
  authDomain: "clothing-database-5d410.firebaseapp.com",
  projectId: "clothing-database-5d410",
  storageBucket: "clothing-database-5d410.appspot.com",
  messagingSenderId: "130333569063",
  appId: "1:130333569063:web:f0ad5f5a93f0493ef09e02",
  measurementId: "G-ZYJ3DH522Y"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentForAuth = async (
  userAuth,
  additionalInformation = {},
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
 
  //if user data doesn't exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInformation
      }) 
    } catch (error) {
      console.log("error creatin user", error.message);
    }
  }
 
  return userDocRef;
}

export const createUserAuthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password)
}