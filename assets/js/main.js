/**
* Template Name:Viba
* URL: https://viba.ai/
* Author: Viba
*/

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });



(function() {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 16) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
  })

  
  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

 
  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });


  // Plans swiper
  var swiper = new Swiper(".plansSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:false,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575:{
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 0,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  /**
   * Animation on scroll
   */
  // function aos_init() {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //     mirror: false
  //   });
  // }
  // window.addEventListener('load', () => {
  //   aos_init();
  // });

})();

// Subscription plan switch
function pricingSwitch() {
  var checkBox = document.getElementById("switchMonthly");
  var checkBox = document.getElementById("switchYearly");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
        text1[i].style.display = "flex";
        text2[i].style.display = "none";
    } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "flex";
    }
  }
}
pricingSwitch();
// End Subscription plan switch


  // modal js start
  $('.video-modal').on('hidden.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/index.html');
    $if.attr("src", src);
  });



  $( '.side-by-side-carousel .mobile-section' ).addClass( 'with-slick-arrows' ).slick( {
    mobileFirst: true,
    slidesToShow: 1,
    dots: true,
    centerPadding: "6px",
    focusOnSelect: true
  } );

  

  $( function () {
    $( '.side-by-side-carousel .slide-text' ).on( 'click', function () {
      if ( ! $( this ).hasClass( 'active' ) ) {
        var index = $( this ).data( 'slide-index' );
  
        $( '[data-slide-index]' ).removeClass( 'active' ).find( '.description' ).css( { opacity: 0 } ).animate( { height: 0 }, { queue: false, duration: 500 } );
        $( '[data-slide-index="' + index + '"]' ).each( function () {
          $( this ).addClass( 'active' );
          var $desc = $( this ).find( '.description' ).css( { height: '' } );
          $desc.animate( { height: $desc.height() }, { duration: 500, queue: false } ).delay( 100 ).animate( { opacity: 1 }, 500 );
        } );
      }
    } );
  
    $( '.side-by-side-carousel [data-slide-index]:not([data-slide-index="1"])' ).removeClass( 'active' ).find( '.description' ).css( { opacity: 0 } ).css( { height: 0 } );
  } );



  // Viba Pass Mobile App
  $('.viba-mobile-app').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    asNavFor: '.slidervideo',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
  $('.slidervideo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: '.viba-mobile-app',
    dots: false,
    fade:true,
    arrows:false,
    centerMode: true,
    focusOnSelect: true
  });
// End Viba Pass Mobile App


var x = 1;
function updateClass() {
  let a = $(".vidThumb.activeVid");
  a.removeClass("activeVid");
  a = a.parent().next(".videoBox");
  if (a.length == 0)
    a = $(".videoBox").first();
  a.find(".vidThumb").addClass("activeVid");
}
$(document).ready(function() {
  setInterval(function() {
    updateClass();
  }, x * 5000);
});


jQuery(function($) {
$(".ul-first li a").hover(function () {
  $(this).toggleClass("inverse");
});
})


function openNav() {
  document.getElementById("scheduleDemo").style.right = "0";
}
function closeNav() {
  document.getElementById('scheduleDemo').style.right = '-100%';
} 


$('.scheduleDemobox').click(function() {
  $('#demoOverlay').toggleClass('open');
  document.getElementById("#myForm").reset();
  e.preventDefault()

 });



$("#myForm").validate({
  rules: {
    First_Name: {
        required: true,
        minlength: 3,
      },
      Last_Name: {
        required: true,
        minlength: 3
      },
      Email: {
        required: true,
        email: true
      },
      Phone:{
        required: true,
        minlength:10
      },
      Company: {
        required: false,
      }

  },
  messages : {
    'First Name': "Enter your first name",
    'Last Name': "Enter your last name",
    Email: {
      required: "We need your email address to contact you",
      email: "example: hello@domain.com"
    },
    Phone: {
      required: "Please enter mobile numner",
      number: "Please enter your number as a numerical value",
      minlength: "Please enter valid number"
    }
  }
});



$("#contactForm").validate({
  rules: {
    First_Name: {
        required: true,
        minlength: 3,
      },
      Last_Name: {
        required: true,
        minlength: 3
      },
      Email: {
        required: true,
        email: true
      },
      Phone:{
        required: true,
        minlength:10
      },
      Company: {
        required: false,
      }

  },
  messages : {
    'First Name': "Enter your first name",
    'Last Name': "Enter your last name",
    Email: {
      required: "We need your email address to contact you",
      email: "example: hello@domain.com"
    },
    Phone: {
      required: "Please enter mobile numner",
      number: "Please enter your number as a numerical value",
      minlength: "Please enter valid number"
    }
  }
});


$(".viba-visitors-only").click(function(){
  $(".primary-plans").toggleClass("dnone");
  $(".secondary-plans").toggleClass("dblock");
});



