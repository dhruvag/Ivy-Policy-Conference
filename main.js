$(document).ready(function(){
  $('body').on('click', '#subscribe-button', function() {
    window.open('https://ivypolicyconference.typeform.com/to/VqO51Q', '_blank');
  });
  $('body').on('click', '#housing-button', function() {
    window.open('http://goo.gl/forms/9xsP0QS1jL', '_blank');
  });
});

$(document).ready(function(){
  $('body').on('mouseover', '#subscribe-button', function() {
    $(this).attr('src', 'Images/InterestOn.png');
  });
});

$(document).ready(function(){
  $('body').on('mouseout', '#subscribe-button', function() {
    $(this).attr('src', 'Images/InterestOff.png');
  });
});

$(document).ready(function(){
  $('body').on('mouseover', '#housing-button', function() {
    $(this).attr('src', 'Images/HousingOn.png');
  });
});

$(document).ready(function(){
  $('body').on('mouseout', '#housing-button', function() {
    $(this).attr('src', 'Images/HousingOff.png');
  });
});

$(document).ready(function() {
  $('body').on('mouseover', 'a', function() {
    $(this).css('color', '#3b4372');
  });
});

$(document).ready(function() {
  $('body').on('mouseout', 'a', function() {
    $(this).css('color', '#283060');
  });
});