// js/firebase.js

// Import SDKs (chèn đoạn script Firebase từ CDN trước trong HTML nếu chưa có)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, setDoc, doc } 
  from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// ⚙️ Cấu hình Firebase (copy phần config của bạn trong Firebase console)
const firebaseConfig = {
  apiKey: "API_KEY_CỦA_BẠN",
  authDomain: "AUTH_DOMAIN_CỦA_BẠN",
  projectId: "PROJECT_ID_CỦA_BẠN",
  storageBucket: "STORAGE_BUCKET_CỦA_BẠN",
  messagingSenderId: "SENDER_ID_CỦA_BẠN",
  appId: "APP_ID_CỦA_BẠN"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("🔥 Firebase đã kết nối thành công!");

// Export ra để file khác dùng
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc };
