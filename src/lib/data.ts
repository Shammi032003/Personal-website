/**
 * Single source of truth for all portfolio content. Editing copy or adding an
 * entry here automatically flows through every section + sub-page.
 */

/* ------------------------------------------------------------------ Journey */
export interface JourneyEntry {
  year: string;
  title: string;
  items: string[];
}

export const journey: JourneyEntry[] = 
[
{
year: '2021',
title: 'The Beginning',
items: [
'Started Bachelor’s in AI & Machine Learning',
'Built foundations in programming, mathematics, and intelligent systems'
],
},

{
year: '2022',
title: 'First Breakthroughs',
items: [
'Winner — IEEE Hackathon',
'Top 3 South India Zonals — CoDecode National Coding Competition',
'Recognized among 1,000+ competing teams nationwide'
],
},

{
year: '2023',
title: 'National Recognition',
items: [
'Runner-Up — Smart India Hackathon (ISRO Problem Statement)',
'3rd Place — Techfest IIT Bombay Atom Quest (1,000+ Teams)',
'Runner-Up — IBM Evolve National Hackathon',
'Led multiple award-winning teams in national competitions'
],
},

{
year: '2024',
title: 'Research & Global Exposure',
items: [
'Research Intern — IISc Centre for Data for Public Good',
'Research Intern — AUT Knowledge Engineering Institute, New Zealand',
'Project Intern — DRDO Young Scientist Laboratory (AI)',
'Delegate — Harvard Project for Asian and International Relations (HPAIR)',
'Published research across AI, Machine Learning, and Applied Sciences'
],
},

{
year: '2025',
title: 'Innovation & Impact',
items: [
'Filed and Published Multiple Patents',
'Published Research in IEEE, Springer, and Elsevier',
'Best Final Year Project & Best Presenter Award',
'Awarded Research and Innovation Scholarships',
'Joined 42Gears Mobility Systems as SDE 1 and AI Engineer at Puma', 
],
},

{
year: '2026',
title: 'Industry & Next Chapter',
items: [
'AI Engineer — Puma',
'Building Enterprise AI, Multi-Agent Systems, and LLM Applications',
'Master of Science at University of Pennsylvania'
],
}
]


/* -------------------------------------------------------------------- Stats */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 4, suffix: '', label: 'Patents' },
  { value: 5, suffix: '', label: 'Research Publications' },
  { value: 6, suffix: '', label: 'Research & Industry Internships' },
  { value: 50, suffix: '+', label: 'Projects Built' },
  { value: 98, suffix: '%', label: 'Enterprise AI Accuracy' },
  { value: 6000, suffix: '+', label: 'Records Automated at Puma' },
];

/* ------------------------------------------------------------- What I Build */
export interface BuildCard {
  index: string;
  domain: string;
  org: string;
  items: string[];
  image?: string;
}

export const builds: BuildCard[] = [
  {
    index: '01',
    domain: 'Enterprise AI',
    org: 'PUMA',
    image: '/puma-logo.jpg',
    items: [
    'HSN Classification Platform',
    'Multi-Agent Retail Assistant',
    'Freight Invoice Automation',
    'Gender Personalization Engine'
    
  ],
  },
  {
    index: '02',
    domain: 'Computer Vision',
    org: 'DRDO',
    items: ['OCR Pipelines', 'Blur Detection', 'Document Intelligence'],
  },
  {
    index: '03',
    domain: 'Research Systems',
    org: 'IISc',
    items: ['Real-time Bus Tracking', 'ETA Prediction', 'Route Optimization'],
  },
  {
    index: '04',
    domain: 'Neuroscience Inspired AI',
    org: 'AUT New Zealand',
    items: ['NeuCube', 'Spiking Neural Networks', 'Cognitive Modeling'],
  },
];

/* ----------------------------------------------------------------- Research */
export interface Publication {
  title: string;
  venue: string;
  year: string;
  summary: string;
  doi: string; // full URL or '#'
}

