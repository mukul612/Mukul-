const products = [
  {
    title: "ABE-25 AB Induction Hardening Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/02/6.png",
    desc: "Induction hardening machine used for industrial hardening applications."
  },
  {
    title: "ABE-25AB Double Station Induction Brazing Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/04/2.webp",
    desc: "Double station brazing machine for repeatable production workflows."
  },
  {
    title: "ABE-40AB CI Ring Heating Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/02/3.png",
    desc: "CI ring heating system for shrink fitting and controlled heating processes."
  },
  {
    title: "ABE-50AB CI RING and Bush Dual Heating Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/04/13.webp",
    desc: "Dual heating machine for CI ring and bush applications."
  },
  {
    title: "ABE-50AB INDUCTION HARDENING MACHINE FOR AXLE SHAFT",
    img: "https://abinduction.in/wp-content/uploads/2026/04/5.webp",
    desc: "Axle shaft hardening machine with induction heating process control."
  },
  {
    title: "ABE-50AB Induction Heating Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/04/4.webp",
    desc: "Induction heating machine for brazing, end heating, annealing, hardening, tempering and soldering."
  },
  {
    title: "ABE-50AB Vertical Hardening Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/04/14-1.webp",
    desc: "Vertical hardening machine with PLC/CNC-based automation options."
  },
  {
    title: "ABE-50AB with DM water Chiller",
    img: "https://abinduction.in/wp-content/uploads/2026/04/4-2.webp",
    desc: "Induction heating setup with DM water chiller integration."
  },
  {
    title: "ABE-60AB ULTRA HIGH FREQUENCY",
    img: "https://abinduction.in/wp-content/uploads/2026/04/10.webp",
    desc: "Ultra high frequency induction setup for precision heating."
  },
  {
    title: "ABE-60AB Induction Hardening Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/02/7.png",
    desc: "High-frequency induction hardening machine for industrial use."
  },
  {
    title: "ABE-120AB Fly Wheel Ring Hardening Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/02/9-1-1.png",
    desc: "Fly wheel ring hardening machine for high precision and repeatable performance."
  },
  {
    title: "ABE-Induction Hardening Machine",
    img: "https://abinduction.in/wp-content/uploads/2026/04/1.webp",
    desc: "Induction hardening machine engineered for industrial components."
  },
  {
    title: "INDUCTION BONDING MACHINE",
    img: "https://abinduction.in/wp-content/uploads/2026/04/12.webp",
    desc: "Induction bonding machine for specialized production applications."
  },
  {
    title: "Job Moving Vertical Scanner",
    img: "https://abinduction.in/wp-content/uploads/2026/02/11.png",
    desc: "Vertical scanning system for controlled induction process movement."
  }
];

const productGrid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

products.forEach((p) => {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `<img src="${p.img}" alt="${p.title}"><h3>${p.title}</h3>`;
  card.addEventListener("click", () => {
    modalImg.src = p.img;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modal.style.display = "grid";
    modal.setAttribute("aria-hidden", "false");
  });
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(79,124,255,.25), #0a0f17 45%)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "#0a0f17";
  });
  productGrid.appendChild(card);
});

document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.14 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const animateStats = () => {
  document.querySelectorAll(".stat span").forEach((node) => {
    const target = Number(node.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 70);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      node.textContent = current;
    }, 24);
  });
};
const statsSection = document.getElementById("capabilities");
new IntersectionObserver((entries, obs) => {
  if (entries[0].isIntersecting) {
    animateStats();
    obs.disconnect();
  }
}, { threshold: 0.35 }).observe(statsSection);

const sim = {
  freq: document.getElementById("freq"),
  temp: document.getElementById("temp"),
  power: document.getElementById("power")
};
setInterval(() => {
  const f = (20 + Math.random() * 80).toFixed(1);
  const t = (320 + Math.random() * 890).toFixed(0);
  const p = (15 + Math.random() * 105).toFixed(0);
  sim.freq.textContent = `${f} kHz`;
  sim.temp.textContent = `${t}°C`;
  sim.power.textContent = `${p} kW`;
}, 1200);

const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-toggle");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you. Your inquiry has been noted.");
});
