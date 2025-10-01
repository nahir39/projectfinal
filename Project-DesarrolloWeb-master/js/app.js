const images = [
  { src: 'img/foto1.jpg', title: 'Foto 1', desc: 'Descripción de la foto 1' },
  { src: 'img/foto2.jpg', title: 'Foto 2', desc: 'Descripción de la foto 2' },
  { src: 'img/foto3.jpg', title: 'Foto 3', desc: 'Descripción de la foto 3' }
];

const grid = document.getElementById('grid');

function createCard(img){
  const card = document.createElement('article');
  card.className = 'foto';
  card.innerHTML = `
    <img src="${img.src}" alt="${img.title}">
    <div class="meta">
      <h3>${img.title}</h3>
      <p>${img.desc}</p>
    </div>
  `;
  card.addEventListener('click', ()=> openLightbox(img));
  return card;
}

function renderGallery(){
  images.forEach(img => grid.appendChild(createCard(img)));
}

function openLightbox(img){
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  lbImg.src = img.src;
  lbImg.alt = img.title;
  lbCaption.textContent = img.title + ' — ' + img.desc;
  lb.classList.remove('hidden');
  lb.setAttribute('aria-hidden','false');
}

function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.classList.add('hidden');
  lb.setAttribute('aria-hidden','true');
  document.getElementById('lb-img').src = '';
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e)=> { if(e.key === 'Escape') closeLightbox(); });

renderGallery();
