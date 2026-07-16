// Mobile menu (if added)
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

if(menu){
    menu.onclick = () =>{
        nav.classList.toggle("active");
    };
}


// Scroll reveal animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
    reveals.forEach(item=>{
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            item.classList.add("active");
        }
    });
});


// Booking form WhatsApp send

const bookingForm = document.querySelector(".booking-form");

if(bookingForm){

bookingForm.addEventListener("submit",(e)=>{

e.preventDefault();


let name = document.querySelector("#name").value;
let phone = document.querySelector("#phone").value;
let room = document.querySelector("#room").value;
let date = document.querySelector("#date").value;
let message = document.querySelector("#message").value;


let whatsapp =
`Hello Nu Robe Hotel
I want to make a reservation.

Name: ${name}
Phone: ${phone}
Room: ${room}
Date: ${date}
Message: ${message}`;


let url =
"https://wa.me/251911819959?text="
+encodeURIComponent(whatsapp);


window.open(url,"_blank");


});

}


// Image gallery popup

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.onclick=()=>{

let popup=document.createElement("div");

popup.className="image-popup";

popup.innerHTML=`
<img src="${img.src}">
`;

document.body.appendChild(popup);


popup.onclick=()=>{
popup.remove();
};

};

});


// Loader

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){
loader.style.display="none";
}

});
