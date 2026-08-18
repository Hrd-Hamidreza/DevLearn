//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (CourseCard)
export default function CourseCard({ course = undefined, type = "default" }) {
  //! ---------------------------------------- Return
  return (
    <div
      className={`w-full relative bg-white shadow hover:shadow-md transition rounded-3xl overflow-hidden ${type === "my-courses" ? "xl:min-h-78" : type === "teached-courses" ? "xl:min-h-60 xl:min-w-1/2 xl:max-w-1/2" : "xl:min-h-90"}`}
    >
      {!course ? (
        <div className="skeleton" />
      ) : (
        <>
          <Link to={`/course/${course?.id}`}>
            <img
              src={course?.image}
              alt={course?.title}
              className="h-50 w-full object-cover mb-3"
            />
          </Link>
          <div className="p-5 flex flex-col gap-2">
            <Link
              title={course?.title}
              to={`/course/${course?.id}`}
              className="text-lg font-semibold line-clamp-1"
            >
              {course?.title}
            </Link>

            {type === "my-courses" && (
              <p className="text-sm text-gray-500">
                <strong>Progress:</strong>
                60%
              </p>
            )}

            {type === "default" && (
              <>
                <p className="text-sm text-gray-600">
                  <strong>Teacher:</strong> {course?.teacher?.name}
                </p>
                <p className="text-blue-600 font-bold">
                  {`${course?.price?.toLocaleString()} Toman`}
                </p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
