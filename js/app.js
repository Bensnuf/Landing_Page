/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 * A Global variable is one that is defined outside a function, all scripts
 * and fucntions on the webpage can access it. I assume (probably incorrectly)
 * that this will mostly be used for 'querySelector' and not too much else
 * at this stange of development for me.
 */

// const navlist = document.getElementsByClassName("navbar__menu").getElementById("navbar__list")
const navTrial = document.querySelector("ul");
const navClass = document.getElementsByClassName("header>nav>ul#navbar__list");
const dynamic = document.querySelectorAll(".navbar__menu");
const scroll = document.getElementById("section1");
const scroll2 = document.getElementById("section2");
const scroll3 = document.getElementById("section3");

const scrollPlease = document.querySelectorAll("h2");

const load = document.querySelector("div");

const trialData = document.getElementsByClassName("landing__container");

// const dataArray = Array.from(document.querySelectorAll("[data-nav]"));
// function dabby() {
//     for (let i = 0; i < dataArray.length; i++) {
//         dataArray[i];
//     }
// } //trying to create an array and use .shift to make new scroll to points

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// document.addEventListener("click", function(){
// alert("Hello World!");
// });

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//
for (let i = 1; i <= trialData.length; i++) {
    const nav_ul = document.getElementById("navbar__list");
    const entry = document.createElement("li");
    entry.classList.add("menu__link");
    entry.innerText = `Section ${i}`;
    nav_ul.appendChild(entry);
    entry.addEventListener("click", function () {
        const section = document.querySelector(`#section${i}`);
        section.scrollIntoView({ behavior: "smooth" });
    });
}

// build the nav

// function bob() {

// };
// bob();

// for (let i = 1; i <= trialData.length; i++) {
//     const nav_ul = document.getElementById("navbar__list");
//     const entry = document.createElement("li");
//     entry.classList.add("menu__link");

//     const sectionLabel = "Section " + i;
//     entry.innerText = sectionLabel

//     nav_ul.appendChild(entry);
//     entry.addEventListener("click", function () {
//         // const dataArray = Array.from(document.querySelectorAll("[data-nav]"));
//         // for (let i = 0; i < dataArray.length; i++) {
//         //     dataArray[i];
//         // }
//         const section = document.querySelector(`#section${i}`)
//         section.scrollIntoView()
//     });
// }

// let bibbity = document.querySelector("#section1");
// b

// let Bob = function () {
//     for (let i = 1; i <= trialData.length; i++) {
//         const nav_ul = document.getElementById("navbar__list");
//         const entry = document.createElement("li");
//         const text = document.createTextNode("Section" + i)
//         // const addAnchor = document.createElement("a");
//         // text.classList.add("menu__link");
//         text.classname = ("navbar__menu", "menu__link" );

//         // const brainDead = document.getElementsByClassName("menu__link");
//         // entry.innerText = "Section " + i;
//         // const anchors = document.createElement("a");
//         // anchors.setAttribute("class", "menu__link");
//         nav_ul.appendChild(entry);
//         entry.appendChild(text);
//         // nav_ul.addEventListener("click", function () {
//         //     anchors.scrollIntoView();
//         };
//     }
// // };
// Bob();

// function create() {
//     // for (let i = 1; i < ul.length; i++) {
//     const navtoolbar = document.createElement("p");
//     navtoolbar.innerText = "Section " + i;
//     navtrial.appendChild(navtoolbar);
//     // }
// }

// for (let i = 0; i < 3; i++) {
//     create(i);
// }

// const navtoolbar = document.createElement("li");
// navtoolbar.innerHTML = "Section 1";
// navtrial.appendChild(navtoolbar);
// navtoolbar.addEventListener("click", function () {
//     scroll.scrollIntoView();
// });

// const navtoolbar2 = document.createElement("li");
// navtoolbar2.innerHTML = "Section 2";
// navtrial.appendChild(navtoolbar2);
// navtoolbar2.addEventListener("click", function () {
//     scroll2.scrollIntoView();
// });

// const navtoolbar3 = document.createElement("li");
// navtoolbar3.innerHTML = "Section 3";
// navtrial.appendChild(navtoolbar3);
// navtoolbar3.addEventListener("click", function () {
//     scroll3.scrollIntoView();
// });

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
