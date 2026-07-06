"use client";

import { Cpu, Database, Network, LayoutTemplate, Search, Code, Brain, Zap } from "lucide-react";
import FadeIn from "@/components/fade-in";
import { SpotlightCard } from "@/components/animations/spotlight-card";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "System design and architecture mapping.",
    icon: Search,
  },
  {
    number: "02",
    title: "Engineering",
    description: "Building Next.js and FastAPI applications.",
    icon: Code,
  },
  {
    number: "03",
    title: "Intelligence",
    description: "Implementing RAG pipelines and LLM integrations.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Automation",
    description: "Building n8n workflows for zero-touch operations.",
    icon: Zap,
  },
];

const capabilities = [
  {
    category: "Models & Cognitive Logic",
    icon: Network,
    description: "Architecting agentic reasoning cycles, conditional state routers, and structured output verification pipelines.",
    stack: [
      { name: "Agentic Orchestration", tools: "LangGraph, LangChain, DSPy" },
      { name: "Reasoning & Alignment", tools: "Few-shot prompting, chain-of-thought, self-correction loops" },
      { name: "Model Integration", tools: "Anthropic Claude, OpenAI, DeepSeek, Meta Llama" },
    ]
  },
  {
    category: "Data Topology & Search",
    icon: Database,
    description: "Designing high-scale retrieval systems and database layouts optimized for high semantic precision and speed.",
    stack: [
      { name: "Vector Databases", tools: "Qdrant, Pinecone, pgvector, Milvus" },
      { name: "Metadata Filtering", tools: "Hybrid search, BM25 keyword matching, cross-encoder re-ranking" },
      { name: "Data Pipelines", tools: "Unstructured document parsing, chunking optimization, Spark" },
    ]
  },
  {
    category: "Infrastructure & Platform",
    icon: Cpu,
    description: "Deploying high-throughput, autoscaling inference setups on AWS and GCP with dedicated hardware orchestration.",
    stack: [
      { name: "Inference Servers", tools: "vLLM, Ollama, TGI (Text Generation Inference)" },
      { name: "Container Orchestration", tools: "Kubernetes, Docker, GCP GKE, AWS EKS" },
      { name: "Fine-Tuning Frameworks", tools: "Axolotl, PyTorch, LoRA/QLoRA adapters" },
    ]
  },
  {
    category: "Interface & Real-Time APIs",
    icon: LayoutTemplate,
    description: "Developing responsive frontend clients and real-time streaming sockets linking users directly to agent logs.",
    stack: [
      { name: "Web Frameworks", tools: "Next.js (App Router), React, TypeScript" },
      { name: "Streaming Protocols", tools: "Server-Sent Events (SSE), WebSockets, WebRTC Media Bridges" },
      { name: "UI Frameworks", tools: "Tailwind CSS, shadcn/ui, Radix Primitives" },
    ]
  }
];

export default function TechnicalSkillsPage() {
  return (
    <div className="flex-grow bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Engineering Process
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-6 font-sans">
            How We Build
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed font-light">
            From design exploration to zero-touch production-ready environments, our structured engineering methodology ensures scalable, predictable AI operations.
          </p>
        </FadeIn>
      </div>

      {/* Horizontal Process Timeline */}
      <div className="mb-32 relative">
        {/* Horizontal connector line on desktop */}
        <div className="hidden md:block absolute top-[46px] left-[50px] right-[50px] h-[1px] bg-zinc-100 -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <FadeIn key={step.title} delay={index * 100}>
                <SpotlightCard className="p-6 sm:p-8 rounded-2xl">
                  {/* Step Header */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                      <StepIcon className="size-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-300 tracking-wider">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Info */}
                  <h3 className="text-base font-bold text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {step.description}
                  </p>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Section Divider */}
      <div className="border-t border-zinc-100 pt-24 mb-20 max-w-3xl">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3 block">
            Capabilities Matrix
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 font-sans">
            Our Technical Stack
          </h2>
        </FadeIn>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {capabilities.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <FadeIn key={cat.category} delay={index * 100}>
              <div className="flex flex-col h-full border-b border-zinc-100 pb-10">
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-950">
                    {cat.category}
                  </h2>
                </div>

                <p className="text-sm text-zinc-500 mb-8 leading-relaxed font-light">
                  {cat.description}
                </p>

                {/* Stack Table */}
                <div className="mt-auto space-y-5">
                  {cat.stack.map((item) => (
                    <div key={item.name} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-t border-zinc-50 pt-4 gap-1">
                      <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">
                        {item.name}
                      </span>
                      <span className="text-xs text-zinc-500 font-light">
                        {item.tools}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
