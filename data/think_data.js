// ── Joy_think.html 데이터 ───────────────────────────────────
// 사고력 수학 게임 월드 설정
// types: 해당 월드에서 출제되는 문제 유형들
//   'pattern'  : 패턴/수열 빈칸 채우기 (2, 4, ?, 8)
//   'shape'    : 도형 세기 (네모는 몇 개?)
//   'balance'  : 저울 비교 (어느 쪽이 더 무거울까?)
//   'reverse'  : 거꾸로 연산 (? + 3 = 7)
//   'compare'  : 길이/무게/넓이 비교

var WORLDS = [
  {
    id: 0, name: '수열 마을', icon: '🔢', color: '#6c5ce7', emoji: '🔢',
    story: '숫자들이 줄 서 있어요!\n빈칸에 들어갈 수를 찾아봐요.',
    types: ['pattern'], maxNum: 20, questions: 6,
    hint: '앞뒤 숫자의 차이를 살펴봐요. 몇씩 늘어나나요?'
  },
  {
    id: 1, name: '도형 나라', icon: '🔷', color: '#0984e3', emoji: '🔷',
    story: '도형들이 숨어있어요!\n몇 개인지 세어봐요.',
    types: ['shape'], maxShapes: 10, questions: 6,
    hint: '같은 도형끼리 하나씩 손가락으로 짚어가며 세어봐요!'
  },
  {
    id: 2, name: '저울 광장', icon: '⚖️', color: '#00b894', emoji: '⚖️',
    story: '저울이 기울어져 있어요!\n어느 쪽이 더 무거울까요?',
    types: ['balance'], maxWeight: 10, questions: 6,
    hint: '저울은 무거운 쪽으로 기울어요. 어느 쪽이 더 내려가 있나요?'
  },
  {
    id: 3, name: '거꾸로 왕국', icon: '🔄', color: '#e17055', emoji: '🔄',
    story: '?에 들어갈 수는 무엇일까요?\n거꾸로 생각해봐요!',
    types: ['reverse'], maxNum: 10, questions: 6,
    hint: '? + 3 = 7 이면, 7에서 3을 빼면 ?를 알 수 있어요!'
  },
  {
    id: 4, name: '비교 섬', icon: '📏', color: '#fd79a8', emoji: '📏',
    story: '어느 것이 더 길까요? 더 많을까요?\n비교해봐요!',
    types: ['compare'], questions: 6,
    hint: '눈으로 잘 살펴봐요. 어느 쪽이 더 길어 보이나요?'
  },
  {
    id: 5, name: '혼합 도전', icon: '🌈', color: '#a29bfe', emoji: '🌈',
    story: '모든 유형이 섞여 나와요!\n사고력을 발휘해봐요.',
    types: ['pattern', 'shape', 'balance', 'reverse', 'compare'], maxNum: 20, questions: 8,
    hint: '문제 유형을 먼저 파악하고, 차근차근 생각해봐요!'
  },
  {
    id: 6, name: '사고력 챔피언', icon: '🏆', color: '#f7b731', emoji: '🏆',
    story: '최고 난이도 도전!\n진짜 사고력 챔피언이 되어봐요.',
    types: ['pattern', 'shape', 'balance', 'reverse', 'compare'], maxNum: 30, questions: 10,
    hint: '어렵다고 포기하지 말아요! 천천히 생각하면 풀 수 있어요.'
  }
];
