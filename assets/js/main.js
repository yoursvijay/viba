/**
* Template Name: FlexStart - v1.9.0
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
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
      if (window.scrollY > 60) {
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
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
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
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
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
        slidesPerView: 2,
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
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

})();

// Subscription plan switch
function check() {
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
check();



// const myModalEl = document.getElementById('videoModal')
// myModalEl.addEventListener('hidden.bs.modal', event => {
//   var $if = $(event.delegateTarget).find('iframe');
//   var src = $if.attr("src");
//   $if.attr("src", '/index.html');
//   $if.attr("src", src);
// })

//   // modal js start
//   $('#videoModal').on('hide.bs.modal', function(e) {    
//     alert('hello');
//     var $if = $(e.delegateTarget).find('iframe');
//     var src = $if.attr("src");
//     $if.attr("src", '/index.html');
//     $if.attr("src", src);
//     }); 


// $('#videoModal').on('shown.bs.modal', function () {
//   $('.video-modal').modal('show')
// })

// var myModalEl = document.getElementById('videoModal')
// myModalEl.addEventListener('hide.bs.modal', function (event) {
//   // do something...
// })

  // modal js start
  $('.video-modal').on('hidden.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/index.html');
    $if.attr("src", src);
  });


  // var myModal = document.getElementById('videoModal')
  // myModal.addEventListener('hidden.bs.modal', function () {
  //   alert('hello')
  // })

  $( '.side-by-side-carousel .mobile-section' ).addClass( 'with-slick-arrows' ).slick( {
    mobileFirst: true,
    slidesToShow: 1,
    dots: true,
    centerPadding: "6px",
    focusOnSelect: true
  } );


  $( function () {

    $( '.side-by-side-carousel .mobile-section' ).addClass( 'with-slick-arrows' ).slick( {
      mobileFirst: true,
      slidesToShow: 1,
      dots: true,
      centerPadding: "6px",
      focusOnSelect: true
    } );

    $( '.side-by-side-carousel .slide-text' ).on( 'mouseover click', function () {
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