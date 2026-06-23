'use client';

import { useMemo, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const W = 1000;
const H = 620;
const PAD_X = 90;
const PAD_Y = 70;

// Clustered layout: group related domains visually for recruiters
const NODES = [
  { id: 'enterprise', label: 'Enterprise AI', x: 0.52, y: 0.48 },
  { id: 'mas', label: 'Multi-Agent Systems', x: 0.36, y: 0.38 },
  { id: 'llm', label: 'Large Language Models', x: 0.68, y: 0.36 },
  { id: 'reasoning', label: 'Reasoning Systems', x: 0.78, y: 0.22 },
  { id: 'enterpriseSys', label: 'Enterprise Systems', x: 0.82, y: 0.48 },
  { id: 'cv', label: 'Computer Vision', x: 0.18, y: 0.7 },
  { id: 'multimodal', label: 'Multimodal Intelligence', x: 0.6, y: 0.7 },
  { id: 'gnn', label: 'Graph Learning', x: 0.34, y: 0.86 },
  { id: 'neuro', label: 'Neuroscience AI', x: 0.78, y: 0.86 },
];

const EDGES: [string, string][] = [
  ['enterprise', 'mas'],
  ['mas', 'llm'],
  ['llm', 'reasoning'],
  ['reasoning', 'enterpriseSys'],
  ['cv', 'multimodal'],
  ['cv', 'gnn'],
  ['gnn', 'neuro'],
  ['multimodal', 'enterprise'],
  // emphasize some cross-links
  ['llm', 'multimodal'],
  ['enterprise', 'llm'],
];

const SKILLS: Record<string, string[]> = {
  enterprise: ['Python', 'FastAPI', 'LLMs', 'RAG', 'Agent Frameworks', 'Enterprise APIs'],
  cv: ['OpenCV', 'CNNs', 'YOLO', 'OCR', 'Image Processing'],
  neuro: ['NeuCube', 'Spiking Neural Networks', 'Brain-inspired Computing'],
  mas: ['Multi-agent frameworks', 'Reinforcement Learning', 'Simulation'],
  llm: ['Transformers', 'Fine-tuning', 'Prompt Engineering'],
  gnn: ['GNNs', 'PyG / DGL', 'Graph Representation Learning'],
  multimodal: ['Cross-modal fusion', 'CLIP', 'Audio-visual models'],
  reasoning: ['Symbolic methods', 'Probabilistic reasoning', 'Explainability'],
};

export function ResearchInterests() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);

  // Displayed active node is pinned (click) if present, otherwise hover.
  const activeDisplayed = pinned ?? hovered;

  const coords = useMemo(() => {
    const map: Record<string, { x: number; y: number }> = {};
    for (const n of NODES) {
      map[n.id] = {
        x: PAD_X + n.x * (W - PAD_X * 2),
        y: PAD_Y + n.y * (H - PAD_Y * 2),
      };
    }
    return map;
  }, []);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Click outside graph+panel clears pinned selection
  useEffect(() => {
    if (!pinned) return;
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      if (wrapperRef.current?.contains(t) || panelRef.current?.contains(t)) return;
      setPinned(null);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [pinned]);

  const DOMAIN_INFO: Record<
    string,
    {
      org: string[];
      description: string;
      technologies: string[];
      keyWork: string[];
    }
  > = {
    enterprise: {
      org: ['PUMA'],
      description:
        'Building enterprise-scale AI systems for product intelligence, workflow automation, and retail operations.',
      technologies: ['Python', 'FastAPI', 'LLMs', 'RAG', 'Agent Frameworks', 'Enterprise APIs'],
      keyWork: [
        'HSN Classification Platform',
        'Freight Invoice Automation',
        'Gender Intelligence Engine',
      ],
    },
    mas: {
      org: ['PUMA'],
      description:
        'Designing collaborative AI agents that provide conversational access to enterprise knowledge systems.',
      technologies: ['LangGraph', 'Agent Frameworks', 'LLMs', 'Tool Calling', 'Vector Databases'],
      keyWork: ['Multi-Agent Retail Assistant'],
    },
    llm: {
      org: ['PUMA', 'Research'],
      description:
        'Developing intelligent systems using retrieval, reasoning, and domain adaptation techniques.',
      technologies: ['Transformers', 'RAG', 'Fine-Tuning', 'Prompt Engineering'],
      keyWork: ['Retail Intelligence Systems', 'NCERT LLM Research'],
    },
    cv: {
      org: ['DRDO'],
      description:
        'Computer vision systems for document intelligence and defense applications.',
      technologies: ['OpenCV', 'OCR', 'CNNs', 'Image Processing', 'Object Detection'],
      keyWork: ['OCR Pipelines', 'Blur Detection', 'Document Intelligence'],
    },
    gnn: {
      org: ['Research Publications'],
      description:
        'Researching graph neural networks and their applications across complex connected systems.',
      technologies: ['Graph Neural Networks', 'PyTorch', 'Deep Learning'],
      keyWork: ['Springer GNN Publication'],
    },
    neuro: {
      org: ['AUT New Zealand'],
      description:
        'Brain-inspired computing using spiking neural networks and NeuCube.',
      technologies: ['NeuCube', 'Spiking Neural Networks', 'Temporal Learning'],
      keyWork: ['Cognitive Modeling Research'],
    },
    multimodal: {
      org: ['Research & Industry'],
      description:
        'Combining vision, language, and structured data for intelligent decision-making.',
      technologies: ['Transformers', 'Computer Vision', 'LLMs', 'Deep Learning'],
      keyWork: ['Protein Crystallization Detection', 'Enterprise AI Systems'],
    },
    reasoning: {
      org: ['PUMA', 'Research'],
      description:
        'Building AI systems capable of structured decision-making and contextual reasoning.',
      technologies: ['Agentic AI', 'Reasoning Models', 'Knowledge Graphs', 'RAG'],
      keyWork: ['Enterprise AI Assistants', 'Workflow Automation Systems'],
    },
    enterpriseSys: {
      org: ['42Gears Mobility Systems'],
      description:
        'Built enterprise-scale macOS device-management capabilities, deployment frameworks, and automation systems powering large-scale enterprise fleets.',
      technologies: ['Swift', 'macOS', 'LaunchAgents', 'LaunchDaemons', 'PKG/DMG Packaging', 'GitCopilot', 'Enterprise Device Management'],
      keyWork: [
        'SureMDM Agent Enhancements',
        'macOS Deployment Automation',
        'AI-Powered Merge Request Reviewer',
      ],
    },
  };

  return (
    <Section id="interests">
      <div className="container">
        <SectionHeading
          eyebrow="Section 07 — Research, AI & Systems Engineering"
          title="Research, AI & Systems Engineering"
          description="A connected map of the domains, systems, and research areas that define my work."
          align="center"
        />

        <div className="mask-fade-x mt-8 w-full">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div ref={wrapperRef} className="md:w-2/3 w-full">
              <motion.svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid meet"
            className="h-auto w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
          >
            <defs>
              <filter id="node-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="9" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="node-fill" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#dbeafe" />
                <stop offset="100%" stopColor="#3B82F6" />
              </radialGradient>
            </defs>

            {/* Edges */}
            <g>
              {EDGES.map(([a, b], i) => {
                const lit = activeDisplayed === a || activeDisplayed === b;
                return (
                  <motion.line
                    key={`${a}-${b}`}
                    x1={coords[a].x}
                    y1={coords[a].y}
                    x2={coords[b].x}
                    y2={coords[b].y}
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: {
                        pathLength: 1,
                        opacity: 0.22,
                        transition: { duration: 1, delay: 0.3 + i * 0.04 },
                      },
                    }}
                    style={{
                      stroke: lit ? '#93c5fd' : '#3B82F6',
                      strokeWidth: lit ? 2.2 : 0.8,
                      transition: 'stroke 0.25s ease, stroke-width 0.25s ease, opacity 0.25s ease',
                      opacity: lit ? 0.95 : 0.45,
                      filter: lit ? 'url(#node-glow)' : undefined,
                    }}
                  />
                );
              })}
            </g>

            {/* Nodes */}
            {NODES.map((n, i) => {
              const isActive = activeDisplayed === n.id;
              const dim = activeDisplayed && !isActive;
              const { x, y } = coords[n.id];
              return (
                <motion.g
                  key={n.id}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setPinned((s) => (s === n.id ? null : n.id))}
                  style={{
                    cursor: 'pointer',
                    transformBox: 'fill-box',
                    transformOrigin: 'center',
                  }}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: 0.2 + i * 0.07,
                        type: 'spring',
                        stiffness: 180,
                        damping: 14,
                      },
                    },
                  }}
                >
                  <g style={{ opacity: dim ? 0.32 : 1, transition: 'opacity 0.35s ease' }}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={16}
                      fill="#3B82F6"
                      opacity={0.12}
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? 10 : 7}
                      fill="url(#node-fill)"
                      filter={isActive ? 'url(#node-glow)' : undefined}
                      style={{ transition: 'r 0.2s ease' }}
                    />
                    <text
                      x={x}
                      y={y - 18}
                      textAnchor="middle"
                      className="select-none font-sans"
                      fontSize={isActive ? 18 : 14}
                      fontWeight={600}
                      fill={isActive ? '#ffffff' : '#A1A1AA'}
                      style={{ transition: 'fill 0.25s ease, font-size 0.25s ease' }}
                    >
                      {n.label}
                    </text>
                  </g>
                </motion.g>
              );
            })}
              </motion.svg>
            </div>

            {/* Details Panel (right column) */}
            <div ref={panelRef} className="md:w-1/3 w-full">
              <div className="glass rounded-3xl border-white/10 backdrop-blur-xl p-6 w-full max-h-[520px] overflow-y-auto">
                {pinned ? (
                  <motion.div
                    key={pinned}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    {(() => {
                      const info = DOMAIN_INFO[pinned];
                      const nodeLabel = NODES.find((x) => x.id === pinned)?.label;
                      if (!info) return null;
                      return (
                        <div>
                          <h3 className="font-display text-xl font-semibold">{nodeLabel}</h3>
                          <p className="mt-3 text-sm text-muted">{info.description}</p>

                          <div className="mt-4">
                            <p className="font-medium">Technologies</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {info.technologies.map((t) => (
                                <span key={t} className="badge-sm">{t}</span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-4">
                            <p className="font-medium">Projects</p>
                            <ul className="mt-2 list-disc pl-5 text-sm">
                              {info.keyWork.map((k) => (
                                <li key={k}>{k}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4 text-sm text-muted">
                            <strong>Organizations:</strong> {info.org.join(', ')}
                          </div>

                          {info.impact && (
                            <div className="mt-4 text-sm">
                              <p className="font-medium">Impact</p>
                              <ul className="mt-2 list-disc pl-5">
                                {info.impact.map((it: string) => (
                                  <li key={it}>{it}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                    <div className="py-12 text-center">
                      <p className="text-sm text-muted">Select a domain to explore experience, technologies, projects, and organizations.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Removed fixed card — interaction is through the floating tooltip above */}
      </div>
    </Section>
  );
}

export default ResearchInterests;
