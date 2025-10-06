// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { 
  getFirestore, 
  setDoc, 
  doc 
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// ⚙️ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAqy3ZQVragF-GD6Cr8MCoq_KSywsrnKGQ",
  authDomain: "job-website-97920.firebaseapp.com",
  projectId: "job-website-97920",
  storageBucket: "job-website-97920.appspot.com",
  messagingSenderId: "107059239491",
  appId: "1:107059239491:web:228393f257176633c092f6"
};

// 🚀 Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc };
