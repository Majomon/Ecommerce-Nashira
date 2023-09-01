// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAzknzz5TqzEzupj3JqD2IgAY_-to8Vxs",
  authDomain: "nashira-b2c98.firebaseapp.com",
  projectId: "nashira-b2c98",
  storageBucket: "nashira-b2c98.appspot.com",
  messagingSenderId: "317638656032",
  appId: "1:317638656032:web:7578b58ed3a6b9ce6dfc45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storageFirebase = getStorage(app);


