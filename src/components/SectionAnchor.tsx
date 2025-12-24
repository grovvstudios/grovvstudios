export function SectionAnchor() {
  return (
    <div className="relative w-full h-24 md:h-32 pointer-events-none">
      {/* Soft gradient fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%)",
        }}
      />

      {/* Thin anchor line */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-24 md:w-40 h-px bg-gradient-to-r from-transparent via-[#667eea]/40 to-transparent" />
    </div>
  );
}
