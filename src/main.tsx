import React from "react";
import ReactDOM from "react-dom/client";

// Хватает Tailwind и проектных стилей из src/
import "./index.css";

// ⚠️  НЕ импортируем файлы из /public как модули.
// theme-veltory.css и style.css уже подключены в index.html через <link>,
// так что повторный импорт не нужен и ломает сборку.

// Инициализация темы (light/dark) — безопасно, без сторонних импортов
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const html = document.documentElement;

  if (saved === "dark") {
    html.classList.add("dark");
  } else if (saved === "light") {
    html.classList.remove("dark");
  } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
  }
})();

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
