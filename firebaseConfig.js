import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyCNByJ28z9vmSuN6_T-lUBpG4uhKCYdNfY",
  authDomain: "my-intern-project-1d8b0.firebaseapp.com",
  projectId: "my-intern-project-1d8b0",
  storageBucket: "my-intern-project-1d8b0.firebasestorage.app",
  messagingSenderId: "337900788133",
  appId: "1:337900788133:web:bd35f5c563f1db443cf04c",
  measurementId: "G-S42TJDYNL5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
