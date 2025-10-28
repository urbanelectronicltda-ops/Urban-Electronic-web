window.PRODUCTS = [
  { id: 1, name: "Apple iPhone 13 Pro Max", desc: "Potente iPhone de gama alta con pantalla 6,7″, chip A15 Bionic y cámara triple profesional.", price: 3990000, category: "celulares", image: "/src/celulares/Apple_iphone_13_pro_max.png" },
  { id: 2, name: "iPhone 11 Pro Max", desc: "Smartphone premium de generación anterior: excelente cámara, pantalla grande, ideal para quienes buscan calidad Apple sin pagar lo más nuevo.", price: 2400000, category: "celulares", image: "/src/celulares/Iphone_11_pro_max.png" },
  { id: 3, name: "Redmi Xiaomi 13C", desc: "Teléfono de gama de entrada/intermedia, ideal para uso diario: buen equilibrio entre precio y prestaciones básicas.", price: 500000, category: "celulares", image: "/src/celulares/Redmi_Xiaomi_13C.png" },
  { id: 4, name: "SAMSUNG Galaxy A15", desc: "Dispositivo de gama media de Samsung: pantalla 6,5″, buen diseño, prestaciones accesibles para tareas diarias.", price: 700000, category: "celulares", image: "/src/celulares/SAMSUNG_Galaxy_A15.png" },
  { id: 5, name: "SAMSUNG Galaxy S22", desc: "Buque insignia “antiguo” de Samsung: buen rendimiento, cámaras de calidad, excelente para quien busca lo “top” de hace un par de años.", price: 1300000, category: "celulares", image: "/src/celulares/SAMSUNG_Galaxy_S22.png" },
  { id: 6, name: "SAMSUNG Galaxy S24", desc: "Última generación de Samsung: tecnología de punta, cámaras avanzadas, conectividad 5G, ideal para quienes quieren lo mejor.", price: 1800000, category: "celulares", image: "/src/celulares/SAMSUNG_Galaxy_S24.png" },
  { id: 7, name: "Xiaomi Redmi note 13", desc: "Excelente opción de gama media: pantalla AMOLED, buen balance entre prestaciones y precio, ideal para uso completo sin gastar demasiado.", price: 800000, category: "celulares", image: "/src/celulares/Xiaomi_Redmi_Note_13.png" },

  { id: 8, name: "Cartera Clásica", desc: "Diseño elegante y resistente.", price: 40000, category: "cartera", image: "/src/cartera/Cartera_magnetica.png" },

  { id: 9, name: "Reloj inteligente", desc: "Reloj inteligente para hombres y mujeres, con pantalla HD de 1.96 pulgadas, para responder/hacer llamadas, más de 100 modos deportivos, IP68, impermeable, rastreador de actividad física.", price: 90000, category: "relojes", image: "/src/relojes/Reloj_Inteligente.png" },
  { id: 10, name: "Xiaomi Mi Smart Band 10", desc: "pantalla AMOLED de 1.72 pulgadas, 21 días de duración de la batería, pantalla táctil, rastreador multideporte, rastreador de actividad", price: 240000, category: "relojes", image: "/src/relojes/Xiaomi_Mi_Smart_Band_10.png" },

  { id: 11, name: "Audífonos", desc: "estéreo de alta fidelidad, plegable, con micrófono incorporado, control de volumen, FM para teléfono/PC (negro y dorado).", price: 24000, category: "audifonos", image: "/src/audifonos/Audifonos.png" },
  { id: 12, name: "Audífonos Avantree Conjunto", desc: "uriculares inalámbricos para TV compatibles con televisores con salidas de audio ópticas, AUX o Bluetooth, cómodos auriculares para personas mayores con base de carga y transmisor", price: 424000, category: "audifonos", image: "/src/audifonos/Avantree_Conjunto.png" },
  { id: 13, name: "Audífonos Philips", desc: "Auriculares estéreo con cable para podcasts, monitoreo de estudio y grabación de auriculares para computadora, teclado y guitarra con adaptador adicional de 0.248 in (1/4)", price: 80000, category: "audifonos", image: "/src/audifonos/Philips.png" },
  { id: 14, name: "Audífonos Zihnic", desc: "Audífonos bluetooth circumaurales, estéreo inalámbricos y cableados plegables Micro SD / TF, FM para iPhone, Samsung, iPad, computadora, PC, TV, audífonos de diadema, almohadillas suaves y livianas para un uso prolongado", price: 70000, category: "audifonos", image: "/src/audifonos/Zihnic.png" },

  { id: 15, name: "Impresora Brother Work Smart 1410", desc: "Impresora inalámbrica color todo-en-uno con pantalla táctil 2,7″, dúplex automático y conexión móvil para oficina ligera.", price: 549000, category: "impresoras", image: "/src/impresoras/Brother_Work_Smart_1410.png" },
  { id: 16, name: "Impresora HP DeskJet Plus 4152", desc: "Impresora de inyección de tinta todo en uno, impresión móvil, escáner y copia, lista para tinta instantánea, impresoras inalámbricas para el hogar y la oficina, puerto USB", price: 250000, category: "impresoras", image: "/src/impresoras/HP_DeskJet_Plus_4152.png" },
  { id: 17, name: "Impresora HP LaserJet MFP", desc: "Impresora láser monocromática inalámbrica todo-en-uno: imprime, escanea y copia con conectividad WiFi para oficina o estudio", price: 399000, category: "impresoras", image: "/src/impresoras/HP_LaserJet_MFP.png" },

  { id: 18, name: "Tablet SAMSUNG Galaxy Tab A9", desc: "Tablet Android de 8.7 pulgadas, octa-core (6 nm), altavoces duales", price: 510000, category: "tablets", image: "/src/tablets/SAMSUNG_Galaxy_Tab_A9.png" },
  { id: 19, name: "Tablet Android 14", desc: "Tablet Android 14 de 11 pulgadas 2000*1200 2K Display Tablets PC, T616 Octa-Core 2.0GHz, 18GB RAM 128GB ROM 1TB Expandible, 5+5+13MP Cámara AI, 9000mAh, 5G WiFi, con teclado, funda, 4 altavoces", price: 540000, category: "tablets", image: "/src/tablets/Tablet_Android_14.png" },
  { id: 20, name: "Tablet Android 15", desc: "Tablet Android 15 de 10.1 pulgadas, 24 GB de RAM 128 GB ROM 2 TB Expand, procesador Octa-core, 2 años de protección, pantalla táctil HD IPS de 1280 x 800, GPS, WiFi 6, BT5.0, cámara dual", price: 370000, category: "tablets", image: "/src/tablets/Tablet_Android_15.png" },

  { id: 21, name: "Laptop 2025", desc: "Windows 11, procesador Intel Quad-Core (hasta 3.6 GHz) 16 GB DDR4 RAM 512 GB SSD, pantalla IPS FHD de 15.6 pulgadas, cuerpo de metal, batería de 5000 mAh, USB 3.2", price: 1400000, category: "computadores", image: "/src/computadores/Laptop_2025.png" },
  { id: 22, name: "Laptop HD BrightView", desc: "HD de 14 pulgadas, Intel Celeron N4120, 16 GB de RAM, 416 GB de almacenamiento (128 GB eMMC + 288 GB de estación de acoplamiento), gráficos Intel UHD, cámara 720p, Wi-Fi", price: 1200000, category: "computadores", image: "/src/computadores/Laptop_BrightView.png" },
  { id: 23, name: "Laptop Lenovo IdeaPad", desc: "Laptop para estudiantes, pantalla FHD de 15.6 pulgadas, procesador Intel de doble núcleo, 12 GB de RAM, SSD de 512 GB + 128 GB eMMC, 1 año de Office 365, Wi-Fi 6, cámara web", price: 1350000, category: "computadores", image: "/src/computadores/Lenovo_IdeaPad_1.png" },
  { id: 24, name: "Surface Laptop 4", desc: "Laptop de alto rendimiento con pantalla táctil, diseño ultraportátil y batería duradera, ideal para trabajo profesional o académico.", price: 2399000, category: "computadores", image: "/src/computadores/Surface_Laptop_4.png" },

  { id: 25, name: "Cargador para iPhone", desc: "extra largo, paquete de 2 cables Lightning de 10 pies, cable de transferencia de carga para teléfono i Phone 12, cable de transferencia con enchufe USB, bloque de carga de pared", price: 80000, category: "cargadores", image: "/src/cargadores/Cargador_para_iphone.png" }
];

