// js/register.js
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "./firebase.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!fullname || !phone || !email || !password || !role) {
    alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  try {
    // Tạo tài khoản Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Lưu thông tin vào Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullname,
      phone,
      email,
      role,
      createdAt: new Date().toISOString()
    });

    alert("✅ Đăng ký thành công!");
    window.location.href = "login.html";
  } catch (error) {
    console.error("❌ Lỗi đăng ký:", error);
    alert("❌ Lỗi: " + error.message);
  }
});
