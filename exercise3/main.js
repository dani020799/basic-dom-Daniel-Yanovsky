document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  if (!container) return;

  const COUNT = 32; 

  function randomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  for (let i = 0; i < COUNT; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.addEventListener('mouseenter', () => {
      box.style.background = randomColor();
    });
    container.appendChild(box);
  }
});