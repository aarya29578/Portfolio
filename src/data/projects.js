import jenisha1 from '../assets/images/jenisha_1.jpeg';
import jenisha2 from '../assets/images/jenisha_2.jpeg';
import jenisha3 from '../assets/images/jenisha_3.jpeg';
import jenisha4 from '../assets/images/jenisha_4.jpeg';
import vita1 from '../assets/images/vita_1.jpeg';
import vita2 from '../assets/images/vita_2.jpeg';
import vita3 from '../assets/images/vita_3.jpeg';

/**
 * Projects Data
 * Centralised repository of production mobile applications
 * showcased on the dedicated Projects page.
 */

export const projects = [
  {
    id: 'jenisha',
    number: '01',
    title: 'Jenisha — Government Document Portal',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.company.jenisha',
    category: 'Cross-Platform Mobile Application',
    tagline: 'Citizen Document Submission & Administrative Approvals',
    description:
      'A digital government services application supporting document submission, uploads and administrative approval workflows.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'PHP', 'TypeScript'],
    highlights: [
      'Multi-tier citizen authentication supporting mobile OTP verification, Google sign-in, and administrative credentials',
      'Unified citizen service directory spanning Passport Seva, PAN card processing, shop licenses, and rental agreements',
      'Integrated digital wallet supporting service payment deductions, admin top-ups, and granular transaction ledgers',
      'Dual-language interface architecture (English & Marathi) crafted for high accessibility across diverse citizen demographics',
    ],
    primaryScreenshotIndex: 0,
    screenshots: [
      {
        id: 'jenisha-services',
        src: jenisha3,
        title: 'Services Directory & Citizen Dashboard',
        alt: 'Jenisha application citizen dashboard featuring government services directory including Passport Seva, PAN card, and licensing',
        caption: 'Central citizen dashboard with service catalog, search bar, and language toggle.',
      },
      {
        id: 'jenisha-login',
        src: jenisha1,
        title: 'Citizen Authentication & OTP Login',
        alt: 'Jenisha application secure login screen with mobile OTP authentication and registered credential options',
        caption: 'Mobile-first onboarding with registered phone number verification and OTP authentication.',
      },
      {
        id: 'jenisha-login-alt',
        src: jenisha2,
        title: 'Verification Gateway & Credentials',
        alt: 'Jenisha document portal sign-in and terms confirmation interface',
        caption: 'Alternative credential and account gateway with compliance terms.',
      },
      {
        id: 'jenisha-wallet',
        src: jenisha4,
        title: 'Citizen Digital Wallet & Transactions',
        alt: 'Jenisha application digital wallet interface displaying wallet balance, transaction ledger, and service payment records',
        caption: 'Digital wallet with real-time balance tracking, recharge options, and service payment history.',
      },
    ],
  },
  {
    id: 'vitagita',
    number: '02',
    title: 'VitaGita — Sanskrit Shlok App',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vitagita.app',
    category: 'Spiritual & EdTech Mobile Application',
    tagline: 'Traditional Sanskrit Verses with Contemporary Mobile UI',
    description:
      'A Sanskrit shlok application designed to present traditional verses through a mobile experience.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    highlights: [
      'Daily verse contemplation presenting authentic Sanskrit shloks paired with contextual Hindi translations and English meanings',
      'Integrated audio playback controls allowing users to listen to traditional verse pronunciations and rhythmic chants',
      'Engaging daily progress mechanics including stage ranks, contemplation streaks, and community leaderboard integration',
      'Structured chapter-by-chapter directory navigating all chapters of the Bhagavad Gita with intuitive index cards',
    ],
    primaryScreenshotIndex: 0,
    screenshots: [
      {
        id: 'vita-dashboard',
        src: vita1,
        title: 'Daily Progress & Contemplation Hub',
        alt: 'VitaGita home screen displaying reader progress, points, stage rank, daily streak, and community leaderboard',
        caption: 'Home dashboard tracking contemplation points, level stages, streak counters, and leaderboard standings.',
      },
      {
        id: 'vita-shlok-reader',
        src: vita2,
        title: 'Sanskrit Shlok Reader & Audio Player',
        alt: 'VitaGita shlok contemplation interface displaying original Sanskrit verse, Hindi translation, English explanation, and audio playback controls',
        caption: 'Gatimaan Gita reader displaying original Sanskrit verse, Hindi paraphrase, English meaning, and audio controls.',
      },
      {
        id: 'vita-chapters',
        src: vita3,
        title: 'Chapter Index & Navigation Directory',
        alt: 'VitaGita chapter directory listing Bhagavad Gita chapters including Arjun Vishaad, Saankhy, and Karm Yog',
        caption: 'Sequential chapter index for structured contemplation across the Bhagavad Gita.',
      },
    ],
  },
];
