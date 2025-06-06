import { supabase } from '../../libs/supabase';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { codigo, cantidad, nombreAparta, totalDisponible, totalApartado } =
    body;

  let { data: insertData, error: insertError } = await supabase
    .from('apartados_por')
    .insert({
      cantidad,
      aparta: nombreAparta,
      id_articulo: codigo,
    });

  if (insertError) {
    return new Response(
      JSON.stringify({ ok: false, error: insertError.message }),
      {
        status: 400,
      }
    );
  }

  const { data: updateData, error: updateError } = await supabase
    .from('articulos')
    .update({
      totalDisponible,
      totalApartado,
    })
    .eq('codigo', codigo)
    .select();

  if (updateError) {
    return new Response(
      JSON.stringify({ ok: false, error: updateError.message }),
      {
        status: 400,
      }
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      insertData,
      updateData,
    }),
    { status: 200 }
  );
};
