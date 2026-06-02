//! ---------------------------------------- Import
//! ---------------------------------------- Component (Context)
export default function Context({ chosen }) {
  return (
    <article className="prose prose-sm sm:prose-base prose-p:text-gray-700 leading-loose max-w-none mb-10">
      <p>{chosen.content}</p>
      <ul>
        {chosen.samples.map((sample, idx) => (
          <li key={idx}>{`${idx + 1}-${sample}`}</li>
        ))}
      </ul>
    </article>
  );
}
