//! ---------------------------------------- Import
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "/src/components/Cards/CourseCard";
import { getCoursesDataFn } from "/src/services/courseService";
import { getUsersDataFn, getuserDataByIdFn } from "/src/services/userService";
//! ---------------------------------------- Variable
const skeletonCount = 4;
//! ---------------------------------------- Component (Courses)
export default function Courses() {
  //! ---------------------------------------- Redux
  const { cart, account } = useSelector((store) => store);
  //! ---------------------------------------- Query
  const { data: coursesData, isLoading: coursesLoading } = useQuery({
    queryKey: ["my-courses"],
    queryFn: getCoursesDataFn,
  });
  //! --------------------
  const { data: userData, isLoading: UsersLoading } = useQuery({
    queryKey: ["my-users"],
    queryFn: () => getuserDataByIdFn(account?.user?.id),
  });
  //! ---------------------------------------- Rest
  const userCourses = coursesData?.filter((course) =>
    userData?.purchasedCourses?.includes(course.id),
  );
  //! ---------------------------------------- Return
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">دوره‌های من</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCourses?.length === 0 ? (
          <p className="text-lg">دوره ای برای نمایش وجود ندارد</p>
        ) : coursesLoading && UsersLoading ? (
          Array.from({ length: skeletonCount }).map((_, index) => (
            <CourseCard key={index} type={"my-courses"} />
          ))
        ) : (
          userCourses?.map((course) => (
            <CourseCard key={course?.id} {...{ course }} type={"my-courses"} />
          ))
        )}
      </div>
    </>
  );
}
