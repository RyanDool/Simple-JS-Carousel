# Simple-JS-Carousel
A very simple/basic Javascript based carousel.

## Getting Started
The required Javascript is contained in the simple-js-carousel.js file and required scss is contained within the simple-js-carousel-scss.scss file.  Once the JS and css are loaded, simply add the data attribute "slidecont" to the parent DOM element of the sides. You may also choose to add an optional data attribute of "slideint" (value in milliseconds) if you wish to specify the interval that the slides will be visible, if you do not include the "slideint" the defualt will be 1500 milliseconds. 

Your DOM may look something like this...
```
<ul data-slidecont="" data-slideint="2500">
  <li>Slide 1</li>
  <li>Slide 2</li>
  <li>Slide 3</li>
  <li>Slide 4</li>
</ul>
```

If you wish to have more than one carousel on the page simply add the data attribute "slidecont" to another element.


## Authors
Ryan Dool
