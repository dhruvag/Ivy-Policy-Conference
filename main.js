console.log('got here');

$(document).ready(function(){
  $('body').on('click', '#subscribe-button', function() {
    console.log('clicked on button');
  });
});

$(document).ready(function(){
  $('body').on('mouseover', '#subscribe-button', function() {
    console.log('hovered on button');
  });
});

console.log($('#subscribe-wrapper'));

/*$('.typeform-button').on('mouseover', function() {
  console.log('hovered');
});*/