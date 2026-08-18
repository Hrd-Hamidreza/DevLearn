//! ---------------------------------------- Import
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
//! ---------------------------------------- Component (Info)
export default function Info({ article = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="flex flex-col gap-3">
      <div className="relative text-3xl font-bold text-gray-800 xl:min-h-20">
        {article ? <h2>{article?.title}</h2> : <div className="skeleton" />}
      </div>
      <div className="flex w-3/6 gap-1 text-sm text-gray-600 items-center">
        <div className="flex items-center gap-2 w-full">
          <FaUser />
          <div className="relative xl:min-h-5 w-1/2">
            {article ? (
              <span className="w-full flex">{article?.author?.name}</span>
            ) : (
              <div className="skeleton" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 w-full">
          <MdOutlineDateRange />
          <div className="relative xl:min-h-5 w-1/2">
            {article ? (
              <span className="w-full flex">{article?.date}</span>
            ) : (
              <div className="skeleton" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 w-full">
          <FaTag />
          <div className="relative xl:min-h-5 w-1/2">
            {article ? (
              <span className="w-full flex">{article?.category}</span>
            ) : (
              <div className="skeleton" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
