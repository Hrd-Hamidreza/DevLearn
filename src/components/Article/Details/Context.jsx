//! ---------------------------------------- Import
const skeletonCount = 6;
//! ---------------------------------------- Component (Context)
export default function Context({ article = undefined }) {
  //! ---------------------------------------- Return
  return (
    <article className="relative prose prose-sm sm:prose-base prose-p:text-gray-700 leading-loose max-w-none flex flex-col gap-3">
      <div className="relative xl:min-h-15">
        {article ? <p>{article?.content}</p> : <div className="skeleton" />}
      </div>
      <ul className="flex flex-col gap-2 w-1/4">
        {article
          ? article?.samples?.map((sample, idx) => (
              <li key={idx}>{`${idx + 1}-${sample}`}</li>
            ))
          : Array.from({ length: skeletonCount }).map((_, index) => (
              <li key={index} className="relative xl:min-h-10">
                <div className="skeleton" />
              </li>
            ))}
      </ul>
    </article>
  );
}
