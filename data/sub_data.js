// ── Joy_sub.html 데이터 ───────────────────────────────────
// 뺄셈 모험 게임 월드 설정

var WORLDS = [
  {
    id: 0, name: '사탕 가게', icon: '🍬', color: '#ff6b9d', emoji: '🍬',
    story: '사탕이 몇 개 남았을까요?\n빼기를 배워봐요!',
    hint: '큰 수에서 작은 수를 하나씩 빼봐요!',
    minA: 3, maxA: 9, minB: 1, maxB: 4, questions: 5
  },
  {
    id: 1, name: '과일 바구니', icon: '🍓', color: '#ff9f43', emoji: '🍓',
    story: '과일이 몇 개 남았을까요?\n뺄셈에 익숙해져요.',
    hint: '손가락으로 뒤에서부터 세어봐요!',
    minA: 5, maxA: 10, minB: 1, maxB: 5, questions: 6
  },
  {
    id: 2, name: '풍선 놀이', icon: '🎈', color: '#a29bfe', emoji: '🎈',
    story: '풍선이 날아가버렸어요!\n몇 개 남았을까요?',
    hint: '10에서 빼는 건 손가락 접기로 생각해봐요!',
    minA: 6, maxA: 10, minB: 3, maxB: 9, questions: 6
  },
  {
    id: 3, name: '별빛 마을', icon: '⭐', color: '#6c5ce7', emoji: '⭐',
    story: '별이 사라지고 있어요!\n10 이상 뺄셈에 도전!',
    hint: '일의 자리부터 빼봐요. 모자라면 십의 자리에서 빌려요!',
    minA: 11, maxA: 19, minB: 1, maxB: 9, questions: 7
  },
  {
    id: 4, name: '쿠키 농장', icon: '🍪', color: '#f59e0b', emoji: '🍪',
    story: '쿠키가 줄어들고 있어요!\n두 자리 뺄셈에 도전!',
    hint: '뒷자리가 부족하면 앞자리에서 10을 빌려요!',
    minA: 12, maxA: 20, minB: 3, maxB: 12, questions: 7
  },
  {
    id: 5, name: '눈의 왕국', icon: '❄️', color: '#38bdf8', emoji: '❄️',
    story: '눈송이가 녹고 있어요!\n받아내림에 도전해요.',
    hint: '십의 자리에서 빌릴 때 그 자리는 1 줄어요!',
    minA: 20, maxA: 39, minB: 5, maxB: 19, questions: 8
  },
  {
    id: 6, name: '우주 기지', icon: '🚀', color: '#636e72', emoji: '🛸',
    story: '우주선이 출발했어요!\n큰 수 뺄셈에 도전!',
    hint: '자리별로 따로 빼고, 부족하면 앞 자리에서 빌려요!',
    minA: 30, maxA: 59, minB: 10, maxB: 39, questions: 8
  },
  {
    id: 7, name: '마법의 성', icon: '🏰', color: '#ff6b6b', emoji: '🪄',
    story: '마법사와의 뺄셈 대결!\n최후의 도전!',
    hint: '차분하게 자리별로 나눠서 생각해봐요!',
    minA: 50, maxA: 99, minB: 10, maxB: 69, questions: 10
  }
];
