const csSkins = [
  { src: './img/gallery/cs_1', name: 'CS Skin 1' },
  { src: './img/gallery/cs_2', name: 'CS Skin 2' },
  { src: './img/gallery/cs_3', name: 'CS Skin 3' },
  { src: './img/gallery/cs_4', name: 'CS Skin 4' },
];

const dotaSkins = [
  { src: 'https://via.placeholder.com/80x80?text=Dota1', name: 'Dota Skin 1' },
  { src: 'https://via.placeholder.com/80x80?text=Dota2', name: 'Dota Skin 2' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
];

const galleryContainer = document.getElementById('skins-gallery');

// функция рендера скинов
const renderSkins = (skins) => {
  galleryContainer.innerHTML = '';
  skins.forEach((skin, index) => {
    const div                = document.createElement('div');
    div.className            = 'skin-item';
    div.dataset.index        = index;
    div.innerHTML            = `
    <img src="${skin.src}" alt="${skin.name}" width="88" height="66" />`;
    // множественный выбор
    div.addEventListener('click', () => {
      div.classList.toggle('selected');
    });
    galleryContainer.appendChild(div);
  });
};

// Найдём все пункты выбора игры, предположим, что они по структуре — это li внутри .hero_inventory__chooser ul
const gameItems = document.querySelectorAll('.inventory__chooser ul li');

gameItems.forEach(item => {
  // добавляем обработчик
  item.addEventListener('click', () => {
    // убираем активный класс у всех
    gameItems.forEach(i => i.classList.remove('active'));
    // добавляем к текущему
    item.classList.add('active');

    const game = item.dataset.game; // предполагаем, что вы добавите data-game="cs" / "dota"

    if (game === 'cs') {
      renderSkins(csSkins);
    } else if (game === 'dota') {
      renderSkins(dotaSkins);
    }
  });
});
document.querySelector('.hero_inventory__chooser ul li[data-game="cs"]').click();