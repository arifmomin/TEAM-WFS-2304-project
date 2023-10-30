// ======================= menu part==============
let main_menu = document.querySelector('.main_menu')
console.log(main_menu)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    main_menu.classList.add('menu_fixed')
  } else {
    main_menu.classList.remove('menu_fixed')
  }
})
// ---------- AOS animation
AOS.init();

// ======================================
$('.phone_img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});
// ==============about part
const accordin = document.getElementsByClassName('contentBx');
console.log(accordin);
for (i = 0; i < accordin.length; i++) {
  accordin[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
// ============slider start=============

$('.slider_row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ==================================
$('.donation_row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ===================================

// --------------slider end--------------//
// ===========counter start=================//
$('.counter').counterUp({
  delay: 10,
  time: 3000
});
$('.d_counter').counterUp({
  delay: 10,
  time: 2000,
});
// ----------------counter end-----------------// 
// ============== back to top button ============

let back_to_top = document.querySelector('.back_to_top')
console.log(back_to_top)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    back_to_top.classList.add('go_top')
  } else {
    back_to_top.classList.remove('go_top')
  }
})

back_to_top.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })

})