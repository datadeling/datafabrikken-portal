import fs from 'fs';
import routes from './src/routes';

const PUBLIC_URL = 'https://datafabrikken.norge.no';

const lastModDate: Date = new Date();
const lastMod = `${lastModDate.getFullYear()}-${
  lastModDate.getMonth() + 1
}-${lastModDate.getDate()}`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(routes)
  .filter(path => !path.includes(':'))
  .map(
    path =>
      `<url>
        <loc>${PUBLIC_URL}${path}</loc>
        <lastmod>${lastMod}</lastmod>
    </url>`
  )}
</urlset>
`;

const buildPath = './public/sitemap.xml';

fs.writeFileSync(buildPath, xml);

// eslint-disable-next-line no-console
console.info(`> ✔️ Sitemap successfully generated at ${buildPath}`);
