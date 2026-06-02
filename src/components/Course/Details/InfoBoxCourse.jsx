//! ---------------------------------------- Import
import { FaClock, FaSignal, FaUserGraduate } from "react-icons/fa";
//! ---------------------------------------- Component (InfoBoxCourse)
export default function InfoBoxCourse({ chosen }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-10">
      <div className="flex items-center gap-2">
        <FaClock className="text-blue-600" />
        <span>مدت دوره: {chosen.duration}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaSignal className="text-blue-600" />
        <span>سطح: {chosen.level}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaUserGraduate className="text-blue-600" />
        <span>مدرس: {chosen.teacher.name}</span>
      </div>
    </div>
  );
}
