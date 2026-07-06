"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw } from "lucide-react";

export function InteractiveTerminal() {
  const [runningState, setRunningState] = useState<"idle" | "typing" | "running" | "done">("idle");
  const [inputText, setInputText] = useState("");
  const [dots, setDots] = useState("");
  const [linesToShow, setLinesToShow] = useState(0);
  
  const targetCommand = "curl -X POST https://api.synapse.ai/v1/workflows/run";
  const bodyRef = useRef<HTMLDivElement>(null);
  
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dotsTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lineTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll to bottom of the terminal output
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({
        top: bodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [inputText, dots, linesToShow, runningState]);

  // Loading dots animation interval
  useEffect(() => {
    if (runningState === "running") {
      setDots("");
      dotsTimerRef.current = setInterval(() => {
        setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
      }, 300);
    } else {
      if (dotsTimerRef.current) clearInterval(dotsTimerRef.current);
      setDots("");
    }
    return () => {
      if (dotsTimerRef.current) clearInterval(dotsTimerRef.current);
    };
  }, [runningState]);

  const startAction = () => {
    if (runningState !== "idle") return;
    setRunningState("typing");
    setInputText("");
    setLinesToShow(0);
    
    let currentIndex = 0;
    const intervalTime = 30; // ms per character

    typingTimerRef.current = setInterval(() => {
      currentIndex++;
      setInputText(targetCommand.slice(0, currentIndex));
      
      if (currentIndex >= targetCommand.length) {
        clearInterval(typingTimerRef.current!);
        setRunningState("running");
        
        // Simulate API network latency (loading dots visible)
        setTimeout(() => {
          setRunningState("done");
          
          // Animate JSON printing line by line
          let currentLine = 0;
          lineTimerRef.current = setInterval(() => {
            currentLine++;
            setLinesToShow(currentLine);
            if (currentLine >= 6) {
              clearInterval(lineTimerRef.current!);
            }
          }, 120);
        }, 1500);
      }
    }, intervalTime);
  };

  const resetAction = () => {
    // Clear all intervals and timeouts
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    if (dotsTimerRef.current) clearInterval(dotsTimerRef.current);
    if (lineTimerRef.current) clearInterval(lineTimerRef.current);
    
    setInputText("");
    setDots("");
    setLinesToShow(0);
    setRunningState("idle");
  };

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      if (dotsTimerRef.current) clearInterval(dotsTimerRef.current);
      if (lineTimerRef.current) clearInterval(lineTimerRef.current);
    };
  }, []);

  // Syntax highlighted JSON lines
  const jsonResponseLines = [
    <div key="1" className="pl-2 select-text">
      <span className="text-zinc-400">{"{"}</span>
    </div>,
    <div key="2" className="pl-6 select-text">
      <span className="text-blue-400">&quot;status&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;success&quot;</span><span className="text-zinc-400">,</span>
    </div>,
    <div key="3" className="pl-6 select-text">
      <span className="text-blue-400">&quot;workflow_id&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;wf_9f82c1&quot;</span><span className="text-zinc-400">,</span>
    </div>,
    <div key="4" className="pl-6 select-text">
      <span className="text-blue-400">&quot;latency&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;342ms&quot;</span><span className="text-zinc-400">,</span>
    </div>,
    <div key="5" className="pl-6 select-text">
      <span className="text-blue-400">&quot;result&quot;</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">&quot;slack_dispatched&quot;</span>
    </div>,
    <div key="6" className="pl-2 select-text">
      <span className="text-zinc-400">{"}"}</span>
    </div>
  ];

  return (
    <div className="flex flex-col h-[180px] bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden font-mono text-[10px] leading-relaxed text-zinc-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-900/50 border-b border-zinc-900 select-none flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/80"></span>
          <span className="h-2 w-2 rounded-full bg-yellow-500/80"></span>
          <span className="h-2 w-2 rounded-full bg-green-500/80"></span>
          <span className="text-[9px] text-zinc-500 ml-1">api-terminal.sh</span>
        </div>
        
        <div>
          {runningState === "idle" && (
            <button
              onClick={startAction}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-all font-semibold cursor-pointer"
            >
              <Play className="size-2.5 text-blue-500 fill-blue-500" />
              Run Action
            </button>
          )}
          {runningState === "done" && linesToShow >= 6 && (
            <button
              onClick={resetAction}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-all font-semibold cursor-pointer animate-fade-in"
            >
              <RotateCcw className="size-2.5 text-purple-500" />
              Reset Terminal
            </button>
          )}
          {(runningState === "typing" || runningState === "running" || (runningState === "done" && linesToShow < 6)) && (
            <span className="text-[9px] text-zinc-500 font-semibold animate-pulse">
              {runningState === "typing" ? "Typing request..." : runningState === "running" ? "Awaiting response..." : "Printing output..."}
            </span>
          )}
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={bodyRef}
        className="flex-grow p-3 overflow-y-auto space-y-1.5 bg-zinc-950/40 select-none scrollbar-none"
      >
        {/* CLI Prompt Line */}
        <div className="select-text">
          <span className="text-blue-500 font-bold">synapse-cli</span>{" "}
          <span className="text-zinc-500">%</span> {inputText}
          {(runningState === "idle" || runningState === "typing") && (
            <span className="animate-pulse inline-block w-1.5 h-3 bg-zinc-400 align-middle ml-0.5"></span>
          )}
        </div>

        {/* Execution Status Line */}
        {(runningState === "running" || runningState === "done") && (
          <div className="text-zinc-500 select-text">
            &gt; POST https://api.synapse.ai/v1/workflows/run{dots}
          </div>
        )}

        {/* Completed Output Lines */}
        {runningState === "done" && (
          <div className="space-y-1 animate-fade-in select-text">
            <div className="text-zinc-500">&gt; HTTP/1.1 200 OK</div>
            <div className="text-emerald-500 font-semibold">✓ Success: Workflow dispatched</div>
            
            <div className="mt-1 bg-zinc-900/30 py-2 pr-2 rounded border border-zinc-900/50 space-y-0.5">
              {jsonResponseLines.slice(0, linesToShow)}
              {linesToShow < 6 && (
                <div className="pl-6">
                  <span className="animate-pulse inline-block w-1 h-3 bg-zinc-500 align-middle"></span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InteractiveTerminal;
