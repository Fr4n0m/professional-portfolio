/**
 * Script para actualizar las imágenes de tecnologías en las tarjetas de skills
 * Este script recopila URLs de imágenes reales para cada tecnología
 */

// Mapa de URLs de imágenes para cada tecnología
const technologyImageUrls = {
  // Frontend
  'HTML': 'https://cdn.hashnode.com/res/hashnode/image/upload/v1683706535816/006618af-2764-4d82-9ef9-dce8a97adad5.png',
  'CSS': 'https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667',
  'Tailwind CSS': 'https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg',
  'JavaScript': 'https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png',
  'TypeScript': 'https://kinsta.com/wp-content/uploads/2021/03/Typescript-vs-JavaScript-1024x512.png',
  'React': 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
  'NextJS': 'https://nextjs.org/static/blog/next-13/twitter-card.png',
  'Astro': 'https://astro.build/assets/blog/astro-showcase/full-logo-light.png',
  'Vite': 'https://vitejs.dev/logo-with-shadow.png',
  'Motion': 'https://framerusercontent.com/images/48ha9ZR9oZQGQ6gZ8YUfElP3T0.png',
  'GSAP': 'https://gsap.com/community/uploads/monthly_2020_03/tweenmax-thumb.jpg.e5de0cce47e052939ca3eb8bdb5b2c6f.jpg',
  
  // Backend
  'NodeJS': 'https://nodejs.org/static/images/logo-hexagon-card.png',
  'Deno': 'https://deno.com/og/image.png',
  'ExpressJS': 'https://expressjs.com/images/express-facebook-share.png',
  'Bun': 'https://bun.sh/images/og.jpg',
  
  // Database
  'MongoDB': 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
  'Supabase': 'https://supabase.com/images/og/og-image-v2.jpg',
  'MySQL': 'https://www.mysql.com/common/images/social-mysql.png',
  'Stripe': 'https://b.stripecdn.com/site-srv/assets/img/v3/home/stock-1400x787-f280a5a.png',
  'GraphQL': 'https://graphql.org/img/og-image.png',
  'Strapi': 'https://strapi.io/assets/strapi-logo-dark.svg',
  
  // Tools
  'Docker': 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
  'Git': 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png',
  'GitHub': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  'NPM': 'https://static.npmjs.com/attachments/ck3uwuvzfpkl11c74jpkiumzn-bg-npm.png',
  'PNPM': 'https://pnpm.io/img/pnpm-no-name-with-frame.svg',
  'Vercel': 'https://vercel.com/api/www/avatar?u=vercel&s=1200',
  'C++': 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  'Phaser': 'https://phaser.io/images/img.png',
  
  // OS
  'Windows': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg',
  'MacOS': 'https://upload.wikimedia.org/wikipedia/commons/2/22/MacOS_logo_%282017%29.svg',
  'Debian': 'https://www.debian.org/logos/openlogo-nd.svg',
  'Kali': 'https://www.kali.org/images/kali-logo.svg'
};

// Esta información se exporta para ser utilizada por el script principal
module.exports = {
  technologyImageUrls
};

console.log('✅ Mapa de URLs de imágenes reales para tecnologías generado correctamente');
console.log(`📊 Total de tecnologías con imágenes: ${Object.keys(technologyImageUrls).length}`);
