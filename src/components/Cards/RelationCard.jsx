//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (RelationCard)
export default function RelationCard({ relation = undefined }) {
  //! ---------------------------------------- Return
  return (
    <li className="relative bg-white shadow-2xl rounded-xl overflow-hidden hover:shadow-md transition xl:min-h-60 w-1/2">
      {relation ? (
        <>
          <Link to={`/article/${relation?.id}`}>
            <img
              alt={relation?.title}
              className="w-full h-50 object-cover"
              src={relation?.cover}
            />
          </Link>
          <div className="p-4">
            <Link
              to={`/article/${relation?.id}`}
              className="font-semibold text-gray-800"
            >
              {relation?.title}
            </Link>
          </div>
        </>
      ) : (
        <div className="skeleton" />
      )}
    </li>
  );
}
