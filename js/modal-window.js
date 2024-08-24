(() => {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  const backdrop = document.querySelector('.js-backdrop');

  openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  closeModalBtn.addEventListener('click', toggleModal);
  backdrop.addEventListener('click', handleBackdropClick);
  window.addEventListener('keydown', handleKeyDown);

  function toggleModal() {
    modal.classList.toggle('js-hidden');
    document.body.classList.toggle('js-no-scroll');
  }

  function handleBackdropClick(event) {
    if (event.target === backdrop) {
      toggleModal();
    }
  }

  function handleKeyDown(event) {
    if (event.code === 'Escape' && !modal.classList.contains('js-hidden')) {
      toggleModal();
    }
  }
})();
