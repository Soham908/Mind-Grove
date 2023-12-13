import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC_HTqtwVnuHE2sjTe4-CxFasyMON3Ve30",
    authDomain: "demoproject-b8688.firebaseapp.com",
    projectId: "demoproject-b8688",
    storageBucket: "demoproject-b8688.appspot.com",
    messagingSenderId: "341248320905",
    appId: "1:341248320905:web:09a65164dc47f63473ad58",
    measurementId: "G-1Z12QD44Q2"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
