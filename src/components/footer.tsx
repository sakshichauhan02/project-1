export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-100 bg-white py-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          {/* Copyright */}
          <div>
            &copy; {currentYear} Synapse AI Engineering Group. All rights reserved.
          </div>

          {/* Links & Built with */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-zinc-950 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-950 transition-colors">
              Terms
            </a>
            <span className="text-zinc-300">|</span>
            <span className="font-light">
              Built with <span className="font-semibold text-zinc-600">Next.js</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
