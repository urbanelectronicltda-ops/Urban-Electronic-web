// Datos de productos (genéricos)
const products = window.PRODUCTS || [
  {
    id: 1,
    name: "Laptop Pro 14”",
    desc: "Rendimiento para trabajo y estudio.",
    price: 3599000,
    category: "laptops",
    image: "src\celulares\SAMSUNG_Galaxy_S22.png"
  },
  {
    id: 2,
    name: "Smartphone X",
    desc: "Cámara avanzada y batería de larga duración.",
    price: 1899000,
    category: "celulares",
    image: "https://via.placeholder.com/640x400.png?text=Smartphone+X"
  },
  {
    id: 3,
    name: "Audífonos Inalámbricos",
    desc: "Sonido envolvente y cancelación de ruido.",
    price: 399000,
    category: "audio",
    image: "https://via.placeholder.com/640x400.png?text=Audifonos"
  },
  {
    id: 4,
    name: "Teclado Mecánico",
    desc: "Precisión y respuesta rápida.",
    price: 249000,
    category: "accesorios",
    image: "https://via.placeholder.com/640x400.png?text=Teclado+Mecanico"
  },
  {
    id: 5,
    name: "Smart TV 55”",
    desc: "4K UHD con aplicaciones integradas.",
    price: 2599000,
    category: "hogar",
    image: "https://via.placeholder.com/640x400.png?text=Smart+TV+55"
  },
  {
    id: 6,
    name: "Laptop Air 13”",
    desc: "Ligera y potente para uso diario.",
    price: 2799000,
    category: "laptops",
    image: "https://via.placeholder.com/640x400.png?text=Laptop+Air"
  },
  {
    id: 7,
    name: "Smartphone Mini",
    desc: "Compacto y rápido con gran desempeño.",
    price: 1299000,
    category: "celulares",
    image: "https://via.placeholder.com/640x400.png?text=Smartphone+Mini"
  },
  {
    id: 8,
    name: "Mouse Inalámbrico",
    desc: "Cómodo y de alta precisión.",
    price: 99000,
    category: "accesorios",
    image: "https://via.placeholder.com/640x400.png?text=Mouse"
  },
  {
    id: 9,
    name: "Barra de Sonido",
    desc: "Mejora tu experiencia de entretenimiento.",
    price: 699000,
    category: "audio",
    image: "https://via.placeholder.com/640x400.png?text=Barra+de+Sonido"
  },
  {
    id: 10,
    name: "Aspiradora Robot",
    desc: "Limpieza automática e inteligente.",
    price: 1499000,
    category: "hogar",
    image: "https://via.placeholder.com/640x400.png?text=Aspiradora+Robot"
  }
];

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const categoryButtons = Array.from(document.querySelectorAll(".category-btn"));
const resultsInfo = document.getElementById("resultsInfo");
const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");
const goTop = document.getElementById("goTop");
const menuGoTop = document.getElementById("menuGoTop");
const openInfoFormBtn = document.getElementById("openInfoForm");
const infoModal = document.getElementById("infoModal");
const closeInfoFormBtn = document.getElementById("closeInfoForm");
const cartToggle = document.getElementById("cartToggle");
const cartDrawer = document.getElementById("cartDrawer");
const cartListEl = document.getElementById("cartList");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const closeCartBtn = document.getElementById("closeCart");
// Toast utils
let toastContainer = null;
function ensureToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}
function showToast(message, duration = 2200) {
  const container = ensureToastContainer();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  const remove = () => {
    if (!toast.isConnected) return;
    toast.style.transition = "opacity 160ms ease, transform 160ms ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(6px)";
    setTimeout(() => toast.remove(), 180);
  };
  setTimeout(remove, duration);
  toast.addEventListener("click", remove);
}

// Utilidades
const formatCOP = (value) =>
  value.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

// Overrides de imágenes por producto/slide (mover arriba para que esté disponible)
let imageOverrides = JSON.parse(localStorage.getItem("imageOverrides") || "{}");
const saveImageOverrides = () => localStorage.setItem("imageOverrides", JSON.stringify(imageOverrides));
const getImageFor = (id, fallback) => imageOverrides[id] || fallback;

