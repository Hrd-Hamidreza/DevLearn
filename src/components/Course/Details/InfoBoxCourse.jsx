//! ---------------------------------------- Import
import MyIcons from "/src/components/Icons/MyIcons";
//! ---------------------------------------- Component (InfoBoxCourse)
export default function InfoBoxCourse({ course = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
      <div className="flex items-center gap-2">
        <MyIcons type={"period"} className="text-blue-600" />
        <strong>مدت دوره:</strong>
        <div className="relative xl:min-h-5 w-1/3">
          {course ? <p>{course?.duration}</p> : <div className="skeleton" />}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MyIcons type={"level"} className="text-blue-600" />
        <strong>سطح:</strong>
        <div className="relative xl:min-h-5 w-1/3">
          {course ? <p>{course?.level}</p> : <div className="skeleton" />}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MyIcons type={"teacher"} className="text-blue-600" />
        <strong>مدرس:</strong>
        <div className="relative xl:min-h-5 w-1/3">
          {course ? (
            <p>{course?.teacher?.name}</p>
          ) : (
            <div className="skeleton" />
          )}
        </div>
      </div>
    </div>
  );
}
