//! ---------------------------------------- Import
import courses from "/src/data/courses.js";
import CourseCard from "../components/Cards/CourseCard";
//! ---------------------------------------- Component (Course)
const Course = () => {
  return (
    <div className="min-h-fit bg-gray-200 rounded-3xl flex-grow max-w-6xl flex flex-col mx-auto text-gray-800 p-5 my-15">
      <h2 className="text-4xl font-bold mb-10 text-center">دوره‌های آموزشی</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-h-90 overflow-auto px-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Course;
