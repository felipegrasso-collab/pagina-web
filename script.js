// =============================
// PRODUCTOS
// =============================

const products = [
 {
  id: 1,
  name: "Khamrah edp 100ml",
  category: "perfumes-hombre",
  line: "Khamrah",
  variant: "Original",
  description: "Fragancia oriental envolvente con notas dulces, especiadas y una fijación excepcional.",
  detail: "Khamrah fusiona la calidez oriental con una presencia sofisticada y moderna. Es una fragancia intensa, elegante y con carácter, ideal para quienes buscan dejar una impresión memorable.",
  price: 49990,
  badge: "Top ventas",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/Khamra edp 1.png",

  images: [
    "Imagenes/Khamra edp 1.png",
    "Imagenes/Khamra edp 2.png",
    "Imagenes/Khamra edp 3.png",
  ],

  benefits: [
    "Fragancia intensa y sofisticada",
    "Excelente fijación",
    "Ideal para regalo o uso personal"
  ],

  specs: {
    "Contenido": "100 ml",
    "Tipo": "Eau de Parfum",
    "Familia olfativa": "Oriental dulce especiada",
    "Uso recomendado": "Noche / ocasiones especiales"
  },

  notes: {
  "Apertura": "Canela seleccionada y esencia de dátiles maduros.",
  "Corazón": "Praliné artesanal y notas florales exóticas.",
  "Base": "Vainilla de Madagascar, haba tonka y maderas de cedro noble."
}
},
{
 
  id: 2,
  name: "Yara EDP 100ml",
  category: "perfumes-mujer",
  description: "Un aura de lujo árabe que fusiona la dulzura aterciopelada con la sofisticación eterna.",
  detail: `Yara no es una opción, es un estándar.

Esta fragancia representa la cúspide de la perfumería árabe contemporánea. Es una mezcla magistral diseñada para la mujer que busca una firma olfativa que combine poder, dulzura y misterio.

Yara es suavidad táctil y presencia absoluta. Es el equilibrio exacto entre la seducción de la vainilla y la elegancia del diseño de autor.`,
  price: 43990,
  badge: "Top ventas",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/Yara Rosa 1.png",

  images: [
    "Imagenes/yara rosa 1.png",
    "Imagenes/yara rosa 2.png",
    "Imagenes/yara rosa 3.png"
  ],

  benefits: [
    "Estatus instantáneo: aroma que proyecta lujo y exclusividad",
    "Fijación prolongada para una presencia impecable",
    "Estela magnética, diseñada para atraer cumplidos",
    "Diseño de autor con frasco de colección",
    "Aroma dulce, sofisticado y reconocible",
    "Versatilidad de lujo para uso diario o eventos especiales"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Femenino",
    "Familia olfativa": "Ámbar vainilla / frutal",
    "Origen": "Emiratos Árabes Unidos",
    "Presentación": "Frasco de diseño con relieves y acabados metálicos"
  },

  notes: {
    "Salida": "Orquídea y heliotropo; una apertura floral magnética.",
    "Corazón": "Acordes gourmet y frutas exóticas de alta densidad.",
    "Fondo": "Vainilla cremosa y almizcle real para una estela inconfundible."
  }
},
{
  id: 3,
  name: "Mandarin Sky EDP 100ml",
  category: "perfumes-hombre",
  description: "Energía cítrica y magnetismo ámbar en una edición limitada sin precedentes.",
  detail: `Inspirado en la libertad de un cielo infinito, Odyssey Mandarin Sky es una declaración de audacia.

Este perfume rompe los moldes con un diseño en cuero turquesa y detalles naranja vibrante, reflejando la dualidad entre la frescura cítrica y la calidez profunda de su esencia.

Es la fragancia para el hombre que busca exclusividad y un aroma que evoluciona con su ritmo.`,
  price: 44900,
  badge: "Top ventas",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/mandarine sky 1.png",

  images: [
    "Imagenes/mandarine sky 1.png",
    "Imagenes/mandarine sky 2.png",
    "Imagenes/mandarine sky 3.png"
  ],

  benefits: [
    "Impacto visual con diseño único y vanguardista",
    "Equilibrio entre frescura cítrica y dulzura masculina",
    "Alta duración para acompañar largas jornadas",
    "Versatilidad moderna para día o noche"
  ],

  specs: {
    "Marca": "Armaf",
    "Línea": "Odyssey",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Masculino",
    "Familia olfativa": "Cítrica amaderada / gourmand",
    "Presentación": "Estuche de cuero turquesa premium y packaging naranja"
  },

  notes: {
    "Apertura": "Mandarina, naranja y azafrán en una salida cítrica y vibrante.",
    "Corazón": "Caramelo salado y haba tonka, aportando una dulzura masculina moderna.",
    "Fondo": "Ámbar y cedro, diseñados para dejar una huella cálida e imborrable."
  }
},
{
  id: 4,
  name: "9PM EDP 100ml",
  category: "perfumes-hombre",
  description: "Un rastro magnético de vainilla y especias diseñado para el hombre que busca dominar la atmósfera nocturna con elegancia.",
  detail: `9 PM es una declaración de audacia y magnetismo. Diseñada para el hombre que no teme ser el centro de atención, esta fragancia equilibra a la perfección una salida vibrante y frutal con un fondo profundo y seductor.

Es la esencia de la confianza moderna: una mezcla envolvente de vainilla y especias que proyecta una presencia impecable desde el primer instante hasta el final de la velada.

No es solo un perfume, es el complemento definitivo para quienes viven la noche bajo sus propias reglas.`,
  price: 47990,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/9pm 1.png",

  images: [
    "Imagenes/9pm 1.png",
    "Imagenes/9pm 2.png",
    "Imagenes/9pm 3.png"
  ],

  benefits: [
    "Fragancia nocturna intensa y magnética",
    "Dulzura sofisticada con fondo especiado",
    "Ideal para salidas, eventos y ocasiones especiales",
    "Aroma con presencia moderna y seductora"
  ],

  specs: {
    "Marca": "Afnan",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Masculino",
    "Familia olfativa": "Oriental vainilla / especiada",
    "Uso recomendado": "Noche / ocasiones especiales"
  },

  notes: {
    "Apertura": "Manzana, canela, lavanda silvestre y bergamota.",
    "Corazón": "Flor de azahar del naranjo y lirio de los valles.",
    "Fondo": "Vainilla, haba tonka, ámbar y pachulí."
  }
},
{
  id: 5,
  name: "Yara Moi EDP 100ml",
  category: "perfumes-mujer",
  description: "Una sinfonía olfativa donde la frescura del durazno y la opulencia del jazmín se funden en una base cremosa de sándalo y caramelo para una presencia inolvidable.",
  detail: `Yara Moi es la esencia de la elegancia serena y magnética. Esta fragancia despliega un aura envolvente y sofisticada, perfecta para la mujer que desea destacar con una dulzura equilibrada y madura.

Su apertura vibrante de durazno evoluciona hacia un corazón floral cálido, reposando sobre un fondo de sándalo y caramelo que abraza la piel como una caricia de terciopelo.

Es el complemento ideal para momentos que requieren una distinción impecable y una estela irresistible.`,
  price: 41890,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/yara blanco 1.png",

  images: [
    "Imagenes/yara blanco 1.png",
    "Imagenes/yara blanco 2.png",
    "Imagenes/yara blanco 3.png"
  ],

  benefits: [
    "Fragancia femenina elegante y envolvente",
    "Dulzura cremosa con fondo amaderado",
    "Ideal para uso diario sofisticado o salidas especiales",
    "Estela suave, distinguida e inolvidable"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Femenino",
    "Familia olfativa": "Ámbar floral amaderada",
    "Uso recomendado": "Día / tarde / ocasiones especiales"
  },

  notes: {
    "Apertura": "Durazno y jazmín.",
    "Corazón": "Caramelo y ámbar.",
    "Fondo": "Sándalo y pachulí."
  }
},
{
  id: 6,
  name: "AirPods Pro 2",
  category: "tecnologia",
  description: "Una experiencia sonora envolvente que combina un diseño ergonómico minimalista con la libertad absoluta de una conexión inalámbrica de alta fidelidad.",
  detail: `Redefiní tu manera de escuchar con estos auriculares diseñados para quienes exigen rendimiento y sofisticación en un solo dispositivo.

Su estructura ligera y discreta se adapta perfectamente al ritmo de la vida moderna, ofreciendo un sonido nítido y equilibrado que te permite sumergirte en tu música o llamadas con total claridad.

Con una autonomía de batería excepcional y un estuche de carga inteligente, estos auriculares no son solo una herramienta tecnológica, sino el accesorio esencial para quienes buscan eficiencia y estilo en cada detalle de su día.`,
  price: 23870,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/airpods 1.jpg",

  images: [
    "Imagenes/airpods 1.jpg",
    "Imagenes/airpods 2.png",
    "Imagenes/airpods 3.png"
  ],

  benefits: [
    "Sonido nítido y equilibrado para música y llamadas",
    "Diseño inalámbrico minimalista y cómodo",
    "Estuche de carga práctico para uso diario",
    "Compatible con dispositivos iOS y Android"
  ],

  specs: {
    "Modelo": "Wireless In-Ear Pro",
    "Conectividad": "Bluetooth 5.3",
    "Autonomía": "Hasta 4-5 horas de uso continuo por carga",
    "Funciones": "Control táctil, sincronización automática y micrófono integrado",
    "Diseño": "Puntas de silicona intercambiables",
    "Compatibilidad": "iOS y Android"
  },

  notes: {
    "Conectividad": "Bluetooth 5.3 de alta estabilidad.",
    "Autonomía": "Hasta 4-5 horas de uso continuo por carga, más carga adicional con estuche.",
    "Funciones": "Control táctil inteligente, sincronización automática y micrófono integrado para manos libres.",
    "Diseño": "Puntas de silicona intercambiables para ajuste seguro y aislamiento acústico pasivo.",
    "Compatibilidad": "Conexión universal con dispositivos iOS y Android."
  }
},
{
  id: 7,
  name: "Cargador Inalámbrico Portátil MagSafe 5000 mAh",
  category: "tecnologia",
  description: "La libertad de una carga eficiente y sin cables en un diseño ultra compacto que se adhiere magnéticamente para acompañar tu ritmo diario.",
  detail: `Maximizá la autonomía de tu dispositivo con una solución de carga que redefine la portabilidad.

Este cargador portátil combina la fuerza de un anclaje magnético preciso con una estética minimalista y sofisticada, permitiéndote utilizar tu teléfono con total naturalidad mientras recupera energía.

Su acabado suave al tacto y su perfil delgado lo convierten en el aliado indispensable para viajes o jornadas intensas, asegurando que el rendimiento de tu tecnología nunca se vea interrumpido por falta de batería.`,
  price: 19780,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/magsafe 1.png",

  images: [
    "Imagenes/magsafe 1.png",
    "Imagenes/magsafe 2.png",
    "Imagenes/magsafe 3.png"
  ],

  benefits: [
    "Carga inalámbrica práctica y sin cables",
    "Diseño compacto ideal para llevar todos los días",
    "Anclaje magnético para mayor comodidad",
    "Perfecto para viajes, jornadas largas y uso urbano"
  ],

  specs: {
    "Modelo": "Portable Magnetic Power Bank",
    "Capacidad": "5000 mAh",
    "Tecnología": "Carga inalámbrica por inducción magnética",
    "Conectividad": "Puerto USB-C para recarga",
    "Seguridad": "Protección contra sobrecalentamiento y sobrecargas",
    "Compatibilidad": "Optimizado para dispositivos Apple/iPhone con fundas compatibles"
  },

  notes: {
    "Capacidad": "5000 mAh, ideal para una carga de emergencia.",
    "Tecnología": "Carga inalámbrica por inducción magnética.",
    "Conectividad": "Puerto de entrada USB-C para recarga rápida.",
    "Seguridad": "Sistema de protección contra sobrecalentamiento y sobrecargas.",
    "Compatibilidad": "Optimizado para dispositivos Apple/iPhone con fundas compatibles."
  }
},
{
  id: 8,
  name: "Cargador Xiaomi USB-C 20000 mAh",
  category: "tecnologia",
  description: "Potencia inagotable y diseño minimalista en una estructura de alta resistencia, diseñada para mantener todos tus dispositivos conectados con máxima eficiencia.",
  detail: `El Redmi Power Core es la definición de fiabilidad y potencia contenida. Con una capacidad imponente de 20.000 mAh, este centro de energía portátil es el aliado definitivo para quienes no pueden permitirse pausas en su jornada digital.

Su acabado en Redmi Black de textura antideslizante combina una estética sobria con una durabilidad excepcional, mientras que su tecnología de carga inteligente gestiona la energía de manera precisa para proteger la vida útil de tus dispositivos.

Una pieza de ingeniería diseñada para ofrecer libertad total, sin importar qué tan lejos te lleve el día.`,
  price: 52890,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/xiaomi 1.png",

  images: [
    "Imagenes/xiaomi 1.png",
    "Imagenes/xiaomi 2.png",
    "Imagenes/xiaomi 3.png"
  ],

  benefits: [
    "Alta capacidad para múltiples cargas completas",
    "Permite cargar dos dispositivos al mismo tiempo",
    "Diseño resistente con acabado texturizado premium",
    "Compatible con smartphones, tablets, auriculares y accesorios"
  ],

  specs: {
    "Marca": "Xiaomi / Redmi",
    "Capacidad": "20000 mAh",
    "Puertos de salida": "Doble USB-A",
    "Puertos de entrada": "USB-C y Micro-USB",
    "Color": "Redmi Black",
    "Compatibilidad": "iOS, Android, auriculares y dispositivos de baja potencia"
  },

  notes: {
    "Capacidad": "20.000 mAh, ideal para múltiples cargas completas de smartphones y tablets.",
    "Salida": "Doble USB-A para cargar dos dispositivos simultáneamente.",
    "Entrada": "Conexiones USB-C y Micro-USB para mayor versatilidad.",
    "Seguridad": "Chip de protección multinivel contra cortocircuitos, sobretensión y altas temperaturas.",
    "Compatibilidad": "Universal para iOS, Android, auriculares y dispositivos de baja potencia."
  }
},
{
  id: 9,
  name: "Badee Al Oud Honor & Glory EDP 100ml",
  category: "perfumes-hombre",
  description: "Una oda a la distinción y el triunfo que fusiona la calidez del crème brûlée con la frescura exótica de la piña para una estela imperial.",
  detail: `Honor & Glory es mucho más que una fragancia; es un emblema de prestigio y éxito. Esta joya de la colección Bade'e Al Oud cautiva con una apertura dulce y vibrante que evoluciona hacia un corazón especiado y opulento, creando una experiencia sensorial rica y profundamente envolvente.

Diseñado para quienes dejan una marca imborrable a su paso, su equilibrio perfecto entre notas gourmet y maderas nobles proyecta una confianza absoluta y un refinamiento sin precedentes.

Es la esencia de la victoria capturada en un frasco de arte puro.`,
  price: 48900,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/glory 1.png",

  images: [
    "Imagenes/glory 1.png",
    "Imagenes/glory 2.png",
    "Imagenes/glory 3.png"
  ],

  benefits: [
    "Fragancia elegante con perfil gourmand y amaderado",
    "Apertura dulce y exótica con piña y crème brûlée",
    "Corazón especiado con carácter sofisticado",
    "Ideal para quienes buscan una presencia distinguida y memorable"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Masculino",
    "Familia olfativa": "Oriental amaderada / gourmand",
    "Uso recomendado": "Día / noche / ocasiones especiales"
  },

  notes: {
    "Apertura": "Piña y crème brûlée.",
    "Corazón": "Canela, benjuí, cúrcuma y pimienta negra.",
    "Fondo": "Vainilla, sándalo, cachemira y musgo."
  }
},
{
  id: 10,
  name: "Eclaire EDP 100ml",
  category: "perfumes-mujer",
  description: "Una indulgencia sensorial irresistible que envuelve la piel en un halo de caramelo tostado, vainilla cremosa y una sofisticación dulce sin precedentes.",
  detail: `Eclaire es la personificación de la tentación refinada. Esta fragancia despliega una narrativa olfativa profundamente acogedora y magnética, diseñada para quienes encuentran en la dulzura su mayor declaración de elegancia.

Con una apertura cálida que evoca la perfección de un postre gourmet, evoluciona hacia un corazón floral sutil que equilibra su opulencia, reposando finalmente sobre una base de maderas dulces y ámbar.

Es una experiencia envolvente y de larga duración, ideal para dejar una huella memorable y sofisticada en cada movimiento.`,
  price: 51750,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/eclaire 1.png",

  images: [
    "Imagenes/eclaire 1.png",
    "Imagenes/eclaire 2.png",
    "Imagenes/eclaire 3.png"
  ],

  benefits: [
    "Fragancia gourmand dulce, cremosa y sofisticada",
    "Apertura cálida con caramelo, leche y azúcar",
    "Fondo envolvente de vainilla, haba tonka y almizcle",
    "Ideal para quienes buscan una estela femenina memorable"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Femenino",
    "Familia olfativa": "Floral frutal gourmand",
    "Uso recomendado": "Día / tarde / noche"
  },

  notes: {
    "Apertura": "Caramelo, leche y azúcar.",
    "Corazón": "Flores blancas y notas amieladas.",
    "Fondo": "Vainilla, haba tonka y almizcle."
  }
},
{
  id: 11,
  name: "Asad EDP 100ml",
  category: "perfumes-hombre",
  line: "Asad",
variant: "Original",
  description: "Una declaración de fuerza y elegancia atemporal que combina especias vibrantes con un fondo profundo de vainilla y ámbar para un carácter inquebrantable.",
  detail: `Asad es la personificación del liderazgo y la sofisticación masculina. Esta fragancia despliega una apertura intensa y especiada que evoluciona magistralmente hacia un corazón cálido, donde las notas de madera y ámbar crean una atmósfera de misterio y respeto.

Diseñada para el hombre que domina su entorno con una presencia sobria pero magnética, su estela es una oda a la confianza moderna: equilibrada, persistente y profundamente envolvente.

Es, sin duda, una pieza clave para quienes buscan dejar una impresión de autoridad y refinamiento absoluto.`,
  price: 39990,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/asad 1.png",

  images: [
    "Imagenes/asad 1.png",
    "Imagenes/asad 2.png",
    "Imagenes/asad 3.png"
  ],

  benefits: [
    "Fragancia masculina intensa, elegante y sofisticada",
    "Apertura especiada con carácter moderno",
    "Fondo profundo de vainilla, ámbar y maderas secas",
    "Ideal para noche, eventos y presencia ejecutiva"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Masculino",
    "Familia olfativa": "Ámbar para hombres",
    "Uso recomendado": "Noche / ocasiones especiales / uso ejecutivo"
  },

  notes: {
    "Apertura": "Pimienta negra, piña y tabaco.",
    "Corazón": "Café, pachulí e iris.",
    "Fondo": "Ámbar, vainilla, maderas secas, benjuí y ládano."
  }
},
{
  id: 12,
  name: "Asad Bourbon EDP 100ml",
  category: "perfumes-hombre",
  line: "Asad",
variant: "Bourbon",
  description: "Una interpretación opulenta y madura que entrelaza la calidez del bourbon añejado con especias ahumadas y maderas preciosas para una distinción absoluta.",
  detail: `Asad Bourbon es la máxima expresión del refinamiento nocturno. Esta variante eleva el ADN de la línea Asad hacia una dimensión más profunda y misteriosa, donde las notas licorosas se funden con un corazón especiado de gran carácter.

Su estela, rica y envolvente, proyecta una elegancia sobria y una masculinidad sofisticada que se hace notar sin esfuerzo.

Es la fragancia ideal para los momentos de mayor exclusividad, diseñada para quienes aprecian la complejidad de un aroma robusto, cálido y con una personalidad imponente.`,
  price: 56890,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/bourbon 1.png",

  images: [
    "Imagenes/bourbon 1.png",
    "Imagenes/bourbon 2.png",
    "Imagenes/bourbon 3.png"
  ],

  benefits: [
    "Fragancia intensa, cálida y sofisticada",
    "Acentos licorosos con corazón especiado",
    "Fondo envolvente de bourbon, vainilla y sándalo",
    "Ideal para la noche y ocasiones especiales"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Masculino",
    "Familia olfativa": "Oriental especiada amaderada",
    "Uso recomendado": "Noche / ocasiones especiales"
  },

  notes: {
    "Apertura": "Bergamota, pimienta negra y acentos licorosos.",
    "Corazón": "Café, canela y jazmín.",
    "Fondo": "Bourbon, vainilla, ámbar y sándalo."
  }
},
{
  id: 13,
  name: "Club De Nuit Intense Man EDP 100ml",
  category: "perfumes-hombre",
  line: "Club De Nuit",
variant: "Intense Man",
  description: "Un emblema de sofisticación y virilidad que domina los sentidos con una apertura cítrica vibrante y un fondo ahumado de elegancia atemporal.",
  detail: `Club de Nuit Intense Man es la fragancia definitiva para el hombre que busca una presencia inconfundible y magnética. Esta versión Eau de Parfum ofrece una composición más refinada y equilibrada, donde la frescura del limón y la piña se entrelazan magistralmente con notas de abedul ahumado y almizcle.

Es un aroma que proyecta éxito y determinación, diseñado para adaptarse con fluidez desde un entorno profesional de alta exigencia hasta los momentos de mayor exclusividad nocturna.

Una pieza de culto que garantiza no solo una estela persistente, sino una declaración de estilo absoluta.`,
  price: 59990,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/nuit 1.png",

  images: [
  "Imagenes/nuit 1.png",
  "Imagenes/nuit 2.png",
  "Imagenes/nuit 3.png"
],

  benefits: [
    "Fragancia masculina intensa, elegante y muy versátil",
    "Apertura cítrica y frutal con gran impacto",
    "Corazón ahumado y sofisticado con abedul y jazmín",
    "Ideal para uso ejecutivo, salidas nocturnas y ocasiones especiales"
  ],

  specs: {
    "Marca": "Armaf",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Masculino",
    "Familia olfativa": "Amaderada especiada",
    "Uso recomendado": "Día / noche / ocasiones especiales"
  },
  notes: {
    "Apertura": "Limón, piña, bergamota, grosellas negras y manzana.",
    "Corazón": "Abedul, jazmín y rosa.",
    "Fondo": "Almizcle, ámbar gris, pachulí y vainilla."
  }
},
{
  id: 14,
  name: "Fakhar Black EDP 100ml",
  category: "perfumes-hombre",
  line: "Fakhar",
variant: "Black",
  description: "Una expresión de frescura contemporánea y distinción masculina que equilibra notas aromáticas vibrantes con un fondo amaderado profundamente refinado.",
  detail: `Fakhar Black es la esencia de la versatilidad elevada al nivel de lujo. Esta fragancia captura una elegancia vibrante y equilibrada, diseñada para el hombre que busca una presencia impecable en cualquier escenario.

Su apertura luminosa y limpia evoluciona hacia un corazón floral y especiado de gran sutileza, reposando sobre una base de maderas nobles que proyecta una confianza serena y duradera.

Es el complemento ideal para quienes valoran un estilo moderno, pulcro y magnético, garantizando una estela que destila sofisticación y buen gusto en cada instante del día.`,
  price: 52990,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/fakhar 1.png",

  images: [
    "Imagenes/fakhar 1.png",
    "Imagenes/fakhar 2.png",
    "Imagenes/fakhar 3.png"
  ],

  benefits: [
    "Fragancia masculina fresca, moderna y elegante",
    "Apertura aromática con manzana, bergamota y jengibre",
    "Corazón refinado con lavanda, salvia y geranio",
    "Fondo amaderado sofisticado con cedro, vetiver y ámbar"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Masculino",
    "Familia olfativa": "Ámbar fougère",
    "Uso recomendado": "Día / oficina / salidas / ocasiones especiales"
  },

  notes: {
    "Apertura": "Manzana, bergamota y jengibre.",
    "Corazón": "Lavanda, salvia, bayas de enebro y geranio.",
    "Fondo": "Haba tonka, maderas de ámbar, cedro y vetiver."
  }
},
{
  id: 15,
  name: "Amber Oud Gold Edition EDP 120ml",
  category: "perfumes-hombre",
  line: "Amber Oud",
variant: "Gold Edition",
  description: "Una explosión de opulencia dorada que fusiona notas frutales vibrantes con la calidez del ámbar y la vainilla para una presencia magnética y absoluta.",
  detail: `Amber Oud Gold Edition es la definición de la exuberancia capturada en un frasco. Esta fragancia abre con una frescura luminosa de notas verdes y bergamota que rápidamente evoluciona hacia un corazón dulce y adictivo de melón y piña.

Su fondo, rico en ámbar y maderas preciosas, proyecta un aura de estatus y sofisticación inigualable.

Diseñado para quienes no temen ser el centro de todas las miradas, este perfume garantiza una estela imperial y una persistencia excepcional, convirtiéndose en el accesorio definitivo para marcar una presencia inolvidable.`,
  price: 99990,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/gold 1.png",

  images: [
    "Imagenes/gold 1.png",
    "Imagenes/gold 2.png",
    "Imagenes/gold 3.png"
  ],

  benefits: [
    "Fragancia opulenta, frutal y sofisticada",
    "Apertura luminosa con bergamota y notas verdes",
    "Corazón dulce y adictivo con melón, piña y ámbar",
    "Estela intensa, elegante y de gran presencia"
  ],

  specs: {
    "Marca": "Al Haramain",
    "Volumen": "120 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Unisex",
    "Familia olfativa": "Ámbar vainilla",
    "Uso recomendado": "Día / noche / ocasiones especiales"
  },

  notes: {
    "Apertura": "Bergamota y notas verdes.",
    "Corazón": "Melón, piña, notas dulces y ámbar.",
    "Fondo": "Notas amaderadas, vainilla y almizcle."
  }
},
{
  id: 16,
  name: "Qaed Al Fursan EDP 90ml",
  category: "perfumes-hombre",
  description: "Una explosión vibrante de piña jugosa y maderas nobles que captura la esencia de la libertad y el liderazgo con un carácter magnético.",
  detail: `Qaed Al Fursan es la definición de vitalidad y sofisticación en movimiento. Esta fragancia abre con una nota de piña fresca y dulce de un realismo impactante, que evoluciona rápidamente hacia un corazón de jazmín y especias, reposando finalmente sobre una base de madera de cedro y musgo de roble.

Es un aroma diseñado para quienes dejan una marca de energía y confianza a su paso, ofreciendo un equilibrio perfecto entre la frescura frutal y la sobriedad amaderada.

Una pieza esencial en cualquier colección que busque distinción, versatilidad y una estela que invita a ser recordada.`,
  price: 31990,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/fursan 1.png",

  images: [
    "Imagenes/fursan 1.png",
    "Imagenes/fursan 2.png",
    "Imagenes/fursan 3.png"
  ],

  benefits: [
    "Fragancia vibrante, frutal y amaderada",
    "Apertura intensa con piña y azafrán",
    "Corazón elegante con jazmín y abeto balsámico",
    "Fondo cálido de ámbar, cedro y roble"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "90 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Unisex",
    "Familia olfativa": "Aromática",
    "Uso recomendado": "Día / tarde / uso diario / ocasiones especiales"
  },

  notes: {
    "Apertura": "Piña y azafrán.",
    "Corazón": "Jazmín y abeto balsámico.",
    "Fondo": "Ámbar, cedro y extracto de roble."
  }
},
{
  id: 17,
  name: "Khamrah Qahwa EDP 100ml",
  category: "perfumes-hombre",
  line: "Khamrah",
  variant: "Qahwa",
  description: "Una experiencia sensorial sublime que entrelaza la calidez del café tostado con la opulencia del praliné y las especias para una distinción absoluta.",
  detail: `Khamrah Qahwa es una oda a la sofisticación y el placer sensorial. Esta fragancia eleva el concepto gourmand hacia nuevos horizontes, integrando una nota de café rica y aromática que equilibra magistralmente su apertura dulce y especiada.

Su evolución en piel despliega un aura envolvente de canela y vainilla, reposando sobre un fondo ambarado que proyecta una confianza serena y una elegancia imponente.

Diseñado para quienes buscan un aroma con textura, profundidad y una estela memorable, es el complemento definitivo para momentos de exclusividad y refinamiento.`,
  price: 49819,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/qahwa 1.png",

  images: [
    "Imagenes/qahwa 1.png",
    "Imagenes/qahwa 2.png",
    "Imagenes/qahwa 3.png"
  ],

  benefits: [
    "Fragancia gourmand intensa, cálida y sofisticada",
    "Apertura especiada con jengibre, canela y cardamomo",
    "Corazón envolvente con café tostado, praliné y frutas confitadas",
    "Fondo profundo de vainilla, haba tonka, benjuí y almizcle"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Unisex",
    "Familia olfativa": "Ámbar especiada",
    "Línea": "Khamrah",
    "Variante": "Qahwa",
    "Uso recomendado": "Noche / otoño-invierno / ocasiones especiales"
  },

  notes: {
    "Apertura": "Jengibre, canela y cardamomo.",
    "Corazón": "Café tostado, praliné, frutas confitadas y flores blancas.",
    "Fondo": "Café, vainilla, haba tonka, benjuí y almizcle."
  }
},
{
  id: 18,
  name: "Fakhar Rose EDP 100ml",
  category: "perfumes-mujer",
  line: "Fakhar",
  variant: "Rose",
  description: "Una fragancia femenina luminosa y sofisticada que combina flores blancas, frutas delicadas y un fondo cremoso para una presencia elegante y envolvente.",
  detail: `Fakhar Rose es la interpretación femenina de la elegancia moderna dentro de la línea Fakhar. Su composición despliega una apertura suave y luminosa, seguida de un corazón floral refinado que aporta feminidad, delicadeza y una presencia inolvidable.

Su evolución sobre la piel revela una faceta envolvente y distinguida, donde las flores blancas, los acordes afrutados y un fondo cálido crean un equilibrio perfecto entre frescura, sensualidad y sofisticación.

Es una fragancia ideal para la mujer que busca destacar con sutileza, lujo y una estela pulida que acompañe tanto el día como ocasiones especiales.`,
  price: 49990,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/rose 1.png",

  images: [
    "Imagenes/rose 1.png",
    "Imagenes/rose 2.png",
    "Imagenes/rose 3.png"
  ],

  benefits: [
    "Fragancia femenina elegante, floral y delicada",
    "Apertura suave con matices frutales luminosos",
    "Corazón de flores blancas con gran sofisticación",
    "Fondo envolvente y cremoso ideal para una estela refinada"
  ],

  specs: {
    "Marca": "Lattafa",
    "Volumen": "100 ml",
    "Concentración": "Eau de Parfum",
    "Género": "Femenino",
    "Familia olfativa": "Floral",
    "Línea": "Fakhar",
    "Variante": "Rose",
    "Uso recomendado": "Día / noche / ocasiones especiales"
  },

  notes: {
    "Apertura": "Frutas, azucena, granada y aldehídos.",
    "Corazón": "Tuberosa, jazmín, gardenia, ylang-ylang, madreselva, rosa y peonía.",
    "Fondo": "Vainilla, ambroxan, almizcle blanco y sándalo."
  }
},
{
  id: 19,
  name: "Amber Oud Dubai Night Extrait de Parfum 100ml",
  category: "perfumes-hombre",
  line: "Amber Oud",
  variant: "Dubai Night",
  description: "Una fragancia intensa y sofisticada que envuelve con acordes ambarados, especiados y amaderados para una presencia nocturna elegante y magnética.",
  detail: `Amber Oud Dubai Night es una interpretación oscura, moderna y profundamente sofisticada dentro de la línea Amber Oud. Su composición despliega una salida vibrante y refinada, seguida de un corazón especiado y floral que aporta carácter, misterio y una sensualidad envolvente.

Su evolución sobre la piel deja una impronta cálida y lujosa, donde el ámbar, las maderas y los matices suaves se funden en una estela elegante y persistente. Es un perfume pensado para quienes buscan una firma olfativa intensa, distinguida y con presencia.

Ideal para la noche, eventos especiales o momentos en los que querés destacar con una fragancia de alto impacto visual y olfativo, Amber Oud Dubai Night es sinónimo de exclusividad y sofisticación contemporánea.`,
  price: 95125,
  badge: "Nuevo",
  stock: "Disponible",
  shipping: "Envío disponible / retiro coordinado",
  img: "Imagenes/dubai 1.png",

  images: [
    "Imagenes/dubai 1.png",
    "Imagenes/dubai 2.png",
    "Imagenes/dubai 3.png"
  ],

  benefits: [
    "Fragancia intensa, elegante y nocturna",
    "Perfil ambarado y especiado con gran sofisticación",
    "Excelente presencia para eventos y ocasiones especiales",
    "Estela envolvente y refinada con carácter moderno"
  ],

  specs: {
    "Marca": "Al Haramain",
    "Volumen": "100 ml",
    "Concentración": "Extrait de Parfum",
    "Género": "Masculino",
    "Familia olfativa": "Ámbar amaderada",
    "Línea": "Amber Oud",
    "Variante": "Dubai Night",
    "Uso recomendado": "Noche / eventos / ocasiones especiales"
  },

  notes: {
    "Apertura": "Notas especiadas, cítricas y aromáticas.",
    "Corazón": "Rosas, oud y acordes cálidos especiados.",
    "Fondo": "Ámbar, vainilla, almizcle y maderas."
  }
},
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = "todos";
let selectedProduct = null;
let selectedQuantity = 1;
let lightboxImages = [];
let lightboxIndex = 0;
let currentSort = "default";
let currentSearch = "";
let currentLine = "todas";
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// =============================
// INICIALIZACIÓN
// =============================

document.addEventListener("DOMContentLoaded", () => {
  forceProductSearchClean();

  renderFeaturedProducts();
  renderProducts("todos");
  updateCart();
  updateHeaderUser();
  revealOnScroll();

  setTimeout(forceProductSearchClean, 100);
  setTimeout(forceProductSearchClean, 500);
  setTimeout(forceProductSearchClean, 1200);
});


// =============================
// MOSTRAR PRODUCTOS
// =============================

function renderProducts(category = "todos") {
  const container = document.getElementById("products-container");
  const categoryTitle = document.getElementById("category-title");

  if (!container) return;

  currentCategory = category;

  let filteredProducts = category === "todos"
    ? [...products]
    : products.filter(product => product.category === category);
if (currentLine !== "todas") {
  filteredProducts = filteredProducts.filter(product => product.line === currentLine);
}
  if (currentSearch.trim() !== "") {
    const search = currentSearch.toLowerCase().trim();

    filteredProducts = filteredProducts.filter(product => {
      const searchableText = `
  ${product.name}
  ${product.category}
  ${product.line || ""}
  ${product.variant || ""}
  ${product.description}
  ${product.badge}
  ${product.stock}
  ${Object.values(product.specs || {}).join(" ")}
`.toLowerCase();

      return searchableText.includes(search);
    });
  }

  if (currentSort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (currentSort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (categoryTitle) {
    categoryTitle.innerText = getCategoryTitle(category);
  }

  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <p class="empty-category">
        No encontramos productos con esa búsqueda.
      </p>
    `;
    return;
  }

  container.innerHTML = filteredProducts
    .map(product => productCardHTML(product))
    .join("");

  revealOnScroll();
}

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id, event) {
  if (event) {
    event.stopPropagation();
  }

  if (!requireLogin("Para guardar favoritos tenés que iniciar sesión o registrarte.")) {
    return;
  }

  if (isFavorite(id)) {
    favorites = favorites.filter(favId => favId !== id);

    showToast(
      "Favorito eliminado",
      "El producto se quitó de tus favoritos."
    );
  } else {
    favorites.push(id);

    showToast(
      "Favorito guardado",
      "El producto se agregó a tus favoritos."
    );
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));

  renderProducts(currentCategory);
  renderFeaturedProducts();
}

function productCardHTML(product) {
  const favoriteActive = isFavorite(product.id) ? "active" : "";
  const favoriteIcon = isFavorite(product.id) ? "♥" : "♡";

  return `
    <div class="product-card reveal" onclick="openProductDetail(${product.id})">
      <button
        class="favorite-btn ${favoriteActive}"
        onclick="toggleFavorite(${product.id}, event)"
        aria-label="Guardar favorito"
      >
        ${favoriteIcon}
      </button>

      <div class="product-badge">${product.badge}</div>

      <img src="${product.img}" class="product-img" alt="${product.name}">

     <small>${formatCategory(product.category)}</small>

<div class="product-line-chip">
  Línea ${product.line || "Premium"}
</div>

<h3>${product.name}</h3>

      <p>${product.description}</p>

      <div class="product-stock-badge">
        <span class="stock-dot"></span>
        ${product.stock}
      </div>

      <span>$${product.price.toLocaleString("es-AR")}</span>

      <div class="product-card-actions">
        <button onclick="event.stopPropagation(); addToCart(${product.id})">
          Añadir al carrito
        </button>

        <button class="buy-now-card-btn" onclick="event.stopPropagation(); buyNow(${product.id})">
          Comprar ahora
        </button>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const container = document.getElementById("featured-products");

  if (!container) return;

  const featuredProducts = products.slice(0, 3);

  container.innerHTML = featuredProducts
    .map(product => {
      const favoriteActive = isFavorite(product.id) ? "active" : "";
      const favoriteIcon = isFavorite(product.id) ? "♥" : "♡";

      return `
        <div class="featured-card reveal" onclick="openProductDetail(${product.id})">
          <button
            class="favorite-btn featured-favorite-btn ${favoriteActive}"
            onclick="toggleFavorite(${product.id}, event)"
            aria-label="Guardar favorito"
          >
            ${favoriteIcon}
          </button>

          <div class="featured-image-wrap">
            <img src="${product.img}" alt="${product.name}">
            <span class="featured-badge">${product.badge}</span>
          </div>

          <div class="featured-content">
            <small>${formatCategory(product.category)}</small>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <div class="featured-stock">
              <span class="stock-dot"></span>
              ${product.stock}
            </div>

            <strong>$${product.price.toLocaleString("es-AR")}</strong>

            <div class="featured-actions">
              <button onclick="event.stopPropagation(); addToCart(${product.id})">
                Añadir al carrito
              </button>

              <button class="featured-secondary-btn" onclick="event.stopPropagation(); buyNow(${product.id})">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  revealOnScroll();
}


function filterProducts(category, button) {
  cleanProductSearchAutofill();

  renderProducts(category);

  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function changeSort(sortValue) {
  currentSort = sortValue;
  renderProducts(currentCategory);
}

function changeLine(lineValue) {
  currentLine = lineValue;
  renderProducts(currentCategory);
}

function cleanProductSearchAutofill() {
  const searchInput = document.getElementById("product-search");

  if (!searchInput) return false;

  const value = searchInput.value.trim();

  const looksLikeEmail = value.includes("@") || value.toLowerCase().includes(".com");

  if (looksLikeEmail) {
    searchInput.value = "";
    currentSearch = "";
    return true;
  }

  return false;
}

function forceProductSearchClean() {
  const searchInput = document.getElementById("product-search");

  if (!searchInput) return;

  searchInput.value = "";
  currentSearch = "";
}

function changeSearch(searchValue) {
  const value = searchValue.trim();

  if (value.includes("@") || value.toLowerCase().includes(".com")) {
    forceProductSearchClean();
    renderProducts(currentCategory);
    return;
  }

  currentSearch = searchValue;
  renderProducts(currentCategory);
}

function formatCategory(category) {
  const categories = {
    "perfumes": "Perfumes",
    "perfumes-hombre": "Perfumes de hombre",
    "perfumes-mujer": "Perfumes de mujer",
    "mayorista": "Mayorista",
    "tecnologia": "Tecnología",
    "todos": "Todos"
  };

  return categories[category] || category;
}

function getCategoryTitle(category) {
  const titles = {
    "todos": "Todos los productos",
    "perfumes": "Perfumes",
    "perfumes-hombre": "Perfumes de hombre",
    "perfumes-mujer": "Perfumes de mujer",
    "mayorista": "Mayorista",
    "tecnologia": "Tecnología"
  };

  return titles[category] || "Productos";
}


function showToast(title, message) {
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toast-title");
  const toastMessage = document.getElementById("toast-message");

  if (!toast || !toastTitle || !toastMessage) return;

  toastTitle.innerText = title;
  toastMessage.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function requireLogin(actionMessage = "Para continuar tenés que iniciar sesión o crear una cuenta.") {
  if (currentUser) {
    return true;
  }

  showToast(
    "Iniciá sesión",
    actionMessage
  );

  showAuth();

  return false;
}

// =============================
// CARRITO
// =============================

function addToCart(id) {
  cleanProductSearchAutofill();
  if (!requireLogin("Para agregar productos al carrito tenés que iniciar sesión o registrarte.")) {
    return;
  }

  const product = products.find(p => p.id === id);

  if (!product) return;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();

  showToast(
    "Producto agregado",
    `${product.name} se sumó correctamente al carrito.`
  );
}

function buyNow(id) {
  cleanProductSearchAutofill();
  if (!requireLogin("Para comprar ahora tenés que iniciar sesión o registrarte.")) {
    return;
  }

  const product = products.find(item => item.id === id);

  if (!product) return;

  const customerName = currentUser.name;
  const customerEmail = currentUser.email;

  let message = "Hola, quiero comprar este producto desde GROVE Premium Store:\n\n";

  message += "Datos del cliente:\n";
  message += `Nombre: ${customerName}\n`;
  message += `Email: ${customerEmail}\n\n`;

  message += "Producto:\n";
  message += `- ${product.name}\n`;
  message += `Precio: $${product.price.toLocaleString("es-AR")}\n`;
  message += `Categoría: ${formatCategory(product.category)}\n\n`;

  message += "Quiero consultar stock, forma de pago y envío/retiro.";

  const phone = "5491124975911";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

function openCart() {
  const cartModal = document.getElementById("cart-modal");
  const container = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  if (!cartModal || !container || !totalElement) return;

  cartModal.classList.add("show");
  document.body.classList.add("modal-open");

if (cart.length === 0) {
  container.innerHTML = `
    <div class="empty-cart-premium">
      <div class="empty-cart-icon">🛒</div>

      <h3>Tu carrito está vacío</h3>

      <p>
        Explorá nuestra selección premium y agregá tus productos favoritos
        para armar tu pedido.
      </p>

      <button class="empty-cart-btn" onclick="closeCart(); document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });">
        Ver productos
      </button>
    </div>
  `;

  totalElement.innerText = "Total: $0";
  return;
}

  const groupedCart = groupCartItems();

  container.innerHTML = groupedCart.map(item => `
    <div class="cart-item-pro">
      <img src="${item.img}" class="cart-item-img" alt="${item.name}">

      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>$${item.price.toLocaleString("es-AR")} c/u</span>
        <small>Cantidad: ${item.quantity}</small>
      </div>

      <div class="cart-item-subtotal">
        $${(item.price * item.quantity).toLocaleString("es-AR")}
      </div>

      <div class="cart-item-actions">
        <button onclick="decreaseCartItem(${item.id})">−</button>
        <button onclick="increaseCartItem(${item.id})">+</button>
        <button class="remove-cart-btn" onclick="removeCartItem(${item.id})">Eliminar</button>
      </div>
    </div>
  `).join("");

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  totalElement.innerText = "Total: $" + total.toLocaleString("es-AR");
}

function groupCartItems() {
  const grouped = [];

  cart.forEach(product => {
    const existingProduct = grouped.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      grouped.push({
        ...product,
        quantity: 1
      });
    }
  });

  return grouped;
}

function increaseCartItem(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
  openCart();
}

function decreaseCartItem(id) {
  const index = cart.findIndex(item => item.id === id);

  if (index === -1) return;

  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
  openCart();
}

function removeCartItem(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
  openCart();

  showToast(
    "Producto eliminado",
    "El producto se quitó del carrito."
  );
}
  function closeCart() {
  const cartModal = document.getElementById("cart-modal");

  if (cartModal) {
    cartModal.classList.remove("show");
  }

  document.body.classList.remove("modal-open");
}


function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
  openCart();
}

function checkout() {
  if (!requireLogin("Para finalizar la compra tenés que iniciar sesión o registrarte.")) {
    return;
  }

  if (cart.length === 0) {
    showToast("Carrito vacío", "Agregá al menos un producto para finalizar.");
    return;
  }

  const groupedCart = groupCartItems();

  const checkoutNameInput = document.getElementById("checkout-name");
  const checkoutZoneInput = document.getElementById("checkout-zone");
  const checkoutDeliveryInput = document.getElementById("checkout-delivery");
  const checkoutPaymentInput = document.getElementById("checkout-payment");

const missingFields = [];

if (!checkoutNameInput || checkoutNameInput.value.trim() === "") {
  missingFields.push("nombre");
}

if (!checkoutZoneInput || checkoutZoneInput.value.trim() === "") {
  missingFields.push("zona / ciudad");
}

if (!checkoutDeliveryInput || checkoutDeliveryInput.value === "") {
  missingFields.push("tipo de entrega");
}

if (!checkoutPaymentInput || checkoutPaymentInput.value === "") {
  missingFields.push("forma de pago");
}

if (missingFields.length > 0) {
  showToast(
    "Completá tus datos",
    `Falta completar: ${missingFields.join(", ")}.`
  );

  return;
}

  const customerName = checkoutNameInput.value.trim();

  const customerEmail = currentUser ? currentUser.email : "No indicado";

  const customerZone = checkoutZoneInput.value.trim();

  const deliveryType = checkoutDeliveryInput.value;
  
const paymentType = checkoutPaymentInput.value;

  let message = "Hola, quiero realizar este pedido desde GROVE Premium Store:\n\n";

  message += "Datos del cliente:\n";
  message += `Nombre: ${customerName}\n`;
  message += `Email: ${customerEmail}\n`;
  message += `Zona / ciudad: ${customerZone}\n`;
  message += `Entrega: ${deliveryType}\n`;
  message += `Forma de pago: ${paymentType}\n\n`;

  message += "Pedido:\n";

  groupedCart.forEach(item => {
    message += `- ${item.name} x ${item.quantity} — $${(item.price * item.quantity).toLocaleString("es-AR")}\n`;
  });

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  message += `\nTotal: $${total.toLocaleString("es-AR")}`;
  message += "\n\nQuiero coordinar stock, forma de pago y envío/retiro.";

  const phone = "5491124975911";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

// =============================
// DETALLE PRODUCTO
// =============================

function openProductDetail(id) {
  selectedProduct = products.find(product => product.id === id);
  selectedQuantity = 1;

  if (!selectedProduct) return;

  const mainImage = selectedProduct.images && selectedProduct.images.length > 0
    ? selectedProduct.images[0]
    : selectedProduct.img;

  document.getElementById("detail-img").src = mainImage;
  document.getElementById("detail-img").alt = selectedProduct.name;

  document.getElementById("detail-badge").innerText = selectedProduct.badge;
  document.getElementById("detail-name").innerText = selectedProduct.name;
  const detailCategory = document.getElementById("detail-category");

if (detailCategory) {
  const lineText = selectedProduct.line ? ` · Línea ${selectedProduct.line}` : "";
  const variantText = selectedProduct.variant ? ` · ${selectedProduct.variant}` : "";

  detailCategory.innerText = `${formatCategory(selectedProduct.category)}${lineText}${variantText}`;
}
  document.getElementById("detail-description").innerText = selectedProduct.detail;
  document.getElementById("detail-stock").innerText = selectedProduct.stock;
  document.getElementById("detail-shipping").innerText = selectedProduct.shipping;
  document.getElementById("detail-price").innerText = "$" + selectedProduct.price.toLocaleString("es-AR");
  document.getElementById("detail-quantity").innerText = selectedQuantity;

  renderProductThumbnails(selectedProduct);
  renderProductBenefits(selectedProduct);
  renderProductSpecs(selectedProduct);
  renderProductNotes(selectedProduct);

  document.getElementById("product-modal").classList.add("show");
  document.body.classList.add("modal-open");
}

function renderProductThumbnails(product) {
  const thumbnailsContainer = document.getElementById("detail-thumbnails");

  if (!thumbnailsContainer) return;

  const images = product.images && product.images.length > 0
    ? product.images
    : [product.img];

  thumbnailsContainer.innerHTML = images.map((image, index) => `
    <button class="thumbnail-btn ${index === 0 ? "active" : ""}" onclick="changeProductImage('${image}', this)">
      <img src="${image}" alt="${product.name} imagen ${index + 1}">
    </button>
  `).join("");
}

function openImageLightbox() {
  if (!selectedProduct) return;

  lightboxImages = selectedProduct.images && selectedProduct.images.length > 0
    ? selectedProduct.images
    : [selectedProduct.img];

  const currentImage = document.getElementById("detail-img").src;

  lightboxIndex = lightboxImages.findIndex(image => currentImage.includes(image));

  if (lightboxIndex === -1) {
    lightboxIndex = 0;
  }

  updateLightboxImage();

  document.getElementById("image-lightbox").classList.add("show");
  document.body.classList.add("lightbox-open");
}

function updateLightboxImage() {
  const lightboxImg = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");

  if (!lightboxImg || !counter) return;

  lightboxImg.src = lightboxImages[lightboxIndex];
  counter.innerText = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

function changeLightboxImage(direction) {
  if (!lightboxImages.length) return;

  lightboxIndex += direction;

  if (lightboxIndex < 0) {
    lightboxIndex = lightboxImages.length - 1;
  }

  if (lightboxIndex >= lightboxImages.length) {
    lightboxIndex = 0;
  }

  updateLightboxImage();
}

function closeImageLightbox() {
  document.getElementById("image-lightbox").classList.remove("show");
  document.body.classList.remove("lightbox-open");
}

function changeProductImage(image, button) {
  const mainImage = document.getElementById("detail-img");

  if (!mainImage) return;

  mainImage.src = image;

  const buttons = document.querySelectorAll(".thumbnail-btn");

  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function renderProductBenefits(product) {
  const benefitsContainer = document.getElementById("detail-benefits");

  if (!benefitsContainer) return;

  if (!product.benefits || product.benefits.length === 0) {
    benefitsContainer.innerHTML = "";
    return;
  }

  benefitsContainer.innerHTML = product.benefits.map(benefit => `
    <div class="benefit-item">✓ ${benefit}</div>
  `).join("");
}

function renderProductSpecs(product) {
  const specsContainer = document.getElementById("detail-specs");

  if (!specsContainer) return;

  if (!product.specs) {
    specsContainer.innerHTML = "";
    return;
  }

  specsContainer.innerHTML = Object.entries(product.specs).map(([key, value]) => `
    <div class="spec-row">
      <span>${key}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderProductNotes(product) {
  const notesContainer = document.getElementById("detail-notes");

  if (!notesContainer) return;

  if (!product.notes) {
    notesContainer.innerHTML = "";
    return;
  }

  notesContainer.innerHTML = Object.entries(product.notes).map(([key, value]) => `
    <div class="note-row">
      <strong>${key}</strong>
      <p>${value}</p>
    </div>
  `).join("");
}

function closeProductDetail() {
  document.getElementById("product-modal").classList.remove("show");
  document.body.classList.remove("modal-open");
}


function changeQuantity(amount) {
  if (!requireLogin("Para agregar productos al carrito tenés que iniciar sesión o registrarte.")) {
  return;
}
  selectedQuantity += amount;

  if (selectedQuantity < 1) {
    selectedQuantity = 1;
  }

  document.getElementById("detail-quantity").innerText = selectedQuantity;
}


function addDetailToCart() {
  cleanProductSearchAutofill();

  if (!requireLogin("Para agregar productos al carrito tenés que iniciar sesión o registrarte.")) {
    return;
  }

  if (!selectedProduct) return;

  for (let i = 0; i < selectedQuantity; i++) {
    cart.push(selectedProduct);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();

  showToast(
    "Producto agregado",
    `${selectedQuantity} unidad/es de ${selectedProduct.name} se sumaron al carrito.`
  );

  closeProductDetail();
}


function consultProductWhatsApp() {
  if (!selectedProduct) return;

  const phone = "5491124975911";

  const message = `Hola, quiero consultar por este producto:\n\n${selectedProduct.name}\nPrecio: $${selectedProduct.price.toLocaleString("es-AR")}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}


// =============================
// LOGIN / REGISTRO FUNCIONAL
// =============================

function showAuth() {
  const authModal = document.getElementById("auth-modal");

  if (!authModal) return;

  authModal.classList.add("show");
  document.body.classList.add("modal-open");

  updateAuthView();
}

function closeAuth() {
  const authModal = document.getElementById("auth-modal");

  if (authModal) {
    authModal.classList.remove("show");
  }

  document.body.classList.remove("modal-open");
}

function switchAuthMode(mode) {
  const loginTab = document.getElementById("login-tab");
  const registerTab = document.getElementById("register-tab");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const userPanel = document.getElementById("user-panel");

  if (!loginTab || !registerTab || !loginForm || !registerForm || !userPanel) return;

  userPanel.classList.remove("active");

  if (mode === "login") {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  }

  if (mode === "register") {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  }
}

function getStoredUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveStoredUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function registerUser() {
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim().toLowerCase();
  const password = document.getElementById("register-pass").value.trim();

  if (!name || !email || !password) {
    showToast("Datos incompletos", "Completá nombre, email y contraseña.");
    return;
  }

  if (password.length < 4) {
    showToast("Contraseña muy corta", "Usá al menos 4 caracteres.");
    return;
  }

  const users = getStoredUsers();

  const userExists = users.some(user => user.email === email);

  if (userExists) {
    showToast("Cuenta existente", "Ese email ya está registrado.");
    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password
  };

  users.push(newUser);
  saveStoredUsers(users);

  currentUser = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email
  };

  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  showToast("Cuenta creada", `Bienvenida/o ${name}.`);

  clearAuthInputs();
  updateAuthView();
  updateHeaderUser();
}

function login() {
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-pass").value.trim();

  if (!email || !password) {
    showToast("Datos incompletos", "Ingresá email y contraseña.");
    return;
  }

  const users = getStoredUsers();

  const user = users.find(item => item.email === email && item.password === password);

  if (!user) {
    showToast("Acceso incorrecto", "Email o contraseña incorrectos.");
    return;
  }

  currentUser = {
    id: user.id,
    name: user.name,
    email: user.email
  };

  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  showToast("Sesión iniciada", `Hola, ${user.name}.`);

  clearAuthInputs();
  updateAuthView();
  updateHeaderUser();
}

function logout() {
  currentUser = null;
  localStorage.removeItem("currentUser");

  showToast("Sesión cerrada", "Tu sesión se cerró correctamente.");

  updateAuthView();
  updateHeaderUser();
}

function updateAuthView() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const userPanel = document.getElementById("user-panel");
  const loginTab = document.getElementById("login-tab");
  const registerTab = document.getElementById("register-tab");
  const loggedName = document.getElementById("logged-user-name");
  const loggedEmail = document.getElementById("logged-user-email");

  if (!loginForm || !registerForm || !userPanel) return;

  if (currentUser) {
    loginForm.classList.remove("active");
    registerForm.classList.remove("active");
    userPanel.classList.add("active");

    if (loginTab) loginTab.classList.remove("active");
    if (registerTab) registerTab.classList.remove("active");

    if (loggedName) loggedName.innerText = currentUser.name;
    if (loggedEmail) loggedEmail.innerText = currentUser.email;
  } else {
    userPanel.classList.remove("active");
    switchAuthMode("login");
  }
}

function updateHeaderUser() {
  const authBtn = document.getElementById("auth-header-btn");

  if (!authBtn) return;

  if (currentUser) {
    authBtn.innerText = currentUser.name;
  } else {
    authBtn.innerText = "Iniciar sesión";
  }
}

function clearAuthInputs() {
  const fields = [
    "login-email",
    "login-pass",
    "register-name",
    "register-email",
    "register-pass"
  ];

  fields.forEach(id => {
    const input = document.getElementById(id);

    if (input) {
      input.value = "";
    }
  });
}


// =============================
// ASISTENTE
// =============================

function toggleAssistant() {
  const chat = document.getElementById("assistant-chat");

  if (!chat) return;

  chat.classList.toggle("show");
}

function assistantReply(type) {
  const response = document.getElementById("assistant-response");

  if (!response) return;

  const replies = {
    productos: `
      Podés ver todos los productos en la sección “Explorar por categoría”.
      También podés tocar cada producto para ver precio, stock, envío y detalle completo.
    `,
    envios: `
      Hacemos envíos y también se puede coordinar retiro. Para confirmar disponibilidad según tu zona, escribinos por WhatsApp.
    `,
    mayorista: `
      Si querés comprar para revender, podemos armarte una propuesta mayorista según cantidad y tipo de producto.
    `,
    whatsapp: `
      Te llevo directo a WhatsApp para una atención personalizada.
    `
  };

  response.innerHTML = replies[type] || "¿Querés que te ayudemos por WhatsApp?";

  if (type === "whatsapp") {
    const phone = "5491124975911";
    const message = "Hola, quiero recibir asesoramiento sobre los productos.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 500);
  }
}

function sendAssistantMessage() {
  const input = document.getElementById("assistant-input");

  if (!input) return;

  const text = input.value.trim();

  if (!text) {
    alert("Escribí tu consulta");
    return;
  }

  const phone = "5491124975911";
  const message = `Hola, tengo esta consulta desde la web:\n\n${text}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

  input.value = "";
}

function handleAssistantEnter(event) {
  if (event.key === "Enter") {
    sendAssistantMessage();
  }
}


// =============================
// ANIMACIONES
// =============================

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// =============================
// HEADER SCROLL
// =============================

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.95)";
    header.style.boxShadow = "0 10px 35px rgba(0,0,0,0.45)";
  } else {
    header.style.background = "rgba(10,10,10,0.75)";
    header.style.boxShadow = "none";
  }
});


// =============================
// CERRAR MODALES AL TOCAR FUERA
// =============================

window.addEventListener("click", (e) => {
  const authModal = document.getElementById("auth-modal");
  const cartModal = document.getElementById("cart-modal");
  const productModal = document.getElementById("product-modal");
  const imageLightbox = document.getElementById("image-lightbox");

  if (e.target === authModal) {
    closeAuth();
  }

  if (e.target === cartModal) {
    closeCart();
  }

  if (e.target === productModal) {
    closeProductDetail();
  }

  if (e.target === imageLightbox) {
    closeImageLightbox();
  }
});

window.addEventListener("keydown", (e) => {
  const imageLightbox = document.getElementById("image-lightbox");

  if (!imageLightbox || !imageLightbox.classList.contains("show")) return;

  if (e.key === "Escape") {
    closeImageLightbox();
  }

  if (e.key === "ArrowLeft") {
    changeLightboxImage(-1);
  }

  if (e.key === "ArrowRight") {
    changeLightboxImage(1);
  }
});
function toggleFaq(button) {
  const item = button.closest(".faq-item");

  if (!item) return;

  const isOpen = item.classList.contains("active");

  const allFaqItems = document.querySelectorAll(".faq-accordion .faq-item");

  allFaqItems.forEach(faq => {
    faq.classList.remove("active");

    const icon = faq.querySelector(".faq-question strong");

    if (icon) {
      icon.innerText = "+";
    }
  });

  if (!isOpen) {
    item.classList.add("active");

    const icon = item.querySelector(".faq-question strong");

    if (icon) {
      icon.innerText = "−";
    }
  }
}
