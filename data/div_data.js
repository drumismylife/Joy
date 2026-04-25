// ── Joy_div.html 데이터 ───────────────────────────────────
// 나눗셈 모험 게임 월드 설정
// divisor: 나누는 수, maxDividend: 나뉘는 수의 최대값

var WORLDS = [
  {
    id: 0, name: '나눠요 2', icon: '🍎', color: '#ff6b9d', emoji: '🍎',
    story: '사과를 2명이 나눠 먹어요!\n2로 나누기를 배워봐요.',
    hint: '2로 나누는 건 반으로 나누는 거예요!',
    divisor: 2, maxDividend: 10, questions: 5
  },
  {
    id: 1, name: '나눠요 5', icon: '⭐', color: '#f59e0b', emoji: '⭐',
    story: '별을 5명에게 나눠줘요!\n5로 나누기를 배워봐요.',
    hint: '5단 구구단을 거꾸로 생각해봐요!',
    divisor: 5, maxDividend: 25, questions: 6
  },
  {
    id: 2, name: '나눠요 10', icon: '🔟', color: '#6c5ce7', emoji: '🔵',
    story: '10명에게 나눠줘요!\n10으로 나누기 도전!',
    hint: '10으로 나누면 끝 자리 0을 지우면 돼요!',
    divisor: 10, maxDividend: 50, questions: 6
  },
  {
    id: 3, name: '나눠요 3', icon: '🍀', color: '#10b981', emoji: '🍀',
    story: '클로버를 3명이 나눠요!\n3으로 나누기 도전!',
    hint: '3단 구구단을 거꾸로 생각해봐요!',
    divisor: 3, maxDividend: 27, questions: 7
  },
  {
    id: 4, name: '나눠요 4', icon: '🌟', color: '#8b5cf6', emoji: '🌟',
    story: '별을 4방향으로 나눠요!\n4로 나누기 도전!',
    hint: '4단 구구단을 거꾸로 생각해봐요!',
    divisor: 4, maxDividend: 36, questions: 7
  },
  {
    id: 5, name: '혼합 나눗셈', icon: '🎲', color: '#0984e3', emoji: '🎯',
    story: '여러 수로 나눠봐요!\n나눗셈 달인에 도전!',
    hint: '구구단을 거꾸로 생각하면 나눗셈도 쉬워요!',
    divisor: 0, maxDividend: 81, questions: 10,
    mixed: true
  }
];
