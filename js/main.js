/* ========== Navigation =========== */
const navList = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = function showNav() {
  navList.classList.add("show");
};

document.querySelector(".close").onclick = function hideNav() {
  navList.classList.remove("show");
};
