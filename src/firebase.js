import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAFklejHxkRjR2kFl8Ix1pZGRDvTgpj13s",
    authDomain: "netflix-clone-608f2.firebaseapp.com",
    projectId: "netflix-clone-608f2",
    storageBucket: "netflix-clone-608f2.appspot.com",
    messagingSenderId: "454260568653",
    appId: "1:454260568653:web:7d979cfab57a7e5e32e204"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default  db;