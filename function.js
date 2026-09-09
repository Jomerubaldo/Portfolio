//humburger menu drop down

const btn = document.getElementById('btnMenu');
const menuModal = document.getElementById('hamburgerMenu');
const btnClose = document.getElementById('wes');

function openModal() {
  menuModal.classList.remove('hidden');
}

btn.addEventListener('click', openModal);

function closeModal() {
  menuModal.classList.add('hidden');
}

btnClose.addEventListener('click', closeModal);

// theme toggle darkmode

// dom
const buttonToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// icons
const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;

// check prefer user theme
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
}

function updateIcon() {
  themeIcon.innerHTML = document.documentElement.classList.contains('dark')
    ? darkIcon
    : lightIcon;
}

updateIcon();

buttonToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.theme = isDark ? 'dark' : 'light';

  themeIcon.classList.add('opacity-0', 'rotate-90', 'scale-0');

  setTimeout(() => {
    updateIcon();
    themeIcon.classList.remove('opacity-0', 'rotate-90', 'scale-0');
  }, 100);
});

// bhms modal
function bhmsOpenPhoto() {
  const bhmsModal = document.getElementById('bhmsPhotoModal');
  bhmsModal.classList.remove('hidden');
  bhmsModal.classList.add('flex');
}

function bhmsClosePhoto() {
  const bhmsModal = document.getElementById('bhmsPhotoModal');
  bhmsModal.classList.add('hidden');
  bhmsModal.classList.remove('flex');
}

// agssoms modal
function agssomsOpenPhoto() {
  const agssomsModal = document.getElementById('agssomsPhotoModal');
  agssomsModal.classList.remove('hidden');
  agssomsModal.classList.add('flex');
}

function agssomsClosePhoto() {
  const agssomsModal = document.getElementById('agssomsPhotoModal');
  agssomsModal.classList.add('hidden');
  agssomsModal.classList.remove('flex');
}

// rws modal
function rwsOpenPhoto() {
  const agssomsModal = document.getElementById('rwsPhotoModal');
  agssomsModal.classList.remove('hidden');
  agssomsModal.classList.add('flex');
}

function rwsClosePhoto() {
  const agssomsModal = document.getElementById('rwsPhotoModal');
  agssomsModal.classList.add('hidden');
  agssomsModal.classList.remove('flex');
}

//tdw modal
function tdwOpenPhoto() {
  const agssomsModal = document.getElementById('tdwPhotoModal');
  agssomsModal.classList.remove('hidden');
  agssomsModal.classList.add('flex');
}

function tdwClosePhoto() {
  const agssomsModal = document.getElementById('tdwPhotoModal');
  agssomsModal.classList.add('hidden');
  agssomsModal.classList.remove('flex');
}

// cetification modal 1
function openCert1() {
  const modal1 = document.getElementById('certModal1');
  modal1.classList.remove('hidden');
  modal1.classList.add('flex');
}

function closeCert1() {
  const modal1 = document.getElementById('certModal1');
  modal1.classList.add('hidden');
  modal1.classList.remove('flex');
}

// certification modal 2
function openCert2() {
  const modal2 = document.getElementById('certModal2');
  modal2.classList.remove('hidden');
  modal2.classList.add('flex');
}

function closeCert2() {
  const modal2 = document.getElementById('certModal2');
  modal2.classList.add('hidden');
  modal2.classList.remove('flex');
}

// certification modal 3
function openCert3() {
  const modal3 = document.getElementById('certModal3');
  modal3.classList.remove('hidden');
  modal3.classList.add('flex');
}

function closeCert3() {
  const modal3 = document.getElementById('certModal3');
  modal3.classList.add('hidden');
  modal3.classList.remove('flex');
}

// swiping modal pictures
const slider = document.querySelector('#scroll-container');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('cursor-grabbing');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('cursor-grabbing');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('cursor-grabbing');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
