import type { APIRoute } from 'astro';
import { db } from '../libs/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const GET: APIRoute = async () => {
  const invitadosCol = collection(db, 'invitados');
  console.log('🚀 ✅ ~ constGET:APIRoute= ~ invitadosCol:', invitadosCol);
  const invitadosSnap = await getDocs(invitadosCol);
  console.log('🚀 ✅ ~ constGET:APIRoute= ~ invitadosSnap:', invitadosSnap);
  const invitados = invitadosSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log('🚀 ✅ ~ invitados ~ invitados:', invitados);

  return new Response(JSON.stringify(invitados), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
