 document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('language-selector');
    if (!selector) return;

    const selectedOptionDiv = selector.querySelector('.selected-option');

    selectedOptionDiv.addEventListener('click', () => {
      selector.classList.toggle('open');
    });

    selector.querySelectorAll('.option').forEach(option => {
      option.addEventListener('click', () => {
        const img = option.querySelector('img');
        const lang = option.dataset.lang;
        selectedOptionDiv.innerHTML = `
          <img src="${img.src}" alt="${lang}">
          ${lang}
        `;
        selector.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!selector.contains(e.target)) {
        selector.classList.remove('open');
      }
    });
  });