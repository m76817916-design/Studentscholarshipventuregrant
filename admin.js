import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {apiKey:"YOUR_KEY",authDomain:"YOUR_DOMAIN",projectId:"YOUR_ID"};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async ()=>{
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
await signInWithEmailAndPassword(auth,email,password);
window.location="dashboard.html";
};