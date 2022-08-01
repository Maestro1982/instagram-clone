// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, g } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
/* Because of SSR (Server Side Rendering) you need to check if the app is already loaded
   otherwise you have 2 instances of firebase you DON'T want that => singleton pattern */
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore(
  initializeFirestore(firebaseConfig, {
    experimentalForceLongPolling: true,
  })
);
const storage = getStorage();

export { app, db, storage };
