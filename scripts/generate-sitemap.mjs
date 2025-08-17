import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE_URL = 'https://heparamotor.ru';

const routes = [
  '/',              // Главная
  '/engines',       // Двигатели
  '/paramotors',    // Парамоторы
  '/frames',        // Рамы
  '/service',       // Сервис
  '/warranty',      // Доставка и гарантия
  '/blog',          // Блог (если уже есть)
  '/contacts'       // Контакты
];

const now = new Date().toISOString();

const urls = routes.map(
  (p) => `
  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`
).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls}
</urlset>`;

writeFileSync(join('dist', 'sitemap.xml'), xml.trim(), 'utf8');
console.log('✅ sitemap.xml generated');