export const publications: Publication[] = [
  {
    title: 'Detection of Potability of Drinking Water using Machine Learning',
    venue: 'International Journal',
    year: '2023',
    summary:
      'A supervised learning pipeline that classifies water samples as potable from physicochemical signals, with feature analysis on the most predictive indicators of drinkability.',
    doi: '#',
  },
  {
    title: 'PEM Fuel Cell Performance Analysis',
    venue: 'Energy Systems',
    year: '2024',
    summary:
      'Data-driven modelling of proton-exchange-membrane fuel cell behaviour across operating regimes to predict performance degradation and optimise efficiency.',
    doi: '#',
  },
  {
    title: 'Graph Neural Networks: A Survey',
    venue: 'Survey',
    year: '2024',
    summary:
      'A structured survey of GNN architectures, message-passing paradigms and applications spanning molecules, traffic networks and recommendation systems.',
    doi: '#',
  },
  {
    title: 'Fluorescent Benzothiazole Research',
    venue: 'Chemistry',
    year: '2024',
    summary:
      'Investigation of fluorescent benzothiazole derivatives and their optical response, bridging computational screening with experimental characterisation.',
    doi: '#',
  },
  {
    title: 'Customizing LLMs for NCERT Textbooks',
    venue: 'NLP / Education',
    year: '2025',
    summary:
      'Domain-adapting large language models to NCERT curriculum content, producing a grounded tutor that answers strictly from the source textbooks.',
    doi: '#',
  },
];

/* ------------------------------------------------------- Innovation / Patents */
export interface Innovation {
  title: string;
  patentNumber: string;
  year: string;
  status: 'Granted' | 'Published' | 'Filed';
  summary: string;
}

export const innovations: Innovation[] = [
  {
    title: 'AI Chemistry Analyzer',
    patentNumber: 'Application No. 413050-001',
    year: '2024',
    status: 'Granted',
    summary:
      'An intelligent system that analyses chemical compositions and reactions, surfacing insights from spectroscopic and sensor data.',
  },
  {
    title: 'Smart Refrigerator Intelligence System',
    patentNumber: 'Application No. 202441052964',
    year: '2024',
    status: 'Published',
    summary:
      'Perception-driven inventory and freshness tracking that anticipates consumption and reduces food waste.',
  },
  {
    title: 'Soil Nutrient Intelligence Platform',
    patentNumber: 'Application No. 202441052961',
    year: '2024',
    status: 'Published',
    summary:
      'A precision-agriculture platform that maps soil nutrient profiles and recommends data-grounded interventions.',
  },
  {
    title: 'Solar Water Purification System',
    patentNumber: 'Application No. 202441052962',
    year: '2024',
    status: 'Published',
    summary:
      'A self-optimising solar purification unit that adapts to water quality and solar conditions in real time.',
  },
];

/* ------------------------------------------------------------ Organizations */
export interface Organization {
  name: string;
  contribution: string;
}

export const organizations: Organization[] = [
  {
    name: 'PUMA',
    contribution:
      'As an AI Engineer, built enterprise systems — HSN classification, multi-agent retail assistants and freight invoice automation at 98% accuracy.',
  },
  {
    name: '42Gears',
    contribution:
      'As an SDE, Applied machine learning across enterprise mobility and device-management intelligence.',
  },
  {
    name: 'DRDO',
    contribution:
      'Focused on computer vision — OCR pipelines, blur detection and document intelligence for defense-grade workflows.',
  },
  {
    name: 'IISc',
    contribution:
      'Developed systems — real-time bus tracking, ETA prediction and route optimisation over live transit data.',
  },
  {
    name: 'AUT',
    contribution:
      'Neuroscience-inspired AI — NeuCube, spiking neural networks and cognitive modelling at Auckland University of Technology.',
  },
  {
    name: 'Radyeus Labs',
    contribution:
      'Harvard Project for Asian and International Relations — selected delegate engaging on technology and policy.',
  },
];

/* ------------------------------------------------------------ Institutions (UI data) */
export interface Institution {
  id: string;
  name: string;
  role: string;
  dates: string;
  description: string;
  img: string;
}

