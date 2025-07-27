import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

// Initialize Firebase only if config is available and not during build
let app;
let db;
let storage;
let auth;

try {
  if (firebaseConfig.apiKey && firebaseConfig.projectId && typeof window !== 'undefined') {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    storage = getStorage(app);
    auth = getAuth(app);
  } else {
    console.warn('Firebase config missing or running in build mode');
    app = null;
    db = null;
    storage = null;
    auth = null;
  }
} catch (error) {
  console.warn('Firebase initialization failed:', error);
  app = null;
  db = null;
  storage = null;
  auth = null;
}

export { db, storage, auth };

export const initializeFirebase = () => {
  return app;
};
