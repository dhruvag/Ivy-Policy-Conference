$(document).ready(function(){
  $('body').on('click', '#subscribe-button', function() {
    window.open('https://ivypolicyconference.typeform.com/to/VqO51Q', '_blank');
  });
});

$(document).ready(function(){
  $('body').on('mouseover', '#subscribe-button', function() {
    $(this).attr('src', 'Images/SubOn.png');
  });
});

$(document).ready(function(){
  $('body').on('mouseout', '#subscribe-button', function() {
    $(this).attr('src', 'Images/SubOff.png');
  });
});

console.log($('#subscribe-wrapper'));

/*$('.typeform-button').on('mouseover', function() {
  console.log('hovered');
});*/