
const navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
    navigation.classList.toggle("nav", scrollY >= 100);
})

const arrow = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
    arrow.classList.toggle("show", scrollY >= 200);
});

const btn = document.querySelector(".button2");
const modal = document.querySelector(".container");
const closeBg = document.querySelector(".fa-xmark");


btn.addEventListener("click", () => {
    modal.classList.add("bg-active");
});

closeBg.addEventListener("click", () => {
    modal.classList.remove("bg-active");
});




const bars = document.querySelector("#bars");
const navItem = document.querySelector(".nav-item");
const closeBtn = document.querySelector(".fa-xmark");

bars.addEventListener("click", () => {
    navItem.classList.toggle("showNav");
});

closeBtn.addEventListener("click", () => {
    navItem.classList.remove("showNav");
});

const closeModal = document.querySelector("#closeModal");
closeModal.addEventListener("click", () => {
    modal.classList.remove("bg-active");
});

const li = document.querySelectorAll("li");
li.forEach(n => {
    n.addEventListener("click", () => {
        navItem.classList.remove("showNav");
    })
});

const addClass = document.querySelectorAll("button");
addClass.forEach(n => {
    n.classList.add("sr1");
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

const scr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
});
sr.reveal(`.sr1`, {interval: 500});
sr.reveal(`.sr2`, {interval: 500, origin: "bottom"});
scr.reveal(`.sr3`, {interval: 500, scale: .6});