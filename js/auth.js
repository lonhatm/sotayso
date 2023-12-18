// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqGNa3k3xYiKeS8ixle-puUkop5mTidfg",
  authDomain: "sotayso-thpt-dbp.firebaseapp.com",
  projectId: "sotayso-thpt-dbp",
  storageBucket: "sotayso-thpt-dbp.appspot.com",
  messagingSenderId: "776055992014",
  appId: "1:776055992014:web:9cae300420296f9ad42a9f",
  measurementId: "G-T5YT42GVS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// cái vòng vòng loading

const loader = document.createElement("div");
loader.id = "loader";


// ĐĂNG NHẬP

const dangNhapButton = document.getElementById("dangnhap");

if (dangNhapButton != null) {
  document.querySelector('#dangnhap').addEventListener('click', dangNhap);

  function dangNhap(e) {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    dangNhapButton.style.background = "@Disable";
    dangNhapButton.appendChild(loader)

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log("Login")
      window.location.replace("index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
      dangNhapButton.style.background = "@PrimaryLight";
      dangNhapButton.removeChild(loader)
      alert(errorCode)
    });
  }
}

// ĐĂNG KÝ

const dangKyButton = document.getElementById("dangky");

if (dangKyButton != null) {
  document.querySelector('#dangky').addEventListener('click', dangKy);

  function dangKy(e) {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let password2 = document.querySelector('#password2').value;

    dangKyButton.style.background = "@Disable";
    dangKyButton.appendChild(loader)

    if (password == password2) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("Sign Up")
        window.location.replace("index.html");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
        dangKyButton.style.background = "@PrimaryLight";
        dangKyButton.removeChild(loader)
        alert(errorCode)
      });
    } else {
      alert("Mật khẩu không khớp")
      dangKyButton.style.background = "@PrimaryLight";
      dangKyButton.removeChild(loader)
    }
    
  }
}
// KIỂM TRA TRANG THÁI NGƯỜI DÙNG ĐỂ CHUYỂN TRANG

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.replace("index.html");
    // ...
  } else {
    // ...
  }
});