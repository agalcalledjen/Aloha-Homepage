$(document).ready(function () {
  /* 
  Smooth scroll from CSS Tricks.
  Select all links with hashes
  */
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 700, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            };
          });
        }
      }
    }); // end of smooth scroll

  // Flickity Carousel
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  }); // end of carousel

  // $('#newsletter-form').on('click', function (event) {
  //   event.preventDefault();
  //   if ($('#newsletter-form-input').val() == '') {
  //     $('.button').addClass('.active');
  //   } else {}
  // };)

  // $("#newsletter-form").mouseenter(function () {
  //   $(".button").css("box-shadow", "0 0 1rem #969696");
  // });

  // Newsletter Email Subscription 
  $('#newsletter-form').on('submit', function (event) {
    event.preventDefault();
    if ($('#newsletter-form-input').val() == '') {
      alert('Please enter a valid email address.');
    } else {
      alert('Thanks for subscribing!');
    }
  });

  $("#newsletter-form").on('click', function () {
    $(".button").css("box-shadow", "0 0 1rem #969696");
  }); // end of email subscription

  // Fix "Skip Link" Focus in Webkit
  $(function () {
    $("a[href^='#']").not("a[href='#']").click(function () {
      $("#" + $(this).attr("href").slice(1) + "").focus();
    });
  }); // end of skip link
}); // end of doc ready