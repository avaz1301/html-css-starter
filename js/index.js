$( document ).ready(function() {
  console.log( "ready!" );
  var element = document.getElementById("title");
  element.classList.add("animated", "fadeInUp");

  $('#sub-title').addClass('animated fadeInRight');
  $('#icon-list').addClass('animated fadeInUp');
  $('#photo-cred').addClass('animated rollIn');
});