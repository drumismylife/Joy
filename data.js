// =============================================
//  Joy Repository - App Data
//  기쁨이의 학습 앱 모음
//  업데이트 시 apps 배열에 항목을 추가하세요.
// =============================================

const REPO = {
  name: "Joy",
  owner: "drumismylife",
  subtitle: "기쁨이의 신나는 학습 놀이터 🎈",
  description: "수학, 국어, 한자 등 다양한 과목의 학습 앱을 모아두었습니다.",
  baseUrl: "https://drumismylife.github.io/Joy/",
  lastUpdated: "2026-03-25"
};

const CATEGORIES = [
  { id: "all",  label: "전체",    emoji: "🌟" },
  { id: "math", label: "수학",    emoji: "🔢" },
  { id: "lang", label: "국어",    emoji: "📖" },
  { id: "word", label: "어휘·한자", emoji: "✏️" },
  { id: "game", label: "게임",    emoji: "🎮" }
];

const apps = [
  {
    id: "joy_math",
    title: "수학 모험",
    file: "Joy_math.html",
    description: "사칙연산부터 수열까지, 레벨을 올리며 수학 실력을 키워요!",
    category: ["math", "game"],
    emoji: "🔢",
    color: "#FF6B6B",
    difficulty: 2,
    updatedAt: "2026-03-25"
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
    updatedAt: "2026-03-25"
  },
  {
    id: "joy_word",
    title: "낱말 카드",
    file: "Joy_word.html",
    description: "그림과 함께 새로운 낱말을 익혀요. 어휘력 쑥쑥!",
    category: ["lang", "word"],
    emoji: "📖",
    color: "#6BCB77",
    difficulty: 1,
    updatedAt: "2026-03-25"
  },
  {
    id: "joy_word2",
    title: "낱말 퀴즈",
    file: "Joy_word2.html",
    description: "배운 낱말을 퀴즈로 확인해요. 몇 개나 맞출 수 있을까?",
    category: ["lang", "word", "game"],
    emoji: "✏️",
    color: "#4D96FF",
    difficulty: 2,
    updatedAt: "2026-03-25"
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
    updatedAt: "2026-03-25"
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
  return ["", "⭐ 쉬움", "⭐⭐ 보통", "⭐⭐⭐ 어려움"][level] || "";
}
