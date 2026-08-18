//! ---------------------------------------- Import
import CourseCard from "/src/components/Cards/CourseCard";
import { useQuery } from "@tanstack/react-query";
import { getCoursesDataFn } from "/src/services/courseService";
//! ---------------------------------------- Variables
const skeletonCount = 3;
//! ---------------------------------------- Component (Course)
export default function Course() {
  //! ---------------------------------------- Query
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCoursesDataFn,
  });
  //! ---------------------------------------- Return
  return (
    <div className="w-4/5 mx-auto min-h-[30rem] bg-gray-200 rounded-3xl flex-grow flex flex-col text-gray-800 p-5 my-15">
      <h2 className="text-4xl font-bold mb-10 text-center">دوره‌های آموزشی</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-h-90 overflow-auto px-5">
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <CourseCard key={index} />
            ))
          : courses?.map((course) => (
              <CourseCard key={course.id} {...{ course }} />
            ))}
      </div>
    </div>
  );
}
