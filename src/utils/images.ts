// Importar todas las imágenes del proyecto
// Certificados
import CertificadoCodeSpace from '@assets/images/certificates/images/Certificado-CodeSpace.webp';
import CertificadoHack4u from '@assets/images/certificates/images/Certificado-Hack4u-PersonalizaciónLinux.webp';

// Proyectos
import agrooe1 from '@assets/images/projects/agrooe_1.jpeg';
import agrooe2 from '@assets/images/projects/agrooe_2.jpeg';
import agrooe3 from '@assets/images/projects/agrooe_3.jpeg';
import strapiGamesWeb1 from '@assets/images/projects/strapi-games-web-1.webp';
import strapiGamesWeb2 from '@assets/images/projects/strapi-games-web-2.webp';
import strapiGamesWeb3 from '@assets/images/projects/strapi-games-web-3.webp';
import realtimeChat1 from '@assets/images/projects/realtime-chat_1.webp';
import realtimeChat2 from '@assets/images/projects/realtime-chat_2.webp';
import superMarioBros85 from '@assets/images/projects/super-mario-bros-85.webp';
import superMarioBros85_2 from '@assets/images/projects/super-mario-bros-85_2.webp';
import superMarioBros85_3 from '@assets/images/projects/super-mario-bros-85_3.webp';
import superMarioBros85_4 from '@assets/images/projects/super-mario-bros-85_4.webp';
import superMarioBros85_5 from '@assets/images/projects/super-mario-bros-85_5.webp';
import superMarioBros85_6 from '@assets/images/projects/super-mario-bros-85_6.webp';
import superMarioBros85_7 from '@assets/images/projects/super-mario-bros-85_7.webp';
import paint95 from '@assets/images/projects/paint-95.webp';
import bookshop1 from '@assets/images/projects/bookshop_1.webp';
import bookshop2 from '@assets/images/projects/bookshop_2.webp';
import tiktok1 from '@assets/images/projects/tiktok_1.webp';
import tiktok2 from '@assets/images/projects/tiktok_2.webp';
import breakoutGame from '@assets/images/projects/breakout-game.webp';
import breakoutGame2 from '@assets/images/projects/breakout-game_2.webp';
import filmaxHomePreview from '@assets/images/projects/filmax_home_preview.webp';
import filmaxHomePreview2 from '@assets/images/projects/filmax_home_preview_2.webp';
import filmaxBlogPreview from '@assets/images/projects/filmax_blog_preview.webp';
import filmaxBlogPreview2 from '@assets/images/projects/filmax_blog_preview_2.webp';
import webCalculatorLight from '@assets/images/projects/WebCalculator_light.webp';
import webCalculatorDark from '@assets/images/projects/WebCalculator_dark.webp';
import pokedex from '@assets/images/projects/pokedex.webp';
import pokedexFavorites from '@assets/images/projects/pokedex_favorites.webp';
import pokedexCreate from '@assets/images/projects/pokedex_create.webp';
import portfolio1 from '@assets/images/projects/1er_portfolio.webp';
import portfolio2 from '@assets/images/projects/1er_portfolio_2.webp';

// Mapeo de rutas a imágenes importadas
export const projectImages: Record<string, any> = {
  // Certificados
  '/assets/images/certificates/images/Certificado-CodeSpace.webp': CertificadoCodeSpace,
  '/assets/images/certificates/images/Certificado-Hack4u-PersonalizaciónLinux.webp': CertificadoHack4u,
  
  // Proyectos
  '/assets/images/projects/agrooe_1.jpeg': agrooe1,
  '/assets/images/projects/agrooe_2.jpeg': agrooe2,
  '/assets/images/projects/agrooe_3.jpeg': agrooe3,
  '/assets/images/projects/strapi-games-web-1.webp': strapiGamesWeb1,
  '/assets/images/projects/strapi-games-web-2.webp': strapiGamesWeb2,
  '/assets/images/projects/strapi-games-web-3.webp': strapiGamesWeb3,
  '/assets/images/projects/realtime-chat_1.webp': realtimeChat1,
  '/assets/images/projects/realtime-chat_2.webp': realtimeChat2,
  '/assets/images/projects/super-mario-bros-85.webp': superMarioBros85,
  '/assets/images/projects/super-mario-bros-85_2.webp': superMarioBros85_2,
  '/assets/images/projects/super-mario-bros-85_3.webp': superMarioBros85_3,
  '/assets/images/projects/super-mario-bros-85_4.webp': superMarioBros85_4,
  '/assets/images/projects/super-mario-bros-85_5.webp': superMarioBros85_5,
  '/assets/images/projects/super-mario-bros-85_6.webp': superMarioBros85_6,
  '/assets/images/projects/super-mario-bros-85_7.webp': superMarioBros85_7,
  '/assets/images/projects/paint-95.webp': paint95,
  '/assets/images/projects/bookshop_1.webp': bookshop1,
  '/assets/images/projects/bookshop_2.webp': bookshop2,
  '/assets/images/projects/tiktok_1.webp': tiktok1,
  '/assets/images/projects/tiktok_2.webp': tiktok2,
  '/assets/images/projects/breakout-game.webp': breakoutGame,
  '/assets/images/projects/breakout-game_2.webp': breakoutGame2,
  '/assets/images/projects/filmax_home_preview.webp': filmaxHomePreview,
  '/assets/images/projects/filmax_home_preview_2.webp': filmaxHomePreview2,
  '/assets/images/projects/filmax_blog_preview.webp': filmaxBlogPreview,
  '/assets/images/projects/filmax_blog_preview_2.webp': filmaxBlogPreview2,
  '/assets/images/projects/WebCalculator_light.webp': webCalculatorLight,
  '/assets/images/projects/WebCalculator_dark.webp': webCalculatorDark,
  '/assets/images/projects/pokedex.webp': pokedex,
  '/assets/images/projects/pokedex_favorites.webp': pokedexFavorites,
  '/assets/images/projects/pokedex_create.webp': pokedexCreate,
  '/assets/images/projects/1er_portfolio.webp': portfolio1,
  '/assets/images/projects/1er_portfolio_2.webp': portfolio2,
};

// Función para obtener la imagen importada
export function getProjectImage(path: string) {
  return projectImages[path] || path;
}
