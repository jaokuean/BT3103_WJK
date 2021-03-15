import firebase from "firebase"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ6jcMnZpRQu32j7YZXVSc5SC5z_MxW10",
    authDomain: "a0200290y-bt3103-wk6.firebaseapp.com",
    projectId: "a0200290y-bt3103-wk6",
    storageBucket: "a0200290y-bt3103-wk6.appspot.com",
    messagingSenderId: "732046621858",
    appId: "1:732046621858:web:39728ea4f3724275e3abfb",
    measurementId: "G-YVJ7LQDYZQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.firestore();
export default database;