"use client";

import React, { useState } from "react";
import FadeIn from "@/components/fade-in";
import { BorderBeam } from "@/components/animations";

export default function RoiCalculator() {
  const [hours, setHours] = useState(40);

  // Constants for calculation
  const WEEKS_PER_YEAR = 52;
  const AUTOMATION_EFFICIENCY = 0.75; // 75% of manual hours automated
  const BLENDED_HOURLY_RATE = 85; // $85 per hour operating cost

  // Calculations
  const hoursSavedAnnually = Math.round(hours * WEEKS_PER_YEAR * AUTOMATION_EFFICIENCY);
  const costSavingsAnnually = hoursSavedAnnually * BLENDED_HOURLY_RATE;

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Format hours
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-100">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Impact Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">
            Calculate Your Automation Potential
          </h2>
          <p className="text-sm text-zinc-500 mt-4 max-w-xl mx-auto font-light leading-relaxed">
            Discover how much operational overhead can be optimized by transitioning manual workflows into autonomous agentic pipelines.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="max-w-3xl mx-auto rounded-3xl border border-zinc-100 bg-white p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <BorderBeam borderWidth={1.5} size={250} duration={8} />
          {/* Input Section */}
          <div className="space-y-6 mb-12">
            <div className="flex justify-between items-baseline">
              <label htmlFor="hours-slider" className="text-sm font-semibold text-zinc-900">
                Hours spent on manual workflows per week
              </label>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-sans">
                {hours} hours
              </span>
            </div>

            <div className="relative pt-4">
              <input
                id="hours-slider"
                type="range"
                min="0"
                max="100"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none transition-all"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #7c3aed ${hours}%, #f4f4f5 ${hours}%, #f4f4f5 100%)`
                }}
              />
              <div className="flex justify-between text-[10px] font-semibold text-zinc-400 mt-2 font-mono uppercase tracking-wider">
                <span>0 hrs</span>
                <span>50 hrs</span>
                <span>100 hrs</span>
              </div>
            </div>
          </div>

          {/* Outputs Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-100 pt-10">
            {/* Output 1: Hours Saved */}
            <div className="flex flex-col justify-center rounded-2xl bg-zinc-50/50 p-6 border border-zinc-50 transition-all duration-300">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 block">
                Hours Saved Annually
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-zinc-950 font-sans tracking-tight transition-all duration-300">
                {formatNumber(hoursSavedAnnually)} hrs
              </div>
              <span className="text-[10px] text-zinc-400 mt-2 font-light">
                Equivalent to ~{Math.round(hoursSavedAnnually / 8)} operational days
              </span>
            </div>

            {/* Output 2: Cost Savings */}
            <div className="flex flex-col justify-center rounded-2xl bg-zinc-50/50 p-6 border border-zinc-50 transition-all duration-300">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 block">
                Estimated Annual Savings
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-sans tracking-tight transition-all duration-300">
                {formatCurrency(costSavingsAnnually)}
              </div>
              <span className="text-[10px] text-zinc-400 mt-2 font-light">
                Calculated at a blended rate of $85/hour
              </span>
            </div>
          </div>

          {/* Assumption note */}
          <p className="text-[10px] text-center text-zinc-400 mt-8 font-light">
            *Assumes 75% automation efficiency (standard benchmark for cognitive agent routing).
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
