import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDOoYIsWPhxGYCuINiY0bsZ4fjbP987T_c",
  
    authDomain: "skills-54912.firebaseapp.com",
  
    projectId: "skills-54912",
  
    storageBucket: "skills-54912.appspot.com",
  
    messagingSenderId: "273163688684",
  
    appId: "1:273163688684:web:69cd8dfc839bc3e9c723c9",
  
    measurementId: "G-75PCY3P8DN"
  
  };
  

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}
