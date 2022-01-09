let slider_tl = gsap.timeline();


const testimonials = gsap.utils.toArray('.testimonial');
gsap.set(testimonials, {xPercent: 100})
let activeSlide = 0
let nextSlide = 1
let prevSlide = testimonials.length - 1
gsap.set(testimonials[activeSlide], {xPercent: 0})
document.getElementById('next-slide').onclick = function changeContent() {
	console.log("next")
	gsap.to(testimonials[nextSlide], {xPercent: 0})
	activeSlide = nextSlide
	nextSlide = nextSlide + 1
}
document.getElementById('prev-slide').onclick = function changeContent() {
	console.log("prev")
	gsap.to(testimonials[prevSlide], {xPercent: -100})
	activeSlide = prevSlide
	prevSlide = prevSlide - 1
}