var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-420px";
    }
    prevScrollpos = currentScrollPos;
}
// STICKY
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("nav-sticky");
    } else {
        $(".sticky").removeClass("nav-sticky");
    }
});
// SmoothLink
$('a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
//owlCarousel
$(document).ready(function() {
    $("#slider").owlCarousel({
        autoPlay: 3000,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 1]

    });
});
var a = 0;
$(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                }
            });
        });
        a = 1;
    }
});
$.ripple(".btn", {
	debug: false, 
	on: 'mousedown',
	opacity: 0.5,
	color: "auto",
	multi: false,
	duration: 0.7,
	rate: function(pxPerSecond) {
        return pxPerSecond;
    },
	easing: 'linear'
});
$(document).ready(function(){
    $(".btn_gallery").on("click", function(){
        var value = $(this).attr("data-filter");
        if(value == "all"){
            $(".filter").show("1000");
        }
        else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }
    });
    $("ul .btn_gallery").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});
$(document).ready(function(){
    $(window).on("scroll", function(){
        var w_top = $(window).scrollTop();
        var e_top = $("#about").offset().top;
        if(w_top >= e_top){
            $(".scrollTop").css("opacity", "1");
        }
        if(w_top <= e_top){
            $(".scrollTop").css("opacity", "0");
        }
    });
});