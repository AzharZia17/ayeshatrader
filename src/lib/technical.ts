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
    title: "Copper conductors",
    body: "Copper is widely used for building wire and cables because it conducts electricity well and is easy to terminate. Larger sizes are made from several strands twisted together, which makes the cable easier to bend and pull.",
  },
  {
    title: "Solid and stranded construction",
    body: "Strand count and strand diameter together define the conductor size. Fine-stranded conductors are more flexible and are used in flexible cables; fewer, thicker strands suit fixed wiring.",
  },
  {
    title: "Checking a conductor",
    body: "Conductor size can differ between products. Ask for the size marking and strand construction when comparing offers, and have critical sizes checked by a qualified electrician.",
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
  note: "These are typical classes for each cable type, not a certification. Please confirm the rating of the specific stock when you place an enquiry.",
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
  note: "Indicative only. The correct size depends on load, cable length, installation method and local regulations. Have a qualified electrician select the size for your installation.",
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
    answer:
      "No. Copper and cable prices change regularly, so we quote against your exact product, size and quantity. Send an inquiry on WhatsApp or call us for the current price.",
  },
  {
    question: "How do I choose the right cable size?",
    answer:
      "Cable size depends on the load, the length of the run and how the cable is installed. Use our size guide as a starting point and have a qualified electrician confirm the size for your project.",
  },
  {
    question: "Can I order a specific length or a full coil?",
    answer:
      "Many products are supplied as full coils or drums, and some can be supplied as cut lengths. Tell us the length you need when you inquire.",
  },
  {
    question: "Do your cables carry certifications or standards marks?",
    answer:
      "We do not make any certification claims on this website. If you need a specific standard or test report for a project, ask us before ordering and we will tell you what is available for that product.",
  },
  {
    question: "What is the difference between armoured and unarmoured cable?",
    answer:
      "Armoured cable has a layer of steel wires under the outer sheath for mechanical protection and is used for outdoor or underground runs. Unarmoured cable is lighter and is used indoors where it is protected by trays, ducts or conduit.",
  },
  {
    question: "Which cable is used with a submersible pump?",
    answer:
      "Flat submersible cable is commonly used. The size depends on the pump rating and the distance from the starter to the pump, so share both when you inquire.",
  },
];
