# Landing Page Project

## Table of Contents


* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

1) Navigation bar built dynamically from DOM
    a) Made "li" for "a" each Navigation
    b) set ID to "li" Navigation Sections 
    c) set "active" class to Navigation Section 1 Only  

2) Added "click" listen function for navigation bar to change "active" section 
    (this step ended up being negated by "scroll" section but it laid the groundwork and 
    made the "scroll" section MUCH simpilier)

3) Added "scroll" listen function for sections to change "active" section in 
    section elements and Navigation bar
    a) used getBoundingClientRect() to find top and bottom of sections
    b) changed numbers until only 1 section remained highlighted accurately