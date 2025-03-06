import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABMrCjKis1m-ebWSjkMtLh8XsHzNQCRRg",
  authDomain: "libra-smart-ffa5f.firebaseapp.com",
  projectId: "libra-smart-ffa5f",
  storageBucket: "libra-smart-ffa5f.firebasestorage.app",
  messagingSenderId: "358626352418",
  appId: "1:358626352418:web:c5ac89086b6645281cd97b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
