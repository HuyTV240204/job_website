// js/login.js
import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Đăng nhập thành công!");
    window.location.href = "index.html";
  } catch (error) {
    alert("❌ Lỗi: " + error.message);
  }
});
