// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnrGD6iC-RelCshfBr5ODwNkGfholFp5c",
  authDomain: "ecommerce-cabi-1cd08.firebaseapp.com",
  databaseURL:
    "https://ecommerce-cabi-1cd08-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-cabi-1cd08",
  storageBucket: "ecommerce-cabi-1cd08.appspot.com",
  messagingSenderId: "916805730150",
  appId: "1:916805730150:web:8a4293a6569d7bb2e892a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
