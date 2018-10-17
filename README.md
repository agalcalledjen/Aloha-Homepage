# Project 1 - Aloha Homepage

This is a project produced from the following lessons from Week 1 to Week 2:

1. Intro to Your Computer & HTML
2. Intro to CSS & CSS Styling
3. Fonts on the Web
4. Flexbox
5. CSS3 & Responsive Web Design
6. The Command Line Interface
7. Git
8. CSS Best Practices
9. Intro to Programming
10. Programming with JavaScript
11. Intro to jQuery
12. Animation with jQuery

## Installation Instructions
1. Go to terminal and type the following.
```
git clone https://github.com/nejmal/project-01.git
```
2. Go to project directory.
```
cd project-01
```
3. Open the index.html file in a browser and enjoy!

## Technologies Used
- HTML
- CSS
- JavaScript
  - jQuery
- Git
- GitHub
- Terminal
  - Homebrew

## Personal Learnings
Below are the subsequent learning outcomes.

### HTML5
New elements for outlining and sectioning.
```html
<header>
<nav>
<article>
<section>
<aside>
<footer>
```

### **`<head></head>`**
- `<meta>`: use for responsive design
- `<link></link>`: links external css files and CDNs
  - [Google Fonts](https://fonts.google.com/)
  - [Flickity CSS CDN](https://flickity.metafizzy.co/#cdn)
- `<script></script>`: links external js files and CDNs
  - [jQuery CDN from Google](https://developers.google.com/speed/libraries/#jquery)
  - [Flickity JavaScript CDN](https://flickity.metafizzy.co/#cdn)

### **`<body></body>`**
Font files and put declaration at top of css page to use it throughout.
- [Transfonter](https://transfonter.org/)
  ```css
  @font-face {} 
  ```

Media queries (start with mobile-first and modify for larger widths).
```css
@meda screen and (min-width: 1240px){}
```

### **`<header></header>`**
Use .container for header and footer of page.
- `<nav></nav>`
  - `<ul></ul>`
    - `<li></li>`

Order can be used to create various layouts for media queries.
```css
order: #;
```

### **`<section></section>`**
Flexbox assists with creating easy to code layouts.
- `<div></div>`
- `<h1></h1>... <h6></h6>`
- `<p></p>`
- `<em></em>`
- `<figure></figure>`
  - `<img>`
  - `<figcaption></figcaption>`
- `<form></form>`
  - `<input></input>`

#### `<section class="new-collection"></section>`
```css
background-image: linear-gradient(),url();
``` 

#### `<section class="about"></section>`
- justify-content
- align-items
- text-align

#### `<section class="shop"></section>` 
- Should have used the following flex properties for the items, one class for the wide items and a second class for the smaller items.
  ```css
  flex-grow:;
  flex-shrink:;
  flex-basis:;
  /* shorthand */
  flex: flex-grow, flex-shrink and flex-basis;
  ```

#### `<section class="featured"></section>` 
- jQuery plugin: [Flickity](https://flickity.metafizzy.co/)

#### `<section class="newsletter"></section>`
- Created a button using `<input></input>`.
- js was applied to div of input.
  - css box-shadow would appear when input type="email" was clicked.
- js was added to submit input.

### **`<footer></footer>`**
Displaying none hides an element.
```css
display: none;
```
Used icons from [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free).
