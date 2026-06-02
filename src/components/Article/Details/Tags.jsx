//! ---------------------------------------- Import
//! ---------------------------------------- Component (Tags)
export default function Tags({ chosen }) {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {chosen.tags.map((tag, idx) => (
        <span
          key={idx}
          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
