import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/storage';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';




const firebaseConfig = {
    apiKey: "AIzaSyDTpnOWLvhxizfWRi278l2xav_xukjDGPo",
    authDomain: "helpdesk-2378d.firebaseapp.com",
    projectId: "helpdesk-2378d",
    storageBucket: "helpdesk-2378d.appspot.com",
    messagingSenderId: "323398925449",
    appId: "1:323398925449:web:f81b3575a5a85d1fb85a58"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const auth = getAuth(firebase)
const db = firebase.firestore();
const storage = getStorage(firebase)

export { firebase, db, auth, storage };

