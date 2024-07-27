document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('a[href*="#"]');
  const menuNavLinks = document.querySelectorAll('.menu__nav-link');
  const mobileMenu = document.querySelector('#mobile-menu');
  const backdrop = document.querySelector('[data-menu-backdrop]');

  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }

  function scrollToTarget(event, targetId, isMenuNavLink = false) {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      if (isMenuNavLink) {
        closeMobileMenu();
        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 300);
      } else {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const blockID = anchor.getAttribute('href').substring(1);
      scrollToTarget(event, blockID);
    });
  });

  menuNavLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      const targetId = link.getAttribute('href').substring(1);
      scrollToTarget(event, targetId, true);
    });
  });
});
