/**
 * Decorative background elements for dark sections.
 * Subtle gradient orbs only — no circles.
 * Background images will be added by client later.
 */
export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top-left gradient orb */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px]" />

      {/* Center-right gradient orb */}
      <div className="absolute top-[40%] -right-20 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[100px]" />

      {/* Bottom-left gradient orb */}
      <div className="absolute bottom-[20%] -left-32 w-[350px] h-[350px] bg-purple-500/[0.02] rounded-full blur-[100px]" />
    </div>
  );
}
