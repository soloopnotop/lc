"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
 
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    $.localScroll();



 


        var wow = new WOW({
            mobile: false 
        });
        wow.init();


    $('.main_comments_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
	    nav:false,
	    navText: [
                    "<i class='lnr lnr-chevron-left'></i>",
                    "<i class='lnr lnr-chevron-right'></i>"
                ],
      autoplayHoverPause: true

    });



	

	













	
	    


	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	 
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	 
	


    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });	
   

   
});

function scrollToPricing() {
    const pricingSection = document.querySelector("#pricingtop");
    if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
document.querySelector('a[data-target="pricing"]').addEventListener("click", function (e) {
    e.preventDefault(); 
    const targetSection = document.getElementById(this.getAttribute("data-target"));
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
        });
    }
});

