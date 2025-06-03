import { supabase } from '../../libs/supabase';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { id, nuevosDatos } = await request.json();

  // Ejemplo: actualizar la tabla "articulos"
  const { data, error } = await supabase
    .from('articulos')
    .update(nuevosDatos)
    .eq('id', id)
    .select();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
  return new Response(JSON.stringify({ data }), { status: 200 });
};
