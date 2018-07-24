$(document).ready(function() {


    /**
     *  UI 스크립트
     */

    $('.main-header.btn').click(function (){
        $('.side-menu').addClass("is-active");
    })

    $(".close").click(function () {
        $(".side-menu").removeClass("is-active");
    })



});

