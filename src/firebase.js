// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAKcEzUsJ2LAgkZFR03bvAcS5oRUS8rf4",
  authDomain: "citychalo-f55ec.firebaseapp.com",
  projectId: "citychalo-f55ec",
  storageBucket: "citychalo-f55ec.appspot.com",
  messagingSenderId: "991241434735",
  appId: "1:991241434735:web:be61e33711fa9d6cd0bf9a",
  measurementId: "G-0XD3S9THS4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const firestore = getFirestore(app);
export { firestore };
// const analytics = getAnalytics(app);
export default app;
