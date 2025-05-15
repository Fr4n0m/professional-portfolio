// Mapeo de rutas a imágenes públicas
export const projectImages: Record<string, string> = {
  // Certificados
  '/assets/images/certificates/images/Certificado-CodeSpace.webp': '/assets/images/certificates/images/Certificado-CodeSpace.webp',
  '/assets/images/certificates/images/Certificado-Hack4u-PersonalizaciónLinux.webp': '/assets/images/certificates/images/Certificado-Hack4u-PersonalizaciónLinux.webp',
  
  // Proyectos
  '/assets/images/projects/agrooe_1.jpeg': '/assets/images/projects/agrooe_1.jpeg',
  '/assets/images/projects/agrooe_2.jpeg': '/assets/images/projects/agrooe_2.jpeg',
  '/assets/images/projects/agrooe_3.jpeg': '/assets/images/projects/agrooe_3.jpeg',
  '/assets/images/projects/strapi-games-web-1.webp': '/assets/images/projects/strapi-games-web-1.webp',
  '/assets/images/projects/strapi-games-web-2.webp': '/assets/images/projects/strapi-games-web-2.webp',
  '/assets/images/projects/strapi-games-web-3.webp': '/assets/images/projects/strapi-games-web-3.webp',
  '/assets/images/projects/realtime-chat_1.webp': '/assets/images/projects/realtime-chat_1.webp',
  '/assets/images/projects/realtime-chat_2.webp': '/assets/images/projects/realtime-chat_2.webp',
  '/assets/images/projects/super-mario-bros-85.webp': '/assets/images/projects/super-mario-bros-85.webp',
  '/assets/images/projects/super-mario-bros-85_2.webp': '/assets/images/projects/super-mario-bros-85_2.webp',
  '/assets/images/projects/super-mario-bros-85_3.webp': '/assets/images/projects/super-mario-bros-85_3.webp',
  '/assets/images/projects/super-mario-bros-85_4.webp': '/assets/images/projects/super-mario-bros-85_4.webp',
  '/assets/images/projects/super-mario-bros-85_5.webp': '/assets/images/projects/super-mario-bros-85_5.webp',
  '/assets/images/projects/super-mario-bros-85_6.webp': '/assets/images/projects/super-mario-bros-85_6.webp',
  '/assets/images/projects/super-mario-bros-85_7.webp': '/assets/images/projects/super-mario-bros-85_7.webp',
  '/assets/images/projects/paint-95.webp': '/assets/images/projects/paint-95.webp',
  '/assets/images/projects/bookshop_1.webp': '/assets/images/projects/bookshop_1.webp',
  '/assets/images/projects/bookshop_2.webp': '/assets/images/projects/bookshop_2.webp',
  '/assets/images/projects/tiktok_1.webp': '/assets/images/projects/tiktok_1.webp',
  '/assets/images/projects/tiktok_2.webp': '/assets/images/projects/tiktok_2.webp',
  '/assets/images/projects/breakout-game.webp': '/assets/images/projects/breakout-game.webp',
  '/assets/images/projects/breakout-game_2.webp': '/assets/images/projects/breakout-game_2.webp',
  '/assets/images/projects/filmax_home_preview.webp': '/assets/images/projects/filmax_home_preview.webp',
  '/assets/images/projects/filmax_home_preview_2.webp': '/assets/images/projects/filmax_home_preview_2.webp',
  '/assets/images/projects/filmax_blog_preview.webp': '/assets/images/projects/filmax_blog_preview.webp',
  '/assets/images/projects/filmax_blog_preview_2.webp': '/assets/images/projects/filmax_blog_preview_2.webp',
  '/assets/images/projects/WebCalculator_light.webp': '/assets/images/projects/WebCalculator_light.webp',
  '/assets/images/projects/WebCalculator_dark.webp': '/assets/images/projects/WebCalculator_dark.webp',
  '/assets/images/projects/pokedex.webp': '/assets/images/projects/pokedex.webp',
  '/assets/images/projects/pokedex_favorites.webp': '/assets/images/projects/pokedex_favorites.webp',
  '/assets/images/projects/pokedex_create.webp': '/assets/images/projects/pokedex_create.webp',
  '/assets/images/projects/1er_portfolio.webp': '/assets/images/projects/1er_portfolio.webp',
  '/assets/images/projects/1er_portfolio_2.webp': '/assets/images/projects/1er_portfolio_2.webp',
};

// Función para obtener la ruta de la imagen
export function getProjectImage(path: string) {
  return projectImages[path] || path;
}
