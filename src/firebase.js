
//import * as firebase from 'firebase' ;
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAfNOmElJLK-iFOH_Gv4TcKHO2DFompgtM",
    authDomain: "facebook-clone-416d0.firebaseapp.com",
    projectId: "facebook-clone-416d0",
    storageBucket: "facebook-clone-416d0.appspot.com",
    messagingSenderId: "952401149774",
    appId: "1:952401149774:web:f21b57748ab0d8d6d5e81f",
    measurmentId: "G-8Z7MJH9M4M"
  };

  //const settings = {timestampsInSnapshots: true};

  
  //firebase.initializeApp(firebaseConfig);
  
  //firebase.firestore().settings(settings);
  
  //export default firebase;
  
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

