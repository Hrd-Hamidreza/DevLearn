//! ---------------------------------------- Import
import CourseCard from "/src/components/Cards/CourseCard";
import { useQuery } from "@tanstack/react-query";
import { getCoursesDataFn } from "/src/services/courseService";
//! ---------------------------------------- Variables
const skeletonCount = 3;
//! ---------------------------------------- Component (Popular)
export default function Popular() {
  //! ---------------------------------------- Query
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCoursesDataFn,
  });
  //! ---------------------------------------- Return
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">دوره‌های پرطرفدار</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: skeletonCount }).map((_, index) => (
                <CourseCard key={index} />
              ))
            : courses
                ?.slice(0, 3)
                .map((course) => (
                  <CourseCard key={course.id} {...{ course }} />
                ))}
        </div>
      </div>
    </section>
  );
}
