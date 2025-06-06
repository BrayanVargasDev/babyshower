import type { Articulo } from '../interfaces';
import { supabase } from './supabase';

const articulos: Articulo[] = [
  // --- Alimentación ---
  {
    nombre: 'Teteros de vidrio - Avent Natural Response',
    totalDisponible: 3,
    categoria: 'Alimentación',
  },
  {
    nombre: 'Cepillos para asear los teteros',
    totalDisponible: 1,
    categoria: 'Alimentación',
  },
  {
    nombre: 'Escurridor de teteros',
    totalDisponible: 1,
    categoria: 'Alimentación',
  },
  {
    nombre: 'Extractores de leche eléctricos',
    totalDisponible: 1,
    categoria: 'Alimentación',
  },
  {
    nombre: 'Termo para agua caliente',
    totalDisponible: 2,
    categoria: 'Alimentación',
  },
  {
    nombre: 'Recipientes recolectores de leche reutilizables',
    totalDisponible: 1,
    categoria: 'Alimentación',
  },
  {
    nombre: 'Set de alimentación complementaria',
    totalDisponible: 1,
    categoria: 'Alimentación',
  },
  {
    nombre: 'Dispensador de fruta',
    totalDisponible: 1,
    categoria: 'Alimentación',
  },

  // --- Sueño ---
  { nombre: 'Colecho', totalDisponible: 1, categoria: 'Sueño' },
  {
    nombre: 'Colchón firme para cama sencilla',
    totalDisponible: 1,
    categoria: 'Sueño',
  },
  {
    nombre: 'Sábanas ajustables para cama sencilla',
    totalDisponible: 3,
    categoria: 'Sueño',
  },
  { nombre: 'Cobijas', totalDisponible: 4, categoria: 'Sueño' },
  { nombre: 'Toldillo para cuna', totalDisponible: 1, categoria: 'Sueño' },
  {
    nombre: 'Almohada estabilizadora o nido',
    totalDisponible: 1,
    categoria: 'Sueño',
  },

  // --- Higiene y Cambio ---
  {
    nombre: 'Pañales talla RN y 1',
    totalDisponible: 100,
    categoria: 'Higiene y Cambio',
  }, // Ejemplo de cantidad "general"
  {
    nombre: 'Pañales de tela, ajustables, impermeables y lavables',
    totalDisponible: 2,
    categoria: 'Higiene y Cambio',
  },
  {
    nombre: 'Crema antipañalitis',
    totalDisponible: 8,
    categoria: 'Higiene y Cambio',
  },
  {
    nombre: 'Cambiador portátil',
    totalDisponible: 2,
    categoria: 'Higiene y Cambio',
  },
  {
    nombre: 'Bañera para bebé',
    totalDisponible: 1,
    categoria: 'Higiene y Cambio',
  },
  {
    nombre: 'Accesorios para el baño',
    totalDisponible: 1,
    categoria: 'Higiene y Cambio',
  },
  {
    nombre: 'Jabón neutro líquido',
    totalDisponible: 5,
    categoria: 'Higiene y Cambio',
  },
  {
    nombre: 'Shampoo para bebé',
    totalDisponible: 5,
    categoria: 'Higiene y Cambio',
  },
  {
    nombre: 'Toallas suaves con capucha',
    totalDisponible: 8,
    categoria: 'Higiene y Cambio',
  },
  {
    nombre: 'Paños de burbuja o muselina',
    totalDisponible: 4,
    categoria: 'Higiene y Cambio',
  },
  { nombre: 'Kit de aseo', totalDisponible: 2, categoria: 'Higiene y Cambio' },

  // --- Ropa ---
  { nombre: 'Semanero recién nacido', totalDisponible: 1, categoria: 'Ropa' },
  {
    nombre: 'Bodies manga corta T: de 0 a 3 meses',
    totalDisponible: 2,
    categoria: 'Ropa',
  },
  {
    nombre: 'Bodies manga corta T: de 3 a 6 meses',
    totalDisponible: 2,
    categoria: 'Ropa',
  },
  {
    nombre: 'Bodies manga corta T: de 6 a 9 meses',
    totalDisponible: 2,
    categoria: 'Ropa',
  },
  {
    nombre: 'Pijamas tipo enterizo manga larga T: de 0 a 3 meses',
    totalDisponible: 2,
    categoria: 'Ropa',
  },
  {
    nombre: 'Pijamas tipo enterizo manga larga T: de 3 a 6 meses',
    totalDisponible: 2,
    categoria: 'Ropa',
  },
  {
    nombre: 'Pijamas tipo enterizo manga larga T: de 6 a 9 meses',
    totalDisponible: 2,
    categoria: 'Ropa',
  },
  { nombre: 'Cobijas para envolver', totalDisponible: 3, categoria: 'Ropa' },
  { nombre: 'Ropa variada grande', totalDisponible: 8, categoria: 'Ropa' },

  // --- Transporte y Seguridad ---
  {
    nombre: 'Pañalera',
    totalDisponible: 2,
    categoria: 'Transporte y Seguridad',
  },
  {
    nombre: 'Fular portabebés',
    totalDisponible: 1,
    categoria: 'Transporte y Seguridad',
  },

  // --- Salud y Bienestar ---
  {
    nombre: 'Termómetro digital',
    totalDisponible: 1,
    categoria: 'Salud y Bienestar',
  },
  {
    nombre: 'Aspirador nasal de pera',
    totalDisponible: 1,
    categoria: 'Salud y Bienestar',
  },

  // --- Para la Mamá ---
  {
    nombre: 'Almohada de lactancia',
    totalDisponible: 1,
    categoria: 'Para la Mamá',
  },

  // --- Artículos Duraderos ---
  {
    nombre: 'Silla de bebé para carro',
    totalDisponible: 1,
    categoria: 'Duraderos',
  },
  {
    nombre: 'Tapete de actividades',
    totalDisponible: 1,
    categoria: 'Duraderos',
  },
  {
    nombre: 'Cambiador fijo con cajoneras',
    totalDisponible: 1,
    categoria: 'Duraderos',
  },
  {
    nombre: 'Juguetes o artículos de estimulación',
    totalDisponible: 6,
    categoria: 'Duraderos',
  },
  {
    nombre: 'Silla comedor con repisa pies',
    totalDisponible: 1,
    categoria: 'Duraderos',
  },
];

// Agrega aquí el "codigo" y totalApartado:
articulos.forEach((a, idx) => {
  a.totalApartado = 0;
  a.disponible = true;
});

async function seed() {
  console.log('Iniciando la carga de datos...');

  const { error: deleteError } = await supabase
    .from('articulos')
    .delete()
    .neq('nombre', '');

  if (deleteError) {
    console.error('Error al limpiar la colección:', deleteError);
    return;
  }

  const { data, error } = await supabase.from('articulos').insert(articulos);

  if (error) {
    console.error('Error al insertar los artículos:', error);
    return;
  }

  console.log('Datos cargados exitosamente:  artículos insertados');
}

seed().catch(err => {
  console.error('Error al cargar datos:', err);
  process.exit(1);
});
