import { Product } from '../types/catalog.ts';

export const initialProducts: Product[] = [
  {
    id: 'prod-1',
    slug: 'spaghetti-di-gragnano-igp-trafilati-al-bronzo',
    name: {
      it: 'Spaghetti di Gragnano IGP Trafilati al Bronzo',
      en: 'Bronze-Drawn Gragnano Spaghetti PGI',
    },
    category: 'pasta',
    region: 'Campania',
    subRegion: 'Gragnano (Napoli)',
    certification: 'IGP',
    format: '500g',
    shelfLife: '36 mesi',
    yearOrHarvest: 'Raccolto 2025/2026',
    order: 1,
    status: 'published',
    images: [
      '/src/assets/images/pasta_gragnano_studio_1792039491626.jpg',
      '/src/assets/images/hero_italian_table_1792039491593.jpg',
    ],
    shortDescription: {
      it: 'Semola di grano duro 100% italiano, acqua di sorgente dei Monti Lattari e lenta essiccazione a bassa temperatura.',
      en: '100% Italian durum wheat semolina, spring water from the Lattari Mountains, and low-temperature static drying.',
    },
    fullDescription: {
      it: 'Nel microclima unico di Gragnano, racchiuso tra il Vesuvio e la Costiera Amalfitana, nasce la regina della pasta italiana. La trafilatura al bronzo conferisce una superficie straordinariamente ruvida e porosa, ideale per trattenere ogni condimento. Essiccata lentamente fino a 36 ore a meno di 45°C per preservare intatte le proteine del grano e il sapore autentico.',
      en: 'Produced in the unique microclimate of Gragnano between Mount Vesuvius and the Amalfi Coast. Bronze die extrusion creates an exceptionally porous and rough texture that bonds perfectly with sauces. Slowly dried for up to 36 hours below 45°C to preserve wheat proteins and natural flavor.',
    },
    originNote: {
      it: 'Valle dei Mulini, Gragnano (Campania) - IGP certificata dal Ministero dell’Agricoltura.',
      en: 'Mills Valley, Gragnano (Campania) - PGI certified by the Italian Ministry of Agriculture.',
    },
    tastingNotes: {
      it: ['Profumo fragrante di grano maturo', 'Consistenza tenace e perfettamente al dente', 'Gusto rotondo con note di crosta di pane dorata'],
      en: ['Fragrant aroma of ripe golden wheat', 'Firm, resilient al dente toothsome bite', 'Round palate with toasted bread crust undertones'],
    },
    pairings: {
      it: ['Colatura di Alici di Cetara', 'Pomodorino del Piennolo del Vesuvio DOP', 'Vino Fiano di Avellino DOCG'],
      en: ['Cetara Anchovy Colatura', 'Vesuvius Piennolo Cherry Tomatoes PDO', 'Fiano di Avellino DOCG white wine'],
    },
    ingredients: {
      it: 'Semola di grano duro italiano, acqua di sorgente locale.',
      en: '100% Italian durum wheat semolina, local spring water.',
    },
    seoTitle: {
      it: 'Spaghetti di Gragnano IGP Trafilati al Bronzo | Collezione Eccellenze',
      en: 'Bronze-Drawn Gragnano Spaghetti PGI | Italian Food Catalog',
    },
    seoDescription: {
      it: 'Autentica pasta di Gragnano IGP trafilata al bronzo ed essiccata a bassa temperatura. Scopri provenienza e abbinamenti.',
      en: 'Authentic bronze-drawn Gragnano PGI spaghetti made with 100% Italian durum wheat and mountain spring water.',
    },
  },
  {
    id: 'prod-2',
    slug: 'olio-extra-vergine-di-oliva-monocultivar-coratina-dop',
    name: {
      it: 'Olio Extra Vergine di Oliva Monocultivar Coratina DOP',
      en: 'Single-Varietal Coratina Extra Virgin Olive Oil PDO',
    },
    category: 'oils',
    region: 'Puglia',
    subRegion: 'Castel del Monte, Murge Baresi (Puglia)',
    certification: 'DOP',
    format: '500ml',
    shelfLife: '24 mesi',
    yearOrHarvest: 'Campagna Olearia 2025',
    order: 2,
    status: 'published',
    images: [
      '/src/assets/images/olive_oil_coratina_1792039492367.jpg',
      '/src/assets/images/hero_italian_table_1792039491593.jpg',
    ],
    shortDescription: {
      it: 'Estratto a freddo entro 4 ore dalla raccolta da ulivi secolari dell’Altopiano delle Murge. Elevatissimo tenore di polifenoli antiossidanti.',
      en: 'Cold-extracted within 4 hours of harvest from century-old trees on the Murge plateau. Exceptionally high polyphenol antioxidant content.',
    },
    fullDescription: {
      it: 'La Coratina è la cultivar sovrana della terra di Puglia, celebre per il suo carattere potente e nobile. Raccolta esclusivamente a mano all’invaiatura nei primi giorni di ottobre e molita a freddo a ciclo continuo con estrazione sotto azoto per proteggere gli aromi volatili. Un olio di grandissima struttura con acidità libera inferiore allo 0,18%.',
      en: 'Coratina is the quintessential olive variety of Puglia, celebrated for its commanding structure and noble character. Hand-harvested at initial veraison in early October and cold-pressed under inert nitrogen to safeguard delicate aromas. Unrivaled polyphenol concentration and acidity below 0.18%.',
    },
    originNote: {
      it: 'Tenuta Santo Stefano, Altopiano delle Murge (Puglia) - Terra Rossa calcarea su altitudine 380m.',
      en: 'Santo Stefano Estate, Murge Plateau (Puglia) - Calcareous red soil at 380m altitude.',
    },
    tastingNotes: {
      it: ['Fruttato verde intenso di carciofo ed erba falciata', 'Amaro elegante e vivace piccante persistente', 'Note di mandorla verde e foglia di pomodoro'],
      en: ['Intense green fruitiness with fresh artichoke and cut grass', 'Harmonious bitterness and pronounced peppery finish', 'Undertones of green almond and tomato vine'],
    },
    pairings: {
      it: ['Zuppa di fave e cicoria selvatica', 'Bistecca alla fiorentina sulla brace', 'Bruschetta con pane di Altamura DOP'],
      en: ['Wild chicory and fava bean purée', 'Charcoal-grilled dry-aged Florentine steak', 'Altamura PDO toasted sourdough bruschetta'],
    },
    ingredients: {
      it: '100% olive italiane cultivar Coratina da coltivazione integrata.',
      en: '100% Italian olives of the Coratina single cultivar.',
    },
    seoTitle: {
      it: 'Olio Extra Vergine Monocultivar Coratina DOP Terra di Bari | Terre d’Italia',
      en: 'Single-Varietal Coratina EVOO PDO Puglia | Italian Culinary Collection',
    },
    seoDescription: {
      it: 'Olio extra vergine di oliva Coratina DOP delle Murge. Estrazione a freddo, ricchissimo di polifenoli e amaro-piccante equilibrato.',
      en: 'Pure Coratina single-varietal EVOO from Puglia. High-polyphenol cold-pressed olive oil with artichoke and green almond notes.',
    },
  },
  {
    id: 'prod-3',
    slug: 'aceto-balsamico-tradizionale-di-modena-dop-invecchiato-12-anni',
    name: {
      it: 'Aceto Balsamico Tradizionale di Modena DOP Affinato 12 Anni',
      en: 'Traditional Balsamic Vinegar of Modena PDO Aged 12 Years',
    },
    category: 'oils',
    region: 'Emilia-Romagna',
    subRegion: 'Modena (Emilia-Romagna)',
    certification: 'DOP',
    format: '100ml',
    shelfLife: 'Indefinita (invecchiato)',
    yearOrHarvest: 'Batteria Storica Secolare',
    order: 3,
    status: 'published',
    images: [
      '/src/assets/images/aceto_balsamico_modena_1792039492075.jpg',
      '/src/assets/images/hero_italian_table_1792039491593.jpg',
    ],
    shortDescription: {
      it: 'Mosto cotto di uve Trebbiano e Lambrusco affinato per oltre 12 anni in batterie di legni nobili (rovere, castagno, ciliegio, frassino, ginepro).',
      en: 'Cooked must of Trebbiano and Lambrusco grapes aged over 12 years across a sequence of noble wooden barrels.',
    },
    fullDescription: {
      it: 'Non un semplice condimento, ma il supremo elisir della tradizione modenese. Ottenuto unicamente dalla lenta cottura del mosto d’uva a fuoco diretto e dal paziente travaso annuale lungo una batteria di botti scalari di legni differenti. Imbottigliato esclusivamente nella storica ampolla sferica a base rettangolare disegnata da Giorgetto Giugiaro e sigillato dal Consorzio Tutela.',
      en: 'Not a condiment, but a revered Italian culinary treasure. Crafted strictly from direct-fire cooked grape must and decades of annual transfers across barrels of oak, chestnut, cherry, ash, and juniper. Packaged solely in the iconic bulb flask bottle designed by Giorgetto Giugiaro and sealed by the Consortium.',
    },
    originNote: {
      it: 'Acetaia Storica, Colline Modenesi (Emilia-Romagna) - Certificazione DOP con sigillo notarile consortile numerato.',
      en: 'Historic Acetaia, Modena Hills (Emilia-Romagna) - PDO certified with numbered wax Consortium seal.',
    },
    tastingNotes: {
      it: ['Densità sciropposa e brillante colore bruno profondo', 'Bouquet complesso di legni balsamici, fichi e prugne secche', 'Acidità vellutata e perfetto equilibrio agrodolce'],
      en: ['Velvety syrupy viscosity with deep lustrous dark brown hue', 'Complex bouquet of balsamic wood, dried figs, and prunes', 'Silky acidity with exquisite sweet-and-sour equilibrium'],
    },
    pairings: {
      it: ['Parmigiano Reggiano DOP 36 mesi a scaglie', 'Gelato fior di latte o fragole fresche', 'Risotto al burro d’alpeggio'],
      en: ['36-month aged Parmigiano Reggiano PDO shards', 'Artisanal Fior di Latte gelato or fresh wild strawberries', 'Mountain pasture butter risotto'],
    },
    ingredients: {
      it: 'Mosto d’uva cotto di Trebbiano e Lambrusco. Nessun colorante, caramello o addensante.',
      en: 'Cooked grape must of Trebbiano and Lambrusco. Zero colorants, caramel, or additives.',
    },
    seoTitle: {
      it: 'Aceto Balsamico Tradizionale di Modena DOP 12 Anni Affinato | Terre d’Italia',
      en: 'Traditional Balsamic Vinegar of Modena PDO Aged 12 Years | Catalog',
    },
    seoDescription: {
      it: 'Il vero Balsamico Tradizionale di Modena DOP affinato 12 anni in botti di legni nobili. Ampolla originale Giugiaro.',
      en: 'Authentic Traditional Balsamic Vinegar of Modena PDO aged 12 years in cask series. Pure cooked grape must, sealed by Consortium.',
    },
  },
  {
    id: 'prod-4',
    slug: 'pesto-alla-genovese-dop-con-basilico-genovese-di-pra',
    name: {
      it: 'Pesto alla Genovese DOP con Basilico di Prà a Mortaio',
      en: 'Genoese Pesto PDO with Mortar-Pounded Prà Basil',
    },
    category: 'sauces',
    region: 'Liguria',
    subRegion: 'Genova Prà (Liguria)',
    certification: 'DOP',
    format: '180g',
    shelfLife: '18 mesi',
    yearOrHarvest: 'Produzione Stagionale 2026',
    order: 4,
    status: 'published',
    images: [
      '/src/assets/images/hero_italian_table_1792039491593.jpg',
      '/src/assets/images/pasta_gragnano_studio_1792039491626.jpg',
    ],
    shortDescription: {
      it: 'Solo Basilico Genovese DOP di Prà a foglia piccola, pinoli pisani, Parmigiano Reggiano 24 mesi, Fiore Sardo DOP e olio extra vergine ligure.',
      en: 'Small-leaf Genoese Basil PDO from Prà, Italian pine nuts, 24-month Parmigiano Reggiano, Fiore Sardo PDO, and Ligurian EVOO.',
    },
    fullDescription: {
      it: 'Preparato secondo il disciplinare storico della cucina ligure. Il basilico cresciuto sulle terrazze vista mare di Prà possiede un aroma dolce privo di note di menta. Lavorato a freddo con macinazione delicata per impedire l’ossidazione della clorofilla, mantenendo un verde smeraldo brillante e una freschezza aromatica ineguagliabile.',
      en: 'Crafted according to historic Ligurian tradition. Basil grown on coastal terraces of Prà delivers an exceptionally delicate, sweet perfume devoid of mintiness. Cold-processed with gentle shearing to prevent chlorophyll oxidation, maintaining radiant emerald color and fresh garden vitality.',
    },
    originNote: {
      it: 'Fascia litoranea di Prà, Genova (Liguria) - Microclima marino salmastro.',
      en: 'Coastal terraces of Prà, Genoa (Liguria) - Marine maritime microclimate.',
    },
    tastingNotes: {
      it: ['Profumo inebriante di basilico fresco appena colto', 'Gusto vellutato con sapidità bilanciata del Fiore Sardo', 'Retrogusto cremoso di pinolo tostato'],
      en: ['Intoxicating bouquet of freshly gathered garden basil', 'Velvety palate enriched by savory Fiore Sardo sheep cheese', 'Delicate nutty finish of sweet Mediterranean pine nuts'],
    },
    pairings: {
      it: ['Trofie liguri fresche con patate e fagiolini', 'Testaroli della Lunigiana', 'Vino Vermentino dei Colli di Luni DOC'],
      en: ['Hand-rolled Ligurian trofie with potatoes and green beans', 'Tuscan-Ligurian testaroli', 'Vermentino Colli di Luni DOC white wine'],
    },
    ingredients: {
      it: 'Basilico Genovese DOP (38%), Olio Extra Vergine di Oliva ligure, Parmigiano Reggiano DOP, Fiore Sardo DOP, Pinoli italiani, Aglio di Vessalico, Sale marino di Cervia.',
      en: 'Genoese Basil PDO (38%), Ligurian Extra Virgin Olive Oil, Parmigiano Reggiano PDO, Fiore Sardo PDO, Italian Pine Nuts, Vessalico Garlic, Cervia Sea Salt.',
    },
    seoTitle: {
      it: 'Pesto alla Genovese DOP con Basilico di Prà | Catalogo Terre d’Italia',
      en: 'Genoese Pesto PDO with Prà Basil | Artisanal Italian Catalog',
    },
    seoDescription: {
      it: 'Pesto genovese autentico preparato con Basilico di Prà DOP lavorato a freddo. Senza conservanti né formaggi fusi.',
      en: 'Authentic Ligurian Genoese Pesto PDO crafted with small-leaf Prà basil, pine nuts, and aged cheeses. Fresh cold processing.',
    },
  },
  {
    id: 'prod-5',
    slug: 'crema-di-pistacchio-verde-di-bronte-dop-purezza-65-percento',
    name: {
      it: 'Crema di Pistacchio Verde di Bronte DOP (65% Purezza)',
      en: 'Green Pistachio of Bronte PDO Pure Spread (65% Purity)',
    },
    category: 'sweets',
    region: 'Sicilia',
    subRegion: 'Bronte, Pendici dell’Etna (Catania)',
    certification: 'DOP',
    format: '200g',
    shelfLife: '18 mesi',
    yearOrHarvest: 'Raccolta Biennale dell’Etna',
    order: 5,
    status: 'published',
    images: [
      '/src/assets/images/pasta_gragnano_studio_1792039491626.jpg',
      '/src/assets/images/hero_italian_table_1792039491593.jpg',
    ],
    shortDescription: {
      it: 'Il celebre “Oro Verde dell’Etna” raccolto a mano sui terreni lavici scoscesi ogni due anni. Concentrazione record del 65% di pistacchio puro.',
      en: 'The legendary "Green Gold of Mount Etna" harvested biennially by hand on volcanic slopes. High 65% pure pistachio concentration.',
    },
    fullDescription: {
      it: 'Sui suoli vulcanici di Bronte, le piante di pistacchio affondano le radici nella roccia magmatica. Il frutto viene raccolto solo negli anni dispari per permettere alla pianta di accumulare nutrienti unici. Macinato finemente a pietra senza aggiunta di aromi artificiali, conservanti o oli di palma: pura cremosità siciliana vellutata e persistente.',
      en: 'Rooted directly in the volcanic basalt slopes of Mount Etna, Bronte pistachio groves are harvested only during alternate years. Stone-milled into a satin-smooth spread with 65% real pistachios, zero artificial aromas, and no palm oil. Distinctive mineral depth and vivid chlorophyll emerald color.',
    },
    originNote: {
      it: 'Bronte (Sicilia) - Terreni lavici dell’Etna tra i 400 e i 900 metri s.l.m. Presidio e Denominazione DOP.',
      en: 'Bronte (Sicily) - Volcanic basalt soils between 400m and 900m altitude. Protected Designation of Origin.',
    },
    tastingNotes: {
      it: ['Gusto intenso, dolce e finemente tostato', 'Nota minerale vulcanica inconfondibile', 'Consistenza setosa che si scioglie al palato'],
      en: ['Intense, aromatic sweet and delicately roasted nut profile', 'Subtle volcanic basalt mineral complexity', 'Silk-like creamy emulsion that melts on the tongue'],
    },
    pairings: {
      it: ['Brioche col tuppo siciliana calda', 'Farcitura di cannoli o crostate', 'Vino Passito di Pantelleria DOC'],
      en: ['Warm Sicilian brioche col tuppo', 'Artisanal cannoli shell filling or shortcrust tarts', 'Passito di Pantelleria DOC dessert wine'],
    },
    ingredients: {
      it: 'Pistacchio Verde di Bronte DOP (65%), zucchero grezzo di canna, latte intero in polvere, olio extra vergine di oliva, sale marino di Trapani.',
      en: 'Green Pistachio of Bronte PDO (65%), raw cane sugar, whole milk powder, extra virgin olive oil, Trapani sea salt.',
    },
    seoTitle: {
      it: 'Crema di Pistacchio Verde di Bronte DOP 65% | Terre d’Italia',
      en: 'Green Pistachio of Bronte PDO 65% Spread | Italian Food Catalog',
    },
    seoDescription: {
      it: 'Crema artigianale con 65% di Pistacchio Verde di Bronte DOP dell’Etna. Lavorazione a pietra, senza aromi né olio di palma.',
      en: 'Artisanal Bronte PDO pistachio spread with 65% pure volcanic nuts. Stone-ground Sicilian confection without palm oil.',
    },
  },
  {
    id: 'prod-6',
    slug: 'salsa-pronta-di-pomodoro-ciliegino-di-pachino-igp',
    name: {
      it: 'Salsa Pronta di Pomodoro Ciliegino di Pachino IGP',
      en: 'Ready Cherry Tomato Sauce of Pachino PGI',
    },
    category: 'preserves',
    region: 'Sicilia',
    subRegion: 'Pachino & Portopalo (Siracusa)',
    certification: 'IGP',
    format: '330g',
    shelfLife: '36 mesi',
    yearOrHarvest: 'Estate Siciliana 2025',
    order: 6,
    status: 'published',
    images: [
      '/src/assets/images/aceto_balsamico_modena_1792039492075.jpg',
      '/src/assets/images/hero_italian_table_1792039491593.jpg',
    ],
    shortDescription: {
      it: 'Pomodori ciliegini maturati sotto il sole dell’estremo sud siciliano, irrigati con acqua salmastra per un grado zuccherino naturale straordinario.',
      en: 'Vine-ripened cherry tomatoes from the sun-drenched tip of Sicily, irrigated with brackish groundwater for natural sweetness.',
    },
    fullDescription: {
      it: 'A Pachino, dove si incontrano lo Ionio e il Mediterraneo, le ore di sole e le acque sotterranee leggermente saline generano un pomodoro dolcissimo, a bassissima acidità. Lavorato entro 12 ore dalla raccolta con solo soffritto di scalogno dolce, basilico fresco e un filo d’olio extravergine di oliva. Nessuna aggiunta di zucchero o concentrato.',
      en: 'At the southernmost tip of Sicily where the Ionian and Mediterranean seas converge, exceptional sunlight and naturally saline groundwater produce tomatoes with remarkable natural Brix sweetness. Processed within 12 hours of harvest with tender shallots, fresh basil, and extra virgin olive oil. Zero added sugar or tomato paste.',
    },
    originNote: {
      it: 'Pachino (Sicilia) - Consorzio di Tutela Pomodoro di Pachino IGP.',
      en: 'Pachino (Sicily) - Pachino PGI Tomato Protection Consortium.',
    },
    tastingNotes: {
      it: ['Dolcezza esplosiva e rotonda, acidità minima', 'Profumo di pomodoro appena colto sotto il sole', 'Consistenza polposa e densa'],
      en: ['Explosive natural sweetness with gentle balanced acidity', 'Aroma of sun-warmed ripe tomato vines', 'Rich, thick pulpy consistency that coats pasta'],
    },
    pairings: {
      it: ['Spaghetti trafilati al bronzo con ricotta salata', 'Pizza fatta in casa e focaccia rustica', 'Vino Cerasuolo di Vittoria DOCG'],
      en: ['Bronze-drawn spaghetti with shaved aged ricotta salata', 'Homemade rustic focaccia and wood-fired pizza', 'Cerasuolo di Vittoria DOCG red wine'],
    },
    ingredients: {
      it: 'Pomodoro Ciliegino di Pachino IGP (97%), Olio Extra Vergine di Oliva (2%), Sale marino, Basilico fresco, Scalogno.',
      en: 'Pachino PGI Cherry Tomatoes (97%), Extra Virgin Olive Oil (2%), Sea Salt, Fresh Basil, Shallot.',
    },
    seoTitle: {
      it: 'Salsa Pronta Pomodoro Ciliegino di Pachino IGP | Terre d’Italia',
      en: 'Ready Pachino PGI Cherry Tomato Sauce | Artisanal Food Catalog',
    },
    seoDescription: {
      it: 'Autentica salsa di pomodoro ciliegino di Pachino IGP. Dolcezza naturale senza zuccheri aggiunti, pronta in 2 minuti.',
      en: 'Ready-to-serve Sicilian Pachino PGI cherry tomato sauce. Naturally sweet, slow cooked with extra virgin olive oil.',
    },
  },
];
