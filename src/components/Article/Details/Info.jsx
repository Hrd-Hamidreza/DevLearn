//! ---------------------------------------- Import
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
//! ---------------------------------------- Component (Info)
export default function Info({ chosen }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-3">{chosen.title}</h2>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6 items-center">
        <div className="flex items-center gap-2">
          <FaUser />
          <span>{chosen.author.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineDateRange />
          <span>{chosen.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaTag />
          <span>{chosen.category}</span>
        </div>
      </div>
    </>
  );
}
