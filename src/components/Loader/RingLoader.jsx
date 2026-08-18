//! ---------------------------------------- Import
//! ---------------------------------------- Component (RingLoader)
export default function RingLoader() {
  //! ---------------------------------------- Return
  return (
    <div className="flex items-center justify-center">
      <div className="relative size-24">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-cyan-400" />

        <div className="absolute inset-2 animate-[spin_1.5s_linear_infinite_reverse] rounded-full border-4 border-transparent border-r-blue-500" />

        <div className="absolute inset-5 flex items-center justify-center rounded-full bg-cyan-500 text-xl text-white shadow-[0_0_30px_rgba(34,211,238,0.6)]">
          🔐
        </div>
      </div>
    </div>
  );
}
