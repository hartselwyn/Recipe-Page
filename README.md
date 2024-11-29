# Frontend Mentor - Recipe Page Solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![Recipe Page Screenshot](./screenshot.jpg)

### Links

- Solution URL: [View my solution](https://your-solution-url.com)
- Live Site URL: [Check the live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JavaScript library

### What I learned

While building this project, I learned how to structure tables dynamically in React using `.map()` and styling them with CSS to match design specifications. Here's an example of how I created a nutrition table using React:

#### JSX Code for the Table
```jsx
<table className="nutrition_table">
  <tbody>
    {nutrients.map((nutrition) => (
      <tr key={nutrition.id} className="nutrients_container">
        <td>{nutrition.nutrient}</td>
        <td>{nutrition.measurement}</td>
      </tr>
    ))}
  </tbody>
</table>

Sample CSS for Horizontal Lines

css
.nutrition_table {
  width: 100%;
  border-collapse: collapse;
}

.nutrition_table td {
  border-top: 1px solid #ccc;
  padding: 8px;
}

.nutrition_table tr:first-child td {
  border-top: none;
}

Continued development
In future projects, I aim to:

Experiment with advanced styling techniques like CSS animations and transitions.
Focus more on accessibility for dynamic content.
Explore using TypeScript with React for type safety.

Useful resources

Frontend Mentor - For providing a well-defined project to practice.
MDN Web Docs - A great resource for HTML, CSS, and JavaScript documentation.
CSS-Tricks - Helped me with table styling tips.

Author
Website - Hart Selwyn
Frontend Mentor - @hartselwyn
Twitter - @HartSelwyn
Github - @hartselwyn

Acknowledgments
Thanks to the Frontend Mentor community for their feedback and suggestions. Their input helped refine my approach to building this project!