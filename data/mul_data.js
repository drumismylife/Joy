// ── Joy_mul.html 데이터 ───────────────────────────────────
// 곱셈 모험 게임 월드 설정
// table: 해당 월드에서 다루는 단 (구구단)
// maxB: 곱하는 수의 최대 범위

var WORLDS = [
  {
    id: 0, name: '2의 나라', icon: '🦆', color: '#38bdf8', emoji: '🦆',
    story: '오리 두 마리씩 묶어봐요!\n2단을 정복해요.',
    hint: '2씩 묶으면 쉬워요! 2+2+2+... 처럼 더해도 돼요.',
    table: 2, maxB: 9, questions: 6
  },
  {
    id: 1, name: '5의 나라', icon: '🖐️', color: '#10b981', emoji: '⭐',
    story: '손가락이 5개씩!\n5단은 쉬워요.',
    hint: '5단은 끝이 항상 0이나 5예요!',
    table: 5, maxB: 9, questions: 6
  },
  {
    id: 2, name: '10의 나라', icon: '🔟', color: '#6c5ce7', emoji: '🔵',
    story: '10씩 묶으면 간단해요!\n10단을 배워봐요.',
    hint: '10단은 뒤에 0을 붙이면 돼요!',
    table: 10, maxB: 9, questions: 6
  },
  {
    id: 3, name: '3의 나라', icon: '🍀', color: '#00b894', emoji: '🍀',
    story: '세 잎 클로버처럼!\n3단에 도전해요.',
    hint: '3씩 더해봐요. 3, 6, 9, 12...',
    table: 3, maxB: 9, questions: 7
  },
  {
    id: 4, name: '4의 나라', icon: '🎲', color: '#ff9f43', emoji: '🎲',
    story: '주사위 4면씩!\n4단을 익혀봐요.',
    hint: '4단은 2단을 두 번 더한 것과 같아요!',
    table: 4, maxB: 9, questions: 7
  },
  {
    id: 5, name: '6의 나라', icon: '🌸', color: '#fd79a8', emoji: '🌸',
    story: '꽃잎이 6장씩!\n6단에 도전해요.',
    hint: '6단 = 5단 + 1단! 5×n + n 이에요.',
    table: 6, maxB: 9, questions: 8
  },
  {
    id: 6, name: '7·8의 나라', icon: '🌈', color: '#a29bfe', emoji: '🌈',
    story: '어려운 7단과 8단!\n집중해서 풀어봐요.',
    hint: '외우기 어려우면 작은 곱셈으로 나눠봐요!',
    table: 7, maxB: 9, questions: 8,
    altTable: 8
  },
  {
    id: 7, name: '구구단 왕국', icon: '👑', color: '#ff6b6b', emoji: '🏆',
    story: '모든 단의 총집합!\n구구단 마스터에 도전!',
    hint: '차분히 생각해봐요. 외운 구구단을 떠올려요!',
    table: 0, maxB: 9, questions: 10,
    mixed: true
  }
];
