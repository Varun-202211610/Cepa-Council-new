new WOW().init();
$('.modal-toggle').on('click', function (e) {
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
});
$(window).on('load', function () {
  $('.loader').fadeOut();
});


$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 900,
    autoplaySpeed: 700,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
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
  $('.slick-dots li:nth-child(1)').html('<button><span>2019</span></button>');
  $('.slick-dots li:nth-child(2)').html('<button><span>2020</span></button>');
  $('.slick-dots li:nth-child(3)').html('<button><span>2021</span></button>');
  $('.slick-dots li:nth-child(4)').html('<button><span>2022</span></button>');
});

$(document).ready(function () {
  $(".slider_energy").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 900,
    autoplaySpeed: 700,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
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


(function ($) {
  $(window).on("load", function () {
    $(".content").mCustomScrollbar();
  });
})
$(window).scroll(function () {
  if ($(window).scrollTop() >= 60) {
    $('.searchshow').show();
    $('header').addClass('fixed');
    $('.mediatopheader').slideUp(500);
    $('._top_nav').slideUp(500);
    $('._logo_color').css("display", "none");
    $('._logo_discolor').css("display", "block");
    // $('._logo_discolor').addClass('add_class');

    $('.hbod').removeClass('headerborderbottom');
    //   $('_add_btn').css("background" , "transparent")

  }
  else {
    $('._logo_color').css("display", "block");
    $('._logo_discolor').css("display", "none");
    // $('._logo_color').addClass('add_class');
    $('header').removeClass('fixed');
    $('.mediatopheader').slideDown(0);
    $('._top_nav').slideDown(0);


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

var a = 0;
$(window).scroll(function () {
  let counterBoxExist = document.getElementById('counter-box');
  if (counterBoxExist != null) {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-number");
        $({
          countNum: $this.text()
        }).animate(
          {
            countNum: countTo
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              //$this.text(Math.ceil(this.countNum));
              $this.text(
                Math.ceil(this.countNum).toLocaleString("en")
              );
            },
            complete: function () {
              $this.text(
                Math.ceil(this.countNum).toLocaleString("en")
              );
              //alert('finished');
            }
          }
        );
      });
      a = 1;
    }
  }

});


$('#myvideo').hover(function toggleControls() {
  if (this.hasAttribute("controls")) {
    this.removeAttribute("controls")
  }
})

