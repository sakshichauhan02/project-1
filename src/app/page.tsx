"use client";

import Link from "next/link";
import { ArrowRight, Cpu, Database, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { CharacterBlurReveal } from "@/components/animations/character-blur-reveal";
import { BorderBeam } from "@/components/animations/border-beam";
import dynamic from "next/dynamic";

const RoiCalculator = dynamic(() => import("@/components/roi-calculator"), {
  ssr: false,
  loading: () => (
    <div className="max-w-3xl mx-auto h-[400px] w-full animate-pulse bg-zinc-50/50 rounded-3xl border border-zinc-100 mt-20" />
  )
});

const TestimonialSlider = dynamic(() => import("@/components/testimonial-slider"), {
  ssr: false,
  loading: () => (
    <div className="max-w-5xl mx-auto h-[300px] w-full animate-pulse bg-zinc-50/20 rounded-3xl border border-zinc-100 mt-20" />
  )
});

const partnerLogos = [
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" className="h-4.5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" />
        <path d="M140.08 147.2L68.84 56.4V140H54V40H68.84L125.24 112V40H140.08V147.2Z" fill="white" />
      </svg>
    )
  },
  {
    name: "React",
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-4.5 w-auto fill-none stroke-current" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        <circle r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "n8n",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-auto fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="12" r="3" fill="currentColor" />
        <circle cx="19" cy="5" r="3" />
        <circle cx="19" cy="19" r="3" />
        <path d="M7.5 10.5L16.5 6M7.5 13.5L16.5 18" />
      </svg>
    )
  },
  {
    name: "FastAPI",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 9h-6V3l-9 12h6v6l9-12z" />
      </svg>
    )
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-auto fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5c-1.5 1.5-2.5.5-2.5-1s1.5-2.5 3-2.5h14c1.5 0 3 1 3 2.5s-1 2.5-2.5 1M7.5 4.5C9 3 10 4 10 5.5s-1.5 3-3 3h-4c-1.5 0-2.5-1.5-2.5-3S2 3 3.5 4.5M19.5 7.5C21 9 20 10 18.5 10s-3-1.5-3-3v-4c0-1.5 1.5-2.5 3-2.5s3 1 1.5 2.5" />
      </svg>
    )
  },
  {
    name: "Gemini",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 12.5 8.5 18 10C18 10 12.5 11.5 12 18C12 18 11.5 11.5 6 10C6 10 11.5 8.5 12 2Z" />
        <path d="M19 15C19 15 19.3 18.2 22 19C22 19 19.3 19.8 19 23C19 23 18.7 19.8 16 19C16 19 18.7 18.2 19 15Z" opacity="0.7" />
      </svg>
    )
  },
  {
    name: "Supabase",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.35 2.1a1 1 0 0 0-1.12.21L4.35 11a1 1 0 0 0 .75 1.7h5.55v9.2a1 1 0 0 0 .77.67l7.88-8.7a1 1 0 0 0-.75-1.7H13.8V2.8a1 1 0 0 0-.45-.7z" />
      </svg>
    )
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9 2c-2.3 0-4.2 1.9-4.2 4.2v2.1h8.4V6.2C16.1 3.9 14.2 2 11.9 2zm0 20c2.3 0 4.2-1.9 4.2-4.2v-2.1H7.7v2.1c0 2.3 1.9 4.2 4.2 4.2zm-5.7-8.4c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2h2.1V13.6H6.2zm11.6 0c2.3 0 4.2-1.9 4.2-4.2s-1.9-4.2-4.2-4.2h-2.1v8.4h2.1z"/>
      </svg>
    )
  }
];

export default function Home() {
  return (
    <div className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3.5 py-1 text-xs font-semibold text-blue-600 mb-8">
              <span>Now accepting Q3 enterprise cohorts</span>
              <span className="h-1 w-1 rounded-full bg-blue-600"></span>
            </div>
          </FadeIn>

          <CharacterBlurReveal className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.1] mb-8 font-sans" />

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12 font-sans font-light">
              Empowering enterprises with custom LLM integrations, RAG architectures, and automated operational engines.
            </p>
          </FadeIn>

          <FadeIn delay={450}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-zinc-950 text-white font-semibold px-8 hover:bg-zinc-900 transition-colors shadow-sm cursor-pointer relative overflow-hidden"
              >
                <Link href="mailto:hello@synapse-ai.co" className="flex items-center gap-2">
                  Schedule a Discovery Call
                  <ArrowRight className="size-4" />
                  <BorderBeam borderWidth={1.5} size={60} duration={3} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-zinc-200 text-zinc-900 font-semibold px-8 hover:bg-zinc-50 transition-colors cursor-pointer"
              >
                <Link href="/ai-prototypes">
                  Explore Prototypes
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Infinite Horizontal Marquee */}
      <section className="border-y border-zinc-100 bg-zinc-50/10 py-6 overflow-hidden w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
          <p className="text-left text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Our Core Stack Capabilities
          </p>
        </div>
        
        <div className="flex w-full overflow-hidden select-none">
          {/* Main flex container showing two scrolling tracks side-by-side */}
          <div className="flex flex-row flex-nowrap w-max gap-16 py-2 animate-marquee hover:[animation-play-state:paused] will-change-transform pr-16">
            {/* Copy 1 */}
            {partnerLogos.map((logo, idx) => (
              <div
                key={`logo-c1-${idx}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-900 transition-colors duration-300 group"
              >
                <span className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {logo.svg}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider font-sans">
                  {logo.name}
                </span>
              </div>
            ))}
            {/* Copy 2 */}
            {partnerLogos.map((logo, idx) => (
              <div
                key={`logo-c2-${idx}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-900 transition-colors duration-300 group"
              >
                <span className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {logo.svg}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider font-sans">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas (Capabilities Summary) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              Core Focus Areas
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">
              Production-grade AI infrastructure tailored to your domain.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <FadeIn>
            <div className="group flex flex-col">
              <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-100 transition-colors">
                <Cpu className="size-5" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                Cognitive Architectures
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                We design structured multi-agent systems using advanced routing, state-machines, and execution loops (LangGraph, DSPy) to automate multi-step complex workflows.
              </p>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn>
            <div className="group flex flex-col">
              <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-100 transition-colors">
                <Database className="size-5" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                Enterprise Knowledge & RAG
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                We engineer scalable vector database topologies and hybrid search engines. Sub-100ms semantic retrieval across terabytes of proprietary enterprise knowledge bases.
              </p>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn>
            <div className="group flex flex-col">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-100 transition-colors">
                <Blocks className="size-5" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                Custom Fine-Tuning & LLMOps
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                We optimize domain-specific models through supervised fine-tuning, LoRA, and preference alignment. Setting up local self-hosted inference runtimes (vLLM, Ollama).
              </p>
            </div>
          </FadeIn>
        </StaggerContainer>
      </section>

      {/* ROI Calculator Section */}
      <RoiCalculator />

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="rounded-3xl border border-zinc-100 bg-zinc-50/50 p-8 sm:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-6 font-sans">
              Have an ambitious AI system to build?
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10 font-light">
              {"We collaborate closely with elite product and platform teams. Let's discuss your system requirements, cognitive benchmarks, and scale milestones."}
            </p>
            <Button
              asChild
              className="h-12 rounded-full bg-zinc-950 text-white font-semibold px-8 hover:bg-zinc-900 transition-colors shadow-sm cursor-pointer"
            >
              <Link href="mailto:hello@synapse-ai.co">
                Initiate engagement
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
