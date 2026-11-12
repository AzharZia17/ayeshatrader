/**
 * Technical reference content for the Quality page and homepage.
 * General industry information only. It is not a statement of certification
 * or compliance for any specific Ayesha Traders product.
 */

export interface TableRow {
  cells: string[];
}

export interface InfoTable {
  caption: string;
  columns: string[];
  rows: string[][];
  note?: string;
}

export interface InfoBlock {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CONDUCTOR_INFO: InfoBlock[] = [
  {
    title: "Copper",
    body: "Copper conducts well and is easy to terminate. Larger sizes are made from twisted strands for easier bending.",
  },
  {
    title: "Strand construction",
    body: "Strand count and diameter define the size. Fine strands suit flexible cable; thicker strands suit fixed wiring.",
  },
  {
    title: "Comparing offers",
    body: "Ask for the size marking and strand construction, and have critical sizes checked by an electrician.",
  },
];

export const INSULATION_TABLE: InfoTable = {
  caption: "Common cable construction materials",
  columns: ["Material", "Where it is used", "Notes"],
  rows: [
    [
      "PVC insulation",
      "Building wire, flexible cable, power cable cores",
      "Common general-purpose insulation, available in colour-coded cores.",
    ],
    [
      "PVC outer sheath",
      "Twin flat, flexible, submersible and power cables",
      "Holds the cores together and protects them from abrasion.",
    ],
    [
      "Steel wire armour",
      "Armoured power cable",
      "Layer of steel wires under the sheath for mechanical protection.",
    ],
    [
      "Enamel coating",
      "Winding and magnet wire",
      "Thin insulating film on round copper wire for coils and windings.",
    ],
    [
      "Bare copper",
      "Earthing conductors",
      "No insulation; used where the conductor is in direct contact with earth fittings.",
    ],
  ],
};

export const VOLTAGE_TABLE: InfoTable = {
  caption: "Typical voltage classes by cable type",
  columns: ["Cable type", "Typical voltage class", "Typical use"],
  rows: [
    ["Single core PVC building wire", "450/750 V", "Fixed wiring in conduit"],
    ["Twin flat PVC cable", "300/500 V", "Surface wiring, light-duty circuits"],
    ["Flexible multi-core cable", "300/500 V", "Appliances and equipment"],
    ["Armoured / unarmoured power cable", "0.6/1 kV", "Feeders and distribution"],
  ],
  note: "Typical classes by cable type, not a certification. Confirm the rating of the stock you order.",
};

export const GAUGE_GUIDE: InfoTable = {
  caption: "Indicative wire size guide for common applications",
  columns: ["Typical application", "Indicative size", "Cable type"],
  rows: [
    ["Lighting circuits", "1.0–1.5 mm²", "PVC building wire"],
    ["Fans and light loads", "1.5 mm²", "PVC building wire"],
    ["Socket outlet circuits", "2.5 mm²", "PVC building wire"],
    ["Air conditioner and geyser circuits", "4.0–6.0 mm²", "PVC building wire / flexible cable"],
    ["Submersible pump supply", "Depends on pump rating and run length", "Flat submersible cable"],
    ["Sub-mains and main feeders", "10 mm² and above", "Armoured / unarmoured power cable"],
  ],
  note: "Indicative only. Have a qualified electrician select the size for your installation.",
};

export const HOME_SPEC_TABLE: InfoTable = {
  caption: "Construction overview by product group",
  columns: ["Product group", "Conductor", "Insulation / protection", "Form"],
  rows: [
    ["PVC Electric Wires", "Stranded copper", "PVC", "Coils"],
    ["Flexible Cables", "Fine-stranded copper", "PVC", "Coils / cut length"],
    ["Copper Wires", "Copper", "Bare, PVC or enamel", "Coils / spools"],
    ["Power Cables", "Stranded copper", "PVC, steel wire armour", "Drums / cut length"],
  ],
};

export const FAQS: FaqItem[] = [
  {
    question: "Do you publish fixed prices?",
    answer: "No. Prices change often, so we quote on your product, size and quantity. Ask on WhatsApp or call us.",
  },
  {
    question: "How do I choose the right cable size?",
    answer: "It depends on load, length and installation. Use the size guide as a start and confirm with an electrician.",
  },
  {
    question: "Can I order a specific length?",
    answer: "Many products come as coils or drums, and some as cut lengths. Tell us the length when you inquire.",
  },
  {
    question: "Do your cables carry certifications?",
    answer: "We make no certification claims on this website. If a project needs a specific standard, ask us before ordering.",
  },
  {
    question: "Armoured or unarmoured cable?",
    answer: "Armoured cable has steel wire protection for outdoor or underground runs. Unarmoured is lighter, for indoor trays and ducts.",
  },
  {
    question: "Which cable suits a submersible pump?",
    answer: "Flat submersible cable is common. Share the pump rating and cable length so we can suggest a size.",
  },
];
