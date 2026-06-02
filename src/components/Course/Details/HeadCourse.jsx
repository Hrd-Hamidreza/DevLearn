//! ---------------------------------------- Import
//! ---------------------------------------- Component (HeadCourse)
export default function HeadCourse({ chosen }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{chosen.title}</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">{chosen.description}</p>
    </div>
  );
}
