# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Ping coming soon page solution](#frontend-mentor---ping-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Desktop Screenshot](#desktop-screenshot)
    - [Mobile Screenshot](#mobile-screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)
  
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Desktop Screenshot

![](screenshot-desktop.png)

### Mobile Screenshot

![](screenshot-mobile.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da/hub/ping-single-column-coming-soon-page-YoBrPSE-K7/edit)
- Live Site URL: [Vercel](https://ping-me-tan.vercel.app)

## My process

### Built with

- HTML5
- CSS3
- JS

### What I learned

I learned how to check for specific characters agaisnt an input's value by using the ```js .match()``` function. 
```js
function check() {
    console.log("Function Check triggered")
    if (emailInput.value.length != 0 && emailInput.value.match("@") && emailInput.value.match(".")) {
        console.log("Display set to none");
        console.log("Contains @");
        emailInputErrorMessage.style.display = "none";
        emailInput.style.border = "var(--pale-blue) 1px solid";
    } else {
        console.log("Display set to block");
        console.log("Does not contain @");
        emailInputErrorMessage.style.display = "block";
        emailInput.style.border = "1px red solid";
    }
}
```

### Continued development

I will continue to learn more Javascript functions and to incorporate it into my next coding projects.

## Author

- Website - [Justin Vera](https://www.justinvera.com)
- Frontend Mentor - [@justinnvera](https://www.frontendmentor.io/profile/justinnvera)
