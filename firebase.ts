import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmZltj4QT2P-EPzA62mvcPcMUg2gYF2yM",
    authDomain: "finance-tracker-ts.firebaseapp.com",
    projectId: "finance-tracker-ts",
    storageBucket: "finance-tracker-ts.appspot.com",
    messagingSenderId: "1063928285049",
    appId: "1:1063928285049:web:c500dee4a1f8550491d1a8",
    measurementId: "G-TGJ3SWMW2M"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase();
export const auth = getAuth(app);

export const dbFirestore = getFirestore(app);