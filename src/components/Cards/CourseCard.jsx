//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (CourseCard)
export default function CourseCard({ course }) {
  //! ---------------------------------------- State
  //! ---------------------------------------- React-Router-Dom
  //! ---------------------------------------- Variables
  //! ---------------------------------------- Return
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition rounded-3xl overflow-hidden min-h-90">
      <Link to={`/course/${course.id}`}>
        <img
          src={course.image}
          alt={course.title}
          className="h-50 w-full object-cover mb-3"
        />
      </Link>
      <div className="p-5 flex flex-col gap-2">
        <Link
          title={course.title}
          to={`/course/${course.id}`}
          className="text-lg font-semibold line-clamp-1"
        >
          {course.title}
        </Link>
        <p className="text-sm text-gray-600">مدرس: {course.teacher.name}</p>
        <p className="text-blue-600 font-bold">
          {`${course.price.toLocaleString()} تومان`}
        </p>
      </div>
    </div>
  );
}
