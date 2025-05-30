import type { APIRoute } from 'astro';
import { db } from '../libs/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const GET: APIRoute = async () => {
  const articulosCol = collection(db, 'articulos');
  console.log('🚀 ✅ ~ constGET:APIRoute= ~ articulosCol:', articulosCol);
  const articulosSnap = await getDocs(articulosCol);
  console.log('🚀 ✅ ~ constGET:APIRoute= ~ articulosSnap:', articulosSnap);
  const articulos = articulosSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log('🚀 ✅ ~ articulos ~ articulos:', articulos);

  return new Response(JSON.stringify(articulos), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
