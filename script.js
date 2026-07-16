// MOBILE MENU

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if(menu){

menu.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}




// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");


function reveal(){

reveals.forEach((element)=>{

let windowHeight = window.innerHeight;

let elementTop = element.getBoundingClientRect().top;


if(elementTop < windowHeight - 100){

element.classList.add("active");

}

});

}


window.addEventListener("scroll",reveal);

reveal();





// REMOVE LOADER

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");


if(loader){

loader.style.display="none";

}

});





// BOOKING TO WHATSAPP

const bookingForm=document.querySelector(".booking-form");


if(bookingForm){


bookingForm.addEventListener("submit",(e)=>{


e.preventDefault();



let name=document.querySelector("#name").value;

let phone=document.querySelector("#phone").value;

let room=document.querySelector("#room").value;

let date=document.querySelector("#date").value;

let message=document.querySelector("#message").value;



let text=

`New Booking Request - Nu Robe Hotel

Name: ${name}

Phone: ${phone}

Room: ${room}

Date: ${date}

Message: ${message}`;



let whatsappURL=

"https://wa.me/251911819959?text="

+ encodeURIComponent(text);



window.open(whatsappURL,"_blank");



});


}





// GALLERY POPUP


const galleryImages=document.querySelectorAll(".gallery-grid img");


galleryImages.forEach((image)=>{


image.addEventListener("click",()=>{


let popup=document.createElement("div");


popup.className="image-popup";


popup.innerHTML=

`

<img src="${image.src}">

`;



document.body.appendChild(popup);



popup.onclick=()=>{

popup.remove();

};



});


});
