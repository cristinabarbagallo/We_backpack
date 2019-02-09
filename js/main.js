//--- Menu toggle effect

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//Set initial state of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //Set Menu State
    showMenu = false;
  }
}

//--- Scroll to Top
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//--- Scroll down
$(function () {
  $('.scroll-down').click(function () {
    $('html, body').animate({
      scrollTop: $('.parallax-img-1').offset().top
    }, 'slow');
    return false;
  });
});


//--- Fade in Text when scrollling down
$(document).ready(function () {

  var $fade = $('#fadeIn');

  $(window).on('scroll', function () {

    if ($(this).scrollTop() > 200) {

      $fade.addClass('active');

    } else {

      $fade.removeClass('active');

    }

  });

});


//---- Images Animation

$(function () {
  var $window = $(window),
    win_height_padded = $window.height() * 1.1,
    isTouch = Modernizr.touch;

  if (isTouch) {
    $('.revealOnScroll').addClass('animated');
  }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
      win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this = $(this),
        offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function () {
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'), 10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
    $(".revealOnScroll.animated").each(function (index) {
      var $this = $(this),
        offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInRight')
      }
    });
  }

  revealOnScroll();
});