document.addEventListener('DOMContentLoaded', () => {
  const openMenuButton = document.querySelector('.js-open-menu');
  const closeMenuButton = document.querySelector('.js-close-menu');
  const mobileMenu = document.querySelector('#mobile-menu');
  const backdrop = document.querySelector('[data-menu-backdrop]');
  const menuNavLinks = document.querySelectorAll('.menu__nav-link');

  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    backdrop.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }

  openMenuButton.addEventListener('click', openMobileMenu);
  closeMenuButton.addEventListener('click', closeMobileMenu);

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) {
      closeMobileMenu();
    }
  });

  menuNavLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        closeMobileMenu();

        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    });
  });
});
