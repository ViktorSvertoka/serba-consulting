(() => {
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  const backdrop = document.querySelector('.backdrop');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);
  backdrop.addEventListener('click', handleBackdropClick);
  window.addEventListener('keydown', handleKeyDown);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }

  function handleBackdropClick(event) {
    if (event.target === backdrop) {
      toggleModal();
    }
  }

  function handleKeyDown(event) {
    if (event.code === 'Escape' && !modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  }
})();
