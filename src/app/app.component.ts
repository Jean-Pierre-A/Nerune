import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Perfume {
  id: string;
  name: string;
  inspiration: string;
  gender: 'Femenino' | 'Masculino' | 'Unisex';
  family: 'Floral' | 'Amaderado' | 'Cítrico' | 'Dulce' | 'Oriental';
  notes: string[];
  price: number;
  size: string;
  rating: number;
  longevity: string;
  description: string;
  gradient: string; /* CSS gradient representing the scent */
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Auren Perfumes';
  
  // WhatsApp Number Configuration
  private readonly whatsappPhone = '573114113938';

  // Catalog Filters
  selectedGenderFilter: string = 'Todos';
  selectedFamilyFilter: string = 'Todos';

  // Perfume Catalogue Data
  perfumes: Perfume[] = [
    {
      id: '1',
      name: 'Auren Rouge 540',
      inspiration: 'Baccarat Rouge 540 (Maison Francis Kurkdjian)',
      gender: 'Unisex',
      family: 'Oriental',
      notes: ['Azafrán', 'Jazmín de Egipto', 'Madera de Ámbar', 'Resina de Abeto', 'Cedro'],
      price: 85000,
      size: '60 ml',
      rating: 4.9,
      longevity: '12+ horas',
      description: 'Una fragancia poética, densa y sumamente sofisticada. Deja una estela ámbar-floral inolvidable y magnética.',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 50%, #7f1d1d 100%)'
    },
    {
      id: '2',
      name: 'Auren Sauvage',
      inspiration: 'Sauvage (Dior)',
      gender: 'Masculino',
      family: 'Amaderado',
      notes: ['Bergamota de Calabria', 'Pimienta de Sichuan', 'Lavanda', 'Vetiver', 'Pachulí', 'Ambroxan'],
      price: 79000,
      size: '60 ml',
      rating: 4.8,
      longevity: '8 - 10 horas',
      description: 'Frescura cruda e indómita combinada con maderas nobles. Un perfume masculino clásico, audaz y profundamente sensual.',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 70%, #020617 100%)'
    },
    {
      id: '3',
      name: 'Auren Libre',
      inspiration: 'Libre (Yves Saint Laurent)',
      gender: 'Femenino',
      family: 'Floral',
      notes: ['Lavanda de Francia', 'Mandarina', 'Flor de Azahar de Marruecos', 'Jazmín', 'Vainilla de Madagascar', 'Almizcle'],
      price: 79000,
      size: '60 ml',
      rating: 4.8,
      longevity: '9 - 11 horas',
      description: 'La tensión perfecta entre la masculinidad de la lavanda y la feminidad ardiente del azahar. Un grito de libertad e independencia.',
      gradient: 'linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)'
    },
    {
      id: '4',
      name: 'Auren Aventis',
      inspiration: 'Aventus (Creed)',
      gender: 'Masculino',
      family: 'Cítrico',
      notes: ['Piña', 'Mandarina', 'Grosellas Negras', 'Manzana', 'Abedul', 'Musgo de Roble', 'Vainilla'],
      price: 89000,
      size: '60 ml',
      rating: 4.9,
      longevity: '10 - 12 horas',
      description: 'Una oda a la fuerza, el éxito y el legado. Abre con cítricos y piña jugosa, madurando en maderas ahumadas extremadamente sofisticadas.',
      gradient: 'linear-gradient(135deg, #64748b 0%, #334155 60%, #0f172a 100%)'
    },
    {
      id: '5',
      name: 'Auren Black Opium',
      inspiration: 'Black Opium (Yves Saint Laurent)',
      gender: 'Femenino',
      family: 'Dulce',
      notes: ['Café Negro', 'Pera', 'Flor de Azahar', 'Jazmín', 'Vainilla', 'Pachulí', 'Cedro'],
      price: 79000,
      size: '60 ml',
      rating: 4.7,
      longevity: '8 - 10 horas',
      description: 'Sensual, rebelde y adictiva. La energía electrizante del café combinada con la dulzura aterciopelada de la vainilla y flores blancas.',
      gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 60%, #030712 100%)'
    },
    {
      id: '6',
      name: 'Auren Bleu',
      inspiration: 'Bleu de Chanel (Chanel)',
      gender: 'Masculino',
      family: 'Cítrico',
      notes: ['Toronja (Pomelo)', 'Limón', 'Menta', 'Pimienta Rosa', 'Jengibre', 'Incienso', 'Sándalo'],
      price: 79000,
      size: '60 ml',
      rating: 4.8,
      longevity: '8 - 10 horas',
      description: 'Un perfume aromático y boscoso de elegancia atemporal. Destaca por su frescura cítrica inicial y un fondo cálido e hipnótico de incienso.',
      gradient: 'linear-gradient(135deg, #0e7490 0%, #155e75 50%, #083344 100%)'
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
      return matchGender && matchFamily;
    });
  }

  // Set filter value
  filterByGender(gender: string) {
    this.selectedGenderFilter = gender;
  }

  filterByFamily(family: string) {
    this.selectedFamilyFilter = family;
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
      filtered = candidates.filter(p => ['Auren Aventis', 'Auren Bleu', 'Auren Libre', 'Auren Rouge 540'].includes(p.name));
    } else if (personality === 'Audaz') {
      filtered = candidates.filter(p => ['Auren Sauvage', 'Auren Aventis', 'Auren Rouge 540'].includes(p.name));
    } else if (personality === 'Fresco') {
      filtered = candidates.filter(p => ['Auren Bleu', 'Auren Sauvage', 'Auren Libre'].includes(p.name));
    } else if (personality === 'Seductor') {
      filtered = candidates.filter(p => ['Auren Black Opium', 'Auren Rouge 540', 'Auren Sauvage'].includes(p.name));
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
      message = `Hola Auren! Me interesa el perfume *${perfume.name}* (Inspirado en *${perfume.inspiration}* de ${perfume.size}). ¿Me podrían dar información de cómo realizar mi pedido?`;
    } else if (type === 'recommendation' && perfume) {
      message = `Hola Auren! Realicé el test en su sitio web y obtuve la recomendación de *${perfume.name}* (Inspirado en *${perfume.inspiration}*). Me gustaría comprar este aroma.`;
    } else {
      message = `Hola Auren! Me gustaría recibir asesoría sobre su catálogo de perfumes de inspiración.`;
    }

    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${this.whatsappPhone}?text=${encodedText}`;
    window.open(url, '_blank');
  }
}
