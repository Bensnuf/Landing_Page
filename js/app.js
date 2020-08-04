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
const navtrial = document.querySelector('ul');
const navclass = document.getElementsByClassName(".navbar__menu");
// const navlist = document.getElementsByClassName("navbar__menu").getElementById("navbar__list")
const dynamic = document.querySelectorAll(".navbar__menu");
const scroll = document.getElementById('section1');
const scroll2 = document.getElementById('section2');
const scroll3 = document.getElementById('section3');

const load = document.querySelector('div');

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

// build the nav

const navtoolbar = document.createElement('li');
navtoolbar.innerHTML = "Section 1";
navtrial.appendChild(navtoolbar);
navtoolbar.addEventListener('click', function(){
    scroll.scrollIntoView();
})


const navtoolbar2 = document.createElement('li');
navtoolbar2.innerHTML = "Section 2";
navtrial.appendChild(navtoolbar2);
navtoolbar2.addEventListener('click', function(){
    scroll2.scrollIntoView();
})

const navtoolbar3 = document.createElement('li');
navtoolbar3.innerHTML = "Section 3";
navtrial.appendChild(navtoolbar3);
navtoolbar3.addEventListener('click', function(){
    scroll3.scrollIntoView();
})



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


