document.addEventListener('DOMContentLoaded', () => {
  const userContainer = document.querySelector('.header_user');
  const userLogo = userContainer.querySelector('.user_logo');

  userLogo.addEventListener('click', () => {
    userContainer.classList.toggle('show');
  });

  // Клик вне меню — закрывать
  document.addEventListener('click', (e) => {
    if (!userContainer.contains(e.target)) {
      userContainer.classList.remove('show');
    }
  });
});