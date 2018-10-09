# CSS3 & Responsive Web Design

## What is "Responsive Web Design"?

## 3 components of RWD

## Mobile-first
Starting with mobile first, will make less CSS. Most people are using their mobiles instead of desktop.
- mobile-first breakpts (simply rely on min-width)
- - mobile-first
- - tablet
- - desktop 

## CSS3 properties

### border-radius
- gives any element "rounded corners"


.round {
  border-radius: 5px 10px 15px 20px; /* top left, top right, bottom right, bottom left */
}

- If one value is set, this radius applies to all 4 corners.
- If two values are set, the first applies to top-left and bottom-right corner, the second applies to top-right and bottom-left corner.
- Four values apply to the top-left, top-right, bottom-right, bottom-left corner in that order.
- Three values: The second value applies to top-right and also bottom-left.

### box-shadow
- casts shadows off block-like elements (like divs)

.shadow {
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
}

1. horizontal offset
2. vertical offset
3. blur radius
4. spread radius
5. color
- www.webgradients.com has nice free gradients

### opacity
- specifies how transparent an element is.

div {
  opacity: 0.5;
}

### gradients
- one colour that fades into another.

.gradient {

  /* can be treated like a fallback */
  background-color: red;

  /* will be "on top", if browser supports it */
  background-image: linear-gradient(red, orange);

  /* these will reset other properties, like background-position, but it does know what you mean */
  background: red;
  background: linear-gradient(red, orange);

}

@media all and (min-width: 960px) {
  figure {
    background-color: green;
  }
}

@media makes design responsive.
max-width: up to 960px, bg color wil be green, over 960px, red bg will appear.
min-width: after 960px, green bg will appear, before 960px, red bg will appear


REMEMEBER and use this
background img to move with box
max-width: 100%
height: auto
width: auto