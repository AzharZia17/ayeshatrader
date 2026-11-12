/**
 * Single source of truth for all product information.
 * Images live in /public/images/products/.
 *
 * Content policy: specifications describe construction only. No certifications,
 * standards compliance or performance figures are stated unless verified.
 */

export type CategorySlug =
  | "pvc-electric-wires"
  | "flexible-cables"
  | "copper-wires"
  | "power-cables";

export interface ProductCategory {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  /** One-line summary for listings */
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: ProductSpec[];
  sizes: string[];
  /** Short note displayed under the size list */
  sizeNote?: string;
  applications: string[];
  featured?: boolean;
}

export const CATEGORIES: readonly ProductCategory[] = [
  {
    slug: "pvc-electric-wires",
    name: "PVC Electric Wires",
    description:
      "Single-core building wire and twin flat cable for house wiring, lighting and socket circuits.",
    image: "/images/products/pvc-building-wire.jpg",
    imageAlt: "Coils of red, black, yellow and blue PVC insulated building wire",
  },
  {
    slug: "flexible-cables",
    name: "Flexible Cables",
    description:
      "Multi-core flexible copper cable and flat submersible cable for appliances, machines and pumps.",
    image: "/images/products/flexible-multicore-cable.jpg",
    imageAlt: "Black flexible multi-core cable with stripped copper conductors",
  },
  {
    slug: "copper-wires",
    name: "Copper Wires",
    description:
      "Bare and green earthing wire, and enamelled copper winding wire for motors and coils.",
    image: "/images/products/copper-winding-wire.jpg",
    imageAlt: "Spool of enamelled copper winding wire",
  },
  {
    slug: "power-cables",
    name: "Power Cables",
    description:
      "Armoured and unarmoured multi-core copper cables for main feeders and distribution boards.",
    image: "/images/products/industrial-power-cable.jpg",
    imageAlt: "Armoured multi-core power cable cut away to show copper conductors",
  },
] as const;

