// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn1W2cagkxcOomBgOPGeLaAUYHBCeTKzs",
  authDomain: "property-plus-realstate-final.firebaseapp.com",
  projectId: "property-plus-realstate-final",
  storageBucket: "property-plus-realstate-final.firebasestorage.app",
  messagingSenderId: "744544456297",
  appId: "1:744544456297:web:2b27ce7ae80712b4559cf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;