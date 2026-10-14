import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoteFilterPipe } from './note-filter.pipe';

interface Nota {
  icon: string;
  name: string;
  type: 'top' | 'heart' | 'base';
}

interface Inspiracion {
  id: string;
  name: string;
  brand: string;
  gender: 'Hombre' | 'Mujer' | 'Unisex';
  family: string;
  description: string;
  notes: Nota[];
  gradient: string;
  color: string;
  bottleColor: string;
  longevity: string;
}

@Component({
  selector: 'app-inspiraciones',
  standalone: true,
  imports: [CommonModule, RouterLink, NoteFilterPipe],
  templateUrl: './inspiraciones.component.html',
  styleUrl: './inspiraciones.component.css'
})
export class InspiracionesComponent {

  private readonly whatsappPhone = '573114113938';

  precioUnitario = 18000;
  precioKit = 34000;

  selectedGender: string = 'Todos';

  inspiraciones: Inspiracion[] = [
    // ── HOMBRE ──────────────────────────────────────────────────────────
    {
      id: 'lacoste-red',
      name: 'Lacoste Red',
      brand: 'Lacoste',
      gender: 'Hombre',
      family: 'Frutal Fougère',
      description: 'Fresco, vibrante y lleno de energía. Una apertura de manzana verde con corazón pino y un fondo terroso que perdura todo el día.',
      notes: [
        { icon: '🍏', name: 'Manzana Verde', type: 'top' },
        { icon: '🌲', name: 'Pino Siberiano', type: 'heart' },
        { icon: '🌸', name: 'Jazmín', type: 'heart' },
        { icon: '🪨', name: 'Pachulí', type: 'base' },
        { icon: '🌿', name: 'Vetiver', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #ff4d4d 0%, #c0392b 50%, #7b0000 100%)',
      color: '#ff4d4d',
      bottleColor: '#e74c3c',
      longevity: '6 - 8 horas'
    },
    {
      id: 'imagination',
      name: 'Imagination',
      brand: 'Louis Vuitton',
      gender: 'Hombre',
      family: 'Cítrico Aromático',
      description: 'Un viaje sensorial de cítricos luminosos, especias cálidas y un fondo amaderado con té negro. Elegancia sin esfuerzo.',
      notes: [
        { icon: '🍋', name: 'Bergamota Calabresa', type: 'top' },
        { icon: '🍊', name: 'Naranja Siciliana', type: 'top' },
        { icon: '🫚', name: 'Jengibre', type: 'heart' },
        { icon: '🌶️', name: 'Canela de Ceilán', type: 'heart' },
        { icon: '🍵', name: 'Té Negro', type: 'base' },
        { icon: '🪵', name: 'Madera de Guayaco', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #f7d468 0%, #c8973f 50%, #7a5c2e 100%)',
      color: '#d4a843',
      bottleColor: '#c8973f',
      longevity: '8 - 10 horas'
    },
    {
      id: '9pm',
      name: '9 PM',
      brand: 'Afnan',
      gender: 'Hombre',
      family: 'Ámbar Vainilla',
      description: 'El perfume de la noche. Una sinfonía dulce y especiada de lavanda y manzana que descansa sobre vainilla y ámbar irresistibles.',
      notes: [
        { icon: '🍎', name: 'Manzana', type: 'top' },
        { icon: '💜', name: 'Lavanda', type: 'top' },
        { icon: '🌸', name: 'Flor de Naranja', type: 'heart' },
        { icon: '🍮', name: 'Vainilla', type: 'base' },
        { icon: '🌰', name: 'Tonka Bean', type: 'base' },
        { icon: '🔶', name: 'Ámbar', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #2c1654 0%, #5e2d91 50%, #9b59b6 100%)',
      color: '#9b59b6',
      bottleColor: '#5e2d91',
      longevity: '8 - 12 horas'
    },
    {
      id: 'le-beau',
      name: 'Le Beau',
      brand: 'Jean Paul Gaultier',
      gender: 'Hombre',
      family: 'Cítrico Tropical',
      description: 'El encanto del paraíso tropical. Bergamota luminosa, coco cremoso y tonka cálida. Un viaje a la playa en cada spray.',
      notes: [
        { icon: '🍋', name: 'Bergamota', type: 'top' },
        { icon: '🥥', name: 'Coco', type: 'heart' },
        { icon: '🌰', name: 'Tonka Bean', type: 'base' },
        { icon: '🌿', name: 'Sándalo', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #00d2ff 0%, #0099cc 50%, #005f80 100%)',
      color: '#00b4d8',
      bottleColor: '#0096c7',
      longevity: '6 - 8 horas'
    },
    {
      id: 'invictus',
      name: 'Invictus',
      brand: 'Paco Rabanne',
      gender: 'Hombre',
      family: 'Acuático Amaderado',
      description: 'El aroma del campeón. Notas marinas enérgicas, pomelo brillante y un fondo de guayaco que lo convierte en un clásico moderno.',
      notes: [
        { icon: '🌊', name: 'Notas Marinas', type: 'top' },
        { icon: '🍇', name: 'Pomelo', type: 'top' },
        { icon: '🍊', name: 'Mandarina', type: 'top' },
        { icon: '🌿', name: 'Hoja de Laurel', type: 'heart' },
        { icon: '🌸', name: 'Jazmín', type: 'heart' },
        { icon: '🪵', name: 'Madera de Guayaco', type: 'base' },
        { icon: '🌑', name: 'Musgo de Roble', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #c0c0c0 0%, #808080 50%, #404040 100%)',
      color: '#a0a0a0',
      bottleColor: '#888888',
      longevity: '6 - 8 horas'
    },

    // ── MUJER ───────────────────────────────────────────────────────────
    {
      id: 'eden-sparkle',
      name: 'Eden Sparkling Lychee',
      brand: 'KAYALI',
      gender: 'Mujer',
      family: 'Frutal Floral',
      description: 'Efervescente, jugosa y radiante. Lychee chispeante y grosella negra abiertos sobre un corazón de rosas y un fondo de vainilla sedosa.',
      notes: [
        { icon: '🍈', name: 'Lychee Chispeante', type: 'top' },
        { icon: '🫐', name: 'Grosella Negra', type: 'top' },
        { icon: '🍎', name: 'Manzana Roja', type: 'top' },
        { icon: '🌹', name: 'Rosa Damascena', type: 'heart' },
        { icon: '💜', name: 'Violeta Confitada', type: 'heart' },
        { icon: '🌸', name: 'Jazmín Sambac', type: 'heart' },
        { icon: '🍮', name: 'Vainilla', type: 'base' },
        { icon: '🔶', name: 'Ámbar Azucarado', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #ff9de2 0%, #e055a7 50%, #9c1a6b 100%)',
      color: '#e055a7',
      bottleColor: '#c2185b',
      longevity: '6 - 8 horas'
    },
    {
      id: 'sorbetto-rosso',
      name: 'Sorbetto Rosso',
      brand: 'Escada',
      gender: 'Mujer',
      family: 'Frutal Acuático',
      description: 'Un sorbete de verano hecho perfume. Sandía jugosa, fresa, toques salinos del mar y un fondo de praliné irresistible.',
      notes: [
        { icon: '🍐', name: 'Pera', type: 'top' },
        { icon: '🍊', name: 'Mandarina', type: 'top' },
        { icon: '🍉', name: 'Sandía', type: 'heart' },
        { icon: '🍓', name: 'Fresa', type: 'heart' },
        { icon: '🌊', name: 'Sal Marina', type: 'heart' },
        { icon: '🌹', name: 'Rosa', type: 'heart' },
        { icon: '🍯', name: 'Praliné', type: 'base' },
        { icon: '✨', name: 'Musk', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #ffb3ba 0%, #ff6b8a 50%, #c0392b 100%)',
      color: '#ff6b8a',
      bottleColor: '#e91e63',
      longevity: '5 - 7 horas'
    },
    {
      id: 'good-girl',
      name: 'Good Girl',
      brand: 'Carolina Herrera',
      gender: 'Mujer',
      family: 'Floral Gourmand',
      description: 'Seductora y audaz. La dualidad perfecta entre lo luminoso y lo oscuro: jazmín intenso, café y tonka bean en un acabado irresistible.',
      notes: [
        { icon: '🍋', name: 'Bergamota', type: 'top' },
        { icon: '☕', name: 'Café', type: 'top' },
        { icon: '🌸', name: 'Jazmín Sambac', type: 'heart' },
        { icon: '🌺', name: 'Tuberosa', type: 'heart' },
        { icon: '🌹', name: 'Rosa Búlgara', type: 'heart' },
        { icon: '🍮', name: 'Vainilla', type: 'base' },
        { icon: '🍫', name: 'Cacao', type: 'base' },
        { icon: '🌰', name: 'Tonka Bean', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 80%, #533483 100%)',
      color: '#533483',
      bottleColor: '#1a0a2e',
      longevity: '8 - 12 horas'
    },
    {
      id: 'cloud-pink',
      name: 'Cloud Pink',
      brand: 'Ariana Grande',
      gender: 'Mujer',
      family: 'Ámbar Frutal Tropical',
      description: 'Una nube de dulzura tropical. Piña rosa y frutos del dragón se funden con orquídea vainilla y un fondo cálido de praliné y musgo.',
      notes: [
        { icon: '🍍', name: 'Piña Rosa', type: 'top' },
        { icon: '🐉', name: 'Fruta del Dragón', type: 'top' },
        { icon: '🫐', name: 'Frutos Silvestres', type: 'top' },
        { icon: '🌸', name: 'Orquídea Vainilla', type: 'heart' },
        { icon: '🥥', name: 'Agua de Coco', type: 'heart' },
        { icon: '🍯', name: 'Praliné', type: 'base' },
        { icon: '✨', name: 'Musk', type: 'base' },
        { icon: '🔶', name: 'Ámbar', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #ffd6e7 0%, #ffb3cc 40%, #ff69b4 80%, #e91e8c 100%)',
      color: '#ff69b4',
      bottleColor: '#e91e8c',
      longevity: '6 - 8 horas'
    },

    // ── UNISEX ──────────────────────────────────────────────────────────
    {
      id: 'bharara-king',
      name: 'Bharara King',
      brand: 'Bharara Beauty',
      gender: 'Unisex',
      family: 'Cítrico Ámbar Dulce',
      description: 'Royalty en un frasco. Cítricos deslumbrantes se transforman en una calidez cremosa de vainilla y ámbar que envuelve como un abrazo de lujo.',
      notes: [
        { icon: '🍊', name: 'Naranja', type: 'top' },
        { icon: '🍋', name: 'Bergamota', type: 'top' },
        { icon: '🍋', name: 'Limón', type: 'top' },
        { icon: '🍑', name: 'Notas Frutales', type: 'heart' },
        { icon: '🍮', name: 'Vainilla', type: 'base' },
        { icon: '✨', name: 'Musk Blanco', type: 'base' },
        { icon: '🔶', name: 'Ámbar', type: 'base' },
      ],
      gradient: 'linear-gradient(135deg, #f5e642 0%, #e8a000 50%, #8b5e00 100%)',
      color: '#e8a000',
      bottleColor: '#d4900a',
      longevity: '8 - 10 horas'
    },
  ];

  get filteredInspiraciones(): Inspiracion[] {
    if (this.selectedGender === 'Todos') return this.inspiraciones;
    return this.inspiraciones.filter(i => i.gender === this.selectedGender);
  }

  setFilter(gender: string) {
    this.selectedGender = gender;
  }

  redirectToWhatsApp(type: 'unit' | 'kit' | 'item', perfume?: Inspiracion) {
    let message = '';
    if (type === 'item' && perfume) {
      message = `Hola Nerune! Me interesa la inspiración *${perfume.name}* (${perfume.brand}) en presentación de *30 ML* a $18.000. ¿Cómo realizo mi pedido?`;
    } else if (type === 'kit') {
      message = `Hola Nerune! Me interesa el *Kit x2 inspiraciones 30ML* por $34.000. ¿Cuáles fragancias puedo elegir y cómo lo pido?`;
    } else {
      message = `Hola Nerune! Estoy interesado/a en las *inspiraciones 30ML*. ¿Me pueden dar más información?`;
    }
    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${this.whatsappPhone}?text=${encodedText}`;
    window.open(url, '_blank');
  }
}
