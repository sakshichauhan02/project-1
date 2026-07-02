"use client";

import { Cpu, BarChart3, Settings, Database, Layers, ArrowUpRight, Code } from "lucide-react";
import FadeIn from "@/components/fade-in";

export default function AiPrototypesPage() {
  return (
    <div className="flex-grow bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-20">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Product Labs
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-6 font-sans">
            Our Prototype Labs
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed font-light">
            An asymmetric catalog of our unified engines, custom CRM integrations, telemetry metrics, and code sandboxes.
          </p>
        </FadeIn>
      </div>

      {/* Asymmetric Bento Box Grid (3 columns on desktop, responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Unified Creator & Commerce Engine (Col Span 2, Row Span 1) */}
        <FadeIn delay={100} className="md:col-span-2">
          <div className="relative rounded-3xl border border-zinc-100 bg-white p-8 hover:border-zinc-200 transition-all flex flex-col justify-between h-full min-h-[320px] hover:shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Layers className="size-5" />
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/10">
                  Creator Tech
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Unified Creator & Commerce Engine</h3>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-4">Interactive Node Framework</p>
              <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xl">
                A localized checkout and subscription management sandbox built to route creator payments, invoice metadata, and automated subscription hooks instantly.
              </p>
            </div>

            {/* Visual Placeholder Content */}
            <div className="mt-8 border-t border-zinc-50 pt-6 flex flex-wrap gap-4 items-center justify-between text-xs text-zinc-400">
              <div className="flex gap-4">
                <div>
                  <span className="text-[10px] font-bold block text-zinc-300 uppercase font-mono">Status</span>
                  <span className="font-semibold text-zinc-700">Active Node</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold block text-zinc-300 uppercase font-mono">Dispatch Rate</span>
                  <span className="font-semibold text-zinc-700">99.98%</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 font-semibold text-zinc-900 group-hover:text-blue-600 cursor-pointer">
                Launch Sandbox
                <ArrowUpRight className="size-3.5" />
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Card 2: NamoCRM (Col Span 1, Row Span 1) */}
        <FadeIn delay={150}>
          <div className="relative rounded-3xl border border-zinc-100 bg-white p-8 hover:border-zinc-200 transition-all flex flex-col justify-between h-full min-h-[320px] hover:shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <Database className="size-5" />
                </div>
                <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-semibold text-purple-600 ring-1 ring-inset ring-purple-500/10">
                  Operations
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">NamoCRM</h3>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-4">Lead Automation Sync</p>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Automated CRM state synchronizer connecting client pipelines with multi-format Slack triggers.
              </p>
            </div>

            {/* Visual Placeholder Content */}
            <div className="mt-8 border-t border-zinc-50 pt-4 flex justify-between items-center text-xs">
              <span className="text-zinc-400 font-mono">Lead State: Synced</span>
              <span className="text-purple-600 font-semibold cursor-pointer flex items-center gap-0.5">
                Configure
                <ArrowUpRight className="size-3" />
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Card 3: Automated Smart Parking System (Col Span 1, Row Span 2) */}
        <FadeIn delay={200} className="md:row-span-2">
          <div className="relative rounded-3xl border border-zinc-100 bg-white p-8 hover:border-zinc-200 transition-all flex flex-col justify-between h-full min-h-[500px] hover:shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Cpu className="size-5" />
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-500/10">
                  IoT Engine
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Smart Parking</h3>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-4">Autonomous Space Logic</p>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
                Real-time occupancy tracker mapping hardware sensor nodes to cloud database slots.
              </p>

              {/* Status List Mockup */}
              <div className="space-y-3 pt-4 border-t border-zinc-50">
                <div className="flex justify-between text-xs items-center">
                  <span className="text-zinc-500 font-medium">Zone A-1</span>
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                </div>
                <div className="flex justify-between text-xs items-center">
                  <span className="text-zinc-500 font-medium">Zone A-2</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                </div>
                <div className="flex justify-between text-xs items-center">
                  <span className="text-zinc-500 font-medium">Zone B-1</span>
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                </div>
                <div className="flex justify-between text-xs items-center">
                  <span className="text-zinc-500 font-medium">Zone B-2</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                </div>
              </div>
            </div>

            {/* Visual Indicator */}
            <div className="mt-8 border-t border-zinc-50 pt-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs text-zinc-400">Total Capacity</span>
                <span className="text-sm font-bold text-zinc-900">68%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: "68%" }}></div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Card 4: UI Mockup (Col Span 1, Row Span 1) */}
        <FadeIn delay={250}>
          <div className="relative rounded-3xl border border-zinc-100 bg-white p-8 hover:border-zinc-200 transition-all flex flex-col justify-between h-full min-h-[300px] hover:shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                  <Settings className="size-5" />
                </div>
                <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-[10px] font-semibold text-orange-600 ring-1 ring-inset ring-orange-500/10">
                  Mock Controls
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">UI Mockup</h3>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-4">Control Interface Spec</p>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                A visual playground depicting toggle settings, model switches, and semantic cache states.
              </p>
            </div>

            {/* Mock Toggle Interface */}
            <div className="mt-6 space-y-3 pt-4 border-t border-zinc-50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Agent Routing</span>
                <span className="inline-flex h-4 w-8 rounded-full bg-blue-600 relative"><span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white"></span></span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Semantic Cache</span>
                <span className="inline-flex h-4 w-8 rounded-full bg-zinc-200 relative"><span className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white"></span></span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Card 5: Code Snippet (Col Span 1, Row Span 1) */}
        <FadeIn delay={300}>
          <div className="relative rounded-3xl border border-zinc-100 bg-white p-8 hover:border-zinc-200 transition-all flex flex-col justify-between h-full min-h-[300px] hover:shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Code className="size-5" />
                </div>
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-500/10">
                  Syntax
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Code Snippet</h3>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-4">RAG Routing logic</p>
            </div>

            {/* Mini IDE Code Mockup */}
            <div className="flex-grow mt-2 bg-zinc-50 rounded-xl p-4 font-mono text-[9px] text-zinc-500 leading-relaxed border border-zinc-100 overflow-hidden">
              <span className="text-blue-600">const</span> agent = <span className="text-purple-600">new</span> Agent(&#123;<br />
              &nbsp;&nbsp;role: <span className="text-emerald-600">&quot;Router&quot;</span>,<br />
              &nbsp;&nbsp;model: <span className="text-emerald-600">&quot;claude-3-5&quot;</span>,<br />
              &nbsp;&nbsp;tools: [search, database]<br />
              &#125;);<br />
              <span className="text-blue-600">await</span> agent.run();
            </div>
          </div>
        </FadeIn>

        {/* Card 6: Performance Metrics (Col Span 2, Row Span 1) */}
        <FadeIn delay={350} className="md:col-span-2">
          <div className="relative rounded-3xl border border-zinc-100 bg-white p-8 hover:border-zinc-200 transition-all flex flex-col justify-between h-full min-h-[220px] hover:shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">
                  <BarChart3 className="size-5" />
                </div>
                <span className="inline-flex items-center rounded-full bg-pink-50 px-2.5 py-0.5 text-[10px] font-semibold text-pink-600 ring-1 ring-inset ring-pink-500/10">
                  Metrics
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Performance Metrics</h3>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-6">System Telemetry</p>
            </div>

            {/* 3 Columns Metrics Display */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-zinc-50 text-center md:text-left">
              <div>
                <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider block mb-1">Latency</span>
                <span className="text-lg sm:text-2xl font-bold text-zinc-950 font-mono">24ms</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider block mb-1">Precision</span>
                <span className="text-lg sm:text-2xl font-bold text-zinc-950 font-mono">99.8%</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider block mb-1">Throughput</span>
                <span className="text-lg sm:text-2xl font-bold text-zinc-950 font-mono">14.8k/s</span>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
