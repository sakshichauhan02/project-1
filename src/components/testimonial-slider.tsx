"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "@/components/fade-in";

const testimonials = [
  {
    quote: "Synapse AI transformed our manual operations into an autonomous agent swarm. Our operational throughput increased by 400% with zero downtime.",
    author: "Marcus Vance",
    role: "VP of Operations, CloudScale"
  },
  {
    quote: "Their high-performance RAG pipeline delivers semantic queries in under 30ms. The technical execution of this engineering firm is unmatched.",
    author: "Elena Rostova",
    role: "Chief Architect, DataCore"
  },
  {
    quote: "Implementing custom fine-tuning and model adapters saved us millions in inference costs. A highly capable partner for enterprise AI scaling.",
    author: "David Chen",
    role: "Head of AI, Voxel Media"
  }
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-zinc-100">
      <FadeIn>
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Client Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-sans">
            Trusted by Engineering Leaders
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="relative rounded-3xl border border-zinc-100 bg-zinc-50/20 p-8 sm:p-12 md:p-16 min-h-[280px] flex flex-col justify-between overflow-hidden">
          {/* Quote Mark */}
          <div className="absolute top-6 left-6 text-zinc-100 -z-10">
            <Quote className="size-16 rotate-180 opacity-40" />
          </div>

          {/* Slide Content */}
          <div className="flex-grow flex flex-col justify-center text-center max-w-3xl mx-auto transition-all duration-500">
            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-light italic mb-8">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>
            <div>
              <h4 className="text-sm font-bold text-zinc-950">{testimonials[activeIndex].author}</h4>
              <p className="text-xs text-zinc-400 mt-1 font-light">{testimonials[activeIndex].role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-zinc-100/60 max-w-xs mx-auto w-full">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full border border-zinc-100 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-950 hover:border-zinc-200 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? "bg-blue-600 w-3" : "bg-zinc-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full border border-zinc-100 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-950 hover:border-zinc-200 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
