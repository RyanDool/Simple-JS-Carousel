# Simple-JS-Carousel
A very simple/basic Javascript based carousel.

## Getting Started
The required Javascript is contained in the simple-js-carousel.js file and required scss is contained within the simple-js-carousel-scss.scss file.  Once the JS and css are loaded, simply add the data attribute "carou" to the parent DOM element of the sides. You may also choose to add an optional data attribute of "slideint" (value in milliseconds) if you wish to specify the interval that the slides will be visible, if you do not include the "slideint" the defualt will be 1500 milliseconds. 

Your DOM may look something like this...
```
<style>
 .caroucontainer{
  position:relative;
  height:300px;
  padding:0px;
  margin:0px;
 }
 .caroucontainer > * {
  position:absolute;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  opacity:0;
  z-index:1;
  -webkit-transition: opacity 1s;
  -moz-transition: opacity 1s;
  -o-transition: opacity 1s;
  transition: opacity 1s;
 }
 .caroucontainer > *.active{
  opacity:1;
  z-index:2;
 }
</style>
```
...
```
<ul data-carou="" data-slideint="300">
 <li>slide 1</li>
 <li>slide 2</li>
 <li>slide 3</li>
 <li>slide 4</li>
</ul>
```
....
```
<script>
 function carouBuilder(e){
  let slideTiming = 1500,
   slides = e.children,
   currentSlide = 0;
  //if caroucontainer has slideint data attribute adjust slideTiming to that value
  if(e.getAttribute('data-slideint')){
   slideTiming = e.getAttribute('data-slideint');
  }
  e.classList.add('caroucontainer');
  e.children[0].classList.add('active');
  if(slides.length > 1){
   const slideInterval = setInterval(nextSlide,slideTiming);
  }
  //loops through elements removing active class and adding active class to next sibling
  function nextSlide(){
   slides[currentSlide].classList.remove('active');
   currentSlide = (currentSlide+1)%slides.length;
   slides[currentSlide].classList.add('active');
  }
 }
 //Selects all DOM Elements with carou data attribute
 const allcarous = document.querySelectorAll('[data-carou]');
 allcarous.forEach(carou => carouBuilder(carou));
</script>
```

If you wish to have more than one carousel on the page simply add the data attribute "carou" to another element.


## Authors
Ryan Dool
