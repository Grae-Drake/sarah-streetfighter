$(document).ready(function() {

  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  });

  $('.ryu').mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  });

  $('.ryu').mousedown(function() {
    console.log('mousedown');
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
  });

  $('.ryu').mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

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

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
