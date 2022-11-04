// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWBZzLzpiMuAcRX5xKgjswuh-bWDmbhyg",
  authDomain: "buy-smart-bcec1.firebaseapp.com",
  projectId: "buy-smart-bcec1",
  storageBucket: "buy-smart-bcec1.appspot.com",
  messagingSenderId: "41394671152",
  appId: "1:41394671152:web:47937af0101b256423a7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
