import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMQ6QN8Qdbom-3KDLL-Qq0bmfhGJvYbBU",
    authDomain: "netflix-clone-1fca6.firebaseapp.com",
    projectId: "netflix-clone-1fca6",
    storageBucket: "netflix-clone-1fca6.appspot.com",
    messagingSenderId: "101750376885",
    appId: "1:101750376885:web:1029148b622bf7067bf1fc"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;