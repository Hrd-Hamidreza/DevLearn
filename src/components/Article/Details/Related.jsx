//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Related)
export default function Related({ chosen }) {
  return (
    <div className="border-t pt-6">
      <h3 className="text-xl font-bold mb-4 text-blue-700">مقالات مرتبط</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {chosen.related.map((relation) => (
          <div
            key={relation.id}
            className="bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-md transition"
          >
            <Link to={`/article/${relation.id}`}>
              <img
                alt={relation.title}
                className="w-full h-50 object-cover"
                src={relation.cover}
              />
            </Link>
            <div className="p-4">
              <Link
                to={`/article/${relation.id}`}
                className="font-semibold text-gray-800"
              >
                {relation.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
