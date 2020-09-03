// var noload = function() {
//     $('.menu').removeClass('menu--noload');
// };        
// function noLoad() {
//     $('.menu').removeClass('menu--noload');
// };        

$(document).ready(function(){


        // var noload = function() {
        //     $('.menu').removeClass('menu--noload');
        // };

    // jQuery(function($){
    //   $(".js--phone").mask("+7 (999) 999-99-99");
    // });

    // $(".js--scroll-btn").bind("click", function(e){
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 1200);
    //     e.preventDefault();
    //     return false;
    // });

    // $('.js--slick-1').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    //   draggable: false,
    //   // adaptiveHeight: true,
    //   // centerMode: true,
    //   asNavFor: '.js--slick-1-preview'
    // });

    // $('.js--slick-1-preview').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   asNavFor: '.js--slick-1',
    //   // dots: true,
    //   // centerMode: true,
    //   focusOnSelect: true,  
    //   arrows: false,
    //   // spaceBetween: 30 
    //     responsive: [
    //       {
    //         breakpoint: 470,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       },
    //     ]     
    // });

    // var lMenu = $('.leftmenu');
    // var lMenu = $('.menu__big-bg');
    $('.header__menu').click(
        function(){
            // $(this).toggleClass('header__menu--open');
            $('.menu__big-bg').toggleClass('menu__big-bg--active');
            // noLoad();
            $('.leftmenu__box').toggleClass('leftmenu__box--active');
            $('.leftmenu').toggleClass('leftmenu--open');
            $('.header__menu').toggleClass('menu--open'); 
            $('.header__menu').removeClass('menu--noload');
            // console.log('111');
 
        }
    );
    // function noload() {
    //     $('.menu').removeClass('menu--noload');
    // }
    // noload();
});

// $(document).ready(
//     function(){
//         noLoad();
//         console.log('222');
//     }
// );   




  // $(document).ready(function(){
  //   $("#start").sticky({topSpacing:0});
  // });
 

   

// $('[aria-expanded="false"].navbar-toggler').click(
//   function(){
//     $(this).toggleClass('burger-open');
//   }
// ); 

    // var swiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     slidesPerView: 'auto',
    //     centeredSlides: true,
    //     paginationClickable: true,
    //     spaceBetween: 30
    // });
    
    
    // $('.js--slider-screen').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 1,
    //   centerMode: true,
    //   variableWidth: true
    // });

    var swiperRe = new Swiper('.js--slider-screen', {
        // pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        loop: true, //для центровки
        // spaceBetween: 30
        spaceBetween: 0,
        nextButton: '.js--slider-next',
        prevButton: '.js--slider-prev',
        effect: 'slide', //оригинал
        // effect: 'fade', //тест
        onSlideChangeEnd: function (swiperRe) {
          abc123 = $('.swiper-wrapper');
          // swiperRe.updateSlidesSize();
          // swiperRe.update(true);
          abc123.css('transition-duration','0.33s', 'important');
          // swiperRe.onResize(); 
          // abc123.css('transition-duration', '0.3s!important');
          swiperRe.update(true); 
          abc123.css('transition-duration', '0.33s', 'important');
          // abc123.css('transition-duration', '0.3s!important');
          // $('.swiper-wrapper').css('transition-duration', '0s');
          // onSetTransition(swiperRe, 300);
              // swiperRe.updateContainerSize() - пересчитать размер контейнера swiper
              // swiperRe.updateSlidesSize() - пересчитать количество слайдов и их смещений.Полезно после добавления / удаления слайдов с помощью JavaScript
              // swiperRe.updateProgress() - пересчитать прогресс swiper
              // swiperRe.updatePagination() - обновляет макет страницы и повторно отображает патроны
              // swiperRe.updateClasses() - обновляет активные / предыдущие / следующие классы на слайдах и марках
        },  
        breakpoints: {
            // when window width is <= 320px
            // 320: {
            //     // slidesPerView: 1,
            //     // spaceBetween: 10
            // },
            // // when window width is <= 480px
            // 480: {
            //     // slidesPerView: 2,
            //     // spaceBetween: 20
            // },
            // 575: {
            //     effect: "cube",
            //     slidesPerView: 1,
            // },
            // when window width is <= 640px
            991: {
                slidesPerView: 1,
                effect: 'slide',
                // spaceBetween: 30
            }
        },

        // onSetTranslate(swiper, translate)
    });


    // TweenLite.to(window, 2, {
    //   scrollTo: 1400,
    //   offsetY: 70
    // });
    
    // var animatAct = function () {
    //     onVisible.add('.formline', 200, function () {
    //         this[0].classList.add('act');
    //     });
    // };
    // $(document).ready(function () {
    //     animatAct();
    // });
    var animatAct = function () {
        onVisible.add('.tta', 200, function () {
            this[0].classList.add('tta--act');
        });
    };
    $(document).ready(function () {
        animatAct();
    });

    // $(document).scroll(function () {
    //     // $("#log").append("<div>Handler for .scroll() called.</div>");

    //     var hght1js = $(window).outerHeight();
    //     // console.log('высота =' + hght1js);
    //     var scr1js = $(window).scrollTop();
    //     // console.log('scroll =' + scr1js);
    //     // $('.stscr').css('transform','translate3d(0,50px,0)' );
    //     // $('.stscr').css('transform','translate3d(0px,'+scr1js+'px,0px)' );
    //     if (scr1js<hght1js) {
    //         $('.parallax-container').css('transform','translate3d(0px,'+(scr1js*(-1))+'px,0px)' );
    //     }
    // });
    // $(document).resize(function () {
    //     jQuery(window).trigger('scroll');
    // });
    $(document).resize(function () {
        swiperRe.update(true);
        // swiperRe.onResize();
        
    });

    // jQuery(window).trigger('scroll');
    // jQuery(window).trigger('resize');
    
    jQuery(window).trigger('resize');

        // function r() {
        //     if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
            //     } else
            // }
            // var t = ["\n %c Made with ♥ by labsales %c %c %c http://www.labsales.ru/ %c %c🐶 \n\n", "color: #fff; background: #b0976d; padding:5px 0;", "background: #494949; padding:5px 0;", "background: #494949; padding:5px 0;", "color: #fff; background: #1c1c1c; padding:5px 0;", "background: #fff; padding:5px 0;", "color: #b0976d; background: #fff; padding:5px 0;"];
            //         window.console.log.apply(console, t)
        // window.console && window.console.log("Made with love ♥ labsales - http://www.labsales.ru/ 🐶")