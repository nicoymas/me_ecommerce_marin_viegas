
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTD3eDcFIntZzglaiaRtTsdnM3_jcvMNk",
  authDomain: "ecommercereact-16ba4.firebaseapp.com",
  projectId: "ecommercereact-16ba4",
  storageBucket: "ecommercereact-16ba4.appspot.com",
  messagingSenderId: "703029543947",
  appId: "1:703029543947:web:371c768749940b6a89730e"
};


const app = initializeApp(firebaseConfig);
const database= getFirestore(app)
export default database;