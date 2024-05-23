// script.js
const content = document.getElementById("content");

const icons = [
  { class: "fab fa-html5" },
  { class: "fab fa-css3-alt" },
  { class: "fab fa-js-square" },
  { class: "fab fa-sass" },
  { class: "fab fa-php" },
  { class: "fab fa-laravel" },
  { class: "fab fa-wordpress" },
  { class: "fab fa-shopify" },
  { class: "fas fa-database" },
];

function loadContent() {
  const totalIcons = 3 * icons.length; // Repeat the icons to ensure a continuous loop
  for (let i = 0; i < totalIcons; i++) {
    const icon = icons[i % icons.length]; // Loop through icons array
    const card = document.createElement("div");
    card.className = "icon-card";
    card.innerHTML = `<i class="${icon.class}"></i>`;
    content.appendChild(card);
  }
}

// Initial load
loadContent();

// !=======================

// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // animation footer on scroll

  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY <= document.scrollingElement.scrollHeight
  );
};
