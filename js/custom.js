$(function () {
  $(window).on("scroll", function () {
    const scrollHeight = $(window).scrollTop();
    console.log(scrollHeight);
    if (scrollHeight > 0) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
    }
  });

  $(".mopen").on("click", function () {
    $(".header_wrap .gnb").toggleClass("on");

    $(this).find(".hamburger").toggleClass("is-active");

    $("#header").addClass("on");
    $(" #header .logo").toggleClass("on");
  });

  var fistSwiper = new Swiper(".main_slide .main_slide_inner", {
    spaceBetween: 30,
    effect: "fade",

    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p",
    },

    autoplay: {
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  const MAIN_INFO_SLIDE = new Swiper(".main_info_slide", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
      768: {
        slidesPerView: 1.5,
      }
    },

    
    breakpoints: {
      500: {
        slidesPerView: 3.5,
      },
    },
  });

  const MAIN_INFO_LEFT_BUTTON = document.querySelector(
    ".main_info .main_info_arrows .left"
  );

  MAIN_INFO_LEFT_BUTTON.addEventListener("click", () => {
    MAIN_INFO_SLIDE.slidePrev();
  });

  const MAIN_INFO_RIGHT_BUTTON = document.querySelector(
    ".main_info .main_info_arrows .right"
  );

  MAIN_INFO_RIGHT_BUTTON.addEventListener("click", () => {
    MAIN_INFO_SLIDE.slideNext();
  });

  $(".input_wrap .in").on("click", function () {
    let idx = $(this).index();
    $(".desc li").eq(idx).addClass("on").siblings().removeClass("on");
  });

  $(".fopen").on("click", function () {
    $(".f_top_m").slideToggle("on");
    $(this).toggleClass("on");
  });
});
