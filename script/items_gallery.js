const csSkins = [
  { src: './img/gallery/cs_1', name: 'CS Skin 1' },
  { src: './img/gallery/cs_2', name: 'CS Skin 2' },
  { src: './img/gallery/cs_3', name: 'CS Skin 3' },
  { src: './img/gallery/cs_4', name: 'CS Skin 4' },
  { src: './img/gallery/cs_5', name: 'CS Skin 5' },
  { src: './img/gallery/cs_6', name: 'CS Skin 6' },
  { src: './img/gallery/cs_7', name: 'CS Skin 7' },
  { src: './img/gallery/cs_8', name: 'CS Skin 8' },
  { src: './img/gallery/cs_9', name: 'CS Skin 9' },
  { src: './img/gallery/cs_10', name: 'CS Skin 10' },
  { src: './img/gallery/cs_11', name: 'CS Skin 11' },
  { src: './img/gallery/cs_12', name: 'CS Skin 12' },
  { src: './img/gallery/cs_13', name: 'CS Skin 13' },
  { src: './img/gallery/cs_14', name: 'CS Skin 14' },
  { src: './img/gallery/cs_15', name: 'CS Skin 15' },
  { src: './img/gallery/cs_16', name: 'CS Skin 16' },
  { src: './img/gallery/cs_17', name: 'CS Skin 17' },
  { src: './img/gallery/cs_18', name: 'CS Skin 18' },
  { src: './img/gallery/cs_19', name: 'CS Skin 19' },
  { src: './img/gallery/cs_20', name: 'CS Skin 20' },
];

const dotaSkins = [
  { src: 'https://via.placeholder.com/80x80?text=Dota1', name: 'Dota Skin 1' },
  { src: 'https://via.placeholder.com/80x80?text=Dota2', name: 'Dota Skin 2' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
  { src: 'https://via.placeholder.com/80x80?text=Dota3', name: 'Dota Skin 3' },
];

const galleryContainer = document.getElementById('skins-gallery');

// функция рендера скинов
const renderSkins = (skins) => {
  galleryContainer.innerHTML = '';
  skins.forEach((skin, index) => {
    const div = document.createElement('div');
    div.className = 'skin-item';
    div.dataset.index = index;
    div.innerHTML = `
      <img src="${skin.src}" alt="${skin.name}" width="88" height="66" />
    `;
    // множественный выбор
    div.addEventListener('click', () => {
      div.classList.toggle('selected');
    });
    galleryContainer.appendChild(div);
  });
};

// Найдём все пункты выбора игры, предположим, что они по структуре — это li внутри .hero_inventory__chooser ul
const gameItems = document.querySelectorAll('.hero_inventory__chooser ul li');

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