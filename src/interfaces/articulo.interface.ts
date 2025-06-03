export interface Articulo {
  id?: string; // ID único del artículo
  nombre: string;
  totalDisponible: number;
  categoria: string;
  codigo?: string; // Opcional, se asignará más adelante
  totalApartado?: number; // Inicializado a 0
  disponible?: boolean; // Inicializado a true
}
