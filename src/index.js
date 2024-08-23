import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC56-civ0KMH2EMnpUqh3GCvNelDyOvNnc",
    authDomain: "chat-course-1f297.firebaseapp.com",
    projectId: "chat-course-1f297",
    storageBucket: "chat-course-1f297.appspot.com",
    messagingSenderId: "448780308098",
    appId: "1:448780308098:web:10dc2c96cd6f6e775fae9b",
    measurementId: "G-PRGQ5YVT9R"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{auth, firestore}}>
        <App />
    </Context.Provider>
);

