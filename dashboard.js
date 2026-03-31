import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {apiKey:"YOUR_KEY",authDomain:"YOUR_DOMAIN",projectId:"YOUR_ID"};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function load(){
let snap=await getDocs(collection(db,"apps"));
let table=document.getElementById("table");
table.innerHTML="";
snap.forEach(d=>{
let data=d.data();
let row=`<tr>
<td>${data.serial}</td>
<td>${data.name}</td>
<td>${data.status}</td>
<td>
<button onclick="approve('${d.id}')">Approve</button>
<button onclick="reject('${d.id}')">Reject</button>
</td></tr>`;
table.innerHTML+=row;
});
}

window.approve=async(id)=>{
await updateDoc(doc(db,"apps",id),{status:"Approved"});load();
}
window.reject=async(id)=>{
await updateDoc(doc(db,"apps",id),{status:"Rejected"});load();
}

load();