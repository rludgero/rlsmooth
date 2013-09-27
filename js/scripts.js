$(function() {
  $(".slide-option").rlSmooth();

  $(".slideOut-option").rlSmooth('slideOut',{
  	y: 1700,
  	on: 1000,
  	off: 800
  });

  $(".slideHide-option").rlSmooth('slideHide',{
  	y: 1900
  });

  $(".fade-option").rlSmooth('fade',{
    y: 500
  });

  $(".fadeUp-option").rlSmooth('fadeUp',{
    y: 700
  });

  $(".fadeHide-option").rlSmooth('fadeHide',{
    y: 900
  });

  $(".showHide-option").rlSmooth('showHide',{
    y: 1100
  });

  $(".showUp-option").rlSmooth('showUp',{
    y: 1300
  });

  $(".showOut-option").rlSmooth('showOut',{
    y: 1500
  });










  // button go to top

  $(".slideHide-option").click(function(){

    $("html").animate({
      scrollTop: 0 }, 1000);

  });

});
