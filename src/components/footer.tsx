export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-6 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-xs sm:text-sm text-muted-foreground">
          <div>
            &copy; {currentYear} Portfolio. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground hover:underline transition-all"
            >
              Next.js
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
