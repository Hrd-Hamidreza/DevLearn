//! ---------------------------------------- Import
const skeletonCount = 3;
//! ---------------------------------------- Component (Tags)
export default function Tags({ article = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div>
      <ul className="w-1/2 flex gap-3">
        {article
          ? article?.tags?.map((tag, idx) => (
              <li
                key={idx}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </li>
            ))
          : Array.from({ length: skeletonCount }).map((_, index) => (
              <li
                key={index}
                className="relative xl:min-h-5 w-1/2 px-3 py-1 rounded-full overflow-hidden text-sm"
              >
                <div className="skeleton" />
              </li>
            ))}
      </ul>
    </div>
  );
}
