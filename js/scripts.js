const page = document.querySelector('.page');
const switchBtn = document.getElementById('switchBtn');
const powerOffBtn = document.getElementById('powerOffBtn');

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

// Activa animación de máquina de escribir en el container dado
function activateTypingEffect(container) {
  const pre = container.querySelector('.typewriter');
  if (!pre) return;

  pre.classList.remove('animate');  // Reinicia animación
  void pre.offsetWidth;              // Forzar reflow para reiniciar CSS animation
  pre.classList.add('animate');     // Activa animación
}

// Inicializar UI: mostrar solo la primera pestaña y activar su animación
window.addEventListener('DOMContentLoaded', () => {
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.add('hidden'));

  if (tabs[0]) {
    tabs[0].classList.add('active');
    if (contents[0]) {
      contents[0].classList.remove('hidden');
      activateTypingEffect(contents[0]);
    }
  }
});

// Cambio de pestañas: activa la pestaña y su contenido correspondiente
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const targetId = tab.dataset.target;
    contents.forEach(content => {
      if (content.id === targetId) {
        content.classList.remove('hidden');
        activateTypingEffect(content);
      } else {
        content.classList.add('hidden');
      }
    });
  });
});

// Botón para volver al front (quita clase transitioning)
powerOffBtn.addEventListener('click', () => {
  page.classList.remove('transitioning');
});

// Botón para cambiar a back (añade clase transitioning y activa typing tras transición)
switchBtn.addEventListener('click', () => {
  page.classList.add('transitioning');

  // Intentar activar efecto typing tras delay para esperar animación/transición
  setTimeout(() => {
    const activeContent = document.querySelector('.tab-content:not(.hidden)');
    if (activeContent) {
      console.log('Activando typing effect en contenido visible');
      activateTypingEffect(activeContent);
    } else {
      console.log('No se encontró contenido visible para activar typing');
    }
  }, 300); // Ajusta tiempo si tienes animaciones más largas
});
