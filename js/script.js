$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        nav: true
    });
});

$('a[href^="#"]').click(function () { 
    elementClick = $(this).attr("href");
   destination = $(elementClick).offset().top;
   {
   $('html,body').animate( { scrollTop: destination }, 1000);
   } 
   return false;
  })