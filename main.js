document.addEventListener('DOMContentLoaded', () => {
  const ball = document.querySelector('#ball') || document.querySelector('.ball');
  if (!ball) {
    console.error('לא נמצא אלמנט כדור. ודא שיש id="ball" או class="ball" ב-HTML.');
    return;
  }

  const STEP = 20;
  let x = 0, y = 0;

  function updateBall() {
    ball.style.transform = `translate(${x}px, ${y}px)`;
  }

  const arrows = document.querySelectorAll('.arrow, [data-dir], .arrow-button, button.arrow');
  arrows.forEach(el => {
    const dir = el.dataset.dir || el.id || el.className;
    el.addEventListener('click', () => {
      const d = (el.dataset.dir || '').toLowerCase();
      if (d === 'left' || /left/.test(dir)) x -= STEP;
      else if (d === 'right' || /right/.test(dir)) x += STEP;
      else if (d === 'up' || /up/.test(dir)) y -= STEP;
      else if (d === 'down' || /down/.test(dir)) y += STEP;
      updateBall();
    });
  });
});