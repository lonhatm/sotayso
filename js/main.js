// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

// cái vòng vòng loading

const loader = document.createElement("div");
loader.id = "loader";

// KIỂM TRA TRANG THÁI NGƯỜI DÙNG ĐỂ CHUYỂN TRANG + LẤY DỮ LIỆU NẾU ĐÃ ĐĂNG NHẬP

onAuthStateChanged(auth, (user) => {
  if (user) {
    //...
  } else {
    window.location.replace("login.html");
  }
});

// ĐĂNG XUẤT

const dangXuatButton = document.getElementById("dangxuat");
console.log(dangXuatButton)

dangXuatButton.addEventListener('click', signOutUser);

function signOutUser() {
  //dangXuatButton.disabled = true;
  //dangXuatButton.appendChild(loader)
  signOut(auth).then(() => {
    console.log("logout")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + " " + errorMessage);
    //dangXuatButton.disabled = false;
    //dangXuatButton.removeChild(loader)
  });
}