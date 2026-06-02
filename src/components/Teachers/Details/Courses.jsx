//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Router)
export default function Courses({ chosen }) {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-blue-700 mb-6">
        دوره‌های تدریسی
      </h3>
      <div className="flex overflow-auto gap-5 py-5">
        {chosen.courses.map((course) => (
          <Link
            key={course.id}
            to={`/course/${course.id}`}
            className="bg-white shadow-sm rounded-xl hover:shadow-md transition overflow-hidden min-w-130 max-w-140"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full object-fill"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-800">{course.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
