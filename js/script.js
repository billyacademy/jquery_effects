$(document).ready(function(){
  //Set Options
  var speed = 500;              // fade speed
  var autoSwitch = true;        //auto slider options
  var autoswitch_speed = 4000   // Auto slider speed


  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show first slide
  $('.active').show();

  // event handler

  $('#next').on('click', function() {
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
      // last child is asking if it was the last slide
      $('.slide').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  });

  $('#prev').on('click', function() {
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      // last child is asking if it was the last slide
      $('.slide').last().addClass('active');
    } else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  });

});
