# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![screenshot of my news homepage solution](/public/assets/images/news-homepage.jpeg)

### Links

- Solution URL: (<https://your-solution-url.com>)
- Live Site URL: (<https://news-homepage-grid.netlify.app/>)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

A lot more about grid and how to use grid-template-areas

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "main main aside"
    "main main aside"
    "top-articles top-articles top-articles";
  gap: 0 1rem;
}
```

### Continued development

More advanced design/layout methods and mastering grid.

### Useful resources

- [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - Very helpful for learning lots of grid properties and more about what you can do with them.

## Author

- Frontend Mentor - [@nataliadgalindo](https://www.frontendmentor.io/profile/nataliadgalindo)
