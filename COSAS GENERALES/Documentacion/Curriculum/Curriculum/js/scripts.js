const container = document.querySelector('.container');
const avatar = document.querySelector('.avatar');

avatar.addEventListener('click', () => {
  container.classList.toggle('expanded');
});