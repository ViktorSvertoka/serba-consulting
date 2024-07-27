document.addEventListener('DOMContentLoaded', () => {
  const openMenuButton = document.querySelector('.js-open-menu');
  const closeMenuButton = document.querySelector('.js-close-menu');
  const mobileMenu = document.querySelector('#mobile-menu');
  const backdrop = document.querySelector('[data-menu-backdrop]');

  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    backdrop.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('is-closing');
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');

    mobileMenu.addEventListener('transitionend', handleTransitionEnd);
  }

  function handleTransitionEnd() {
    mobileMenu.classList.remove('is-open', 'is-closing');
    mobileMenu.removeEventListener('transitionend', handleTransitionEnd);
  }

  openMenuButton.addEventListener('click', openMobileMenu);
  closeMenuButton.addEventListener('click', closeMobileMenu);

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });
});
