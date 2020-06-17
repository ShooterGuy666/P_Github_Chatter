$(document).ready(function(){
  $('.hamburgermenu').click(function(){
    $('.icon').toggleClass('active');
    $("#menu").toggleClass('d-none');
  });
});

$(document).ready(function(){
  $('.chatname').click(function(){
    $('.show').toggleClass('d-none');
    $('#return').toggleClass('d-none');
    $('.chatroom').toggleClass('d-none');
    $('.app_menu').toggleClass('d-none');
    $('.message_type').toggleClass('d-none');

  });
});

$(document).ready(function(){
  $('#return').click(function(){
    $('.show').toggleClass('d-none');
    $('#return').toggleClass('d-none');
    $('.chatroom').toggleClass('d-none');
    $('.app_menu').toggleClass('d-none');
    $('.message_type').toggleClass('d-none');
  });
});



