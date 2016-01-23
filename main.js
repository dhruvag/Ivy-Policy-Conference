$(document).ready(function(){
  $('body').on('click', '#subscribe-button', function() {
    window.open('https://ivypolicyconference.typeform.com/to/VqO51Q', '_blank');
  });
});

$(document).ready(function(){
  $('body').on('mouseover', '#subscribe-button', function() {
    $(this).attr('src', 'Images/subscribe-mouseover.png');
  });
});

$(document).ready(function(){
  $('body').on('mouseout', '#subscribe-button', function() {
    $(this).attr('src', 'Images/subscribe-mouseout.png');
  });
});

console.log($('#subscribe-wrapper'));

/*$('.typeform-button').on('mouseover', function() {
  console.log('hovered');
});*/