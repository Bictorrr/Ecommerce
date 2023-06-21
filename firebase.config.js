import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg2f_y-mBQWDF3SVUGWUK8XtlYUnC7Z9E",
  authDomain: "multimart-338a5.firebaseapp.com",
  projectId: "multimart-338a5",
  storageBucket: "multimart-338a5.appspot.com",
  messagingSenderId: "91187149746",
  appId: "1:91187149746:web:6d9bd5651610f4c01882ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
