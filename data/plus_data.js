// ── Joy_plus.html 데이터 ──────────────────────────────────
// 월드맵 RPG 수학 게임의 스테이지 설정
// 각 항목 필드:
//   id: 월드 번호 (0부터 시작)
//   name: 한국어 이름
//   icon: 대표 이모지
//   color: 테마 색상
//   enemy: 적 이모지, enemyName: 적 이름
//   story: 스테이지 소개 문구
//   type: 문제 유형 ('add' | 'sub' | 'add-sub' | 'mult-intro' | 'shape' | 'mixed')
//   range: [최소, 최대] 숫자 범위
//   enemyHp: 적 체력 (문제 수)
//   x, y: 지도 위 CSS 위치 (%)

const WORLDS = [
  { id:0, name:'초록 마을', icon:'🌿', color:'#4ecca3', enemy:'🟢', enemyName:'그린 슬라임',
    story:'초록 마을에 슬라임이 나타났어요! 작은 수로 물리쳐요.', type:'add', range:[1,9], enemyHp:4,
    x:'20%', y:'78%' },
  { id:1, name:'강가 다리', icon:'🌊', color:'#4d96ff', enemy:'🐸', enemyName:'개구리 몬스터',
    story:'다리를 건너려면 개구리 마법사를 이겨야 해요!', type:'add-sub', range:[1,15], enemyHp:5,
    x:'45%', y:'65%' },
  { id:2, name:'모래 성', icon:'🏖️', color:'#ffd700', enemy:'🦀', enemyName:'게 기사',
    story:'모래성의 게 기사가 길을 막고 있어요!', type:'sub', range:[5,20], enemyHp:6,
    x:'70%', y:'55%' },
  { id:3, name:'얼음 동굴', icon:'❄️', color:'#a8d8f0', enemy:'🧊', enemyName:'얼음 골렘',
    story:'얼음 동굴 속 골렘! 큰 수를 계산해야 해요.', type:'add-sub', range:[10,30], enemyHp:7,
    x:'30%', y:'44%' },
  { id:4, name:'구름 탑', icon:'☁️', color:'#c77dff', enemy:'⚡', enemyName:'번개 마법사',
    story:'하늘 높이 번개 마법사가 기다려요!', type:'add-sub', range:[10,40], enemyHp:8,
    x:'60%', y:'33%' },
  { id:5, name:'묶음 숲', icon:'🌲', color:'#ff9f1c', enemy:'🐺', enemyName:'묶음 늑대',
    story:'숲 속 늑대는 묶음 마법으로만 물리칠 수 있어요!', type:'mult-intro', range:[2,5], enemyHp:8,
    x:'20%', y:'24%' },
  { id:6, name:'도형 신전', icon:'🔷', color:'#ff61a6', enemy:'🗿', enemyName:'도형 골렘',
    story:'신전의 골렘! 도형 문제로 마법 자물쇠를 열어요.', type:'shape', range:[1,1], enemyHp:9,
    x:'50%', y:'16%' },
  { id:7, name:'수정 왕국', icon:'💎', color:'#ffd700', enemy:'👑', enemyName:'수학 마왕',
    story:'드디어 수학 마왕과의 최후 결전! 모든 수학으로 싸워요!', type:'mixed', range:[1,50], enemyHp:12,
    x:'75%', y:'10%' },
];
