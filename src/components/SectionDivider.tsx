export default function SectionDivider() {
  return (
    <div className="w-full py-12 flex justify-center items-center">
      {/* Fixed: Removed animation that was hiding the line.
         Now it is a direct visible div with high contrast.
      */}
      <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-100 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
    </div>
  );
}
