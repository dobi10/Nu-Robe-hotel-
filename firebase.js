// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Firebase configuration

const firebaseConfig = {

apiKey: "AIzaSyBCEuMH5hH2jPmpANFSIQ6P57A4r5eG6Zk",

authDomain: "nu-robe.firebaseapp.com",

projectId: "nu-robe",

storageBucket: "nu-robe.firebasestorage.app",

messagingSenderId: "994659173220",

appId: "1:994659173220:web:5d53ae9422c77e1d917071"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Firestore database

const db = getFirestore(app);



// Booking form

const bookingForm = document.querySelector(".booking-form");


if(bookingForm){


bookingForm.addEventListener("submit", async(e)=>{


e.preventDefault();


const name =
document.querySelector("#name").value;


const phone =
document.querySelector("#phone").value;


const room =
document.querySelector("#room").value;


const date =
document.querySelector("#date").value;


const message =
document.querySelector("#message").value;



try{


await addDoc(collection(db,"bookings"),{


name:name,

phone:phone,

room:room,

date:date,

message:message,

time:new Date()


});



alert("Reservation sent successfully!");


bookingForm.reset();


}


catch(error){


console.error(error);


alert("Failed to send reservation");


}


});


  }
