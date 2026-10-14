import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Perfume {
  id: string;
  name: string;
  inspiration: string;
  gender: 'Mujer' | 'Hombre' | 'Unisex';
  family: 'Floral' | 'Amaderado' | 'Cítrico' | 'Dulce' | 'Oriental';
  label: 'Original' | '1.1';
  notes: string[];
  price: number;
  size: string;
  rating: number;
  longevity: string;
  description: string;
  gradient: string; /* CSS gradient representing the scent */
  image: string;    /* Path to perfume bottle photo */
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nerune Perfumes';
  
  // WhatsApp Number Configuration
  private readonly whatsappPhone = '573114113938';

  // Catalog Filters
  selectedGenderFilter: string = 'Todos';
  selectedFamilyFilter: string = 'Todos';
  selectedLabelFilter: 'Todos' | 'Original' | '1.1' = 'Todos';

  getNoteIcon(note: string): string {
    const normalized = note.toLowerCase();

    if (normalized.includes('bergamota') || normalized.includes('mandarina') || normalized.includes('naranja') || normalized.includes('lima') || normalized.includes('cítrico')) {
      return '🍊';
    }

    if (normalized.includes('pimienta') || normalized.includes('canela') || normalized.includes('mentol') || normalized.includes('pepino')) {
      return '🌿';
    }

    if (normalized.includes('madera') || normalized.includes('cedro') || normalized.includes('vetiver') || normalized.includes('sándalo')) {
      return '🌲';
    }

    if (normalized.includes('vainilla') || normalized.includes('caramelo') || normalized.includes('café') || normalized.includes('ámbar')) {
      return '🍮';
    }

    if (normalized.includes('jazmín') || normalized.includes('rosa') || normalized.includes('floral')) {
      return '🌸';
    }

    if (normalized.includes('incienso') || normalized.includes('musk')) {
      return '🕯️';
    }

    return '✨';
  }

  // Perfume Catalogue Data
  perfumes: Perfume[] = [
    {
      id: '1',
      name: 'Nautica Voyage',
      inspiration: 'Fragancia fresca de estilo marinero',
      gender: 'Hombre',
      family: 'Cítrico',
      label: 'Original',
      notes: ['Bergamota', 'Pimienta', 'Madera', 'Ámbar'],
      price: 130000,
      size: '100 ml',
      rating: 4.7,
      longevity: '6 - 8 horas',
      description: 'Una propuesta fresca, limpia y muy versátil para el día, con un toque especiado que le da carácter.',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 60%, #0f172a 100%)',
      image: 'perfumes/Nautica.webp'
    },
    {
      id: '2',
      name: 'Nitro Red',
      inspiration: 'Aroma intenso y enérgico',
      gender: 'Hombre',
      family: 'Amaderado',
      label: 'Original',
      notes: ['Pimienta', 'Cedro', 'Vetiver', 'Cítrico'],
      price: 170000,
      size: '100 ml',
      rating: 4.8,
      longevity: '8 - 10 horas',
      description: 'Un perfume audaz que combina madera noble y un punto de frescura para una presencia marcada.',
      gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 55%, #7f1d1d 100%)',
      image: 'perfumes/nitro-red.webp'
    },
    {
      id: '3',
      name: 'Yum Yum',
      inspiration: 'Fragancia dulce y seductora',
      gender: 'Mujer',
      family: 'Dulce',
      label: 'Original',
      notes: ['Vainilla', 'Jazmín', 'Caramelo', 'Café'],
      price: 195000,
      size: '100 ml',
      rating: 4.9,
      longevity: '8 - 10 horas',
      description: 'Una fragancia envolvente, muy femenina y con un acabado dulce que cautiva desde el primer instante.',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #be185d 100%)',
      image: 'perfumes/armaf-yum-yum-1.webp'
    },
    {
      id: '4',
      name: 'Mandarin Sky',
      inspiration: 'Aroma luminoso y efervescente',
      gender: 'Hombre',
      family: 'Cítrico',
      label: 'Original',
      notes: ['Mandarina', 'Naranja', 'Lima', 'Rosa'],
      price: 160000,
      size: '100 ml',
      rating: 4.7,
      longevity: '6 - 8 horas',
      description: 'Brillante y alegre, ideal para quienes buscan un aroma fresco con un aire sofisticado y juvenil.',
      gradient: 'linear-gradient(135deg, #fde68a 0%, #fb923c 50%, #d97706 100%)',
      image: 'perfumes/odyssey_mandarin_skyl.webp'
    },
    {
      id: '5',
      name: 'Vulcan Feu',
      inspiration: 'Intensidad y calidez oriental',
      gender: 'Mujer',
      family: 'Oriental',
      label: 'Original',
      notes: ['Canela', 'Incienso', 'Ámbar', 'Madera'],
      price: 220000,
      size: '100 ml',
      rating: 4.9,
      longevity: '10 - 12 horas',
      description: 'Una fragancia potente, intensa y muy elegante, pensada para quienes quieren dejar una huella.',
      gradient: 'linear-gradient(135deg, #fb7185 0%, #b91c1c 50%, #450a0a 100%)',
      image: 'perfumes/vulcan-feu-french-avenue.webp'
    },
    {
      id: '6',
      name: 'Lattafa Yara',
      inspiration: 'Feminidad elegante y floral',
      gender: 'Mujer',
      family: 'Floral',
      label: 'Original',
      notes: ['Jazmín', 'Rosa', 'Vainilla', 'Musk'],
      price: 185000,
      size: '100 ml',
      rating: 4.8,
      longevity: '8 - 10 horas',
      description: 'Una fragancia floral delicada y sofisticada, con un fondo cremoso que la vuelve muy atractiva.',
      gradient: 'linear-gradient(135deg, #c084fc 0%, #9333ea 55%, #4c1d95 100%)',
      image: 'perfumes/lattafa-yara-webp.webp'
    },
    {
      id: '7',
      name: 'Hawas Ice',
      inspiration: 'Frialdad fresca y moderna',
      gender: 'Hombre',
      family: 'Cítrico',
      label: 'Original',
      notes: ['Pepino', 'Cítrico', 'Mentol', 'Madera'],
      price: 230000,
      size: '100 ml',
      rating: 4.8,
      longevity: '8 - 10 horas',
      description: 'Un aroma fresco y muy contemporáneo que transmite limpieza, energía y una sensación de modernidad.',
      gradient: 'linear-gradient(135deg, #38bdf8 0%, #0f766e 55%, #0f172a 100%)',
      image: 'perfumes/hawas-ice.webp'
    },
    {
      id: '8',
      name: 'Claude de Ariana Grande',
      inspiration: 'Fragancia dulce y seductora con un toque gourmand',
      gender: 'Mujer',
      family: 'Dulce',
      label: 'Original',
      notes: ['Frambuesa', 'Azúcar', 'Vainilla', 'Miel'],
      price: 280000,
      size: '100 ml',
      rating: 4.9,
      longevity: '8 - 10 horas',
      description: 'Un perfume femenino y encantador, con notas gourmand que envuelven en una dulzura moderna y sofisticada.',
      gradient: 'linear-gradient(135deg, #f9a8d4 0%, #ec4899 55%, #9d174d 100%)',
      image: 'perfumes/claude-ariana.webp'
    }
  ];

  // Quiz State
  quizStep: number = 0; // 0: Welcome, 1: Gender, 2: Occasion/Personality, 3: Intensity, 4: Recommendation
  quizAnswers = {
    gender: '',
    personality: '',
    intensity: ''
  };
  recommendedPerfume: Perfume | null = null;

  // Filter lists dynamically
  get filteredPerfumes(): Perfume[] {
    return this.perfumes.filter(perfume => {
      const matchGender = this.selectedGenderFilter === 'Todos' || perfume.gender === this.selectedGenderFilter;
      const matchFamily = this.selectedFamilyFilter === 'Todos' || perfume.family === this.selectedFamilyFilter;
      const matchLabel = this.selectedLabelFilter === 'Todos' || perfume.label === this.selectedLabelFilter;
      return matchGender && matchFamily && matchLabel;
    });
  }

  // Set filter value
  filterByGender(gender: string) {
    this.selectedGenderFilter = gender;
  }

  filterByFamily(family: string) {
    this.selectedFamilyFilter = family;
  }

  filterByLabel(label: 'Todos' | 'Original' | '1.1') {
    this.selectedLabelFilter = label;
  }

  // Quiz actions
  startQuiz() {
    this.quizStep = 1;
    this.quizAnswers = { gender: '', personality: '', intensity: '' };
    this.recommendedPerfume = null;
  }

  selectGender(gender: string) {
    this.quizAnswers.gender = gender;
    this.quizStep = 2;
  }

  selectPersonality(personality: string) {
    this.quizAnswers.personality = personality;
    this.quizStep = 3;
  }

  selectIntensity(intensity: string) {
    this.quizAnswers.intensity = intensity;
    this.calculateRecommendation();
    this.quizStep = 4;
  }

  calculateRecommendation() {
    const { gender, personality, intensity } = this.quizAnswers;

    // Filter by matching gender (or unisex)
    let candidates = this.perfumes.filter(p => p.gender === gender || p.gender === 'Unisex');
    if (candidates.length === 0) {
      candidates = this.perfumes;
    }

    // Secondary filter: personality preference mappings
    // Elegante -> Aventis, Bleu, Libre, Rouge 540
    // Audaz -> Sauvage, Aventis, Rouge 540
    // Fresco -> Bleu, Sauvage, Libre
    // Seductor -> Black Opium, Rouge 540, Sauvage
    let filtered = candidates;
    if (personality === 'Elegante') {
      filtered = candidates.filter(p => ['Nerune Aventis', 'Nerune Bleu', 'Nerune Libre', 'Nerune Rouge 540'].includes(p.name));
    } else if (personality === 'Audaz') {
      filtered = candidates.filter(p => ['Nerune Sauvage', 'Nerune Aventis', 'Nerune Rouge 540'].includes(p.name));
    } else if (personality === 'Fresco') {
      filtered = candidates.filter(p => ['Nerune Bleu', 'Nerune Sauvage', 'Nerune Libre'].includes(p.name));
    } else if (personality === 'Seductor') {
      filtered = candidates.filter(p => ['Nerune Black Opium', 'Nerune Rouge 540', 'Nerune Sauvage'].includes(p.name));
    }

    if (filtered.length === 0) {
      filtered = candidates;
    }

    // Tertiary filter: intensity mapping
    // Suave/Sutil -> Cítrico, Floral
    // Moderada -> Amaderado, Cítrico, Floral
    // Intensa/Duradera -> Oriental, Dulce, Amaderado
    let finalSelection = filtered;
    if (intensity === 'Suave/Sutil') {
      finalSelection = filtered.filter(p => ['Cítrico', 'Floral'].includes(p.family));
    } else if (intensity === 'Intensa/Duradera') {
      finalSelection = filtered.filter(p => ['Oriental', 'Dulce', 'Amaderado'].includes(p.family));
    }

    if (finalSelection.length === 0) {
      finalSelection = filtered;
    }

    // Pick the highest rated perfume or default to first
    this.recommendedPerfume = finalSelection.sort((a, b) => b.rating - a.rating)[0] || this.perfumes[0];
  }

  // Redirect to WhatsApp helper
  redirectToWhatsApp(type: 'general' | 'perfume' | 'recommendation', perfume?: Perfume) {
    let message = '';

    if (type === 'perfume' && perfume) {
      message = `Hola Nerune! Me interesa el perfume *${perfume.name}* (Inspirado en *${perfume.inspiration}* de ${perfume.size}). ¿Me podrían dar información de cómo realizar mi pedido?`;
    } else if (type === 'recommendation' && perfume) {
      message = `Hola Nerune! Realicé el test en su sitio web y obtuve la recomendación de *${perfume.name}* (Inspirado en *${perfume.inspiration}*). Me gustaría comprar este aroma.`;
    } else {
      message = `Hola Nerune! Me gustaría recibir asesoría sobre su catálogo de perfumes de inspiración.`;
    }

    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${this.whatsappPhone}?text=${encodedText}`;
    window.open(url, '_blank');
  }
}
