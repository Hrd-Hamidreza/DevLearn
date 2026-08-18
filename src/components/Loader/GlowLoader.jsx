//! ---------------------------------------- Import
//! ---------------------------------------- Component (GlowLoader)
export default function GlowLoader() {
  //! ---------------------------------------- Return
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex size-20 items-center justify-center">
        <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/30" />
        <div className="absolute inset-2 animate-pulse rounded-full bg-cyan-400/20 blur-xl" />

        <div className="relative flex size-14 items-center justify-center rounded-full bg-cyan-500 text-2xl text-white shadow-[0_0_40px_rgba(34,211,238,0.7)]">
          ⚡
        </div>
      </div>
    </div>
  );
}
