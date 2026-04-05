document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('works-grid');

    // Создаем 6 пустых белых блоков для раздела работ
    for (let i = 0; i < 6; i++) {
        const box = document.createElement('div');
        box.className = 'work-box';
        grid.appendChild(box);
    }
});