$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    console.log('mousedown')
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
$(document).ready(function(){
    $('.ryu').keydown(function(e) {
      console.log('keydown');
        if(e.keyCode == 88){
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.hadouken').hide();
            $('.ryu-cool').show(); 
        }
    });
    $('.ryu').keyup(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-still').show();
            $('ryu-ready').hide();
            $('.hadouken').hide();
            $('ryu-cool').hide();
        }
    });
});
