//! ---------------------------------------- Import
import { Link } from "react-router-dom";
import courses from "/src/data/courses";
import CourseCard from "/src/components/Cards/CourseCard";
//! ---------------------------------------- Component (Popular)
export default function Popular() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">دوره‌های پرطرفدار</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
