import type { APIRoute } from 'astro';

/**
 * Endpoint para registrar eventos de consentimiento de cookies
 * 
 * Este endpoint recibe eventos de consentimiento y los registra para análisis
 * Esto es particularmente útil para auditorías de cumplimiento GDPR/CCPA
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar que es una solicitud POST válida
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Método no permitido' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Leer y validar los datos recibidos
    const data = await request.json();

    // Validación básica
    if (!data || !data.event || !data.action || !data.timestamp) {
      return new Response(JSON.stringify({ error: 'Datos incompletos' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // En un entorno de producción, aquí se registrarían los datos en una base de datos 
    // o sistema de registro para auditorías de cumplimiento.
    // Este es un ejemplo simple que registra en consola para desarrollo.
    console.log('[Consent Log]', JSON.stringify(data, null, 2));

    // Respuesta exitosa
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error en el endpoint de consentimiento:', error);
    
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
