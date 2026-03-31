import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {apiKey:"YOUR_KEY",authDomain:"YOUR_DOMAIN",projectId:"YOUR_ID"};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.track=async()=>{
let serial=document.getElementById("serial").value;
let snap=await getDocs(collection(db,"apps"));
snap.forEach(d=>{
let data=d.data();
if(data.serial==serial){
document.getElementById("result").innerText="Status: "+data.status;
}
});
};