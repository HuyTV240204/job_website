// js/register.js
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "./firebase.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    // Tạo tài khoản Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Lưu thông tin vào Firestore
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      role,
      createdAt: new Date()
    });

    alert("✅ Đăng ký thành công!");
    window.location.href = "login.html";
  } catch (error) {
    alert("❌ Lỗi: " + error.message);
  }
});
