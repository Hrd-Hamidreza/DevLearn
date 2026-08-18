//! ---------------------------------------- Import
//! ---------------------------------------- Component (PremiumLoader)
export default function PremiumLoader() {
  //! ---------------------------------------- Return
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Glow */}
      <div className="absolute size-72 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Rings */}
      <div className="absolute size-40 animate-spin rounded-full border border-cyan-400/30 border-t-cyan-400" />

      <div className="absolute size-56 animate-[spin_4s_linear_infinite_reverse] rounded-full border border-blue-500/20 border-r-blue-500" />

      {/* Center */}
      <div className="relative flex flex-col items-center gap-5">
        <div className="flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl text-white shadow-[0_0_50px_rgba(34,211,238,0.5)]">
          🔐
        </div>

        <div className="flex items-center gap-1">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce [animation-delay:150ms]">.</span>
          <span className="animate-bounce [animation-delay:300ms]">.</span>
        </div>

        <p className="text-sm text-white/60">در حال ورود به حساب کاربری</p>
      </div>
    </div>
  );
}
