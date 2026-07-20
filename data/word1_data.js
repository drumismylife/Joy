// ── Joy_word.html 데이터 ──────────────────────────────────
// 단어 찾기 게임에서 사용되는 단어 목록
// 각 항목: { word(영어 대문자), kr(한국어 뜻), emoji, sentence(예문) }

const WORDS = [
  { word: 'SISTER',  kr: '언니/누나',  emoji: '👧', sentence: 'My sister is very kind.' },
  { word: 'MOTHER',  kr: '엄마',        emoji: '👩', sentence: 'My mother makes yummy food.' },
  { word: 'FATHER',  kr: '아빠',        emoji: '👨', sentence: 'My father reads books at night.' },
  { word: 'SCHOOL',  kr: '학교',        emoji: '🏫', sentence: 'I go to school every morning.' },
  { word: 'BASKET',  kr: '바구니',      emoji: '🧺', sentence: 'Put the apples in the basket.' },
  { word: 'BRIDGE',  kr: '다리',        emoji: '🌉', sentence: 'We walked over the bridge.' },
  { word: 'MIRROR',  kr: '거울',        emoji: '🪞', sentence: 'I see my face in the mirror.' },
  { word: 'CASTLE',  kr: '성',          emoji: '🏰', sentence: 'The princess lives in a castle.' },
  { word: 'ISLAND',  kr: '섬',          emoji: '🏝', sentence: 'The island has beautiful beaches.' },
  { word: 'GARDEN',  kr: '정원',        emoji: '🌷', sentence: 'Flowers grow in the garden.' },
  { word: 'MARKET',  kr: '시장',        emoji: '🛒', sentence: 'Mom buys food at the market.' },
  { word: 'DANCER',  kr: '댄서',        emoji: '💃', sentence: 'The dancer spins on the stage.' },
];

// GRID_SIZE: 단어 찾기 격자 크기 (기본값 12 = 12x12)
const GRID_SIZE = 12;
