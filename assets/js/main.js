$(function(){
    $(".slider").owlCarousel({
      autoPlay: 3000,
      navigation : true, 
      slideSpeed : 1300,
      singleItem:true,
      items : 4,
      navigationText: true,
      stopOnHover: true,
      pagination: false,
      mouseDrag : false
  });

    $( "#tabs" ).tabs();

    $(".portfolio__foto").hover(function() {
        $(this).append(content);
    }, function() {
        $(this).empty();
    });

    var content = "<div class=\"foto__hover\"><p class=\"foto__descr\">Clean night sky</p>";
    content += "<p class=\"foto__descr--2\">photography</p>";       
    content += "<a href=\"\" class=\"foto__comments foto__counter\">53</a>";       
    content += "<a href=\"\" class=\"foto__like foto__counter\">230</a></div>";

})