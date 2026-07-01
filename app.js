js/app.js
/* ==========================================
   AI DUPLICATION SYSTEM V2.0
   Main JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Sticky Header
    // ==========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.background = "#000";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

        } else {

            header.style.background = "rgba(0,0,0,.95)";
            header.style.boxShadow = "none";

        }

    });


    // ==========================
    // Smooth Button Hover
    // ==========================

    const buttons = document.querySelectorAll(".gold-btn, .whatsapp-btn");

    buttons.forEach(function(btn){

        btn.addEventListener("mouseenter", function(){

            btn.style.transform = "translateY(-3px)";

        });

        btn.addEventListener("mouseleave", function(){

            btn.style.transform = "translateY(0px)";

        });

    });


    // ==========================
    // Fade-in Animation
    // ==========================

    const cards = document.querySelectorAll(".feature-card");

    function revealCards(){

        cards.forEach(function(card){

            const top = card.getBoundingClientRect().top;

            if(top < window.innerHeight - 80){

                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }

        });

    }

    cards.forEach(function(card){

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = ".8s";

    });

    revealCards();

    window.addEventListener("scroll", revealCards);

});
/* ==========================================
   ACTIVE MENU HIGHLIGHT
========================================== */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link){

    const fileName = link.getAttribute("href");

    if(fileName === currentPage){

        link.classList.add("active");

    }

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

// Create Button
const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);


// Button Style
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#FFD700";
scrollBtn.style.color = "#000";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "9999";
scrollBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";


// Show/Hide Button

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }else{

        scrollBtn.style.display = "none";

    }

});


// Scroll to Top

scrollBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   PAGE LOADER EFFECT
========================================== */

window.addEventListener("load", function(){

    document.body.style.opacity = "0";

    setTimeout(function(){

        document.body.style.transition = ".8s";

        document.body.style.opacity = "1";

    },100);

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("==================================");

console.log("AI DUPLICATION SYSTEM V2.0");

console.log("Website Loaded Successfully");

console.log("Founder: Pst. Ndene S. Michael");

console.log("==================================");
