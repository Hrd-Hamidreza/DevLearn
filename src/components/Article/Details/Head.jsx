//! ---------------------------------------- Import
//! ---------------------------------------- Component (Head)
export default function Head({ article = undefined }) {
  return (
    <div className="relative w-full h-144 overflow-hidden">
      {article ? (
        <img
          src={article?.cover}
          alt={article?.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="skeleton" />
      )}
    </div>
  );
}
