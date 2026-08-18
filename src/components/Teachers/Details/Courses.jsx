//! ---------------------------------------- Import
import { Link } from "react-router-dom";
import CourseCard from "/src/components/Cards/CourseCard";
//! ---------------------------------------- Variables
const skeletonCount = 2;
//! ---------------------------------------- Component (Courses)
export default function Courses({ teacher = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold text-blue-700 mb-6">
        Teaching courses
      </h3>
      <ul className="flex overflow-auto gap-5 py-5">
        {teacher
          ? teacher?.courses?.map((course) => (
              <CourseCard
                key={course?.id}
                type={"teached-courses"}
                {...{ course }}
              />
            ))
          : Array.from({ length: skeletonCount }).map((_, index) => (
              <CourseCard key={index} type={"teached-courses"} />
            ))}
      </ul>
    </div>
  );
}
