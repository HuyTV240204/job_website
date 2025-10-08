// js/login.js
import { auth, db, signInWithEmailAndPassword, doc, getDoc } from "./firebase.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Lấy thông tin người dùng từ Firestore
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      alert(`✅ Đăng nhập thành công (${data.role === "candidate" ? "Ứng viên" : "Nhà tuyển dụng"})!`);

      // Điều hướng
      if (data.role === "candidate") {
        window.location.href = "/index.html";
      } else if (data.role === "employer") {
        window.location.href = "/post-job.html";
      } else {
        window.location.href = "/index.html";
      }
    } else {
      alert("⚠️ Không tìm thấy thông tin người dùng trong database!");
    }
  } catch (error) {
    console.error("❌ Lỗi đăng nhập:", error);
    alert("❌ Lỗi: " + error.message);
  }
});
