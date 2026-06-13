export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  category: "COUNTER-UAS" | "DETECTION & RADAR" | "SECURITY SYSTEMS" | "ENVIRONMENTAL";
  description: string;
  imageUrl: string;
  features: string[];
  specs: ProductSpec[];
}

export const PRODUCTS: Product[] = [
  {
    id: "01",
    title: "Interceptor AI Drone GEN3",
    category: "COUNTER-UAS",
    description: "An advanced autonomous counter-drone system developed to detect, track, and neutralize hostile UAVs with exceptional precision. Powered by AI-driven target recognition and intelligent tracking technology.",
    imageUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    features: [
      "AI-powered target tracking",
      "Autonomous interception capability",
      "Visual and infrared guidance",
      "High-speed response",
      "Mission-ready deployment"
    ],
    specs: [
      { label: "Max Speed", value: "180 km/h" },
      { label: "Response Time", value: "< 10 seconds" },
      { label: "Guidance", value: "Optical & Thermal IR" },
      { label: "Deployment", value: "Fully Autonomous" }
    ]
  },

  {
    id: "03",
    title: "Jammer Gun",
    category: "COUNTER-UAS",
    description: "Lightweight and portable anti-drone solution designed for fast and effective response against unauthorized UAV activity. Its ergonomic design allows operators to quickly engage drone threats while maintaining mobility.",
    imageUrl: "https://images.unsplash.com/photo-1595590424283-b8f1d44b1c28?auto=format&fit=crop&w=800&q=80",
    features: [
      "Handheld portable design",
      "Easy operation",
      "Directional jamming capability",
      "Quick deployment",
      "Suitable for tactical operations"
    ],
    specs: [
      { label: "Weight", value: "5.5 kg" },
      { label: "Effective Range", value: "1.5 km" },
      { label: "Form Factor", value: "Handheld Rifle style" },
      { label: "Targeting", value: "Directional Antenna Array" }
    ]
  },
  {
    id: "04",
    title: "Shield Drone Jammer",
    category: "COUNTER-UAS",
    description: "A compact counter-drone system engineered for mobile security operations and tactical deployments. It provides effective signal disruption against drone threats while maintaining flexibility and ease of use.",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    features: [
      "Compact and lightweight",
      "Tactical deployment ready",
      "Reliable signal disruption",
      "Easy transportation",
      "Enhanced field protection"
    ],
    specs: [
      { label: "Dimensions", value: "350 x 240 x 120 mm" },
      { label: "Weight", value: "3.8 kg" },
      { label: "Disruption Sector", value: "120 degrees" },
      { label: "Deployment Time", value: "Instant" }
    ]
  },
  {
    id: "05",
    title: "Portable Jammers",
    category: "COUNTER-UAS",
    description: "Designed to provide flexible and effective drone mitigation wherever security is required. Lightweight construction and rapid deployment capabilities make them suitable for temporary security zones.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    features: [
      "Lightweight construction",
      "Fast deployment",
      "Multi-frequency protection",
      "Easy transportation",
      "Versatile field applications"
    ],
    specs: [
      { label: "Coverage", value: "360° Omnidirectional" },
      { label: "Battery Life", value: "4 hours continuous" },
      { label: "Deployment", value: "Rapid Suitcase setup" },
      { label: "Frequencies", value: "GPS, ISM, FPV" }
    ]
  },
  {
    id: "06",
    title: "Backpack / Luggage Style Jammer",
    category: "COUNTER-UAS",
    description: "Combines powerful anti-drone capabilities with exceptional portability. Designed for covert and mobile operations, allowing operators to carry advanced jamming technology without bulky equipment.",
    imageUrl: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    features: [
      "Portable backpack design",
      "Covert deployment capability",
      "Extended operational range",
      "Easy mobility",
      "User-friendly operation"
    ],
    specs: [
      { label: "Output Power", value: "150W total" },
      { label: "Effective Range", value: "2.5 km" },
      { label: "Style", value: "Backpack / Rugged Luggage" },
      { label: "Weight", value: "12 kg" }
    ]
  },
  {
    id: "07",
    title: "Vehicle FPV Jammer",
    category: "COUNTER-UAS",
    description: "Specifically designed to protect vehicles and convoys from FPV drones and other aerial threats. Creates a protective electronic shield around moving assets to reduce vulnerability in hostile environments.",
    imageUrl: "https://images.unsplash.com/photo-1590422553965-f8c634c0388d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Protection against FPV drones",
      "Mobile deployment capability",
      "Rugged military-grade design",
      "Continuous operation",
      "Vehicle and convoy security"
    ],
    specs: [
      { label: "FPV Range", value: "1.2 km radius" },
      { label: "Mounting", value: "Roof magnetic / Fixed rack" },
      { label: "Power Source", "value": "Vehicle 24V DC" },
      { label: "Rating", value: "IP67 Weatherproof" }
    ]
  },
  {
    id: "08",
    title: "Vehicle-Mounted Detection Jammer",
    category: "COUNTER-UAS",
    description: "Integrates drone detection and jamming capabilities into a single mobile platform. Provides real-time threat awareness while enabling rapid countermeasures against hostile UAVs during transit.",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    features: [
      "Integrated detection and jamming",
      "Real-time threat identification",
      "Wide-area coverage",
      "Mobile protection platform",
      "Rapid response capability"
    ],
    specs: [
      { label: "Detection Range", value: "5 km" },
      { label: "Jamming Range", value: "3 km" },
      { label: "Scanner Type", value: "Passive RF Spectrum" },
      { label: "RF Power Output", value: "300W total" }
    ]
  },
  {
    id: "09",
    title: "Stationary Drone Jammer",
    category: "COUNTER-UAS",
    description: "Provides continuous, 24/7 protection for military bases, airports, government facilities, and critical infrastructure. Installed as a fixed security solution delivering reliable wide-area counter-UAV coverage.",
    imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80",
    features: [
      "24/7 operational readiness",
      "Fixed-site deployment",
      "Wide-area coverage",
      "Reliable performance",
      "Infrastructure protection"
    ],
    specs: [
      { label: "Coverage", value: "5 km radius" },
      { label: "Duty Cycle", value: "100% (24/7 continuous)" },
      { label: "Connectivity", value: "Fiber / RJ45 API Link" },
      { label: "Architecture", value: "Multi-sector directional" }
    ]
  },
  {
    id: "10",
    title: "Detector & Counter Integrated Jammer",
    category: "COUNTER-UAS",
    description: "This integrated system combines detection, identification, tracking, and jamming functions within a single platform, enabling operators to handle threats in a single workflow.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    features: [
      "All-in-one counter-drone solution",
      "Threat detection and tracking",
      "Integrated jamming capability",
      "Real-time monitoring",
      "Enhanced situational awareness"
    ],
    specs: [
      { label: "Scanner Bandwidth", value: "70 MHz - 6 GHz" },
      { label: "Target Capacity", value: "Up to 30 drones tracked" },
      { label: "Decision Matrix", value: "Automated / Human-in-loop" },
      { label: "Power Source", value: "AC 220V / Generator Backup" }
    ]
  },
  {
    id: "11",
    title: "Detection & Jammers Backpack",
    category: "COUNTER-UAS",
    description: "A portable counter-UAV solution designed for rapid field deployment. Combining drone detection and mitigation in a compact format, it keeps tactical teams agile and protected.",
    imageUrl: "https://images.unsplash.com/photo-1533240332313-0db49b439ad3?auto=format&fit=crop&w=800&q=80",
    features: [
      "Portable tactical design",
      "Detection and jamming functions",
      "Rapid deployment",
      "Easy operation",
      "Mobile protection capability"
    ],
    specs: [
      { label: "Detection Range", value: "1.5 km" },
      { label: "Jamming Range", value: "1.0 km" },
      { label: "Weight", value: "11.5 kg" },
      { label: "Battery Life", value: "3.5 hours tracking + jam" }
    ]
  },
  {
    id: "12",
    title: "UAD-100 Handheld UAV Detector",
    category: "DETECTION & RADAR",
    description: "A compact drone detection device designed for real-time identification and monitoring of UAV activity. Uses advanced signal analysis to detect commercial, custom, and FPV drones.",
    imageUrl: "https://images.unsplash.com/photo-1584438784894-089d6a128f3e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Multi-UAV detection capability",
      "Remote ID decoding",
      "GNSS positioning support",
      "Unknown signal recognition",
      "Portable IP55-rated design"
    ],
    specs: [
      { label: "Device Weight", value: "950g" },
      { label: "Scan Frequencies", value: "2.4 GHz, 5.8 GHz, 1.2 GHz" },
      { label: "IP Rating", value: "IP55 Weatherproof" },
      { label: "Display", value: "High-contrast LCD" }
    ]
  },
  {
    id: "13",
    title: "Oil-Water Separation System",
    category: "ENVIRONMENTAL",
    description: "An advanced environmental protection solution designed to remove oil and petroleum contaminants from water surfaces. Continuously purifies water to support industrial safety and eco-conservation.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    features: [
      "Continuous separation process",
      "High purification efficiency",
      "Eco-friendly operation",
      "Low maintenance design",
      "Scalable deployment"
    ],
    specs: [
      { label: "Purification Rate", value: "99.8%" },
      { label: "Capacity", value: "5000 L/hour" },
      { label: "System Maintenance", value: "Every 5000 hours" },
      { label: "Structure", value: "Continuous Coalescing Matrix" }
    ]
  },
  {
    id: "14",
    title: "Bi-Section EM Fence",
    category: "SECURITY SYSTEMS",
    description: "An intelligent perimeter security solution designed to detect unauthorized intrusions with high accuracy. Creates an invisible electromagnetic protective barrier around sensitive locations.",
    imageUrl: "https://images.unsplash.com/photo-1508847154043-be12a3b4d69e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Invisible security barrier",
      "High detection accuracy",
      "Low false alarm rate",
      "Remote monitoring capability",
      "Flexible deployment options"
    ],
    specs: [
      { label: "Sensor Type", value: "Bi-Section EM Field" },
      { label: "Intrusion Logic", value: "Neural Network Classifier" },
      { label: "Detection Accuracy", value: "99.9%" },
      { label: "False Alarms", value: "< 1% (Classified triggers)" }
    ]
  },
  {
    id: "15",
    title: "4-Layer Protected System (D⁴-EWS)",
    category: "DETECTION & RADAR",
    description: "A multi-layer airspace awareness and early warning system developed to detect, track, and classify low-altitude aerial threats using integrated radar, RF sensing, acoustic, and electro-optical sensors.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    features: [
      "Four-layer detection architecture",
      "Long-range surveillance capability",
      "Multi-sensor integration",
      "Real-time threat tracking",
      "Scalable deployment platform"
    ],
    specs: [
      { label: "Range", value: "10 km" },
      { label: "Sensors", value: "Radar, RF Scan, Acoustic, EO/IR" },
      { label: "Refresh Rate", value: "< 1 second" },
      { label: "Classification", value: "AI Multi-sensor fusion" }
    ]
  }
];
