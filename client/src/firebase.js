import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-25bc5.firebaseapp.com",
    projectId: "mern-blog-25bc5",
    storageBucket: "mern-blog-25bc5.appspot.com",
    messagingSenderId: "380789798678",
    appId: "1:380789798678:web:870a7bb00b5a5a9dad8237"
};


export const app = initializeApp(firebaseConfig);