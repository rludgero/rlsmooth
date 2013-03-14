$(function() {
  $(".top").rlSmooth();

  $(".btn").rlSmooth('showhide',{
  	y: 1000,
  	on: 1000,
  	off: 800
  });

  $(".twt").rlSmooth('fade',{
  	y: 300
  });

  $('.btn').click(function(){

    $("html").animate({
      scrollTop: 0 }, 1000);

  });

});
