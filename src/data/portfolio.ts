import type { Project, Skill, NavItem } from '@/types';

// ─── Navigation ───────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: 'Hakkımda', href: '#about' },
  { label: 'Yetenekler', href: '#skills' },
  { label: 'Projelerim', href: '#projects' },
  { label: 'İletişim', href: '#contact' },
];

// ─── Skills ───────────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  {
    name: '.NET Core',
    icon: '⬡',
    color: '#512bd4',
    bgColor: 'rgba(81,43,212,0.12)',
    category: 'backend',
    level: 5,
  },

  {
    name: 'React',
    icon: '⚛️',
    color: '#61dafb',
    bgColor: 'rgba(97,218,251,0.1)',
    category: 'frontend',
    level: 5,
  },
  {
    name: 'Node.js',
    icon: '🔌',
    color: '#9b4993',
    bgColor: 'rgba(155,73,147,0.12)',
    category: 'language',
    level: 5,
  },
  {
    name: 'Next.js',
    icon: '▲',
    color: '#ffffff',
    bgColor: 'rgba(255,255,255,0.08)',
    category: 'frontend',
    level: 5,
  },

  {
    name: 'Python',
    icon: '🐍',
    color: '#ffd43b',
    bgColor: 'rgba(255,212,59,0.10)',
    category: 'language',
    level: 4,
  },
  {
    name: 'OpenCV',
    icon: '👁',
    color: '#00ff9f',
    bgColor: 'rgba(0,255,159,0.08)',
    category: 'ml-cv',
    level: 4,
  },
  {
    name: 'TypeScript',
    icon: 'TS',
    color: '#3178c6',
    bgColor: 'rgba(49,120,198,0.12)',
    category: 'language',
    level: 5,
  },


  {
    name: 'PostgreSQL',
    icon: '🐘',
    color: '#336791',
    bgColor: 'rgba(51,103,145,0.12)',
    category: 'database',
    level: 4,
  },

  {
    name: 'Git',
    icon: '⎇',
    color: '#f05032',
    bgColor: 'rgba(240,80,50,0.10)',
    category: 'devops',
    level: 5,
  },

];

// ─── Projects ─────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'biometric-auth',
    title: 'Biyometrik Kimlik Doğrulama Sistemi',
    description:
      'Üç aşamalı biyometrik kimlik doğrulama sistemi: yüz tanıma → gizli el hareketi → canlılık testi.',
    technologies: ['.NET 8', 'React', 'OpenCV', 'Python', 'PostgreSQL', 'MediaPipe'],
    githubUrl: 'https://github.com/halebykrsln',
    category: 'computer-vision',
    featured: true,
    year: 2024,
  },

  {
    id: 'cv-pipeline',
    title: 'Temassız Sunum Kontrol Sistemi',
    description:
      `El hareketleriyle temassız sunum yönetimi: ileri/geri slayt → oynat/duraklat → akıllı kontrol. Gerçek zamanlı görüntü işleme.`,
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'pyautogui'],
    githubUrl: 'https://github.com/halebykrsln',
    category: 'computer-vision',
    year: 2025,
  },

  {
    id: 'e-ticaret-yonetim-paneli',
    title: 'E-Ticaret Yönetim Paneli',
    description:
      'Dinamik e-ticaret yönetim paneli: ürün & kategori yönetimi → kupon sistemi → slide kontrolü → reklam modülleri.',
    technologies: ['Node.js', 'Express', 'Bootstrap'],
    githubUrl: 'https://github.com/halebykrsln',
    category: 'full-stack',
    year: 2024,
  },

  {
    id: 'kpss-blog-platformu',
    title: 'Kpss Blog ve İçerik Platformu',
    description:
      'Eğitim odaklı içerik yönetim sistemi: blog paylaşımları → duyuru yönetimi → reklam entegrasyonu.',
    technologies: ['Node.js', 'Next.js', 'Express.js', 'Bootstrap'],
    githubUrl: 'https://github.com/halebykrsln',
    category: 'full-stack',
    year: 2024,
  },

  {
    id: 'konusan-asistan-chat-bot',
    title: 'Konuşan Asistan Chat Bot',
    description:
      'Etkileşimli rehber ve chatbot sistemi: hazır cevap akışı → video destekli yönlendirme → sesli etkileşim. 3D avatar destekli web deneyimi.',
    technologies: ['Node.js', 'Next.js', 'Three.js', 'Web Speech API'],
    githubUrl: 'https://github.com/halebykrsln',
    category: 'full-stack',
    year: 2024,
  },


  {
    id: 'topluluk-kayit-sistemi',
    title: 'Topluluk Kayıt Sistemi',
    description:
      'Mobil topluluk yönetim uygulaması: kayıt & doğrulama → kullanıcı yönetimi → gerçek zamanlı veri senkronizasyonu. Firebase destekli Android çözümü.',
    technologies: ['Kotlin', 'Firebase', 'Android Studio'],
    githubUrl: 'https://github.com/halebykrsln',
    category: 'mobile',
    year: 2023,
  },

  {
    id: 'slap-game',
    title: 'İnteraktif Tokat Oyunu',
    description:
      'Eğlenceli tarayıcı tabanlı oyun. Skor sistemi, milestone geri bildirimler, konfeti animasyonları ve araç seçim menüsü.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    githubUrl: 'https://github.com/halebykrsln',
    category: 'frontend',
    year: 2026,
  },

  {
    id: 'to-do-app',
    title: 'To-do App ',
    description:
      'Görev yönetim uygulaması: ekle → düzenle → tamamla → sil. State yönetimi ve dinamik listeleme odaklı React projesi..',
    technologies: ['React', 'JavaScript', 'CSS', 'JSON'],
    githubUrl: 'https://github.com/halebykrsln',
    category: 'frontend',
    year: 2023,
  },
];

