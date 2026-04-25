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
  lastUpdated: "2026-04-25"
};

const CATEGORIES = [
  { id: "all",     label: "전체",    emoji: "🌟" },
  { id: "math",    label: "수학",    emoji: "🔢" },
  { id: "english", label: "영어",    emoji: "🌍" },
  { id: "word",    label: "어휘",    emoji: "✏️" },
  { id: "game",    label: "게임",    emoji: "🎮" }
];

const apps = [
  {
    id: "joy_add",
    title: "덧셈 모험",
    file: "Joy_add.html",
    description: "토끼와 함께 덧셈을 배워요! 사과밭부터 성까지 모험을 떠나봐요.",
    category: ["math", "game"],
    emoji: "➕",
    color: "#FF6B9D",
    difficulty: 1,
    updatedAt: "2026-04-25"
  },
  {
    id: "joy_sub",
    title: "뺄셈 모험",
    file: "Joy_sub.html",
    description: "토끼와 함께 뺄셈을 배워요! 사탕 가게에서 마법의 성까지 도전!",
    category: ["math", "game"],
    emoji: "➖",
    color: "#4D96FF",
    difficulty: 1,
    updatedAt: "2026-04-25"
  },
  {
    id: "joy_mul",
    title: "곱셈 모험",
    file: "Joy_mul.html",
    description: "토끼와 구구단을 배워요! 2단부터 혼합까지 단계별 도전!",
    category: ["math", "game"],
    emoji: "✖️",
    color: "#A29BFE",
    difficulty: 2,
    updatedAt: "2026-04-25"
  },
  {
    id: "joy_div",
    title: "나눗셈 모험",
    file: "Joy_div.html",
    description: "토끼와 나눗셈을 배워요! 바구니에 똑같이 나눠봐요.",
    category: ["math", "game"],
    emoji: "➗",
    color: "#26de81",
    difficulty: 2,
    updatedAt: "2026-04-25"
  },
  {
    id: "joy_num",
    title: "수 개념",
    file: "Joy_num.html",
    description: "크기 비교, 순서, 홀짝, 10 만들기까지! 수 개념을 탄탄히 다져요.",
    category: ["math", "game"],
    emoji: "🔢",
    color: "#fd9644",
    difficulty: 1,
    updatedAt: "2026-04-25"
  },
  {
    id: "joy_think",
    title: "사고력 수학",
    file: "Joy_think.html",
    description: "패턴, 도형, 저울, 거꾸로 연산까지! 사고력을 키워봐요.",
    category: ["math", "game"],
    emoji: "💡",
    color: "#f7b731",
    difficulty: 3,
    updatedAt: "2026-04-25"
  },
  {
    id: "joy_word3",
    title: "영어 단어 게임",
    file: "Joy_word3.html",
    description: "영어 단어를 게임으로 재미있게 익혀요!",
    category: ["english", "word", "game"],
    emoji: "🔤",
    color: "#FF9F43",
    difficulty: 1,
    updatedAt: "2026-04-25"
  },
  {
    id: "joy_word4",
    title: "영어 문장 게임",
    file: "Joy_word4.html",
    description: "영어 문장을 듣고 말하고 써봐요. 영어 실력이 쑥쑥!",
    category: ["english", "word", "game"],
    emoji: "💬",
    color: "#48DBFB",
    difficulty: 2,
    updatedAt: "2026-04-25"
  },
  {
    id: "voice_assistant",
    title: "영어 말하기 친구",
    file: "voice-assistant-v2.html",
    description: "AI 친구와 영어로 대화해요. 말하기 실력이 늘어나요!",
    category: ["english", "game"],
    emoji: "🎙️",
    color: "#A29BFE",
    difficulty: 2,
    updatedAt: "2026-04-10"
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
