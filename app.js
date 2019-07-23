const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");

const logo = document.querySelector("#logo");
const burger = document.querySelector(".burger");
const headline = document.querySelector(".headline");
const lead = document.querySelector(".lead");
const text = document.querySelector(".text");
const t1 = new TimelineMax();
//t1.fromTo(hero,7, {height: "0%"}, {height: "80%"});
//t1.fromTo(hero,7, {height: "0%"}, {height: "100%"});
t1.fromTo(hero,3, { height: "0%"}, { height: "100%", ease: Power2.easeInOut })
.fromTo( hero, 1.2, { width:"100%" }, { width:"80%", ease: Power2.easeInOut})
//.fromTo( slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2");
.fromTo( slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")

.fromTo( logo, 1.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.1")
.fromTo( burger, 1.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.1")
.fromTo( headline, 1.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.2")
.fromTo( lead, 1.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")
.fromTo( text, 1.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.6")