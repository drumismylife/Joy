// ── Joy_add.html 데이터 ───────────────────────────────────
// 덧셈 모험 게임 월드 설정
// WORLDS: 8개 월드. minA/maxA = 첫 번째 수 범위, minB/maxB = 두 번째 수 범위
// questions: 해당 월드 클리어에 필요한 정답 수
// x, y: 월드맵 위치 (vw/vh 기준 퍼센트)

var WORLDS = [
  {
    id: 0, name: '사과밭', icon: '🍎', color: '#ff6b6b', emoji: '🍎',
    story: '토끼가 사과밭에 왔어요!\n덧셈으로 사과를 세어봐요.',
    hint: '손가락을 이용해서 하나씩 세어봐요!',
    minA: 1, maxA: 5, minB: 1, maxB: 5, questions: 5
  },
  {
    id: 1, name: '당근밭', icon: '🥕', color: '#ff9f43', emoji: '🥕',
    story: '달콤한 당근이 가득!\n몇 개인지 더해봐요.',
    hint: '큰 수에서 시작해서 작은 수만큼 더 세어봐요!',
    minA: 1, maxA: 9, minB: 1, maxB: 9, questions: 6
  },
  {
    id: 2, name: '꽃밭', icon: '🌸', color: '#fd79a8', emoji: '🌸',
    story: '예쁜 꽃들이 활짝 피었어요!\n꽃 수를 더해볼까요?',
    hint: '10을 먼저 만든 다음 나머지를 더해봐요!',
    minA: 4, maxA: 9, minB: 4, maxB: 9, questions: 6
  },
  {
    id: 3, name: '마을', icon: '🏘️', color: '#6c5ce7', emoji: '🏡',
    story: '마을에 친구들이 찾아왔어요!\n큰 수도 거뜬해요.',
    hint: '뒤의 수를 올려서 앞 수를 10으로 만들어봐요!',
    minA: 10, maxA: 19, minB: 1, maxB: 9, questions: 7
  },
  {
    id: 4, name: '숲', icon: '🌲', color: '#00b894', emoji: '🍃',
    story: '숲 속 동물들의 숫자를 세어봐요!\n두 자리 수에 도전!',
    hint: '앞자리끼리, 뒷자리끼리 따로 더해봐요!',
    minA: 11, maxA: 19, minB: 11, maxB: 19, questions: 7
  },
  {
    id: 5, name: '강가', icon: '🏞️', color: '#0984e3', emoji: '🐟',
    story: '강에 물고기가 헤엄쳐요!\n받아올림에 도전해봐요.',
    hint: '일의 자리가 10이 넘으면 십의 자리로 1을 올려요!',
    minA: 15, maxA: 29, minB: 5, maxB: 19, questions: 8
  },
  {
    id: 6, name: '산', icon: '⛰️', color: '#636e72', emoji: '🦅',
    story: '높은 산에 도전해봐요!\n두 자리 수 덧셈 도전!',
    hint: '일의 자리부터 더하고, 받아올림이 있으면 십의 자리에 더해요!',
    minA: 20, maxA: 49, minB: 10, maxB: 49, questions: 8
  },
  {
    id: 7, name: '성', icon: '🏰', color: '#a29bfe', emoji: '👑',
    story: '드디어 성에 도착!\n최후의 덧셈 도전이에요!',
    hint: '자리별로 나눠서 더한 다음 합쳐봐요. 받아올림을 잊지 마세요!',
    minA: 30, maxA: 99, minB: 10, maxB: 69, questions: 10
  }
];