function createProductCard(p) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-image-wrap">
      <img class="product-image" data-pid="${p.id}" src="${getImageFor(p.id, p.image)}" alt="${p.name}" loading="lazy">
    </div>
    <div class="product-info">
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.desc}</p>
      <div class="product-meta">
        <span class="product-price">${formatCOP(p.price)}</span>
        <span class="product-tag">${capitalize(p.category)}</span>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button class="btn add-to-cart" data-id="${p.id}">Comprar</button>
      </div>
    </div>
  `;
  return card;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderProducts(list) {
  if (!productsGrid) return;
  productsGrid.innerHTML = "";
  if (!list.length) {
    const empty = document.createElement("div");
    empty.style.gridColumn = "1/-1";
    empty.style.color = "#5a6472";
    empty.textContent = "No se encontraron productos con los filtros aplicados.";
    productsGrid.appendChild(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  list.forEach(p => fragment.appendChild(createProductCard(p)));
  productsGrid.appendChild(fragment);
}

// Filtros
let activeCategory = "todos";
let searchTerm = "";

function applyFilters() {
  let filtered = products.slice();

  if (activeCategory !== "todos") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  if (searchTerm.trim()) {
    const q = searchTerm.trim().toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  renderProducts(filtered);

  const catLabel = activeCategory === "todos" ? "todos los productos" : `categoría: ${capitalize(activeCategory)}`;
  const searchLabel = searchTerm.trim() ? ` | búsqueda: "${searchTerm.trim()}"` : "";
  resultsInfo.textContent = `Mostrando ${catLabel}${searchLabel} (${filtered.length})`;
}

// Eventos
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    applyFilters();
  });
});

// Debounce para el buscador
let debounceTimer = null;
searchInput?.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchTerm = searchInput.value;
    applyFilters();
  }, 150);
});

clearSearchBtn?.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  applyFilters();
});

menuToggle.addEventListener("click", () => {
  const open = menuPanel.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.addEventListener("click", (e) => {
  if (!menuPanel.contains(e.target) && e.target !== menuToggle) {
    menuPanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

goTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

menuGoTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  menuPanel.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por contactarnos. Te responderemos pronto.");
});

openInfoFormBtn?.addEventListener("click", () => {
  infoModal.classList.add("open");
  infoModal.setAttribute("aria-hidden", "false");
  menuPanel.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

closeInfoFormBtn?.addEventListener("click", () => {
  infoModal.classList.remove("open");
  infoModal.setAttribute("aria-hidden", "true");
});

infoModal?.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal__backdrop")) {
    infoModal.classList.remove("open");
    infoModal.setAttribute("aria-hidden", "true");
  }
});

document.getElementById("infoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Solicitud enviada. Te contactaremos pronto.");
  infoModal.classList.remove("open");
  infoModal.setAttribute("aria-hidden", "true");
});

// Inicial
if (productsGrid) {
  renderProducts(products);
  applyFilters();
}

// Carrito
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
const saveCart = () => localStorage.setItem("cart", JSON.stringify(cart));
const getById = (id) => products.find(p => p.id === id);

function addToCart(id){ const item = cart.find(i=>i.id===id); item? item.qty++ : cart.push({id, qty:1}); saveCart(); renderCart(); showToast(`${getById(id).name} agregado al carrito`); }
// Permite agregar items personalizados (descuentos) con id string (e.g., "d1")
function addCustomToCart(item){ const {id,name,price}=item; const found = cart.find(i=>i.id===id); if(found){ found.qty++; } else { cart.push({id,name,price,qty:1}); } saveCart(); renderCart(); showToast(`${name} agregado al carrito`); }

function changeQty(id, d){ const i = cart.find(i=>i.id===id); if(!i) return; i.qty+=d; if(i.qty<=0) cart=cart.filter(x=>x.id!==id); saveCart(); renderCart(); }
function renderCart(){
  cartListEl.innerHTML = cart.length? "" : "Tu carrito está vacío.";
  let total = 0;
  cart.forEach(c => { const p = getById(c.id) || c; total += p.price * c.qty;
    const row = document.createElement("div"); row.className="cart-item";
    row.innerHTML = `<span>${p.name}</span><span>${formatCOP(p.price)}</span><div><button class="btn qty" data-id="${c.id}" data-d="-1">-</button><span>${c.qty}</span><button class="btn qty" data-id="${c.id}" data-d="1">+</button></div><button class="btn remove" data-id="${c.id}">Eliminar</button>`;
    cartListEl.appendChild(row);
  });
  cartTotalEl.textContent = formatCOP(total);
  cartCountEl.textContent = cart.reduce((a,b)=>a+b.qty,0);
}

productsGrid?.addEventListener("click",(e)=>{
  const btn = e.target.closest(".add-to-cart");
  if(btn){ addToCart(Number(btn.dataset.id)); }
});

cartListEl?.addEventListener("click",(e)=>{
  const q = e.target.closest(".qty"); const r = e.target.closest(".remove");
  if(q){ changeQty(Number(q.dataset.id), Number(q.dataset.d)); }
  if(r){ changeQty(Number(r.dataset.id), -9999); }
});

cartToggle?.addEventListener("click",()=>{
  cartDrawer.classList.add("open"); cartDrawer.setAttribute("aria-hidden","false"); renderCart();
});

closeCartBtn?.addEventListener("click",()=>{
  cartDrawer.classList.remove("open"); cartDrawer.setAttribute("aria-hidden","true");
});

cartDrawer?.addEventListener("click",(e)=>{
  if(e.target.classList.contains("modal__backdrop")){ cartDrawer.classList.remove("open"); cartDrawer.setAttribute("aria-hidden","true"); }
});

document.getElementById("checkoutBtn")?.addEventListener("click",()=>{ if(!cart.length){ alert("Tu carrito está vacío."); return; } alert("Gracias por tu compra!"); cart=[]; saveCart(); renderCart(); });

// Discount slider (descuento.html)
(function initDiscountSlider() {
  const slider = document.querySelector("#descuento .discount-slider");
  if (!slider) return;

  // aplicar overrides a imágenes del slider
  slider.querySelectorAll("img[data-discount-id]").forEach(img=>{
    const k = img.dataset.discountId; img.src = getImageFor(k, img.src);
  });

  const track = slider.querySelector(".slider-track");
  const slides = Array.from(slider.querySelectorAll(".slide"));
  const btnPrev = slider.querySelector(".slider-btn.prev");
  const btnNext = slider.querySelector(".slider-btn.next");
  const dotsWrap = slider.querySelector(".slider-dots");
  let index = 0;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slider-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Ir al slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    const dots = Array.from(dotsWrap.children);
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
  }

  btnPrev.addEventListener("click", () => goTo(index - 1));
  btnNext.addEventListener("click", () => goTo(index + 1));

  // Auto-play (pause on hover)
  let autoplay = setInterval(() => goTo(index + 1), 5000);
  slider.addEventListener("mouseenter", () => { clearInterval(autoplay); });
  slider.addEventListener("mouseleave", () => { autoplay = setInterval(() => goTo(index + 1), 5000); });

  // Update on resize to keep transform clean
  window.addEventListener("resize", update);

  update();
})();

// Doble clic en cualquier imagen para cambiar URL y guardar
document.addEventListener("dblclick",(e)=>{
  const img = e.target.closest("img[data-pid], img[data-discount-id]");
  if(!img) return;
  const key = img.dataset.pid || img.dataset.discountId;
  const url = prompt("Pega la URL de la imagen:", imageOverrides[key] || img.src);
  if(url){ imageOverrides[key]=url; saveImageOverrides(); img.src=url; showToast("Imagen actualizada"); }
});

document.querySelector("#descuento .discount-slider")?.addEventListener("click",(e)=>{ const b=e.target.closest(".buy-discount"); if(!b) return; addCustomToCart({id:b.dataset.id,name:b.dataset.name,price:Number(b.dataset.price)}); });