$(document).ready(function() {


    /**
     *  UI 스크립트
     */

    portFolio.init()


    /**
     *v lib
     */


});


var portFolio ={
    init: function () {
        portFolio.isScroll();
        portFolio.spyScroll();
        portFolio.sideMenu();
        portFolio.anim();
        portFolio.backTop();
        portFolio.visualAnim();
        portFolio.preLoader();
    },

    preLoader: function () {
        $(window).on('load',function () {
            $('.holder').delay(1500).fadeOut();
        })
    },


    isScroll : function () {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();
            console.log(sct);

            if(sct >500){
                $("html").addClass("is-scroll");
            }else{
                $("html").removeClass("is-scroll");
            }
        })
    },

    spyScroll: function () {
        $('.nav-link').on("click",function () {
            var self = $(this),
                dataNav = self.data('nav');


            console.log($(dataNav).offset());
            var oft = $(dataNav).offset().top;

            $('html,body').animate({scrollTop: oft})
        })

    },

    sideMenu : function () {
        $('.btn-menu').click(function (){
            $('html').addClass("is-sideopen");
        })

        $(".btn-close,.gnb li a").click(function () {
            $("html").removeClass("is-sideopen");
        })

    },

    anim: function () {
        $(window).on('load',function () {
            TweenMax.from('.visual .text h3', 1, {y: 50, opacity: 0, delay:2});
            TweenMax.from('.visual .text p', 2, {y: 50, opacity: 0, delay:2.1});
        })
    },

    backTop: function () {
      $('.back-top').on('click',function () {
          var sct = $(window).scrollTop();
          $('html,body').animate({ scrollTop: 0 });
      })
    },

    visualAnim: function () {
        $(window).on('scroll',function () {
            const sct = $(window).scrollTop();
            $('.visual').css({backgroundSize: 100 + sct / 100  +"%"})
            $('.visual h3 , .visual p').css({opacity: 1 - sct /300})
            $('.visual .text').css({transform: "translateY("
                + sct / 3 + "px)"})
        })
    },

}
