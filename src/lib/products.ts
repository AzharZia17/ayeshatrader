export type ProductCategory =
  | "PVC Electric Wires"
  | "Flexible Cables"
  | "Copper Wires"
  | "Power Cables";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription: string;
  conductor: string;
  insulation: string;
  voltageGrade: string;
  availableSizes: string[];
  applications: string[];
  features: string[];
  image: string;
  isFeatured?: boolean;
  tag?: string;
}

export const CATEGORIES: ProductCategory[] = [
  "PVC Electric Wires",
  "Flexible Cables",
  "Copper Wires",
  "Power Cables",
];

export const PRODUCTS: Product[] = [
  {
    id: "pvc-single-core-building-wire",
    name: "Single Core PVC Building Wire",
    category: "PVC Electric Wires",
    shortDescription:
      "General-purpose single core insulated copper wire for residential and commercial conduit wiring.",
    fullDescription:
      "High-conductivity copper conductor insulated with premium lead-free PVC compound. Designed for conduit and surface wiring in homes, shops, and commercial offices with dependable heat and moisture resistance.",
    conductor: "High Conductivity Annealed Copper",
    insulation: "Flame Retardant PVC (Grade A)",
    voltageGrade: "450 / 750 V",
    availableSizes: [
      "3/0.029 (1.0 mm²)",
      "7/0.029 (1.5 mm²)",
      "7/0.036 (2.5 mm²)",
      "7/0.044 (4.0 mm²)",
      "7/0.052 (6.0 mm²)",
      "7/0.064 (10.0 mm²)",
    ],
    applications: [
      "Residential conduit wiring",
      "Lighting circuits and fan points",
      "Power plug circuits and switchboards",
      "Commercial office buildings",
    ],
    features: [
      "Smooth sheath for easy pulling through PVC conduits",
      "High dielectric insulation resistance",
      "High copper purity for low electrical losses",
      "Available in Red, Black, Blue, Yellow, and Green",
    ],
    image: "/images/pvc-building-wire.svg",
    isFeatured: true,
    tag: "High Demand",
  },
  {
    id: "pvc-twin-flat-wire",
    name: "Twin Flat PVC Cable (2-Core)",
    category: "PVC Electric Wires",
    shortDescription:
      "Two-core flat cable with individual PVC insulated copper conductors and overall protective sheath.",
    fullDescription:
      "Popular for surface wiring, battens, and domestic installations. Features two parallel solid or stranded copper conductors independently insulated and encased in a flat white outer PVC sheath for clean surface appearance.",
    conductor: "Electrolytic Annealed Copper",
    insulation: "Dual-layer PVC insulation and outer sheath",
    voltageGrade: "300 / 500 V",
    availableSizes: [
      "3/0.029 (2-Core)",
      "7/0.029 (2-Core)",
      "7/0.036 (2-Core)",
      "7/0.044 (2-Core)",
    ],
    applications: [
      "Surface wiring on wood battens or clips",
      "Domestic room extensions and lighting",
      "Shop counter wiring and display setups",
    ],
    features: [
      "Compact flat profile rests neat against walls",
      "Easy stripping and termination",
      "Tough outer jacket prevents physical abrasions",
    ],
    image: "/images/twin-flat-wire.svg",
    isFeatured: false,
  },
  {
    id: "flexible-multicore-copper-cable",
    name: "Flexible Multi-Core Copper Cable",
    category: "Flexible Cables",
    shortDescription:
      "Highly flexible round multi-core cable for portable equipment, machinery, and appliances.",
    fullDescription:
      "Manufactured with finely bunched copper strands offering exceptional bending flexibility and vibration tolerance. Protected with an oil and weather-resistant flexible PVC outer sheath.",
    conductor: "High-Flexibility Multi-Strand Fine Copper",
    insulation: "Flexible Polyvinyl Chloride (PVC)",
    voltageGrade: "300 / 500 V & 450 / 750 V",
    availableSizes: [
      "2 Core (0.75 mm² - 4.0 mm²)",
      "3 Core (1.0 mm² - 6.0 mm²)",
      "4 Core (1.5 mm² - 10.0 mm²)",
      "5 Core (1.5 mm² - 4.0 mm²)",
    ],
    applications: [
      "Heavy domestic appliances (Refrigerators, ACs, Washing Machines)",
      "Industrial machinery hookups and extension cords",
      "Movable power distribution boards",
      "Workshop and power tool cabling",
    ],
    features: [
      "High flexibility prevents strand breakage upon repeated flexing",
      "Color-coded internal cores for safe installation",
      "Abrasion and tear-resistant outer circular jacket",
    ],
    image: "/images/flexible-multicore-cable.svg",
    isFeatured: true,
    tag: "Top Quality",
  },
  {
    id: "submersible-flat-pump-cable",
    name: "3-Core Flat Submersible Cable",
    category: "Flexible Cables",
    shortDescription:
      "Water-resistant flat cable engineered specifically for deep-well submersible agricultural and tube well pumps.",
    fullDescription:
      "Specially formulated waterproof grade insulation and sheathing that withstands continuous water submersion, high hydrostatic pressure, and temperature fluctuations in deep borewells and tube wells.",
    conductor: "Class 5 Flexible Copper Conductors",
    insulation: "Water-impervious Grade PVC / Rubber Sheath",
    voltageGrade: "600 / 1000 V",
    availableSizes: [
      "3 Core × 2.5 mm²",
      "3 Core × 4.0 mm²",
      "3 Core × 6.0 mm²",
      "3 Core × 10.0 mm²",
      "3 Core × 16.0 mm²",
    ],
    applications: [
      "Agricultural tube well submersible water pumps",
      "Deep well domestic water pumps",
      "Irrigation water lift systems",
      "Wastewater and drainage submersible systems",
    ],
    features: [
      "Impervious to water penetration under pressure",
      "Excellent dielectric strength under submerged conditions",
      "Flexible flat geometry facilitates borehole pipe attachment",
    ],
    image: "/images/submersible-flat-cable.svg",
    isFeatured: true,
  },
  {
    id: "bare-copper-earthing-wire",
    name: "Bare & Green Ground Earthing Wire",
    category: "Copper Wires",
    shortDescription:
      "High-conductivity solid and stranded copper conductors for electrical grounding and lightning safety.",
    fullDescription:
      "Essential for safeguarding human life, buildings, and electrical equipment. High electrical conductivity ensures rapid discharge of fault currents into the ground with minimal impedance.",
    conductor: "99%+ Electrolytic Tough Pitch (ETP) Copper",
    insulation: "Available Bare or Green/Yellow Striped PVC",
    voltageGrade: "Grounding / Earth Return",
    availableSizes: [
      "7/0.036 (Earthing)",
      "7/0.044 (Earthing)",
      "7/0.064 (Earthing)",
      "16 mm² Bare Stranded",
      "25 mm² Bare Stranded",
      "35 mm² Bare Stranded",
    ],
    applications: [
      "Main electrical panel grounding (Earth pit connection)",
      "Lightning arrestor down-conductors",
      "Transformer and generator neutral earthing",
      "Industrial equipment body earthing",
    ],
    features: [
      "Low electrical resistance for maximum safety discharge",
      "High corrosion resistance when exposed to soils",
      "Durable heavy-gauge construction",
    ],
    image: "/images/single-core-earth-wire.svg",
    isFeatured: false,
  },
  {
    id: "enameled-copper-winding-wire",
    name: "Copper Winding & Magnet Wire",
    category: "Copper Wires",
    shortDescription:
      "Enamelled pure copper magnet wire for electric motors, transformers, and fan rewinding.",
    fullDescription:
      "High purity copper drawn to precise round gauges and coated with thin, tough enamel insulation. Engineered for high dielectric breakdown resistance, smooth winding, and high thermal endurance.",
    conductor: "Refined High-Purity Copper Rod",
    insulation: "High Thermal Class Polyurethane / Polyester Enamel",
    voltageGrade: "Up to 155°C / 180°C Thermal Class",
    availableSizes: [
      "SWG 18 to SWG 36 available on wooden & plastic spools",
      "Custom spool weights: 5 kg, 10 kg, 20 kg",
    ],
    applications: [
      "Ceiling fan and exhaust fan motor winding",
      "Single-phase and 3-phase electric motors",
      "Distribution and power transformers",
      "Solenoids, coils, and choke assemblies",
    ],
    features: [
      "Uniform enamel film thickness without pinholes",
      "High thermal endurance prevents short circuits under load",
      "Smooth surface finish prevents enamel peeling during winding",
    ],
    image: "/images/copper-winding-wire.svg",
    isFeatured: true,
    tag: "Workshop Favorite",
  },
  {
    id: "low-voltage-armoured-power-cable",
    name: "Armoured Multi-Core Power Cable",
    category: "Power Cables",
    shortDescription:
      "Steel wire armoured (SWA) heavy-duty copper power cable for direct burial and industrial power feed.",
    fullDescription:
      "Engineered for rugged environments where mechanical protection is required. Features multi-core copper conductors, primary PVC/XLPE insulation, extruded PVC bedding, galvanised steel wire armour, and tough black PVC oversheath.",
    conductor: "Stranded Circular Compacted Annealed Copper",
    insulation: "XLPE / Heavy PVC Compound",
    voltageGrade: "600 / 1000 V (0.6/1.0 kV)",
    availableSizes: [
      "4 Core × 10 mm²",
      "4 Core × 16 mm²",
      "4 Core × 25 mm²",
      "4 Core × 35 mm²",
      "4 Core × 50 mm²",
      "4 Core × 70 mm² and above",
    ],
    applications: [
      "Main power distribution from transformer to main panel",
      "Direct ground burial without conduits",
      "Industrial factory and workshop main feeders",
      "Commercial plaza power infrastructure",
    ],
    features: [
      "Steel armour protects against heavy physical impacts and rodents",
      "Can be directly buried underground",
      "High short-circuit current carrying capacity",
    ],
    image: "/images/industrial-power-cable.svg",
    isFeatured: true,
    tag: "Heavy Duty",
  },
  {
    id: "unarmoured-cu-pvc-power-cable",
    name: "Unarmoured Multi-Core Power Cable",
    category: "Power Cables",
    shortDescription:
      "Multi-core industrial copper power cable for installation in cable trays, trenches, and conduits.",
    fullDescription:
      "Designed for reliable secondary power distribution indoors and sheltered environments. Offers excellent conductivity, reduced weight compared to armoured options, and dependable insulation life.",
    conductor: "High Conductivity Plain Annealed Stranded Copper",
    insulation: "PVC Insulation with Tough Outer PVC Sheath",
    voltageGrade: "600 / 1000 V",
    availableSizes: [
      "2 Core (4.0 mm² - 25 mm²)",
      "3 Core (4.0 mm² - 50 mm²)",
      "4 Core (4.0 mm² - 70 mm²)",
    ],
    applications: [
      "Indoor cable trays and ladders",
      "Sub-distribution boards in plazas and factories",
      "Generator connection panels",
      "HVAC and central chiller power lines",
    ],
    features: [
      "Lighter weight and easier handling than armoured cable",
      "Weather and UV resistant outer sheath",
      "Certified gauge specifications",
    ],
    image: "/images/industrial-power-cable.svg",
    isFeatured: false,
  },
];

