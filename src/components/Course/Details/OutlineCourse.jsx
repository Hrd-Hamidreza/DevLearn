//! ---------------------------------------- Import
//! ---------------------------------------- Component (OutlineCourse)
export default function OutlineCourse({ chosen }) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4 text-blue-600">سرفصل‌های دوره</h3>
      <ul className="space-y-2 list-decimal list-inside text-gray-700">
        {chosen.outline.map((step, idx) => (
          <li
            key={idx}
            className="bg-white p-2 px-4 rounded-lg shadow-sm border"
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
