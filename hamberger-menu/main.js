
const jsHamburger = document.getElementById('js-hamburger');
const body = document.body;
const spHeaderMenu = document.getElementById('js-global-menu')

  jsHamburger.addEventListener('click', function() {
    body.classList.toggle('is-drawerActive')
    if (this.getAttribute('aria-expanded') == 'false') {
      this.setAttribute('aria-expanded', 'true');
      spHeaderMenu.style.visibility = "visible";
      spHeaderMenu.setAttribute('area-hidden','false')
    } else {
      this.setAttribute('aria-expanded', 'false')
      spHeaderMenu.style.visibility = "hidden";
      spHeaderMenu.setAttribute('area-hidden','true')
    };
  });