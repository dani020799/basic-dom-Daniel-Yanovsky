document.addEventListener('DOMContentLoaded', () => {
  const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };

  const input = document.getElementById('nameInput');
  const btn = document.getElementById('checkBtn');
  const msg = document.getElementById('message');

  function checkReservation() {
    const name = input.value.trim();
    if (!name) {
      msg.textContent = 'Please enter a name';
      return;
    }

    if (Object.prototype.hasOwnProperty.call(reservations, name)) {
      if (!reservations[name].claimed) {
        msg.textContent = `Welcome, ${name}`;
        reservations[name].claimed = true;
      } else {
        msg.textContent = 'Hmm, someone already claimed this reservation';
      }
    } else {
      msg.textContent = 'You have no reservation';
    }
  }

  btn.addEventListener('click', checkReservation);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') checkReservation(); });
});