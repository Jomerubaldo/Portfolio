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

// cetification part
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
