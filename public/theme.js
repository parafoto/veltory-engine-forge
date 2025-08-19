// VELTORY – theme bootstrap (авто + кнопка)
(function () {
  const root = document.documentElement;

  // 1) Инициализация: localStorage > системная тема
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.classList.add('dark');
  else if (saved === 'light') root.classList.remove('dark');
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.classList.add('dark');
  }

  // 2) Подписка на смену системной темы (если пользователь не зафиксировал свой выбор)
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSystem = (e) => {
    const pinned = localStorage.getItem('theme'); // если есть сохранённый выбор — не трогаем
    if (!pinned) root.classList.toggle('dark', e.matches);
  };
  if (media.addEventListener) media.addEventListener('change', handleSystem);
  else media.addListener(handleSystem); // старые браузеры

  // 3) Рисуем плавающую кнопку (чтобы не править HTML)
  const btn = document.createElement('button');
  btn.className = 'theme-fab';
  btn.setAttribute('aria-label', 'Переключить тему');
  btn.innerHTML = getIcon();

  function getIcon() {
    const isDark = root.classList.contains('dark');
    // Луна для лайт‑темы, солнце для дарк‑темы (чтобы показывать «к чему переключить»)
    return isDark
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84 4.96 6.63l1.8-1.79zm10.48 0l1.79-1.79 1.79 1.79-1.79 1.79-1.79-1.79zM12 4V1h0v3zm7 8h3-3zM12 23v-3 3zm-8-8H1h3zm14.24 4.76l1.79 1.79-1.79 1.79-1.79-1.79 1.79-1.79zM6.76 19.16l-1.8 1.79-1.79-1.79 1.79-1.79 1.8 1.79zM12 7a5 5 0 100 10A5 5 0 0012 7z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13a9 9 0 11-10.61-10.6A7 7 0 0021.64 13z"/></svg>';
  }

  btn.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    btn.innerHTML = getIcon();
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(btn);
  });
})();
