  $('nav ul > li').click(function(){
    var el = $(this).children('.dropdown');
    $('nav ul li').each(function(){
      $(this).children('.dropdown').slideUp();
    })
    el.is(':visible') ? el.slideUp() : el.slideDown();
});

  $('.dropdown').mouseleave(function(){
    $('nav ul li').each(function(){
      $(this).children('.dropdown').slideUp();
    })
  })
