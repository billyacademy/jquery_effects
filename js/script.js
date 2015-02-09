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
    alert('Next was clicked');
  });
});
