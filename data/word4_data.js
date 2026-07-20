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
  { label:'June 2',   color:'#FF6B6B' },
  { label:'June 4',   color:'#FF9F43' },
  { label:'June 9',   color:'#FFC312' },
  { label:'June 11',  color:'#6BCB77' },
  { label:'June 16',  color:'#4D96FF' },
  { label:'June 18',  color:'#A29BFE' },
  { label:'June 23',  color:'#FF6B9D' },
  { label:'June 25',  color:'#00CEC9' },
  { label:'June 30',  color:'#FDCB6E' },
  { label:'Wonders 1', color:'#EF476F' },
  { label:'Wonders 2', color:'#FFD166' },
  { label:'Wonders 3', color:'#06D6A0' },
  { label:'Wonders 4', color:'#118AB2' },
  { label:'Wonders 5', color:'#8338EC' },
  { label:'Wonders 6', color:'#FB5607' },
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
  // ── June 2 ──
  { date:'June 2',  text: 'AN ANIMAL SHELTER HELPS ANIMALS FIND A NEW HOME',  kr: '동물 보호소는 동물들이 새 집을 찾도록 도와줘요.' },
  { date:'June 2',  text: 'SWIMMING IS GOOD EXERCISE FOR THE WHOLE BODY',     kr: '수영은 온몸에 좋은 운동이에요.' },
  { date:'June 2',  text: 'THIS DOG IS ON A LEASH',                           kr: '이 개는 줄에 묶여 있어요.' },
  // ── June 4 ──
  { date:'June 4',  text: 'MY DAD IS THE OWNER OF THIS BAKERY',               kr: '우리 아빠는 이 빵집의 주인이에요.' },
  { date:'June 4',  text: 'THE VETERINARIAN IS CHECKING MY PET',              kr: '수의사가 내 반려동물을 검사하고 있어요.' },
  { date:'June 4',  text: 'IT WAS SUCCESSFUL',                                kr: '그것은 성공적이었어요.' },
  // ── June 9 ──
  { date:'June 9',  text: 'POPULATION IS THE TOTAL NUMBER OF PEOPLE LIVING IN AN AREA', kr: '인구는 한 지역에 사는 사람들의 총 수예요.' },
  { date:'June 9',  text: 'MY GEOGRAPHY CLASS IS VERY FUN WHEN WE STUDY MAPS AND RIVERS', kr: '지도와 강을 공부할 때 지리 수업이 매우 재미있어요.' },
  { date:'June 9',  text: 'ASIA IS THE LARGEST CONTINENT IN THE WORLD',       kr: '아시아는 세계에서 가장 큰 대륙이에요.' },
  // ── June 11 ──
  { date:'June 11', text: 'LITERACY IS THE ABILITY TO READ WRITE AND UNDERSTAND', kr: '글을 읽고 쓰고 이해하는 능력을 문해력이라고 해요.' },
  { date:'June 11', text: 'THE BLUE WHALE IS THE LARGEST ANIMAL IN THE OCEAN', kr: '푸른 고래는 바다에서 가장 큰 동물이에요.' },
  { date:'June 11', text: 'ENGLISH IS A POPULAR LANGUAGE SPOKEN AROUND THE WORLD', kr: '영어는 세계 각지에서 사용되는 인기 있는 언어예요.' },
  // ── June 16 ──
  { date:'June 16', text: 'THE CITY HAS A POPULATION OF MORE THAN ONE MILLION PEOPLE', kr: '그 도시의 인구는 백만 명이 넘어요.' },
  { date:'June 16', text: 'WE RAISED THE FLAG DURING THE SCHOOL CEREMONY',    kr: '학교 행사에서 우리는 깃발을 올렸어요.' },
  { date:'June 16', text: 'A RHOMBUS HAS FOUR EQUAL SIDES BUT NO RIGHT ANGLES', kr: '마름모는 네 변의 길이가 같지만 직각은 없어요.' },
  // ── June 18 ──
  { date:'June 18', text: 'THE CAPITAL CITY OF SOUTH KOREA IS SEOUL',         kr: '대한민국의 수도는 서울이에요.' },
  { date:'June 18', text: 'THE BLUE SKY IS THE BACKGROUND OF THE BEAUTIFUL PAINTING', kr: '파란 하늘이 아름다운 그림의 배경이에요.' },
  { date:'June 18', text: 'TREES AND WATER ARE IMPORTANT NATURAL RESOURCES',  kr: '나무와 물은 중요한 천연자원이에요.' },
  // ── June 23 ──
  { date:'June 23', text: 'WE MADE A RECTANGLE SHAPE USING PAPER IN ART CLASS', kr: '미술 시간에 종이로 직사각형 모양을 만들었어요.' },
  { date:'June 23', text: 'THE RAINFOREST IS HOME TO MANY KINDS OF ANIMALS AND PLANTS', kr: '열대우림은 수많은 동식물의 서식지예요.' },
  { date:'June 23', text: 'MANY FISH AND WHALES LIVE IN THE DEEP OCEAN',      kr: '많은 물고기와 고래가 깊은 바다에 살아요.' },
  // ── June 25 ──
  { date:'June 25', text: 'A RAINBOW APPEARS WHEN SUNLIGHT SHINES THROUGH RAINDROPS IN THE AIR', kr: '무지개는 햇빛이 빗방울을 통과할 때 나타나요.' },
  { date:'June 25', text: 'TREES PRODUCE OXYGEN WHICH IS THE AIR WE NEED TO BREATHE', kr: '나무는 우리가 숨쉬는 데 필요한 산소를 만들어요.' },
  { date:'June 25', text: 'PENGUINS ARE BIRDS THAT CANNOT FLY BUT THEY ARE EXCELLENT SWIMMERS', kr: '펭귄은 날지 못하는 새이지만 수영을 매우 잘해요.' },
  // ── June 30 ──
  { date:'June 30', text: 'CAMELS CAN LIVE FOR A LONG TIME WITHOUT DRINKING ANY WATER', kr: '낙타는 물을 마시지 않고도 오랫동안 살 수 있어요.' },
  { date:'June 30', text: 'THE SUN IS ACTUALLY A STAR AND IT IS THE CENTER OF OUR SOLAR SYSTEM', kr: '태양은 사실 별이고 우리 태양계의 중심이에요.' },
  { date:'June 30', text: 'THE MOON DOES NOT HAVE ITS OWN LIGHT',             kr: '달은 자체적인 빛을 가지고 있지 않아요.' },

  // ══════════════════════════════════════════════════════
  // Wonders Grade 2 (McGraw-Hill 공식 Scope & Sequence 어휘 기반, 새로 작성)
  // ══════════════════════════════════════════════════════
  // ── Wonders 1: 가족·우정 ──
  { date:'Wonders 1', text: 'MY FRIEND INVITED ME TO HER HOUSE',   kr: '내 친구가 나를 자기 집에 초대했어요.' },
  { date:'Wonders 1', text: 'WE SHARE OUR TOYS WITH EACH OTHER',   kr: '우리는 서로 장난감을 나눠요.' },
  { date:'Wonders 1', text: 'THE FIREFIGHTER CAME TO RESCUE THE CAT', kr: '소방관이 고양이를 구하러 왔어요.' },
  { date:'Wonders 1', text: 'PLEASE STAND ASIDE AND LET HER PASS',    kr: '옆으로 비켜서 그녀가 지나가게 해주세요.' },
  { date:'Wonders 1', text: 'WE LEARNED A NEW LANGUAGE AT SCHOOL',    kr: '우리는 학교에서 새로운 언어를 배웠어요.' },
  { date:'Wonders 1', text: 'IT IS MY SECRET SO I WILL NOT TELL',     kr: '그건 내 비밀이라 말 안 할 거예요.' },
  { date:'Wonders 1', text: 'I DO MY CHORES BEFORE I PLAY',           kr: '나는 놀기 전에 집안일을 해요.' },
  { date:'Wonders 1', text: 'THE STORE HAS MANY CUSTOMERS TODAY',     kr: '오늘 가게에 손님이 많아요.' },
  // ── Wonders 2: 동물·우화 ──
  { date:'Wonders 2', text: 'A DOG IS A KIND OF MAMMAL',           kr: '개는 포유류의 한 종류예요.' },
  { date:'Wonders 2', text: 'THE BIRD TOOK CARE OF ITS OFFSPRING', kr: '새는 자기 새끼를 돌봤어요.' },
  { date:'Wonders 2', text: 'WE HAD A BIG FEAST ON MY BIRTHDAY',   kr: '내 생일에 큰 잔치를 벌였어요.' },
  { date:'Wonders 2', text: 'THE MOTHER CAT WILL GROOM HER KITTENS', kr: '어미 고양이가 새끼 고양이를 손질해줄 거예요.' },
  { date:'Wonders 2', text: 'THIS SOUP TASTES SO DELICIOUS',         kr: '이 수프는 정말 맛있어요.' },
  { date:'Wonders 2', text: 'I AM FOND OF MY LITTLE PUPPY',          kr: '나는 우리 강아지를 정말 좋아해요.' },
  { date:'Wonders 2', text: 'THE BIRD IS FLAPPING ITS FEATHERS',     kr: '새가 깃털을 퍼덕이고 있어요.' },
  { date:'Wonders 2', text: 'PLEASE BEHAVE WELL AT THE PARTY',       kr: '파티에서 예의 바르게 행동해주세요.' },
  // ── Wonders 3: 지역사회·하늘 ──
  { date:'Wonders 3', text: 'MY GRANDMOTHER LIVES IN THE COUNTRYSIDE', kr: '우리 할머니는 시골에 사세요.' },
  { date:'Wonders 3', text: 'SHE FOUND A SOLUTION TO THE PROBLEM',     kr: '그녀는 문제의 해결책을 찾았어요.' },
  { date:'Wonders 3', text: 'WE WENT ON A FUN ADVENTURE TOGETHER',     kr: '우리는 함께 신나는 모험을 떠났어요.' },
  { date:'Wonders 3', text: 'WE WILL BORROW A BOOK FROM THE LIBRARY',  kr: '우리는 도서관에서 책을 빌릴 거예요.' },
  { date:'Wonders 3', text: 'SHE FELT LONELY WITHOUT HER FRIENDS',     kr: '그녀는 친구들이 없어서 외로웠어요.' },
  { date:'Wonders 3', text: 'THE MOONLIGHT SHONE OVER THE VILLAGE',    kr: '달빛이 마을 위로 비쳤어요.' },
  { date:'Wonders 3', text: 'EVERYONE CHEERED AT THE CONCERT',         kr: '모두가 콘서트에서 환호했어요.' },
  { date:'Wonders 3', text: 'I DO NOT UNDERSTAND THIS RHYTHM',         kr: '나는 이 리듬을 이해하지 못해요.' },
  // ── Wonders 4: 세계·지구 변화 ──
  { date:'Wonders 4', text: 'WE WATCHED THE PARADE DOWN THE STREET',   kr: '우리는 거리를 지나가는 퍼레이드를 봤어요.' },
  { date:'Wonders 4', text: 'THE ISLAND IS SURROUNDED BY BLUE WATER',  kr: '그 섬은 파란 물로 둘러싸여 있어요.' },
  { date:'Wonders 4', text: 'MY LITTLE BROTHER IS VERY ACTIVE',        kr: '내 남동생은 아주 활동적이에요.' },
  { date:'Wonders 4', text: 'THIS IS MY FAVORITE COSTUME FOR THE PARTY', kr: '이건 파티에서 내가 가장 좋아하는 의상이에요.' },
  { date:'Wonders 4', text: 'THE TOWN IS SURROUNDED BY MOUNTAINS',       kr: '그 마을은 산으로 둘러싸여 있어요.' },
  { date:'Wonders 4', text: 'ICE IS A SOLID FORM OF WATER',              kr: '얼음은 물의 고체 형태예요.' },
  { date:'Wonders 4', text: 'THE HILL IS VERY STEEP TO CLIMB',           kr: '그 언덕은 오르기에 아주 가팔라요.' },
  { date:'Wonders 4', text: 'WE LOVE TO PLAY OUTDOORS',                  kr: '우리는 야외에서 노는 걸 좋아해요.' },
  // ── Wonders 5: 영웅·시민의식 ──
  { date:'Wonders 5', text: 'SHE WORKED HARD TO BECOME A CHAMPION',    kr: '그녀는 챔피언이 되려고 열심히 노력했어요.' },
  { date:'Wonders 5', text: 'SCIENTISTS DISCOVER NEW THINGS EVERY DAY',kr: '과학자들은 매일 새로운 것을 발견해요.' },
  { date:'Wonders 5', text: 'IT IS MY RESPONSIBILITY TO FEED THE DOG', kr: '개에게 밥을 주는 건 내 책임이에요.' },
  { date:'Wonders 5', text: 'IT WAS A CHALLENGING BUT FUN GAME',       kr: '그건 어렵지만 재미있는 게임이었어요.' },
  { date:'Wonders 5', text: 'SHE HAS A GREAT INTEREST IN SCIENCE',     kr: '그녀는 과학에 큰 관심이 있어요.' },
  { date:'Wonders 5', text: 'THE DANCERS WILL PERFORM ON STAGE',       kr: '무용수들이 무대에서 공연할 거예요.' },
  { date:'Wonders 5', text: 'HE IS DETERMINED TO WIN THE RACE',        kr: '그는 경주에서 이기기로 결심했어요.' },
  { date:'Wonders 5', text: 'WE MUST FOLLOW THE SCHOOL RULES',         kr: '우리는 학교 규칙을 따라야 해요.' },
  // ── Wonders 6: 돈·신화·상상력 ──
  { date:'Wonders 6', text: 'I WANT TO PURCHASE A NEW BOOK',           kr: '나는 새 책을 사고 싶어요.' },
  { date:'Wonders 6', text: 'GOLD HAS A GOLDEN COLOR',                 kr: '금은 금빛 색깔을 가지고 있어요.' },
  { date:'Wonders 6', text: 'USE YOUR IMAGINATION TO DRAW A DRAGON',   kr: '상상력을 발휘해서 용을 그려보세요.' },
  { date:'Wonders 6', text: 'SAVING MONEY IS A GOOD HABIT',            kr: '돈을 모으는 건 좋은 습관이에요.' },
  { date:'Wonders 6', text: 'SHE WILL RECORD HER VOICE FOR THE SONG',  kr: '그녀는 노래를 위해 목소리를 녹음할 거예요.' },
  { date:'Wonders 6', text: 'THE LEAVES RUSTLED IN THE WIND',          kr: '나뭇잎이 바람에 바스락거렸어요.' },
  { date:'Wonders 6', text: 'THE SUN IS SHINING BRIGHTLY TODAY',       kr: '오늘은 해가 밝게 빛나고 있어요.' },
  { date:'Wonders 6', text: 'IT ONLY TAKES A FEW SECONDS',             kr: '그건 몇 초밖에 안 걸려요.' },
];
