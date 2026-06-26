//! ---------------------------------------- Import
import { useContext } from "react";
import { userContext } from "/src/context/UserProvider";
import users from "/src/data/users";
import courses from "/src/data/courses";
//! ---------------------------------------- Component (Courses)
export default function Courses() {
  //! ----------------------------------------
  const { userState } = useContext(userContext);
  const userInfo = users.find((user) => +user.id === +userState.user.id);
  const userCourses = courses.filter((course) =>
    userInfo.purchasedCourses.includes(course.id),
  );
  //! ---------------------------------------- Return
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">دوره‌های من</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                {course.title}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">پیشرفت: 60%</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
