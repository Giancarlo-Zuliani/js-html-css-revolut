


$('nav ul li').each(function(){
  $(this).click(function(){
    $('nav ul li').each(function(){
      $(this).children('.dropdown').slideUp()
    })
  $(this).children('.dropdown').slideDown()
  })
})
