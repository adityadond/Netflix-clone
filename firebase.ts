// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVFGjIY_NxLSPAP1UQURqHnFqjC6sT7dY",
  authDomain: "netflix-clone-e0a4e.firebaseapp.com",
  projectId: "netflix-clone-e0a4e",
  storageBucket: "netflix-clone-e0a4e.appspot.com",
  messagingSenderId: "438091755863",
  appId: "1:438091755863:web:18ea6990cc0cefa7c8ce12"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }