"use client";

import { ShieldCheck, Award, ArrowUpRight, BookOpen } from "lucide-react";
import FadeIn from "@/components/fade-in";
import { SpotlightCard } from "@/components/animations/spotlight-card";

const playbooks = [
  {
    title: "High Performance RAG Pipeline",
    description: "Deep dive into query routing, hybrid search, and cross-encoder re-ranking topologies designed for sub-50ms execution. We analyze index pruning, cache warming strategies, and local embedding models.",
    readTime: "6 min read"
  },
  {
    title: "Scaling n8n in 10 Days",
    description: "How we configured an autoscale worker pool on Kubernetes to handle over 10M webhook dispatches daily with zero-touch management. Covers concurrency locks, Redis queuing, and execution database purging.",
    readTime: "8 min read"
  },
  {
    title: "FastAPI Architecture",
    description: "Implementing asynchronous event handlers, clean dependency injection hierarchies, and structured Pydantic input sanitization.",
    readTime: "5 min read"
  },
  {
    title: "LLM Deployment",
    description: "Orchestrating local model adapters (LoRA) using vLLM runtimes, caching models on local nodes, and managing cold start latencies for high-throughput inference.",
    readTime: "7 min read"
  },
  {
    title: "AI Workflow Patterns",
    description: "Architectural blueprint of multi-agent state machines, conditional routing, and structured output verification. We outline the state transition mechanics for autonomous task correction.",
    readTime: "10 min read"
  },
  {
    title: "Vector Database Optimization",
    description: "Tuning index building parameters (HNSW) and optimizing quantization for minimal recall loss.",
    readTime: "6 min read"
  }
];

const credentials = [
  {
    title: "OpenAI Authorized Service Provider",
    organization: "OpenAI",
    date: "Issued March 2026",
    id: "OP-983-2940",
    description: "Qualified for designing, deploying, and maintaining custom enterprise cognitive pipelines and assistant endpoints using OpenAI's API.",
    type: "Partnership"
  },
  {
    title: "Anthropic Solutions Partner",
    organization: "Anthropic",
    date: "Issued May 2026",
    id: "AN-102-4952",
    description: "Certified for deploying Claude-based agent workflows, tool-use systems, and enterprise fine-tuning alignment tasks.",
    type: "Partnership"
  },
  {
    title: "AWS Machine Learning – Specialty",
    organization: "Amazon Web Services",
    date: "Issued January 2026",
    id: "AWS-ML-8302",
    description: "Validates technical expertise in designing, implementing, and running ML workloads on AWS cloud infrastructures.",
    type: "Certification"
  },
  {
    title: "GCP Professional Machine Learning Engineer",
    organization: "Google Cloud",
    date: "Issued November 2025",
    id: "GCP-MLE-3904",
    description: "Demonstrates capability to design, build, and productionize robust ML architectures using GCP resources and Vertex AI systems.",
    type: "Certification"
  }
];

export default function CertificatesPage() {
  return (
    <div className="flex-grow bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Technical Playbooks
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-6 font-sans">
            Engineering Playbooks
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed font-light">
            A curated catalog of tactical blueprints, system architectures, and operational guidelines compiled by our deployment team.
          </p>
        </FadeIn>
      </div>

      {/* Masonry Grid for Technical Articles (using CSS columns) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] box-border w-full mb-32">
        {playbooks.map((art, index) => (
          <FadeIn key={art.title} delay={index * 100}>
              <SpotlightCard className="p-6 break-inside-avoid mb-8 rounded-2xl">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-9 w-9 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <BookOpen className="size-4.5" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-950 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {art.description}
                  </p>
                </div>
                
                <div className="border-t border-zinc-50 pt-4 mt-6 flex justify-between items-center text-xs font-semibold text-zinc-900">
                  <span className="group-hover:text-blue-600 transition-colors">Read Playbook</span>
                  <ArrowUpRight className="size-4 text-zinc-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </SpotlightCard>
          </FadeIn>
        ))}
      </div>

      {/* Section Divider & Credentials Header */}
      <div className="border-t border-zinc-100 pt-24 mb-20 max-w-3xl">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3 block">
            Verification
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 font-sans">
            Partnerships & Certifications
          </h2>
          <p className="text-sm text-zinc-500 mt-4 leading-relaxed font-light">
            We hold direct service partnerships and specialization credentials from foundation model providers and cloud networks.
          </p>
        </FadeIn>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {credentials.map((cred, index) => (
          <FadeIn key={cred.title} delay={index * 100}>
              <SpotlightCard className="p-6 sm:p-8 rounded-2xl">
                {/* Top Section */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    {cred.type === "Partnership" ? (
                      <ShieldCheck className="size-5" />
                    ) : (
                      <Award className="size-5" />
                    )}
                  </div>
                  <span className="inline-flex items-center rounded bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                    {cred.type}
                  </span>
                </div>

                {/* Body */}
                <div className="flex-grow mb-6">
                  <h3 className="text-lg font-bold text-zinc-950 mb-1 leading-snug group-hover:text-blue-600 transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-400 mb-4 uppercase tracking-wider">
                    {cred.organization} &bull; {cred.date}
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">
                    {cred.description}
                  </p>
                </div>

                {/* ID & Verification */}
                <div className="mt-auto border-t border-zinc-50 pt-4 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono">
                    Credential ID: {cred.id}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                    Verify credential
                    <ArrowUpRight className="size-3.5 text-zinc-300 group-hover:text-blue-600 transition-colors" />
                  </span>
                </div>
              </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
