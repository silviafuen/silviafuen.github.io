$('.popup-trigger').click(function(e) {
  e.stopPropagation();
  if (jQuery(window).width() < 767) {
    $(this).after($(".popup"));
    $('.popup').show().addClass('popup-mobile').css('top', 0);
    $('html, body').animate({
      scrollTop: $('.popup').offset().top
    }, 500);
  } else {
    $('.popup').removeClass('popup-mobile').css('top', newHeight).toggle();
  };
});

$('html').click(function() {
  $('.popup').hide();
});

$('.popup-btn-close').click(function(e) {
  $('.popup').hide();
});

$('.popup').click(function(e) {
  e.stopPropagation();
});

$('.popup-trigger2').click(function(e) {
  e.stopPropagation();
  if (jQuery(window).width() < 767) {
    $(this).after($(".popup2"));
    $('.popup2').show().addClass('popup-mobile2').css('top', 0);
    $('html, body').animate({
      scrollTop: $('.popup2').offset().top
    }, 500);
  } else {
    $('.popup2').removeClass('popup-mobile2').css('top', newHeight).toggle();
  };
});

$('html').click(function() {
  $('.popup2').hide();
});

$('.popup-btn-close2').click(function(e) {
  $('.popup2').hide();
});

$('.popup2').click(function(e) {
  e.stopPropagation();
});

$('.popup-trigger3').click(function(e) {
  e.stopPropagation();
  if (jQuery(window).width() < 767) {
    $(this).after($(".popup3"));
    $('.popup3').show().addClass('popup-mobile3').css('top', 0);
    $('html, body').animate({
      scrollTop: $('.popup3').offset().top
    }, 500);
  } else {
    $('.popup3').removeClass('popup-mobile3').css('top', newHeight).toggle();
  };
});

$('html').click(function() {
  $('.popup3').hide();
});

$('.popup-btn-close3').click(function(e) {
  $('.popup3').hide();
});

$('.popup3').click(function(e) {
  e.stopPropagation();
});
