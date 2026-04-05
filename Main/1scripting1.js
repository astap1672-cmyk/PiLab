const grid = document.getElementById('masonry-grid');
const scrollContainer = document.getElementById('scroll-container');
const modal = document.querySelector('#settingsModal');
const openBtn = document.querySelector('.icon-btn5');
const closeBtn = document.querySelector('#closeSettings');

// Функция создания блоков рекомендаций
function createItems(count) {
    for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        
        // Генерируем случайную высоту для каждого блока от 150px до 450px
        const randomHeight = Math.floor(Math.random() * 300) + 150;
        item.style.height = `${randomHeight}px`;
        
        // Для наглядности добавим текст внутри
        item.innerText = `Контент ${randomHeight}px`;
        
        grid.appendChild(item);
    }
}

// При первой загрузке создаем 20 блоков
createItems(20);

// Логика бесконечной прокрутки (прилистывании вниз появляются новые)
scrollContainer.addEventListener('scroll', () => {
    // Проверяем, долистал ли пользователь до низа (с небольшим запасом в 50px)
    if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 50) {
        // Добавляем еще 10 блоков
        createItems(10);
    }
});



// Открыть модалку
openBtn.addEventListener('click', () => {
  modal.showModal();
});

// Закрыть модалку
closeBtn.addEventListener('click', () => {
  modal.close();
});

// Закрытие кликом по фону (опционально)
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});