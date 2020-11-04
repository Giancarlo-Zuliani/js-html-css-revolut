


$('nav ul li').each(function(){
  $(this).click(function(){
    $('nav ul li').each(function(){
      $(this).children('.dropdown').hide()
    })
  $(this).children('.dropdown').toggle()
  })
})
