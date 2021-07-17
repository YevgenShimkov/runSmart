$(document).ready(function () {
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.svg"></button>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: true,
          arrows: false
        }
      },
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };

  toggleSlide('.catalog-item__list');
  toggleSlide('.catalog-item__content');
  
  // Modal
  // when you click on order a consultation or order a call, the mod window pops up 
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  // X when you click on which closes the mod window 
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow'); // list of windows to be closed 
  });
  // when click button "buy"
  // change subtitle on modal win buy
  $('.button_mini').each( function(i) { // перебираем все нопки
      $(this).on('click', function() { // нажатая кнопка, бе
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); // внутри модального окна order, есть класс modal__descr. В него встравляем текст (находим subtitle элемента по счёту i и берем оттуда текст)
        $('.overlay, #order').fadeIn('slow'); // выводим модальное окно
      });
  });

  // validation
  function validateForms(form) {
    $(form).validate({
      rules: { // create rules for validation
        name: 'required',
        phone: 'required',
        email: {
            required: true,
            email: true
        }
      },
      messages: { //  change messages ivstead of default
        name: "Ведите ваше имя",
        phone: "Введите номер телефона",
        email: {
          required: "Введите свою почту",
          email:'Не правильный формат почты'
        }
      }
    });
  };

  validateForms('#consultation-form'); // указываем прямой id
  validateForms('#order form'); // указываем область id и в ней ищем тег form
  validateForms('#consultation form'); // указываем область id и в ней ищем тег form

  // mask 
  $('input[name=phone]').mask('+38(999) 999-9999');
});