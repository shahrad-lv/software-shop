import firebase, { firestore } from  'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAN5p8rQGLjE_yiFFWbw_32zYOV_7z9PDk",
    authDomain: "software-shop-63832.firebaseapp.com",
    databaseURL: "https://software-shop-63832-default-rtdb.firebaseio.com",
    projectId: "software-shop-63832",
    storageBucket: "software-shop-63832.appspot.com",
    messagingSenderId: "580808956325",
    appId: "1:580808956325:web:5053cf91786a4ffb86704c"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase;