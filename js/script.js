


$('nav ul li').each(function(){
  $(this).click(function(){
    $('nav ul li').each(function(){
      $(this).children('.dropdown').slideUp();
    })
    if($(this).children('.dropdown').is(':visible')){
      $(this).children('.dropdown').slideUp();
    }else{
      $(this).children('.dropdown').slideDown()
    }
  })
})
