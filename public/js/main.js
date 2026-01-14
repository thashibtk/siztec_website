(function($) {
  "use strict";

//----------- Preloader
$(window).on('load', function () { // makes sure the whole site is loaded
  $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    'overflow': 'visible'
  });
});

//---------- sticky menu
  if($("." + "header-area").length > 0) {
    var scrollPosition = window.scrollY;
    var fixedHeader = document.getElementsByClassName('header-area')[0];

    window.addEventListener('scroll', function () {
      scrollPosition = window.scrollY;
      if (scrollPosition >= 30) {
        fixedHeader.classList.add('header-fixed');
      } else {
        fixedHeader.classList.remove('header-fixed');
      }
    });
  }

//---------- Menu open function
if($("." + "menu-bar").length > 0) {
    var menu_burger = document.querySelector(".menu-bar"); //burger menu selected
    var menu_open = document.querySelector('.mobile-menu'); //menu item selected
    menu_burger.addEventListener("click", function () {
      menu_open.classList.add("menu-open")
    });
}

//---------- Menu close function
if($("." + "close-button").length > 0) {
    var close_menu = document.querySelector(".close-button"); //close button selected
    close_menu.addEventListener("click", function () {
      menu_open.classList.remove("menu-open");

    });
}

//---------- Dropdown menu
var mobileSubMenu = document.querySelectorAll(".dropdown"); //drop down menu item select
var i;
for (i = 0; i < mobileSubMenu.length; i++) {
  mobileSubMenu[i].addEventListener("click", function () {
    this.classList.toggle("sub-menu-active"); //class add in dropdown menu item
    var panel = this.nextElementSibling;
    // add style inline css
    if (panel.style.display) {
      panel.style.display = null;

    } else {
      panel.style.display = "block";
    }
  });
}

//--------- Video popup
MediaBox('.mediabox');
MediaBox('.mediabox-blog');

var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

//--------- read the link on how above code works
var findMe = document.querySelectorAll('.video-area');

window.addEventListener('scroll', function (event) {
 
  // add event on scroll
  findMe.forEach(element => {
    //for each .thisisatest
    if (isInViewport(element)) {
      //if in Viewport
      element.classList.add("animated-start");
    } else {
      element.classList.remove("animated-start");
    }
  });
  
}, false);

//--------- Back To Top
var back2top = $('#back2top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    back2top.addClass('show');
  } else {
    back2top.removeClass('show');
  }
});

back2top.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

})(jQuery);