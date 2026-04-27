const products = [
  { name: 'ABE-25 AB Induction Hardening Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/6.png' },
  { name: 'ABE-25AB Double Station Induction Brazing Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/7.png' },
  { name: 'ABE-40AB CI Ring Heating Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/8.png' },
  { name: 'ABE-50AB CI RING and Bush Dual Heating Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/9.png' },
  { name: 'ABE-50AB INDUCTION HARDENING MACHINE FOR AXLE SHAFT', image: 'https://abinduction.in/wp-content/uploads/2026/02/10.png' },
  { name: 'ABE-50AB Induction Heating Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/11.png' },
  { name: 'ABE-50AB Vertical Hardening Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/12.png' },
  { name: 'ABE-50AB with DM water Chiller', image: 'https://abinduction.in/wp-content/uploads/2026/02/13.png' },
  { name: 'ABE-60AB ULTRA HIGH FREQUENCY', image: 'https://abinduction.in/wp-content/uploads/2026/02/14.png' },
  { name: 'ABE-60AB Induction Hardening Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/15.png' },
  { name: 'ABE-120AB Fly Wheel Ring Hardening Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/16.png' },
  { name: 'Induction Hardening Machine', image: 'https://abinduction.in/wp-content/uploads/2026/02/17.png' }
];

const grid = document.getElementById('productGrid');
products.forEach((product) => {
  const card = document.createElement('article');
  card.className = 'product-card glass';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" loading="lazy" />
    <h3>${product.name}</h3>
    <p>Industrial-grade AB Induction equipment configuration.</p>
  `;
  grid.appendChild(card);
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

const tiltEl = document.querySelector('[data-tilt]');
if (tiltEl) {
  tiltEl.addEventListener('mousemove', (e) => {
    const rect = tiltEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltEl.style.transform = `rotateX(${-(y * 10)}deg) rotateY(${x * 12}deg)`;
  });
  tiltEl.addEventListener('mouseleave', () => {
    tiltEl.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}
