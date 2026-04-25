// ── Joy_num.html 데이터 ───────────────────────────────────
// 수 개념 게임 월드 설정
// types: 해당 월드에서 출제되는 문제 유형들
//   'compare'  : 크기 비교 (>, <, =)
//   'sequence' : 수 순서 빈칸 채우기
//   'ordinal'  : 서수 (몇 번째?)
//   'make10'   : 10 만들기 (? + _ = 10)
//   'oddeven'  : 홀수/짝수

var WORLDS = [
  {
    id: 0, name: '크기 비교', icon: '⚖️', color: '#f59e0b', emoji: '⚖️',
    story: '어느 쪽이 더 클까요?\n수의 크기를 비교해봐요!',
    types: ['compare'], range: [1, 20], questions: 6,
    hint: '수직선을 떠올려봐요. 오른쪽으로 갈수록 커져요!'
  },
  {
    id: 1, name: '순서 찾기', icon: '📏', color: '#8b5cf6', emoji: '📏',
    story: '빈칸에 들어갈 수는?\n수의 순서를 알아봐요!',
    types: ['sequence'], range: [1, 30], questions: 6,
    hint: '1씩 늘어나는지, 줄어드는지, 규칙을 찾아봐요!'
  },
  {
    id: 2, name: '홀짝 마을', icon: '🎭', color: '#ec4899', emoji: '🎭',
    story: '홀수? 짝수?\n2개씩 짝이 맞는지 알아봐요!',
    types: ['oddeven'], range: [1, 20], questions: 6,
    hint: '짝수는 2개씩 딱 맞게 나눌 수 있어요! (2,4,6,8,10...)'
  },
  {
    id: 3, name: '10 만들기', icon: '🔟', color: '#10b981', emoji: '🔟',
    story: '합이 10이 되려면?\n10 만들기를 연습해요!',
    types: ['make10'], range: [1, 9], questions: 7,
    hint: '손가락 10개를 떠올려봐요. 몇 개 더 있어야 10이 될까요?'
  },
  {
    id: 4, name: '몇 번째?', icon: '🏅', color: '#38bdf8', emoji: '🏅',
    story: '몇 번째에 있을까요?\n순서를 나타내는 수를 배워요!',
    types: ['ordinal'], range: [1, 10], questions: 7,
    hint: '첫째, 둘째, 셋째... 하나씩 세어봐요!'
  },
  {
    id: 5, name: '큰 수 비교', icon: '🔭', color: '#6c5ce7', emoji: '🔭',
    story: '더 큰 수는 어느 쪽?\n100까지 비교해봐요!',
    types: ['compare', 'sequence'], range: [1, 100], questions: 8,
    hint: '자리 수를 먼저 비교하고, 같으면 앞자리부터 비교해요!'
  },
  {
    id: 6, name: '수 종합', icon: '🌟', color: '#ff6b9d', emoji: '🌟',
    story: '수 개념 종합 도전!\n모든 유형이 나와요.',
    types: ['compare', 'sequence', 'oddeven', 'make10'], range: [1, 100], questions: 10,
    hint: '문제를 잘 읽고 어떤 유형인지 먼저 파악해봐요!'
  }
];
