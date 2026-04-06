const grid = document.getElementById('masonry-grid');
const scrollContainer = document.getElementById('scroll-container');
const modal = document.querySelector('#settingsModal');
const openBtn = document.querySelector('.icon-btn5');
const closeBtn = document.querySelector('#closeSettings');

// Генерация блоков
function createItems(count) {
    for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        const randomHeight = Math.floor(Math.random() * 300) + 150;
        item.style.height = `${randomHeight}px`;
        item.innerText = `Контент ${randomHeight}px`;
        grid.appendChild(item);
    }
}

createItems(20);

// Бесконечный скролл
scrollContainer.addEventListener('scroll', () => {
    if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 50) {
        createItems(10);
    }
});

// Настройки
openBtn.addEventListener('click', () => { modal.showModal(); });
closeBtn.addEventListener('click', () => { modal.close(); });
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});