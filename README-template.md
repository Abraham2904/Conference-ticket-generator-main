# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./[screenshot.jpg])

### Links

- Solution URL: [https://github.com/Abraham2904/Conference-ticket-generator-main](https://github.com/Abraham2904/Conference-ticket-generator-main)
- Live Site URL: [https://abraham2904.github.io/Conference-ticket-generator-main/](https://abraham2904.github.io/Conference-ticket-generator-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

- How JSX curly braces work: inside `{}` only JavaScript expressions are allowed, so a comment or a stray component needs its own valid JSX context.
- How to render a component conditionally with a ternary, showing the ticket after a successful submit and the form otherwise:

```jsx
{mostrarTicket ? (
  <Ticket nombre={nombre} email={email} github={github} url={url} />
) : (
  <Formulario onEnviarTicket={renderizarTicket} onEnviarDatos={enviarDatos} />
)}
```

- How to validate an avatar upload (file size and extension) before showing a preview.
- How to use an SVG pattern as a background and adjust its size with CSS.
- How to deploy a Vite + React project to GitHub Pages.

### Continued development

- Keep practicing form validation and accessibility (ARIA attributes and screen reader announcements).
- Improve state management as the app grows.
- Write tests for the form validation logic.

### AI Collaboration

I used Claude to debug JSX syntax errors, such as unbalanced curly braces, and to understand why they happened. It was very useful for pinpointing the exact line causing the error. I still had to read and test every suggestion myself to make sure it worked in my project.

## Author

- Frontend Mentor - [@[tu-usuario-de-frontend-mentor]](https://www.frontendmentor.io/profile/[tu-usuario-de-frontend-mentor])
- GitHub - [@Abraham2904](https://github.com/Abraham2904)