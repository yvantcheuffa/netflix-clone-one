import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from "../seed";

// We need to somehow seed the Database

// We need a config here

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBoVFIB5it0XLJWjxTRs60UDeA5vLSQgOc",
  authDomain: "netflix-clone-9c04d.firebaseapp.com",
  databaseURL: "https://netflix-clone-9c04d.firebaseio.com",
  projectId: "netflix-clone-9c04d",
  storageBucket: "netflix-clone-9c04d.appspot.com",
  messagingSenderId: "628829719436",
  appId: "1:628829719436:web:35d262d88571906020e4a9",
  measurementId: "G-W8H9ESWT17"
};
const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);

export { firebase }
