function carouBuilder(e){
	let slideTiming = 1500,
		slides = e.children,
		currentSlide = 0;
	//if caroucontainer has slideint data attribute adjust slideTiming to that value
	(e.getAttribute('data-slideint'))
		slideTiming = e.getAttribute('data-slideint');
	e.classList.add('slidercontainer');
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
//Selects all DOM Elements with slidecont data attribute
const allslides = document.querySelectorAll('[data-slidecont]');
allslides.forEach(slider => carouBuilder(slider));