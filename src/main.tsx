import React from 'react'
import ReactDOM from 'react-dom/client'

// 1) Подтягиваем фирменные переменные и фон в БАНДЛ
import '/theme-veltory.css'

// 2) Остальные глобальные стили проекта
import './index.css'

import App from './App'

// Автотема на старте
;(function () {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') document.documentElement.classList.add('dark')
    else if (saved === 'light') document.documentElement.classList.remove('dark')
    else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark')
  } catch {}
})()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
