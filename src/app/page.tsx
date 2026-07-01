export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 py-24 sm:py-32 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          Building Scalable AI Solutions
        </h1>
        
        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting modern AI applications, automation workflows, and scalable software systems.
        </p>
      </div>
    </div>
  );
}
