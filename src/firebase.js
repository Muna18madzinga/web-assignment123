// Firebase configuration and initialization
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Replace with your actual Firebase config or use environment variables
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
};

// Initialize Firebase app only if it doesn't exist
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  if (error.code === 'app/duplicate-app') {
    app = getApp(); // Get existing app
  } else {
    throw error;
  }
}

const db = getFirestore(app);

export { db };
