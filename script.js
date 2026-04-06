const systemData = {
    os: navigator.platform,
    browser: navigator.userAgent,
    language: navigator.language,
    screen: `${screen.width}x${screen.height}`,
    visitTime: new Date().toLocaleString('uk-UA')
};

// Зберігаємо в localStorage
localStorage.setItem('systemInfo', JSON.stringify(systemData));
localStorage.setItem('os', navigator.platform);
localStorage.setItem('browser', navigator.userAgent);
localStorage.setItem('language', navigator.language);
localStorage.setItem('visitDate', new Date().toLocaleString('uk-UA'));

// Відображаємо ВСІ дані з localStorage у футері
function displayLocalStorage() {
    const container = document.getElementById('system-info');
    if (!container) return;
    let html = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let value = localStorage.getItem(key);
        if (value && value.length > 80) value = value.substring(0, 80) + '...';
        html += `<strong>${key}:</strong> ${value}<br>`;
    }
    container.innerHTML = html;
}

displayLocalStorage();

// ============================================
// ЗАВДАННЯ 2: Отримання коментарів з JSONPlaceholder
// ============================================

const VARIANT_NUMBER = 9;

async function loadReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    
    try {
        const url = `https://jsonplaceholder.typicode.com/posts/9/comments`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('Помилка завантаження');
        
        const comments = await response.json();
        
        if (comments.length === 0) {
            container.innerHTML = '<p>❌ Немає відгуків</p>';
            return;
        }
        
        container.innerHTML = '';
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'review-card';
            div.innerHTML = `
                <strong>👤 ${escapeHtml(comment.name)}</strong>
                <span> (${escapeHtml(comment.email)})</span>
                <p>${escapeHtml(comment.body)}</p>
            `;
            container.appendChild(div);
        });
        
        console.log(`✅ Завантажено ${comments.length} відгуків`);
    } catch (error) {
        console.error('Помилка:', error);
        container.innerHTML = '<p>❌ Помилка завантаження відгуків</p>';
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

loadReviews();

// ============================================
// ЗАВДАННЯ 3: Модальне вікно через 1 хвилину
// ============================================

setTimeout(() => {
    const modal = document.getElementById('contactModal');
    if (modal) modal.style.display = 'block';
}, 30000);

// Закриття модального вікна
document.getElementById('closeModal')?.addEventListener('click', () => {
    document.getElementById('contactModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) modal.style.display = 'none';
});

// ============================================
// ЗАВДАННЯ 4: Денна/нічна тема
// ============================================

function setTheme(theme) {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    
    if (theme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        btn.textContent = '☀️ Денна тема';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        btn.textContent = '🌙 Нічна тема';
        localStorage.setItem('theme', 'light');
    }
}

// Автоматичне визначення теми за часом
function autoTheme() {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
}

const savedTheme = localStorage.getItem('theme');
savedTheme ? setTheme(savedTheme) : autoTheme();

document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    setTheme(isDark ? 'light' : 'dark');
});

// Вивід в консоль для перевірки
console.log('=== localStorage ===');
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i), ':', localStorage.getItem(localStorage.key(i)));
}
