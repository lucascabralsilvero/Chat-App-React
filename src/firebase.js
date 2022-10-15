// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7TW9O98_P54B4oQRwqVSu6iUnLlspcjs",
  authDomain: "chat-app-react-e242f.firebaseapp.com",
  projectId: "chat-app-react-e242f",
  storageBucket: "chat-app-react-e242f.appspot.com",
  messagingSenderId: "1097141025181",
  appId: "1:1097141025181:web:75cb36de76240eefd29774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
