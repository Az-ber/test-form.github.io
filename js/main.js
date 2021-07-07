$(function () {

  $('.popup__label').on('click', function () {
    $('.popup__label').removeClass('popup__label--active');
    $(this).addClass('popup__label--active');
  });

  $('.popup__info').on('click', function () {
    $('.popup__info').removeClass('popup__info--active');
    $(this).addClass('popup__info--active');
  });

  $('.more__remove1').on('click', function () {
    $('.more__item1').addClass('more__item1--active');
    $('.number').text('40');
  });

  $('.more__remove2').on('click', function () {
    $('.more__item2').addClass('more__item2--active');
    $('.number').text('0');
  });

  $('.more__btn').on('click', function () {
    $('.more__btn').toggleClass('more__btn--active');
    $('.more__error').toggleClass('more__error--active');
  });

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  );
  wow.init();
});