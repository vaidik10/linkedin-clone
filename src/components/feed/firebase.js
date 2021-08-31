// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8MslIj43g61i_174kmw26eZ34fpHOuHs",
  authDomain: "linkedin-clone-43f24.firebaseapp.com",
  projectId: "linkedin-clone-43f24",
  storageBucket: "linkedin-clone-43f24.appspot.com",
  messagingSenderId: "1058963151254",
  appId: "1:1058963151254:web:e61c83395fd756e94aa5b7"
};


const app = initializeApp(firebaseConfig);
const db =app.firebase.firestore();
const auth=firebase.auth();

export {db,auth};