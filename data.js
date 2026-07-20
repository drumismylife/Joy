// =============================================
//  Joy Repository - App Data
//  기쁨이의 학습 앱 모음
//  업데이트 시 apps 배열에 항목을 추가하세요.
// =============================================

const REPO = {
  name: "Joy",
  owner: "drumismylife",
  subtitle: "기쁨이의 신나는 학습 놀이터 🎈",
  description: "수학, 국어, 영어 등 다양한 과목의 학습 앱을 모아두었습니다.",
  baseUrl: "https://drumismylife.github.io/Joy/",
  lastUpdated: "2026-07-20"
};

const CATEGORIES = [
  { id: "all",     label: "전체",    emoji: "🌟" },
  { id: "math",    label: "수학",    emoji: "🔢" },
  { id: "lang",    label: "국어",    emoji: "📖" },
  { id: "english", label: "영어",    emoji: "🌍" },
  { id: "word",    label: "어휘",    emoji: "✏️" },
  { id: "game",    label: "게임",    emoji: "🎮" }
];

const apps = [
  {
    id: "joy_math",
    title: "수학 나라",
    file: "Joy_math.html",
    description: "초등 2학년 수학 12개 단원을 부엉이 친구와 하나씩 배워요!",
    category: ["math", "game"],
    emoji: "🔢",
    color: "#FF6B6B",
    difficulty: 1,
    updatedAt: "2026-07-20"
  },
  {
    id: "joy_plus",
    title: "덧셈 마스터",
    file: "Joy_plus.html",
    description: "덧셈을 빠르고 정확하게! 귀여운 캐릭터와 함께하는 덧셈 훈련.",
    category: ["math", "game"],
    emoji: "➕",
    color: "#FFB347",
    difficulty: 1,
    updatedAt: "2026-04-10"
  },
  {
    id: "joy_x",
    title: "곱셈 챌린지",
    file: "Joy_x.html",
    description: "구구단을 신나게 외워요. 스테이지 클리어에 도전!",
    category: ["math", "game"],
    emoji: "✖️",
    color: "#C77DFF",
    difficulty: 2,
    updatedAt: "2026-04-10"
  },
  {
    id: "joy_hangul",
    title: "국어 나라",
    file: "Joy_hangul.html",
    description: "초등 2학년 국어 6단원(흉내말·마음짐작·문장부호 등)을 병아리 친구와 배워요!",
    category: ["lang", "game"],
    emoji: "📖",
    color: "#6BCB77",
    difficulty: 2,
    updatedAt: "2026-07-21"
  },
  {
    id: "joy_word3",
    title: "영어 단어 게임",
    file: "Joy_word3.html",
    description: "영어 단어를 게임으로 재미있게 익혀요! (Wonders Grade 2 어휘 추가)",
    category: ["english", "word", "game"],
    emoji: "🔤",
    color: "#FF9F43",
    difficulty: 1,
    updatedAt: "2026-07-20"
  },
  {
    id: "joy_word4",
    title: "영어 문장 게임",
    file: "Joy_word4.html",
    description: "영어 문장을 듣고 말하고 써봐요. (Wonders Grade 2 문장 추가)",
    category: ["english", "word", "game"],
    emoji: "💬",
    color: "#48DBFB",
    difficulty: 2,
    updatedAt: "2026-07-20"
  },
  {
    id: "joy_speak",
    title: "말하기 연습",
    file: "Joy_speak.html",
    description: "앵무새 친구와 영어 문장을 듣고 따라 말해요. API 없이 무료!",
    category: ["english", "game"],
    emoji: "🦜",
    color: "#A29BFE",
    difficulty: 2,
    updatedAt: "2026-07-20"
  }
];

// =============================================
//  Helper functions (index.html에서 사용)
// =============================================

function getAppsByCategory(categoryId) {
  if (categoryId === "all") return apps;
  return apps.filter(app => app.category.includes(categoryId));
}

function getAppById(id) {
  return apps.find(app => app.id === id);
}

function getDifficultyLabel(level) {
  return ["", "⭐", "⭐⭐", "⭐⭐⭐"][level] || "";
}
