"use client";

import FadeIn from "@/components/fade-in";
import { SpotlightCard } from "@/components/animations";

const caseStudies = [
  {
    title: "Automating Compliance Audit Swarms",
    client: "Fintech Unicorn",
    duration: "4 Months",
    metric: "92%",
    metricLabel: "Audit Time Reduced",
    challenge: "The client faced a bottleneck in auditing complex debt underwriting documents. Each compliance check took over 4 hours of manual reading, causing loan verification delays.",
    solution: "We engineered a multi-agent verification swarm using LangGraph. One agent acts as a parser, another maps compliance matrices, and a third audits decisions, producing strict schema validation outputs with structured reasoning traces.",
    technologies: ["LangGraph", "Claude 3.5 Sonnet", "vLLM", "PostgreSQL"]
  },
  {
    title: "Sub-Second Conversational Search System",
    client: "E-Commerce Enterprise",
    duration: "3 Months",
    metric: "$2.4M",
    metricLabel: "Annual Overhead Saved",
    challenge: "Existing retrieval pipelines averaged a 5.2s latency, causing high user drop-off rates on conversational customer support search portals.",
    solution: "We built a customized, high-throughput hybrid retrieval server in Rust. By coupling memory-mapped vector indexes with a WebSocket streaming layer, search latency was compressed, providing instant sub-second answers.",
    technologies: ["Rust", "pgvector", "Next.js", "WebRTC Media Bridges"]
  },
  {
    title: "Knowledge Graph Integration over 10M+ Docs",
    client: "Biotech Leader",
    duration: "6 Months",
    metric: "99.8%",
    metricLabel: "Factual Precision Rating",
    challenge: "Researchers were unable to extract relational drug data scattered across millions of multi-format journals, PDFs, and laboratory spreadsheets.",
    solution: "We designed a GraphRAG pipeline that extracts entities, resolves co-references, and populates a Neo4j knowledge graph. A custom re-ranker maps dense coordinates with graph-hop metadata.",
    technologies: ["Neo4j", "Qdrant Vector Database", "Apache Spark", "Llama 3 70B"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="flex-grow bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Client Engagements
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-6 font-sans">
            Case Studies & Impact
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed font-light">
            We partner with ambitious engineering departments to solve their most complex AI bottlenecks. Explore our latest system implementations and measured outcomes.
          </p>
        </FadeIn>
      </div>

      {/* Case Studies Timeline */}
      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <FadeIn key={study.title} delay={index * 100}>
            <SpotlightCard className="p-8 sm:p-12 border border-zinc-100 hover:border-zinc-200 rounded-3xl bg-white hover:shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Left Column: Client & Big Metric */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center rounded-md bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10 mb-4">
                      {study.client}
                    </span>
                    <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase">
                      Timeline: {study.duration}
                    </p>
                  </div>
                  
                  <div className="mt-8 lg:mt-0">
                    <div className="text-5xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-sans">
                      {study.metric}
                    </div>
                    <p className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mt-2">
                      {study.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-8 space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4 text-sm text-zinc-500 leading-relaxed font-light">
                    <p>
                      <strong className="font-semibold text-zinc-950 block mb-1">The Challenge</strong>
                      {study.challenge}
                    </p>
                    <p>
                      <strong className="font-semibold text-zinc-950 block mb-1">Our Solution</strong>
                      {study.solution}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-1.5">
                    {study.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
