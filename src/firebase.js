import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDTWKd9Pa9amHpb-QOtWKfb5iJMeamX3cU",
    authDomain: "birthday-app-ea174.firebaseapp.com",
    databaseURL: "https://birthday-app-ea174-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "birthday-app-ea174",
    storageBucket: "birthday-app-ea174.firebasestorage.app",
    messagingSenderId: "172581964612",
    appId: "1:172581964612:web:7bf7a119802e58e5b72511",
    measurementId: "G-QV6FYHTMS5"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);