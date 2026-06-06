/* ===================================
   TWOMEALER V2
   Premium Interactions
=================================== */


/* -----------------------------------
   REVEAL ANIMATIONS
----------------------------------- */

const revealElements = document.querySelectorAll(
  `
  .luxury-panel,
  .anchor-card,
  .problem-card,
  .science-card,
  .audience-card,
  .placeholder,
  .included-grid div,
  .offer-box
`
);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("revealed");

}

});

},

{
threshold:0.12
}

);

revealElements.forEach(el => {

el.classList.add("reveal");

revealObserver.observe(el);

});


/* -----------------------------------
   NAVBAR SCROLL EFFECT
----------------------------------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 30){

navbar.classList.add("navbar-scrolled");

}else{

navbar.classList.remove("navbar-scrolled");

}

});


/* -----------------------------------
   SMOOTH ANCHOR LINKS
----------------------------------- */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

link.addEventListener("click", function(e){

const targetId = this.getAttribute("href");

if(targetId === "#") return;

const target = document.querySelector(targetId);

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

});

});


/* -----------------------------------
   PARALLAX EMBLEM
----------------------------------- */

const emblem = document.querySelector(".emblem");

window.addEventListener("mousemove",(e)=>{

if(!emblem) return;

const x =
(window.innerWidth / 2 - e.clientX) / 40;

const y =
(window.innerHeight / 2 - e.clientY) / 40;

emblem.style.transform =
`translate(${x}px, ${y}px)`;

});


/* -----------------------------------
   CTA GLOW PULSE
----------------------------------- */

const ctas = document.querySelectorAll(
".btn-primary"
);

setInterval(()=>{

ctas.forEach(btn=>{

btn.classList.add("pulse");

setTimeout(()=>{

btn.classList.remove("pulse");

},1200);

});

},7000);


/* -----------------------------------
   NUMBERED TIMELINE ANIMATION
----------------------------------- */

const timelineNodes =
document.querySelectorAll(".timeline-node");

const timelineObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

timelineNodes.forEach((node,index)=>{

setTimeout(()=>{

node.classList.add("timeline-active");

},index * 200);

});

}

});

},

{
threshold:.5
}

);

const timeline =
document.querySelector(".timeline");

if(timeline){

timelineObserver.observe(timeline);

}


/* -----------------------------------
   COMMUNITY IMAGE HOVER
----------------------------------- */

const placeholders =
document.querySelectorAll(".placeholder");

placeholders.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.classList.add("card-hover");

});

card.addEventListener("mouseleave",()=>{

card.classList.remove("card-hover");

});

});


/* -----------------------------------
   OFFER SECTION EMPHASIS
----------------------------------- */

const offer =
document.querySelector(".offer-box");

const offerObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

offer.classList.add("offer-visible");

}

});

},

{
threshold:.25
}

);

if(offer){

offerObserver.observe(offer);

}