export const institutions: Institution[] = [
  {
    id: 'puma',
    name: 'PUMA',
    role: 'AI Engineer',
    dates: 'Oct 2025 - Present',
    description:
      'Built enterprise AI systems for retail intelligence, workflow automation, and multi-agent applications.',
    img: '/puma-logo.jpg',
  },
  {
    id: '42gears',
    name: '42Gears',
    role: 'SDE 1',
    dates: 'Jan 2025 - Sept 2025',
    description:
  'Built enterprise macOS management and AI-powered automation systems supporting 10,000+ devices.',
    img: '/42gears-logo.jpeg',
  },
  {
    id: 'drdo',
    name: 'DRDO',
    role: 'Project Intern',
    dates: 'Oct 2024 - Jan 2025',
    description:
      'Built OCR and document-intelligence pipelines using computer vision and machine learning.',
    img: '/drdo-logo.png',
  },
  {
    id: 'iisc',
    name: 'Indian Institute of Science',
    role: 'Research Intern',
    dates: 'Sep 2024 - Jan 2025',
    description:
      'Worked on real-time transit intelligence systems, ETA prediction, and route optimization.',
    img: '/iisc-logo.jpeg',
  },
  {
    id: 'aut',
    name: 'AUT New Zealand',
    role: 'Research Intern',
    dates: 'Jul 2024 - Jan 2025',
    description:
      'Conducted research on NeuCube and spiking neural networks for cognitive modeling.',
    img: '/aut-logo.jpeg',
  },
];

/* ---------------------------------------------------- Research Interests graph */
export interface InterestNode {
  id: string;
  label: string;
  /** Normalised position in the unit square (0..1). */
  x: number;
  y: number;
}

export const interestNodes: InterestNode[] = [
  { id: 'agentic', label: 'Agentic AI', x: 0.5, y: 0.5 },
  { id: 'mas', label: 'Multi-Agent Systems', x: 0.24, y: 0.28 },
  { id: 'reasoning', label: 'Reasoning Models', x: 0.74, y: 0.26 },
  { id: 'cv', label: 'Computer Vision', x: 0.16, y: 0.66 },
  { id: 'llm', label: 'Large Language Models', x: 0.78, y: 0.62 },
  { id: 'gnn', label: 'Graph Neural Networks', x: 0.4, y: 0.82 },
  { id: 'snn', label: 'Spiking Neural Networks', x: 0.66, y: 0.84 },
  { id: 'multimodal', label: 'Multimodal AI', x: 0.86, y: 0.4 },
];

// Connections drawn between interest nodes (by id).
export const interestEdges: [string, string][] = [
  ['agentic', 'mas'],
  ['agentic', 'reasoning'],
  ['agentic', 'llm'],
  ['agentic', 'multimodal'],
  ['mas', 'reasoning'],
  ['mas', 'cv'],
  ['reasoning', 'llm'],
  ['llm', 'multimodal'],
  ['cv', 'gnn'],
  ['gnn', 'snn'],
  ['snn', 'llm'],
  ['multimodal', 'reasoning'],
];

/* ----------------------------------------------------------- Selected Projects */
export interface Project {
  title: string;
  overview: string;
  tech: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: 'Image-to-Animation Conversion',
    overview:
      'Turns a single still image into fluid motion using generative models and motion-field estimation.',
    tech: ['PyTorch', 'Diffusion', 'OpenCV', 'CUDA'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-Time DVB-S2 Stream Analysis',
    overview:
      'Low-latency signal analysis of DVB-S2 satellite streams with live demodulation diagnostics.',
    tech: ['Python', 'DSP', 'GNU Radio', 'NumPy'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Emotion Detection Quotes',
    overview:
      'Detects emotion from text and surfaces a resonant quote — a small, warm application of affective NLP.',
    tech: ['NLP', 'Transformers', 'FastAPI', 'React'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Mental Health Support Platform',
    overview:
      'A supportive conversational platform with safety-aware routing and grounded, empathetic responses.',
    tech: ['LLMs', 'RAG', 'Next.js', 'Vector DB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Gesture Controlled Mouse',
    overview:
      'Hands-free pointer control using real-time hand-landmark tracking from a standard webcam.',
    tech: ['MediaPipe', 'OpenCV', 'Python', 'Computer Vision'],
    github: '#',
    demo: '#',
  },
];
