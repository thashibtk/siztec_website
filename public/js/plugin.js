"use strict";

  //--------- Brand section type carousel
let brandCarousel = document.getElementsByClassName("glide-brand-carousel");
if (brandCarousel.length) {
  var glide = new Glide(".glide-brand-carousel", {
    type: "carousel",
    perView: 6,
    focusAt: 'center',
    gap: 20,
    autoplay: true,
    hoverpause: true,
    animationDuration: 2500,
    breakpoints: {
      1200: {
        perView: 5,
      },
      992: {
        perView: 4,
      },
      768: {
        perView: 3,
      },
      576: {
        perView: 2,
      },
    },
  });

  glide.mount();
}

//---------- Testimonial section glide slider
let glideTestimonial = document.getElementsByClassName("glide-testimonial");

if (glideTestimonial.length) {
  var glide_testimonial = new Glide(".glide-testimonial", {
    type: "carousel",
    perView: 3,
    focusAt: 2,
    gap: 40,
    autoplay: true, 
    hoverpause: true,
    animationDuration: 2500,
    breakpoints: {
      992: {
        perView: 2,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  });

  glide_testimonial.mount();
}