document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navRight = document.querySelector('.nav-right');

  if (toggle && navRight) {
    toggle.addEventListener('click', function () {
      var isOpen = navRight.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navRight.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navRight.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
