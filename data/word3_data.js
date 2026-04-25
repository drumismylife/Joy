// ── Joy_word3.html 데이터 ──────────────────────────────────
// 날짜별 단어 학습 게임
// DATE_GROUPS: 날짜 탭 목록. 새 날짜 추가 시 여기에 항목 추가.
// ALL_WORDS: 각 단어. date는 DATE_GROUPS의 label과 정확히 일치해야 함.
// SLOT_COUNT: 글자 슬롯 수 (기본값 9)
// WORDS_PER_STAGE: 라운드당 출제 단어 수 (기본값 4)

var SLOT_COUNT = 9;
var WORDS_PER_STAGE = 4;

var DATE_GROUPS = [
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

var ALL_WORDS = [
  // ── April 2 ──
  { date:'April 2',  word:'BRANCH',  kr:'나뭇가지',  emoji:'🌿', sentence:'A branch is a part of a tree growing out from the trunk.' },
  { date:'April 2',  word:'BRAVE',   kr:'용감한',    emoji:'🦁', sentence:'A brave person is someone who is not afraid of danger.' },
  { date:'April 2',  word:'DASH',    kr:'빠르게 가다', emoji:'💨', sentence:'Dash means to move quickly, or a small amount of something.' },
  { date:'April 2',  word:'EVENING', kr:'저녁',      emoji:'🌆', sentence:'Evening is the part of the day between late afternoon and early nighttime.' },
  { date:'April 2',  word:'GREEDY',  kr:'욕심 많은', emoji:'🤑', sentence:'Greedy means wanting more of something than what he or she needs.' },
  // ── April 7 ──
  { date:'April 7',  word:'PASS',    kr:'통과하다',  emoji:'🎫', sentence:'Pass means to go by something, or a piece of paper that says the person holding it can do something.' },
  { date:'April 7',  word:'PRESENT', kr:'선물/현재', emoji:'🎁', sentence:'Present is something that is given to someone out of kindness, or being in a particular place.' },
  { date:'April 7',  word:'STREAM',  kr:'시냇물',    emoji:'🏞', sentence:'A stream is a body of flowing water that is not very wide or deep.' },
  { date:'April 7',  word:'TRAIL',   kr:'오솔길',    emoji:'🌲', sentence:'A trail is a path for people to follow, especially in the woods.' },
  { date:'April 7',  word:'WISE',    kr:'현명한',    emoji:'🦉', sentence:'Wise means showing good sense and judgement.' },
  // ── April 9 ──
  { date:'April 9',  word:'BENCH',   kr:'벤치',      emoji:'🪑', sentence:'A bench is a long seat for a few people to sit on.' },
  { date:'April 9',  word:'BRIDGE',  kr:'다리',      emoji:'🌉', sentence:'A bridge is a structure built above and across water.' },
  { date:'April 9',  word:'CROSS',   kr:'건너다',    emoji:'🚶', sentence:'Cross means to go from one side to the other, or angry or not pleased.' },
  { date:'April 9',  word:'CROWD',   kr:'군중',      emoji:'👥', sentence:'A crowd is a lot of people all together in one place.' },
  { date:'April 9',  word:'DEEP',    kr:'깊은',      emoji:'🌊', sentence:'Deep means going a long way down from the surface.' },
  // ── April 14 ──
  { date:'April 14', word:'FRESH',   kr:'신선한',    emoji:'🍃', sentence:'Fresh means clean or new.' },
  { date:'April 14', word:'FROWN',   kr:'찡그리다',  emoji:'😠', sentence:'Frown means to move your eyebrows together and wrinkle your forehead, or an unhappy look on your face.' },
  { date:'April 14', word:'SIGNAL',  kr:'신호',      emoji:'🚦', sentence:'A signal is an action or sign that sends a message.' },
  { date:'April 14', word:'TRAVEL',  kr:'여행하다',  emoji:'✈️', sentence:'Travel means to go from one place to another.' },
  { date:'April 14', word:'WORRY',   kr:'걱정하다',  emoji:'😟', sentence:'Worry means to feel that something bad may happen.' },
  // ── April 16 ──
  { date:'April 16', word:'PRESENT', kr:'선물/현재', emoji:'🎁', sentence:'Present is something that is given to someone out of kindness, or being in a particular place.' },
  { date:'April 16', word:'WISE',    kr:'현명한',    emoji:'🦉', sentence:'Wise means showing good sense and judgement.' },
  { date:'April 16', word:'CROSS',   kr:'건너다',    emoji:'🚶', sentence:'Cross means to go from one side to the other, or angry or not pleased.' },
  { date:'April 16', word:'FROWN',   kr:'찡그리다',  emoji:'😠', sentence:'Frown means to move your eyebrows together and wrinkle your forehead.' },
  { date:'April 16', word:'SIGNAL',  kr:'신호',      emoji:'🚦', sentence:'A signal is an action or sign that sends a message.' },
  // ── April 21 ──
  { date:'April 21', word:'BEACH',   kr:'해변',      emoji:'🏖', sentence:'Beach is land near the water. It is usually sandy.' },
  { date:'April 21', word:'CENTER',  kr:'가운데',    emoji:'🎯', sentence:'A center is a place that is in the middle of something.' },
  { date:'April 21', word:'FINALLY', kr:'마침내',    emoji:'🎉', sentence:'Finally means at last.' },
  { date:'April 21', word:'IDEA',    kr:'생각/아이디어', emoji:'💡', sentence:'An idea is a thought or a plan. It is something that you think of.' },
  { date:'April 21', word:'OCEAN',   kr:'바다',      emoji:'🌊', sentence:'The ocean is the large body of salt water covering most of the Earth.' },
  // ── April 23 ──
  { date:'April 23', word:'SEASHELL',kr:'조개껍데기', emoji:'🐚', sentence:'A seashell is the shell of a sea animal such as an oyster or a clam.' },
  { date:'April 23', word:'STACK',   kr:'쌓다',      emoji:'📚', sentence:'A stack is a neat pile of something, or to pile things on top of another.' },
  { date:'April 23', word:'TINY',    kr:'아주 작은', emoji:'🐜', sentence:'Tiny means very small.' },
  { date:'April 23', word:'WAVE',    kr:'파도/흔들다', emoji:'🌊', sentence:'Wave means to move your hand back and forth, or a long bump of water moving through the ocean.' },
  { date:'April 23', word:'WONDER',  kr:'궁금하다',  emoji:'🤔', sentence:'Wonder means to be curious about something.' },
  // ── April 28 ──
  { date:'April 28', word:'ARRIVE',  kr:'도착하다',  emoji:'🏁', sentence:'Arrive means to reach the place you set out for.' },
  { date:'April 28', word:'CLEAR',   kr:'맑은/분명한', emoji:'☀️', sentence:'Clear means not cloudy or dark, being able to see through something easily.' },
  { date:'April 28', word:'ENORMOUS',kr:'거대한',    emoji:'🐘', sentence:'Enormous means very big.' },
  { date:'April 28', word:'EXACTLY', kr:'정확히',    emoji:'✅', sentence:'Exactly means looking or happening in the same way.' },
  { date:'April 28', word:'FLOAT',   kr:'떠다니다',  emoji:'🎈', sentence:'Float means to stay on top of water or in the air.' },
  // ── April 30 ──
  { date:'April 30', word:'MIDNIGHT',kr:'자정',      emoji:'🌙', sentence:'Midnight is twelve o\'clock at night.' },
  { date:'April 30', word:'RAINBOW', kr:'무지개',    emoji:'🌈', sentence:'A rainbow is made of long stripes of color in the sky.' },
  { date:'April 30', word:'SNOWSTORM',kr:'눈보라',   emoji:'❄️', sentence:'A snowstorm is a lot of snow falling at once.' },
  { date:'April 30', word:'WEEKEND', kr:'주말',      emoji:'🎉', sentence:'The weekend is made up of the two days of the week: Saturday and Sunday.' },
  { date:'April 30', word:'WHISPER', kr:'속삭이다',  emoji:'🤫', sentence:'Whisper means to speak in a very soft and quiet voice.' },
  // ── May 7 ──
  { date:'May 7',  word:'STACK',   kr:'쌓다/더미',        emoji:'📚', sentence:'A stack is a neat pile of something; to stack means to pile things on top of another.' },
  { date:'May 7',  word:'WONDER',  kr:'궁금해하다',       emoji:'🤔', sentence:'Wonder means to be curious about something.' },
  { date:'May 7',  word:'ARRIVE',  kr:'도착하다',         emoji:'🏁', sentence:'Arrive means to reach the place you set out for.' },
  { date:'May 7',  word:'EXACTLY', kr:'정확히',           emoji:'✅', sentence:'Exactly means looking or happening in the same way.' },
  { date:'May 7',  word:'FLOAT',   kr:'떠다니다',         emoji:'🎈', sentence:'Float means to stay on top of water or in the air.' },
  // ── May 12 ──
  { date:'May 12', word:'BRIGHT',  kr:'밝은',             emoji:'☀️', sentence:'Bright means giving a lot of light.' },
  { date:'May 12', word:'CHEW',    kr:'씹다',             emoji:'🦷', sentence:'Chew means to break food into small pieces with your teeth.' },
  { date:'May 12', word:'FLOUR',   kr:'밀가루',           emoji:'🌾', sentence:'Flour is a powder made from grain, used to make bread, cakes, and pies.' },
  { date:'May 12', word:'FOREST',  kr:'숲',               emoji:'🌲', sentence:'A forest is a large area that has trees and plants.' },
  { date:'May 12', word:'HOUR',    kr:'한 시간',          emoji:'⏰', sentence:'An hour is an amount of time that is sixty minutes long.' },
  // ── May 14 ──
  { date:'May 14', word:'INN',     kr:'여관',             emoji:'🏨', sentence:'An inn is a small place where a person can eat a meal and stay for the night.' },
  { date:'May 14', word:'ISLAND',  kr:'섬',               emoji:'🏝️', sentence:'An island is a piece of land with water all around it.' },
  { date:'May 14', word:'NIBBLE',  kr:'조금씩 먹다',      emoji:'🐭', sentence:'Nibble means to eat it with very small bites.' },
  { date:'May 14', word:'PALE',    kr:'창백한',           emoji:'🤍', sentence:'Pale means having very little color.' },
  { date:'May 14', word:'WARN',    kr:'경고하다',         emoji:'⚠️', sentence:'Warn means to tell someone about possible danger.' },
  // ── May 19 ──
  { date:'May 19', word:'AGREE',   kr:'동의하다',         emoji:'🤝', sentence:'Agree means to think the same way as another person.' },
  { date:'May 19', word:'BARE',    kr:'맨/아무것도 없는', emoji:'🍂', sentence:'Bare means not covered with anything.' },
  { date:'May 19', word:'FAMOUS',  kr:'유명한',           emoji:'⭐', sentence:'Famous means known by many people.' },
  { date:'May 19', word:'FEAST',   kr:'잔치',             emoji:'🍽️', sentence:'A feast is a very large meal on a special day.' },
  { date:'May 19', word:'GENTLE',  kr:'부드러운',         emoji:'🕊️', sentence:'Gentle means very soft and mild.' },
  // ── May 21 ──
  { date:'May 21', word:'HERO',    kr:'영웅',             emoji:'🦸', sentence:'A hero is a person you look up to for doing something good and brave.' },
  { date:'May 21', word:'LEADER',  kr:'지도자',           emoji:'👑', sentence:'A leader is a person who shows people where to go or how to do something.' },
  { date:'May 21', word:'NOTICE',  kr:'알아채다',         emoji:'👀', sentence:'Notice means to see something; a notice is a sign put up for people to read.' },
  { date:'May 21', word:'SEARCH',  kr:'찾다',             emoji:'🔍', sentence:'Search means to look for something.' },
  { date:'May 21', word:'WEAK',    kr:'약한',             emoji:'😔', sentence:'Weak means not feeling strong.' },
  // ── May 26 ──
  { date:'May 26', word:'AGREE',   kr:'동의하다',         emoji:'🤝', sentence:'Agree means to think the same way as another person.' },
  { date:'May 26', word:'BARE',    kr:'맨/아무것도 없는', emoji:'🍂', sentence:'Bare means not covered with anything.' },
  { date:'May 26', word:'FAMOUS',  kr:'유명한',           emoji:'⭐', sentence:'Famous means known by many people.' },
  { date:'May 26', word:'NOTICE',  kr:'알아채다',         emoji:'👀', sentence:'Notice means to see something; a notice is a sign put up for people to read.' },
  { date:'May 26', word:'SEARCH',  kr:'찾다',             emoji:'🔍', sentence:'Search means to look for something.' },
  // ── May 28 ──
  { date:'May 28', word:'ALARM',   kr:'알람/경보',        emoji:'⏰', sentence:'An alarm is something that wakes people or warns them of danger.' },
  { date:'May 28', word:'COLLECT', kr:'모으다',           emoji:'🧺', sentence:'Collect means to gather things together.' },
  { date:'May 28', word:'DAMP',    kr:'축축한',           emoji:'💧', sentence:'Damp means a little wet or moist.' },
  { date:'May 28', word:'INSECT',  kr:'곤충',             emoji:'🐛', sentence:'An insect is a small animal with three main body parts, six legs, wings, and no backbone.' },
  { date:'May 28', word:'PLANT',   kr:'식물/심다',        emoji:'🌱', sentence:'A plant is a living thing that grows in soil or in water; to plant means to put a seed into the ground so it can grow.' },
];
