document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit');
  const form = document.getElementById('form');
  const errorEl = document.getElementById('error');

  
  submitBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const salary = parseInt(document.getElementById('salary').value);
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value.trim();

    const errors = [];

    
    if (name.length < 3) {
      errorEl.textContent = 'name must be longer than 2 characters';
       errors.push('name must be longer than 2 characters');
    }
    if (salary < 10000 || salary > 15000) {
      errorEl.textContent += 'salary must be between 10,000 and 15,000';
      errors.push('salary must be between 10,000 and 15,000');
    }
    if (!birthday) {
      errorEl.textContent += 'birthday is required';
      errors.push('birthday is required');
    }
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      errorEl.textContent += 'phone must be 10 digits';
      errors.push('phone must be 10 digits');
    }
    if (errors.length > 0) {
      errorEl.style.color = '#ff3333';
      errorEl.textContent = errors.join('\n');
      return;
    }

    console.log('Form submitted:', { name, salary, birthday, phone });
    errorEl.style.color = '#2ca394';
    errorEl.textContent = 'Success! ✓';
  });
});