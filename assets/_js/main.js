// Fixs the menu so when link is clicked it would close the menu.
$(function () {
  $('#bs-example-navbar-collapse-1')
    .on('shown.bs.collapse', function () {
      $('#navbar-hamburger').addClass('hidden');
      $('#navbar-close').removeClass('hidden');
    })
    .on('hidden.bs.collapse', function () {
      $('#navbar-hamburger').removeClass('hidden');
      $('#navbar-close').addClass('hidden');
    });
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
  $(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
      $(this).collapse('hide');
    }
  });
});
$(document).ready(function () {
  setTimeout(function () {
    $("#cookieConsent").fadeIn(200);
  }, 4000);
  $("#closeCookieConsent, .cookieConsentOK").click(function () {
    $("#cookieConsent").fadeOut(200);
  });
});
