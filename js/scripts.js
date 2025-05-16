document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const avatarWrapper = document.querySelector('.avatar-wrapper');

  avatarWrapper.addEventListener('click', () => {
    container.classList.toggle('expanded');
  });
});