import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtkdhWXfugHKlZwG2pKtBqQO29anjKnpo",
    authDomain: "triptravelprojects.firebaseapp.com",
    projectId: "triptravelprojects",
    storageBucket: "triptravelprojects.firebasestorage.app",
    messagingSenderId: "503466312371",
    appId: "1:503466312371:web:8103bb71a02938c21b26c6"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };