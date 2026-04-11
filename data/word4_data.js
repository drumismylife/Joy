// ── Joy_word4.html 데이터 ──────────────────────────────────
// 날짜별 영어 문장 학습 게임
// DATE_GROUPS: 날짜 탭 목록. 새 날짜 추가 시 여기에 항목 추가.
// SENTENCES: 각 문장. date는 DATE_GROUPS의 label과 정확히 일치해야 함.
//   ※ text 필드는 반드시 대문자로 입력 (게임 로직이 직접 사용)
// SLOT_COUNT: 글자 슬롯 수 (기본값 8)
// MATCH_COUNT: 스테이지 클리어에 필요한 정답 수 (기본값 2)

const SLOT_COUNT  = 8;
const MATCH_COUNT = 2;

const DATE_GROUPS = [
  { label:'April 2',  color:'#FF6B6B' },
  { label:'April 7',  color:'#FF9F43' },
  { label:'April 9',  color:'#FFC312' },
  { label:'April 14', color:'#6BCB77' },
  { label:'April 16', color:'#4D96FF' },
  { label:'April 21', color:'#A29BFE' },
  { label:'April 23', color:'#FF6B9D' },
  { label:'April 28', color:'#00CEC9' },
  { label:'April 30', color:'#FDCB6E' },
];

const SENTENCES = [
  // ── April 2 ──
  { date:'April 2',  text: 'CAN YOU TEACH ME HOW TO WRITE',    kr: '쓰는 방법을 가르쳐 줄 수 있나요?' },
  { date:'April 2',  text: 'THE KIDS ARE STUDYING FOR THEIR TEST', kr: '아이들이 시험 공부를 하고 있어요.' },
  { date:'April 2',  text: 'SHE WAS TEACHING US HOW TO SING',  kr: '그녀는 우리에게 노래 부르는 법을 가르쳐 주고 있었어요.' },
  // ── April 7 ──
  { date:'April 7',  text: 'WE CAN FEED THE PIGS SOME CORN',   kr: '우리는 돼지에게 옥수수를 줄 수 있어요.' },
  { date:'April 7',  text: 'I TOOK A SHORT CUT',               kr: '나는 지름길로 갔어요.' },
  { date:'April 7',  text: 'IT IS A SMALL WORLD',              kr: '세상은 참 좁아요.' },
  // ── April 9 ──
  { date:'April 9',  text: 'THE PUPS WERE BORN ON THE FIRST DAY OF MAY', kr: '강아지들은 오월 첫날에 태어났어요.' },
  { date:'April 9',  text: 'YOUR BAG SHOULD GO UNDER YOUR DESK', kr: '가방은 책상 아래에 두어야 해요.' },
  { date:'April 9',  text: 'I AM SHORTER THAN YOU',            kr: '나는 너보다 키가 작아요.' },
  // ── April 14 ──
  { date:'April 14', text: 'KEEP YOUR BAG UNDER YOUR SEAT',    kr: '가방을 의자 아래에 두세요.' },
  { date:'April 14', text: 'SHE SEEMS MAD',                   kr: '그녀는 화가 난 것 같아요.' },
  { date:'April 14', text: 'LET HIM SPEAK',                   kr: '그가 말할 수 있게 해주세요.' },
  // ── April 16 ──
  { date:'April 16', text: 'HAVE YOU SEEN THE GLUE',           kr: '풀을 본 적 있나요?' },
  { date:'April 16', text: 'WE LIVE NEAR THE WATER',           kr: '우리는 물 근처에 살아요.' },
  { date:'April 16', text: 'IS IT REAL',                       kr: '그게 진짜인가요?' },
  // ── April 21 ──
  { date:'April 21', text: 'THE RED BALL IS HIS AND THE OTHER ONE IS MINE', kr: '빨간 공은 그의 것이고 다른 건 내 것이에요.' },
  { date:'April 21', text: 'GO ON YOUR SIDE OF THE BED',       kr: '침대 네 쪽으로 가세요.' },
  { date:'April 21', text: 'LIE DOWN ON THE BED',              kr: '침대에 누우세요.' },
  // ── April 23 ──
  { date:'April 23', text: 'SOME KIDS CAME OVER TO PLAY LAST WEEK', kr: '지난주에 몇몇 아이들이 놀러 왔어요.' },
  { date:'April 23', text: 'WHO WAS BORN IN THE MONTH OF MAY', kr: '5월에 태어난 사람은 누구인가요?' },
  { date:'April 23', text: 'WHAT IS YOUR DATE OF BIRTH',       kr: '생년월일이 어떻게 되나요?' },
  // ── April 28 ──
  { date:'April 28', text: 'THIS IS A NICE PLACE',             kr: '이곳은 멋진 장소예요.' },
  { date:'April 28', text: 'DAD WILL DRIVE THE VAN TO THE CITY', kr: '아빠가 밴을 몰고 도시로 갈 거예요.' },
  { date:'April 28', text: 'I WILL RACE YOU TO THE SHED',      kr: '창고까지 달리기 시합 해요.' },
  // ── April 30 ──
  { date:'April 30', text: 'WE MUST RECYCLE TO PREVENT POLLUTION', kr: '오염을 막으려면 재활용을 해야 해요.' },
  { date:'April 30', text: 'WE SHOULD REDUCE REUSE AND RECYCLE', kr: '줄이고, 다시 쓰고, 재활용해야 해요.' },
  { date:'April 30', text: 'WE SHOULD RECYCLE TO PROTECT THE ENVIRONMENT', kr: '환경을 보호하려면 재활용해야 해요.' },
];
