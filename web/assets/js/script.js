$(document).ready(function() {


    /**
     *  UI 스크립트
     */

    $('.main-header .btn').click(function (){
        $('.side-menu').addClass("is-active");
    })

    $(".close").click(function () {
        $(".side-menu").removeClass("is-active");
    })

    $('.scroll-down .scroll-toggle').click(function () {
        $('.scroll-down .scroll-toggle').addClass('is-active');
        $('html, body').animate({scrollTop:850},'50');

    })

    $('.work .btn-item-menu').click(function (){
        $('.item-menu').addClass("is-active");
    })


});