// Mapas de override internos: agrega aquí las rutas de imágenes del proyecto.
// Ejemplo: window.PRODUCT_IMAGES = { 1: "/ruta/a/mi_alpha.png", 2: "/imagenes/nova.jpg" };
window.PRODUCT_IMAGES = {
  // 1: "/a/3ec965d3-eb2b-46f9-99a1-dc6ed674b346" // (ejemplo ya usado en el producto)
  1: "/src/celulares/Apple_iphone_13_pro_max.png",
  2: "/src/celulares/Iphone_11_pro_max.png",
  3:"/src/celulares/Redmi_Xiaomi_13C.png",
  4:"/src/celulares/SAMSUNG_Galaxy_A15.png",
  5:"/src/celulares/SAMSUNG_Galaxy_S22.png",
  6:"/src/celulares/SAMSUNG_Galaxy_S24.png",
  7:"/src/celulares/Xiaomi_Redmi_Note_13.png",

  8:"/src/cartera/Cartera_magnetica.png",

  9:"/src/relojes/Reloj_Inteligente.png",
  10:"/src/relojes/Xiaomi_Mi_Smart_Band_10.png",

  11:"/src/audifonos/Audifonos.png",
  12:"/src/audifonos/Avantree_Conjunto.png",
  13:"/src/audifonos/Philips.png",
  14:"/src/audifonos/Zihnic.png",

  15:"/src/impresoras/Brother_Work_Smart_1410.png",
  16:"/src/impresoras/HP_DeskJet_Plus_4152.png",
  17:"/src/impresoras/HP_LaserJet_MFP.png",

  18:"/src/tablets/SAMSUNG_Galaxy_Tab_A9.png",
  19:"/src/tablets/Tablet_Android_14.png",
  20:"/src/tablets/Tablet_Android_15.png",

  21:"/src/computadores/Laptop_2025.png",
  22:"/src/computadores/Laptop_BrightView.png",
  23:"/src/computadores/Lenovo_IdeaPad_1.png",
  24:"/src/computadores/Surface_Laptop_4.png",

  25:"/src/cargadores/Cargador_para_iphone.png"
};

// Para los slides de descuento: usa las claves d1, d2, d3, etc.
window.DISCOUNT_IMAGES = {
  // d1: "/imagenes/descuentos/nevecon.png",
  // d2: "/imagenes/descuentos/lavadora.jpg",
  // d3: "/imagenes/descuentos/tv.png"
};