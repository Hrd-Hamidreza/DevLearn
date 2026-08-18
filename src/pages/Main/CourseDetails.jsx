//! ---------------------------------------- Import
import { useParams } from "react-router-dom";
import CourseBanner from "/src/components/Course/Details/CourseBanner";
import HeadCourse from "/src/components/Course/Details/HeadCourse";
import InfoBoxCourse from "/src/components/Course/Details/InfoBoxCourse";
import TeacherBoxCourse from "/src/components/Course/Details/TeacherBoxCourse";
import OutlineCourse from "/src/components/Course/Details/OutlineCourse";
import EnrollCourse from "/src/components/Course/Details/EnrollCourse";
import NotFound from "/src/pages/Main/NotFound";
import { useQuery } from "@tanstack/react-query";
import { getCourseDataByIdFn } from "/src/services/courseService";
//! ---------------------------------------- Component (CourseDetails)
export default function CourseDetails() {
  //! ---------------------------------------- Hooks
  const { id } = useParams();
  //! ---------------------------------------- Query
  const { data: course, isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourseDataByIdFn(id),
  });
  //! ---------------------------------------- Return
  return isLoading || course ? (
    <div className="bg-gray-200 shadow-md w-6xl mx-auto rounded-3xl overflow-hidden my-15 flex flex-col">
      {/* Course Banner */}
      <CourseBanner {...(!isLoading && { course })} />
      <div className="p-8 gap-5 flex flex-col">
        {/* Title + Desc */}
        <HeadCourse {...(!isLoading && { course })} />
        {/* Info Box */}
        <InfoBoxCourse {...(!isLoading && { course })} />
        {/* Instructor Box */}
        <TeacherBoxCourse {...(!isLoading && { course })} />
        {/* Outline */}
        <OutlineCourse {...(!isLoading && { course })} />
        {/* Enroll Section */}
        <EnrollCourse {...(!isLoading && { course })} />
      </div>
    </div>
  ) : (
    <NotFound />
  );
}
