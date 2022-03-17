const btn = document.querySelector("#btn-mobile");
const menu = document.querySelector(".menu");
const boxbtn = document.querySelector(".box-btn")

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    boxbtn.classList.toggle("active");
});