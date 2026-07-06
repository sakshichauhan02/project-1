"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Process", href: "/technical-skills" },
  { name: "Prototypes", href: "/ai-prototypes" },
  { name: "Case Studies", href: "/experience" },
  { name: "Playbooks", href: "/certificates" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.015)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-1.5 group">
              <span className="text-base font-bold tracking-tight text-zinc-950 font-sans">
                Synapse
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/10 transition-colors group-hover:bg-blue-100">
                AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[13px] font-medium tracking-wide transition-colors relative py-1",
                    isActive 
                      ? "text-zinc-950 font-semibold" 
                      : "text-zinc-500 hover:text-zinc-900"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="h-8.5 rounded-full border-zinc-200 text-xs font-semibold px-4 hover:bg-zinc-50 transition-colors cursor-pointer group"
            >
              <Link href="mailto:hello@synapse-ai.co" className="flex items-center gap-1">
                Book a Discovery Call
                <ArrowUpRight className="size-3 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-zinc-950 cursor-pointer"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-b border-zinc-100 bg-white">
          <nav className="flex flex-col space-y-1.5 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-zinc-50 text-zinc-950 font-semibold border-l-2 border-blue-600" 
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2 px-3">
              <Button
                asChild
                className="w-full justify-center rounded-full text-xs font-semibold bg-zinc-950 hover:bg-zinc-900 text-white cursor-pointer"
              >
                <Link href="mailto:hello@synapse-ai.co">
                  Book a Discovery Call
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
