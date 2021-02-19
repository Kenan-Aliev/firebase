import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp(
    {
        apiKey: "AIzaSyAA7GtzRkbR4erYbnLic3v8c2SeV4TlBbQ",
        authDomain: "chat-react-1d1dd.firebaseapp.com",
        projectId: "chat-react-1d1dd",
        storageBucket: "chat-react-1d1dd.appspot.com",
        messagingSenderId: "849958232442",
        appId: "1:849958232442:web:67546fb7cb00eea77336c3",
        measurementId: "G-715VXQRVQG"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);

