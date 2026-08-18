//! ---------------------------------------- Import
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
//! ---------------------------------------- Variables
const iconsMap = { FaInstagram, FaLinkedin, FaTwitter };
//! ---------------------------------------- Component (TeacherCard)
export default function TeacherCard({ teacher = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="relative min-h-90 bg-white rounded-3xl overflow-hidden shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition justify-between gap-3">
      {!teacher ? (
        <div className="skeleton" />
      ) : (
        <>
          <Link to={`/teacher/${teacher?.id}`}>
            <img
              src={teacher?.image}
              alt={teacher?.name}
              className="rounded-full w-32 h-32 object-cover border-4 border-blue-500 mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{teacher?.name}</h2>
          </Link>
          <p className="text-gray-600 mb-4">{teacher?.bio}</p>
          <div className="flex gap-4 text-blue-600 text-lg">
            {teacher.social.map((media) => {
              const Icon = iconsMap[media.icon];
              return (
                <a
                  key={media?.id}
                  className="cursor-pointer"
                  href={media?.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
