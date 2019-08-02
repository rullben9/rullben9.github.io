$(document).ready(function(){
    $("#wrapper").click(function(){
        $(".box").slideToggle();
    })
});

$(document).ready(function(){
    $("#wrapper").click(function(){
        $(".icon").toggleClass("close");
    })
});


$(document).ready(function(){
    $(".button").click(function(){
      $(".icon").toggle('slide')
    });
});

document.body.className = 'fade'

document.addEventListener("DOMContentLoaded", function(e) {
    document.body.className = '';
  });

