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
  { date:'April 2',  word:'BRANCH',  kr:'나뭇가지',  emoji:'🌿', sentence:'It is a part of a tree that grows out from the trunk.' },
  { date:'April 2',  word:'BRAVE',   kr:'용감한',    emoji:'🦁', sentence:'It describes someone who is not afraid of danger.' },
  { date:'April 2',  word:'DASH',    kr:'빠르게 가다', emoji:'💨', sentence:'It means to move very quickly, or a tiny amount of something.' },
  { date:'April 2',  word:'EVENING', kr:'저녁',      emoji:'🌆', sentence:'It is the time of day between late afternoon and early nighttime.' },
  { date:'April 2',  word:'GREEDY',  kr:'욕심 많은', emoji:'🤑', sentence:'It means always wanting more than what you need.' },
  // ── April 7 ──
  { date:'April 7',  word:'PASS',    kr:'통과하다',  emoji:'🎫', sentence:'It means to go by something, or a piece of paper that lets you do something.' },
  { date:'April 7',  word:'PRESENT', kr:'선물/현재', emoji:'🎁', sentence:'It is something given to someone out of kindness, or being in a certain place right now.' },
  { date:'April 7',  word:'STREAM',  kr:'시냇물',    emoji:'🏞', sentence:'It is a small body of flowing water, not very wide or deep.' },
  { date:'April 7',  word:'TRAIL',   kr:'오솔길',    emoji:'🌲', sentence:'It is a path for people to follow, especially in the woods.' },
  { date:'April 7',  word:'WISE',    kr:'현명한',    emoji:'🦉', sentence:'It means showing very good sense and judgement.' },
  // ── April 9 ──
  { date:'April 9',  word:'BENCH',   kr:'벤치',      emoji:'🪑', sentence:'It is a long seat for a few people to sit on.' },
  { date:'April 9',  word:'BRIDGE',  kr:'다리',      emoji:'🌉', sentence:'It is a structure built above and across water so people can get to the other side.' },
  { date:'April 9',  word:'CROSS',   kr:'건너다',    emoji:'🚶', sentence:'It means to go from one side to the other, or to feel angry or not pleased.' },
  { date:'April 9',  word:'CROWD',   kr:'군중',      emoji:'👥', sentence:'It is a large group of people all together in one place.' },
  { date:'April 9',  word:'DEEP',    kr:'깊은',      emoji:'🌊', sentence:'It means going a long way down from the top or surface.' },
  // ── April 14 ──
  { date:'April 14', word:'FRESH',   kr:'신선한',    emoji:'🍃', sentence:'It means clean, new, or not old.' },
  { date:'April 14', word:'FROWN',   kr:'찡그리다',  emoji:'😠', sentence:'It means to pull your eyebrows together and wrinkle your forehead to show you are unhappy.' },
  { date:'April 14', word:'SIGNAL',  kr:'신호',      emoji:'🚦', sentence:'It is an action or a sign that sends a message to someone.' },
  { date:'April 14', word:'TRAVEL',  kr:'여행하다',  emoji:'✈️', sentence:'It means to go from one place to another, often far away.' },
  { date:'April 14', word:'WORRY',   kr:'걱정하다',  emoji:'😟', sentence:'It means to feel nervous that something bad might happen.' },
  // ── April 16 ──
  { date:'April 16', word:'PRESENT', kr:'선물/현재', emoji:'🎁', sentence:'It is something given to someone out of kindness, or being in a certain place right now.' },
  { date:'April 16', word:'WISE',    kr:'현명한',    emoji:'🦉', sentence:'It means showing very good sense and judgement.' },
  { date:'April 16', word:'CROSS',   kr:'건너다',    emoji:'🚶', sentence:'It means to go from one side to the other, or to feel angry or not pleased.' },
  { date:'April 16', word:'FROWN',   kr:'찡그리다',  emoji:'😠', sentence:'It means to pull your eyebrows together to show you are unhappy or thinking hard.' },
  { date:'April 16', word:'SIGNAL',  kr:'신호',      emoji:'🚦', sentence:'It is an action or a sign that sends a message to someone.' },
  // ── April 21 ──
  { date:'April 21', word:'BEACH',   kr:'해변',      emoji:'🏖', sentence:'It is land next to the water, usually covered with sand.' },
  { date:'April 21', word:'CENTER',  kr:'가운데',    emoji:'🎯', sentence:'It is the middle part of something, equally far from all sides.' },
  { date:'April 21', word:'FINALLY', kr:'마침내',    emoji:'🎉', sentence:'It means at last, after a long time of waiting.' },
  { date:'April 21', word:'IDEA',    kr:'생각/아이디어', emoji:'💡', sentence:'It is a thought or a plan that comes into your mind.' },
  { date:'April 21', word:'OCEAN',   kr:'바다',      emoji:'🌊', sentence:'It is the huge body of salt water that covers most of the Earth.' },
  // ── April 23 ──
  { date:'April 23', word:'SEASHELL',kr:'조개껍데기', emoji:'🐚', sentence:'It is the hard outer covering of a small animal that lives in the sea.' },
  { date:'April 23', word:'STACK',   kr:'쌓다',      emoji:'📚', sentence:'It is a neat pile of things placed on top of each other.' },
  { date:'April 23', word:'TINY',    kr:'아주 작은', emoji:'🐜', sentence:'It means very, very small.' },
  { date:'April 23', word:'WAVE',    kr:'파도/흔들다', emoji:'🌊', sentence:'It means to move your hand back and forth, or a large bump of water in the sea.' },
  { date:'April 23', word:'WONDER',  kr:'궁금하다',  emoji:'🤔', sentence:'It means to feel curious and have questions about something.' },
  // ── April 28 ──
  { date:'April 28', word:'ARRIVE',  kr:'도착하다',  emoji:'🏁', sentence:'It means to get to the place you were going to.' },
  { date:'April 28', word:'CLEAR',   kr:'맑은/분명한', emoji:'☀️', sentence:'It means not cloudy or dark, and easy to see through.' },
  { date:'April 28', word:'ENORMOUS',kr:'거대한',    emoji:'🐘', sentence:'It means very, very big — much bigger than usual.' },
  { date:'April 28', word:'EXACTLY', kr:'정확히',    emoji:'✅', sentence:'It means in the same way, without any difference at all.' },
  { date:'April 28', word:'FLOAT',   kr:'떠다니다',  emoji:'🎈', sentence:'It means to stay on top of water or drift gently in the air.' },
  // ── April 30 ──
  { date:'April 30', word:'MIDNIGHT',kr:'자정',      emoji:'🌙', sentence:'It is twelve o\'clock at night — the middle of the night.' },
  { date:'April 30', word:'RAINBOW', kr:'무지개',    emoji:'🌈', sentence:'It is the colorful arc of light you see in the sky after rain.' },
  { date:'April 30', word:'SNOWSTORM',kr:'눈보라',   emoji:'❄️', sentence:'It is a lot of snow falling hard with strong wind.' },
  { date:'April 30', word:'WEEKEND', kr:'주말',      emoji:'🎉', sentence:'It is the two days at the end of the week — Saturday and Sunday.' },
  { date:'April 30', word:'WHISPER', kr:'속삭이다',  emoji:'🤫', sentence:'It means to speak in a very soft and quiet voice so only one person can hear.' },
  // ── May 7 ──
  { date:'May 7',  word:'STACK',   kr:'쌓다/더미',        emoji:'📚', sentence:'It is a neat pile of things placed on top of each other.' },
  { date:'May 7',  word:'WONDER',  kr:'궁금해하다',       emoji:'🤔', sentence:'It means to feel curious and have questions about something.' },
  { date:'May 7',  word:'ARRIVE',  kr:'도착하다',         emoji:'🏁', sentence:'It means to get to the place you were going to.' },
  { date:'May 7',  word:'EXACTLY', kr:'정확히',           emoji:'✅', sentence:'It means in the same way, without any difference at all.' },
  { date:'May 7',  word:'FLOAT',   kr:'떠다니다',         emoji:'🎈', sentence:'It means to stay on top of water or drift gently in the air.' },
  // ── May 12 ──
  { date:'May 12', word:'BRIGHT',  kr:'밝은',             emoji:'☀️', sentence:'It means giving off a lot of light, or shining strongly.' },
  { date:'May 12', word:'CHEW',    kr:'씹다',             emoji:'🦷', sentence:'It means to crush food with your teeth before you swallow it.' },
  { date:'May 12', word:'FLOUR',   kr:'밀가루',           emoji:'🌾', sentence:'It is a white powder made from grain, used to make bread and cakes.' },
  { date:'May 12', word:'FOREST',  kr:'숲',               emoji:'🌲', sentence:'It is a large area of land covered with many trees and plants.' },
  { date:'May 12', word:'HOUR',    kr:'한 시간',          emoji:'⏰', sentence:'It is a unit of time that is sixty minutes long.' },
  // ── May 14 ──
  { date:'May 14', word:'INN',     kr:'여관',             emoji:'🏨', sentence:'It is a small place where you can eat a meal and sleep for the night.' },
  { date:'May 14', word:'ISLAND',  kr:'섬',               emoji:'🏝️', sentence:'It is a piece of land that has water all around it.' },
  { date:'May 14', word:'NIBBLE',  kr:'조금씩 먹다',      emoji:'🐭', sentence:'It means to eat something with very small, gentle bites.' },
  { date:'May 14', word:'PALE',    kr:'창백한',           emoji:'🤍', sentence:'It means having very little color, almost white.' },
  { date:'May 14', word:'WARN',    kr:'경고하다',         emoji:'⚠️', sentence:'It means to tell someone about danger before it happens.' },
  // ── May 19 ──
  { date:'May 19', word:'AGREE',   kr:'동의하다',         emoji:'🤝', sentence:'It means to have the same opinion as another person.' },
  { date:'May 19', word:'BARE',    kr:'맨/아무것도 없는', emoji:'🍂', sentence:'It means having nothing on it, or not covered at all.' },
  { date:'May 19', word:'FAMOUS',  kr:'유명한',           emoji:'⭐', sentence:'It means known and recognized by many, many people.' },
  { date:'May 19', word:'FEAST',   kr:'잔치',             emoji:'🍽️', sentence:'It is a very large and special meal shared with others.' },
  { date:'May 19', word:'GENTLE',  kr:'부드러운',         emoji:'🕊️', sentence:'It means very soft, calm, and kind — not rough at all.' },
  // ── May 21 ──
  { date:'May 21', word:'HERO',    kr:'영웅',             emoji:'🦸', sentence:'This is a person you look up to for doing something good and very brave.' },
  { date:'May 21', word:'LEADER',  kr:'지도자',           emoji:'👑', sentence:'This is a person who guides others and shows them where to go or what to do.' },
  { date:'May 21', word:'NOTICE',  kr:'알아채다',         emoji:'👀', sentence:'It means to see or become aware of something around you.' },
  { date:'May 21', word:'SEARCH',  kr:'찾다',             emoji:'🔍', sentence:'It means to look carefully everywhere to find something.' },
  { date:'May 21', word:'WEAK',    kr:'약한',             emoji:'😔', sentence:'It means not having much strength or power.' },
  // ── May 26 ──
  { date:'May 26', word:'AGREE',   kr:'동의하다',         emoji:'🤝', sentence:'It means to have the same opinion as another person.' },
  { date:'May 26', word:'BARE',    kr:'맨/아무것도 없는', emoji:'🍂', sentence:'It means having nothing on it, or not covered at all.' },
  { date:'May 26', word:'FAMOUS',  kr:'유명한',           emoji:'⭐', sentence:'It means known and recognized by many, many people.' },
  { date:'May 26', word:'NOTICE',  kr:'알아채다',         emoji:'👀', sentence:'It means to see or become aware of something around you.' },
  { date:'May 26', word:'SEARCH',  kr:'찾다',             emoji:'🔍', sentence:'It means to look carefully everywhere to find something.' },
  // ── May 28 ──
  { date:'May 28', word:'ALARM',   kr:'알람/경보',        emoji:'⏰', sentence:'It is a device that makes a loud sound to wake people up or warn them of danger.' },
  { date:'May 28', word:'COLLECT', kr:'모으다',           emoji:'🧺', sentence:'It means to gather or bring many things together in one place.' },
  { date:'May 28', word:'DAMP',    kr:'축축한',           emoji:'💧', sentence:'It means slightly wet or moist, but not soaking.' },
  { date:'May 28', word:'INSECT',  kr:'곤충',             emoji:'🐛', sentence:'It is a small creature with six legs, three body parts, and usually wings.' },
  { date:'May 28', word:'PLANT',   kr:'식물/심다',        emoji:'🌱', sentence:'It is a living thing that grows in soil or water; also means to put a seed in the ground.' },
];
