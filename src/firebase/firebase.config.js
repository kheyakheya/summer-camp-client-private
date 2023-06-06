// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId:  import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
  };
// const firebaseConfig = {
//   apiKey: "AIzaSyDbqgHWcg9vyyJoFonniTPjerTjtjOY9TE",
//   authDomain: "assignment-twelve-5e13f.firebaseapp.com",
//   projectId: "assignment-twelve-5e13f",
//   storageBucket: "assignment-twelve-5e13f.appspot.com",
//   messagingSenderId: "207337065572",
//   appId: "1:207337065572:web:53a566434889988af76371"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);