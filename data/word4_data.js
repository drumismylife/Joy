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
  { label:'May 7',    color:'#26de81' },
  { label:'May 12',   color:'#fd9644' },
  { label:'May 14',   color:'#45aaf2' },
  { label:'May 19',   color:'#a55eea' },
  { label:'May 21',   color:'#fc5c65' },
  { label:'May 26',   color:'#2bcbba' },
  { label:'May 28',   color:'#f7b731' },
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
  // ── May 7 ──
  { date:'May 7',  text: 'MAY IS FINALLY HERE AND EVERYTHING LOOKS SO GREEN', kr: '드디어 5월이 왔고 모든 것이 정말 초록빛이에요.' },
  { date:'May 7',  text: 'IT IS A PERFECT DAY TO PLAY OUTSIDE',               kr: '밖에서 놀기에 완벽한 날이에요.' },
  { date:'May 7',  text: 'FLOWERS ARE BLOOMING EVERYWHERE',                   kr: '꽃들이 사방에 피어나고 있어요.' },
  // ── May 12 ──
  { date:'May 12', text: 'IT WAS AN ENLIGHTENING EXPERIENCE',                 kr: '그것은 깨달음을 주는 경험이었어요.' },
  { date:'May 12', text: 'ISNT IT CUTE WITH ITS SOFT FUR',                    kr: '부드러운 털을 가진 게 귀엽지 않나요?' },
  { date:'May 12', text: 'THROUGH THIS LESSON IVE LEARNED MANY THINGS',       kr: '이 수업을 통해 많은 것을 배웠어요.' },
  // ── May 14 ──
  { date:'May 14', text: 'OUR DOG IS AFRAID OF THUNDER',                      kr: '우리 개는 천둥을 무서워해요.' },
  { date:'May 14', text: 'SNOW BEGAN TO FALL QUIETLY',                        kr: '눈이 조용히 내리기 시작했어요.' },
  { date:'May 14', text: 'THE SMALL BIRD FLAPPED ITS WINGS',                  kr: '작은 새가 날개를 퍼덕였어요.' },
  // ── May 19 ──
  { date:'May 19', text: 'JAMES WAITED NERVOUSLY FOR HIS RACE',               kr: '제임스는 긴장하며 경주를 기다렸어요.' },
  { date:'May 19', text: 'THE GIRL PEERED OVER THE FENCE',                    kr: '소녀가 울타리 너머를 들여다봤어요.' },
  { date:'May 19', text: 'THE ORANGE IS PERFECTLY ROUND',                     kr: '오렌지는 완벽하게 둥글어요.' },
  // ── May 21 ──
  { date:'May 21', text: 'THE MOTHER BIRD BROUGHT WORMS FOR ITS BABIES',      kr: '어미 새가 새끼들을 위해 벌레를 가져왔어요.' },
  { date:'May 21', text: 'THE ANIMAL BLOCKED THE ROAD',                       kr: '동물이 길을 막았어요.' },
  { date:'May 21', text: 'THE FARMERS HARVEST THEIR POTATOES',                kr: '농부들이 감자를 수확해요.' },
  // ── May 26 ──
  { date:'May 26', text: 'I GOT A REWARD FOR DOING WELL',                     kr: '잘 해서 상을 받았어요.' },
  { date:'May 26', text: 'THEY TUGGED ON THE ROPE',                           kr: '그들은 밧줄을 잡아당겼어요.' },
  { date:'May 26', text: 'WE WEAR BELTS AROUND OUR WAISTS',                   kr: '우리는 허리에 벨트를 착용해요.' },
  // ── May 28 ──
  { date:'May 28', text: 'CHICKENS ROAM FREELY ON THE GREEN FIELD',           kr: '닭들이 초록 들판을 자유롭게 돌아다녀요.' },
  { date:'May 28', text: 'THE GIRLS WERE EXCITED ABOUT THEIR NEW TOY',        kr: '여자아이들은 새 장난감에 신이 났어요.' },
  { date:'May 28', text: 'MY HAIR FEELS SO SMOOTH AFTER BRUSHING IT',         kr: '머리를 빗고 나니 정말 부드러워요.' },
];
