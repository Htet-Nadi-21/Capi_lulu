const introScreen = document.getElementById('intro-screen');
const galleryScreen = document.getElementById('gallery-screen');
const noteScreen = document.getElementById('note-screen');

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const backBtn = document.getElementById('back-btn');
const noteBack = document.getElementById('note-back');

const introNormal = document.querySelector('.intro-normal');
const introBeg = document.querySelector('.intro-beg');
const catDefault = document.querySelector('.cat-default');
const catCry = document.querySelector('.cat-cry');
const startActions = document.querySelector('.actions-start');
const begActions = document.querySelector('.actions-beg');

const tiles = document.getElementById('tiles');
const noteText = document.getElementById('note-text');
const noteCard = document.getElementById('note-card');

const notes = [
  {
    text: 'ကိုကို့ကို ဘေဘီ ပိုပြီး စိတ်ညစ်အောင် လုပ်မိသွားတယ်။ ကိုကို စိတ်ညစ်နေမှန်း မသိဘဲ ဘေဘီ အော်မိလို့ ကိုကို ပိုပြီး ဝမ်းနည်းသွားရပြီ။ ဘေဘီက သဝန်တိုနေလို့ ကိုကို စိတ်မကြည်ဖြစ်နေမှန်း မသိလိုက်လို့ပါ။',
    color: '#ffd98a',
    image: 'assets/tile1.jpeg'
  },
  {
    text: 'ဒီလဆို၃နှစ်ပြည့်သွားပြီနော်စိတ်ကောက်တာတွေရန်ရှာတာတွေရှိခဲ့ပေမယ့် ဘေဘီကိုကို့ကိုများကြီးချစ်ပါတယ်',
    color: '#ffe7a9',
    image: 'assets/tile2.jpeg'
  },
  {
    text: 'အနာဂတ်တွက်အလုပ်တွေများကြီးကြိုးစားနေတာသိပေမယ့်လည်း ဘေဘီ့ကိုလဲချစ်ပေးဖိုမမေ့ရဝူးလေနော်ကိုကို.',
    color: '#fff0bd',
    image: 'assets/tile3.jpeg'
  },
  {
    text: 'ကိုကိုကိုစိတ်ကောက်တုန်းဆိုပေမယ့် ကိုကိုအေးစက်စက်ဖြစ်ရင်တော့ ကြိုက်ဘူး စိတ်ဆိုးနဲ့တော့',
    color: '#ffe3a0',
    image: 'assets/tile4.jpeg'
  },
  {
    text: 'ဘေဘီဘယ်လောက်ဆိုးဆိုး အမြဲချစ်ပေးတာကျေးဇူးပါနော်ကိုကို နောက်လည်းဆက်ချစ်ပေးရမယ်နော်',
    color: '#fff4cf',
    image: 'assets/tile5.jpeg'
  },
  {
    text: 'ကိုကိုးကိုဘေဘီများကြီးချစ်တာကိုသိပါနော် နောက်ကျရင်ဘေဘီကိုကိုကိုမုန့်တွေများးကြီးဝယ်ကျွေးမယ်နော်ကွယ် ကျန်းမာရေးကိုလဲများကြီးဂုစိုက်ရမယ်နော်.',
    color: '#fff8df',
    image: 'assets/tile6.jpeg'
  }
];

function showScreen(target) {
  [introScreen, galleryScreen, noteScreen].forEach((screen) => {
    screen.classList.remove('active');
  });
  target.classList.add('active');
}

function buildTiles() {
  notes.forEach((note, index) => {
    const tile = document.createElement('button');
    tile.className = 'tile';
    tile.type = 'button';
    tile.setAttribute('aria-label', `Open message ${index + 1}`);
    tile.dataset.index = String(index);
    tile.dataset.label = `Message ${index + 1}`;
    tile.style.backgroundImage = `url(${note.image})`;
    tile.addEventListener('click', () => openNote(index));
    tiles.appendChild(tile);
  });
}

function openNote(index) {
  const selected = notes[index];
  noteText.textContent = selected.text;
  noteCard.style.setProperty('--card-bg', selected.color);
  noteCard.style.setProperty('--card-image', `url(${selected.image})`);
  showScreen(noteScreen);
}

yesBtn.addEventListener('click', () => showScreen(galleryScreen));

noBtn.addEventListener('click', () => {
  introNormal.classList.add('hidden');
  catDefault.classList.add('hidden');
  startActions.classList.add('hidden');

  introBeg.classList.remove('hidden');
  catCry.classList.remove('hidden');
  begActions.classList.remove('hidden');
});

backBtn.addEventListener('click', () => showScreen(galleryScreen));
noteBack.addEventListener('click', () => showScreen(galleryScreen));

buildTiles();
