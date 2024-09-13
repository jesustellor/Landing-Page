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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionList = document.querySelectorAll("div.landing__container");
const ul = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

for (let i = 0; i < sectionList.length; i++) {
    const a = document.createElement("a");
    a.href = `#${sectionList[i].parentElement.id}`;
    const li = document.createElement("li");
    li.textContent = sectionList[i].querySelector("h2").textContent;
    a.appendChild(li);
    fragment.appendChild(a);
}

ul.style.cssText = "display: flex; justify-content: space-evenly;";

ul.appendChild(fragment);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



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

