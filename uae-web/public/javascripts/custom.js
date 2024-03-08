new WOW().init();


$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 700,
    draggable: true, // Enable dragging
    pauseOnHover: false, // Don't pause autoplay on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});



$(window).on('load', function () {
  $('.loader').fadeOut();
});



        $(document).ready(function () {


            $('.modal-toggle').on('click', function (e) {
                e.preventDefault();
                $('.modal').toggleClass('is-visible');
            });


            $('.tabs a').click(function () {
                $('.panel').hide();
                $('.tabs a.active').removeClass('active');
                $(this).addClass('active');

                var panel = $(this).attr('href');
                $(panel).fadeIn(1000);

                return false;  // prevents link action

            });  // end click 

            $('.tabs li:first a').click();

        }); // end ready



(function ($) {
  $(window).on("load", function () {
    $(".content").mCustomScrollbar();
  });
})
$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('.searchshow').show();
    $('header').addClass('fixed');
    $('.mediatopheader').slideUp(500);
    // $('._logo_discolor').addClass('add_class');

    $('.hbod').removeClass('headerborderbottom');
    //   $('_add_btn').css("background" , "transparent")

  }
  else {
    // $('._logo_color').addClass('add_class');
    $('header').removeClass('fixed');
    $('.mediatopheader').slideDown(0);


    $('.hbod').addClass('headerborderbottom');
  }
});

$('#menu-icon').on('click', function () {
  $('.navbar').toggleClass('navactive');
  return false;
});
$('.navicon').click(function () {
  //   $('.navicon').hide()
  //   $('.closeicon').show()
  $('.navshow').toggleClass('navactive');
  $('.searchshow').removeClass('searchactive');
  $('.dashnavicon').show()
  $('.closedashicon').hide()
  //   $('.navshow').addClass('navactive')
  $('.dashnavshow').removeClass('dashnavactive')
});



$('.navicon11').click(function () {
  $('.navicon').show()
  $('.closeicon').hide()
  $('.navshow').removeClass('navactive')
});
$('.search_active').click(function () {
  $('.searchshow').toggleClass('searchactive');
  $('.navshow').removeClass('navactive');
})

$('.dashnavicon').click(function () {
  $('.dashnavicon').hide()
  $('.closedashicon').show()
  $('.navicon').show()
  $('.closeicon').hide()
  $('.dashnavshow').addClass('dashnavactive')
  $('.navshow').removeClass('navactive')
});

$('.closedashicon').click(function () {
  $('.dashnavicon').show()
  $('.closedashicon').hide()
  $('.dashnavshow').removeClass('dashnavactive')
});

$('.openslideabout').click(function () {
  $('.whitewrap,.aboutsection').toggleClass('avticeab actbanner').slideOutDown('slow');
});

