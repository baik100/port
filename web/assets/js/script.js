$(document).ready(function() {


    /**
     *  UI 스크립트
     */

    myApp.init()


    /**
     *v lib
     */


});


var myApp ={
    init: function () {
        myApp.isScroll();
        myApp.spyScroll();
        myApp.sideMenu();
        myApp.anim();
        myApp.backTop();
    },


    isScroll : function () {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();
            // console.log(sct);
            ;
            if(sct >600){
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
        TweenMax.from('.visual .text h3', 1, {y: 50, opacity: 0});
        TweenMax.from('.visual .text p', 2, {y: 50, opacity: 0, delay:2});
    },

    backTop: function () {
      $('.back-top').on('click',function () {
          var sct = $(window).scrollTop();
          $('html,body').animate({ scrollTop: 0 });
      })
    },
}
