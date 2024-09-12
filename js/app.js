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
const sectionList = document.querySelectorAll(".landing__container");
const ul = document.createElement('ul');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

for (let i = 0; i < sectionList.length; i++) {
    const li = document.createElement("li");
    li.textContent = sectionList[i].dataset.nav;
    // const a = document.createElement("a");
    // a.href = `#${sectionList[i].id}`;
    // a.textContent = sectionList[i].dataset.nav;
    // li.appendChild(a);
    // a.classList.add("menu__link");
    ul.appendChild(li);
}

document.querySelector("#navbar__list").appendChild(ul);

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

