import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {apiKey:"YOUR_KEY",authDomain:"YOUR_DOMAIN",projectId:"YOUR_ID"};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("form").addEventListener("submit", async e=>{
e.preventDefault();
const i=e.target.querySelectorAll("input");
let serial=78906+Date.now();

await addDoc(collection(db,"apps"),{
serial,
name:i[0].value+" "+i[1].value,
email:i[5].value,
status:"Pending"
});

alert("Submitted. Serial: "+serial);
});