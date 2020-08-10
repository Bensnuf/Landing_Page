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
const nav_ul = document.getElementById("navbar__list");
const trialData = document.getElementsByClassName("landing__container");
const activeClassName = "your-active-class";
let activeSection = document.getElementById("section1");

/**
 * End Global Variables


 * Begin Main Functions
 *
 */

//

for (let i = 1; i <= trialData.length; i++) {
    const entry = document.createElement("li");
    entry.setAttribute("id", `bob${i}`);
    let navId = document.getElementById(`bob${i}`);
    let navActive = document.getElementById("bob1");
    if (i === 1) {
        entry.classList.add(activeClassName);
    }

    const trialA = document.createElement("a");
    trialA.classList.add("menu__link");
    trialA.setAttribute("href", "#section" + i);
    trialA.innerText = `Section ${i}`;
    nav_ul.appendChild(entry);
    entry.appendChild(trialA);

    entry.addEventListener("click", function () {
        const navId = document.getElementById(`bob${i}`);
        navActive.classList.remove(activeClassName);
        navId.classlist.add(activeClassName);
        navActive = navId;
    });

    trialA.addEventListener("click", function () {
        const section = document.getElementById(`section${i}`);
        activeSection.classList.remove(activeClassName);
        section.classList.add(activeClassName);
        activeSection = section;
    });
}
