import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIuFVi2RjMIi7788tLNetIHurNbp02yLk",
    authDomain: "recipe-site-7b9fd.firebaseapp.com",
    projectId: "recipe-site-7b9fd",
    storageBucket: "recipe-site-7b9fd.appspot.com",
    messagingSenderId: "1064960150100",
    appId: "1:1064960150100:web:cfe6be986f46e9273dfbc1"
  };

//inintialize firebase
firebase.initializeApp(firebaseConfig);

//inintialize services (firestore)
const projectFirestore = firebase.firestore();


export { projectFirestore }