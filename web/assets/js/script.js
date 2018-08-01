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
        myApp.visualSlide();
        myApp.workBtn();
    },


    isScroll : function () {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();
            // console.log(sct);
            ;
            if(sct >200){
                $("html").addClass("is-scroll");
            }else{
                $("html").removeClass("is-scroll");
            }
        })
    },

    spyScroll: function () {
        $('.gnb .nav-link').on("click",function () {
            var self = $(this);
            var dataNav = self.data('nav');


            console.log($(dataNav).offset());
            var oft = $(dataNav).offset().top;

            $('html, body').animate({scrollTop: oft}, 600)
        })

    },

    sideMenu : function () {
        $('.main-header .btn').click(function (){
            $('.side-menu').addClass("is-active");
        })

        $(".close").click(function () {
            $(".side-menu").removeClass("is-active");
        })
    },

    visualSlide :function () {
        $('.scroll-down .scroll-toggle').click(function () {
            $('html, body').animate({scrollTop:800},'50');

        })
    },

    workBtn : function () {
        $('.work .btn-item-menu').click(function (){
            $('.item-menu').addClass("is-active");
        })
    },
}


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ededed}";
    document.body.appendChild(css);
};




