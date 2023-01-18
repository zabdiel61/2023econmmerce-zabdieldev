import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
 apiKey: "AIzaSyCwy-72XE9K_t_j0D8HiViDnQ7AL6gEHqU",
 authDomain: "ecommerce-c3e03.firebaseapp.com",
 projectId: "ecommerce-c3e03",
 storageBucket: "ecommerce-c3e03.appspot.com",
 messagingSenderId: "1014646387122",
 appId: "1:1014646387122:web:4fc9b1d3fe424c72bcb4ab",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