export const PRODUCTS: readonly Product[] = [
  {
    slug: "single-core-pvc-building-wire",
    name: "Single Core PVC Building Wire",
    category: "pvc-electric-wires",
    summary: "Single-core stranded copper wire with PVC insulation for conduit wiring.",
    description:
      "Single-core copper building wire insulated with PVC and supplied in coils. Used for fixed wiring in conduit for lighting, sockets and switchboard connections. Available in several insulation colours for circuit identification.",
    image: "/images/products/pvc-building-wire.jpg",
    imageAlt: "Coils of red, black, yellow and blue single core PVC building wire",
    specs: [
      { label: "Conductor", value: "Stranded copper" },
      { label: "Insulation", value: "PVC" },
      { label: "Cores", value: "1 (single core)" },
      { label: "Colours", value: "Red, black, blue, yellow (as stocked)" },
      { label: "Typical voltage class", value: "450/750 V" },
      { label: "Supplied as", value: "Coils" },
    ],
    sizes: ["3/0.029", "7/0.029", "7/0.036", "7/0.044", "7/0.052", "7/0.064"],
    sizeNote: "Strand count / strand diameter. Colour and stock confirmed at enquiry.",
    applications: [
      "Conduit wiring in homes and shops",
      "Lighting and fan circuits",
      "Socket outlet circuits",
      "Switchboard and distribution board connections",
    ],
  },
  {
    slug: "twin-flat-pvc-cable",
    name: "Twin Flat PVC Cable",
    category: "pvc-electric-wires",
    summary: "Two-core flat copper cable with PVC insulation and outer sheath.",
    description:
      "Two insulated copper conductors laid side by side inside a flat PVC sheath. Its low profile makes it suitable for surface wiring and short extensions where a single sheathed cable is more convenient than two separate wires.",
    image: "/images/products/twin-flat-wire.jpg",
    imageAlt: "Coil of white twin flat PVC cable with red and black conductors exposed",
    specs: [
      { label: "Conductor", value: "Copper" },
      { label: "Insulation", value: "PVC + PVC sheath" },
      { label: "Cores", value: "2 (flat)" },
      { label: "Colours", value: "White sheath (as stocked)" },
      { label: "Typical voltage class", value: "300/500 V" },
      { label: "Supplied as", value: "Coils" },
    ],
    sizes: ["3/0.029", "7/0.029", "7/0.036", "7/0.044"],
    sizeNote: "Strand count / strand diameter, 2 core. Stock confirmed at enquiry.",
    applications: [
      "Surface wiring on walls and battens",
      "Lighting extensions",
      "Shop and display lighting",
    ],
    featured: true,
  },
  {
    slug: "flexible-multi-core-copper-cable",
    name: "Flexible Multi-Core Copper Cable",
    category: "flexible-cables",
    summary: "Round flexible cable with fine-stranded copper cores and PVC sheath.",
    description:
      "Round multi-core cable made with finely stranded copper conductors, which makes it easier to bend and route than rigid building wire. Used to connect appliances, portable equipment and machinery.",
    image: "/images/products/flexible-multicore-cable.jpg",
    imageAlt: "Black round flexible multi-core cable with copper conductors",
    specs: [
      { label: "Conductor", value: "Fine-stranded copper" },
      { label: "Insulation", value: "PVC + PVC sheath" },
      { label: "Cores", value: "2, 3 or 4 (round)" },
      { label: "Typical voltage class", value: "300/500 V" },
      { label: "Supplied as", value: "Coils / cut length" },
    ],
    sizes: [
      "2 Core × 1.0 mm²",
      "2 Core × 1.5 mm²",
      "3 Core × 1.5 mm²",
      "3 Core × 2.5 mm²",
      "4 Core × 1.5 mm²",
      "4 Core × 2.5 mm²",
    ],
    sizeNote: "Other core counts and sizes on request. Stock confirmed at enquiry.",
    applications: [
      "Appliance and equipment connections",
      "Workshop machines and power tools",
      "Extension and portable power leads",
      "Control panel wiring",
    ],
  },
  {
    slug: "3-core-flat-submersible-cable",
    name: "3-Core Flat Submersible Cable",
    category: "flexible-cables",
    summary: "Flat three-core copper cable commonly used with submersible pumps.",
    description:
      "Flat three-core cable with colour-coded cores, commonly used to connect submersible pumps to the starter. The flat form lies neatly alongside the pump's riser pipe.",
    image: "/images/products/submersible-flat-cable.jpg",
    imageAlt: "Coil of blue 3-core flat submersible cable with red, yellow and blue cores",
    specs: [
      { label: "Conductor", value: "Stranded copper" },
      { label: "Insulation", value: "PVC + PVC sheath" },
      { label: "Cores", value: "3 (flat), colour-coded" },
      { label: "Supplied as", value: "Coils / cut length" },
      { label: "Rating", value: "Confirm at enquiry" },
    ],
    sizes: [
      "3 Core × 1.5 mm²",
      "3 Core × 2.5 mm²",
      "3 Core × 4.0 mm²",
      "3 Core × 6.0 mm²",
    ],
    sizeNote:
      "Choose the size according to pump rating and cable length. Stock confirmed at enquiry.",
    applications: [
      "Submersible water pumps",
      "Tube well and borehole installations",
      "Irrigation pump supply",
    ],
    featured: true,
  },
  {
    slug: "bare-and-green-ground-earthing-wire",
    name: "Bare & Green Ground Earthing Wire",
    category: "copper-wires",
    summary: "Bare copper and green insulated wire for earthing and grounding.",
    description:
      "Copper wire for earth connections, supplied bare and in green insulation. Used to connect panels, equipment frames and earth electrodes to the installation's earthing system.",
    image: "/images/products/single-core-earth-wire.jpg",
    imageAlt: "Coils of green and yellow insulated earth wire and bare copper wire",
    specs: [
      { label: "Conductor", value: "Copper" },
      { label: "Types", value: "Bare copper; green / green-yellow PVC insulated" },
      { label: "Cores", value: "1 (single core)" },
      { label: "Supplied as", value: "Coils" },
    ],
    sizes: ["3/0.029", "7/0.029", "7/0.036", "7/0.044", "7/0.052", "7/0.064"],
    sizeNote:
      "Strand count / strand diameter. Bare or insulated type to be stated in the enquiry.",
    applications: [
      "Earth continuity in wiring installations",
      "Panel and equipment earthing",
      "Connections to earth electrodes",
    ],
    featured: true,
  },
  {
    slug: "enamelled-copper-winding-magnet-wire",
    name: "Enamelled Copper Winding & Magnet Wire",
    category: "copper-wires",
    summary: "Enamel-coated round copper wire on spools for motor and coil winding.",
    description:
      "Round copper wire coated with a thin insulating enamel, supplied on spools. Used by rewinding workshops for fans, motors, transformers and coils.",
    image: "/images/products/copper-winding-wire.jpg",
    imageAlt: "Spool of enamelled copper winding wire",
    specs: [
      { label: "Conductor", value: "Round copper" },
      { label: "Insulation", value: "Enamel coating" },
      { label: "Size system", value: "SWG" },
      { label: "Supplied as", value: "Spools" },
      { label: "Thermal class", value: "Confirm at enquiry" },
    ],
    sizes: [
      "SWG 18",
      "SWG 20",
      "SWG 22",
      "SWG 24",
      "SWG 26",
      "SWG 28",
      "SWG 30",
      "SWG 32",
      "SWG 34",
      "SWG 36",
    ],
    sizeNote: "Spool weights and stock confirmed at enquiry.",
    applications: [
      "Fan and motor rewinding",
      "Transformer and choke winding",
      "Coils, solenoids and relays",
    ],
  },
  {
    slug: "armoured-multi-core-power-cable",
    name: "Armoured Multi-Core Power Cable",
    category: "power-cables",
    summary: "Multi-core copper power cable with steel wire armour and PVC sheath.",
    description:
      "Multi-core copper power cable with a layer of steel wire armour under the outer sheath for mechanical protection. Used for main supply and feeder runs where the cable may be exposed to physical damage, including underground routes.",
    image: "/images/products/industrial-power-cable.jpg",
    imageAlt: "Armoured multi-core power cable cut away to show steel wire armour and copper cores",
    specs: [
      { label: "Conductor", value: "Stranded copper" },
      { label: "Insulation", value: "PVC" },
      { label: "Protection", value: "Steel wire armour" },
      { label: "Outer sheath", value: "PVC" },
      { label: "Typical voltage class", value: "0.6/1 kV" },
      { label: "Supplied as", value: "Drums / cut length" },
    ],
    sizes: [
      "3 Core × 16 mm²",
      "3 Core × 25 mm²",
      "4 Core × 16 mm²",
      "4 Core × 25 mm²",
      "4 Core × 35 mm²",
      "4 Core × 50 mm²",
    ],
    sizeNote: "Larger sizes on request. Stock confirmed at enquiry.",
    applications: [
      "Main feeders from supply to distribution board",
      "Underground and outdoor cable runs",
      "Factories, workshops and commercial buildings",
    ],
  },
  {
    slug: "unarmoured-multi-core-power-cable",
    name: "Unarmoured Multi-Core Power Cable",
    category: "power-cables",
    summary: "Multi-core copper power cable with PVC insulation and PVC sheath.",
    description:
      "Multi-core copper power cable without armour, lighter and easier to install than armoured cable. Suited to indoor runs in trays, ducts and conduit where mechanical protection is provided by the installation.",
    image: "/images/products/unarmoured-power-cable.jpg",
    imageAlt: "Unarmoured multi-core power cable with red, yellow, blue and black cores",
    specs: [
      { label: "Conductor", value: "Stranded copper" },
      { label: "Insulation", value: "PVC" },
      { label: "Protection", value: "None (unarmoured)" },
      { label: "Outer sheath", value: "PVC" },
      { label: "Typical voltage class", value: "0.6/1 kV" },
      { label: "Supplied as", value: "Drums / cut length" },
    ],
    sizes: [
      "3 Core × 10 mm²",
      "3 Core × 16 mm²",
      "4 Core × 10 mm²",
      "4 Core × 16 mm²",
      "4 Core × 25 mm²",
      "4 Core × 35 mm²",
    ],
    sizeNote: "Larger sizes on request. Stock confirmed at enquiry.",
    applications: [
      "Sub-distribution boards",
      "Indoor cable trays and ducts",
      "Generator and changeover connections",
    ],
    featured: true,
  },
];

export function getCategory(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryName(slug: CategorySlug): string {
  return getCategory(slug)?.name ?? slug;
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.featured).slice(0, limit);
}

export function isCategorySlug(value: string | null | undefined): value is CategorySlug {
  return CATEGORIES.some((c) => c.slug === value);
}
