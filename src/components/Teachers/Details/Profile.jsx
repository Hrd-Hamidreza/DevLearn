//! ---------------------------------------- Import
import MyIcons from "/src/components/Icons/MyIcons";
//! ---------------------------------------- Variables
const skeletonCount = 3;
//! ---------------------------------------- Component (Profile)
export default function Profile({ teacher = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
      <div className="w-50 h-40 rounded-full shadow relative overflow-hidden">
        {teacher ? (
          <img
            src={teacher?.image}
            alt={teacher?.name}
            className="object-cover"
          />
        ) : (
          <div className="skeleton" />
        )}
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="text-2xl font-bold text-gray-800 relative xl:min-h-10 w-1/4">
          {teacher ? <h2>{teacher?.name}</h2> : <div className="skeleton" />}
        </div>
        <div className="text-gray-600 leading-loose whitespace-pre-line relative xl:min-h-5">
          {teacher ? <p>{teacher?.bio}</p> : <div className="skeleton" />}
        </div>
        <ul className="flex gap-4 text-xl text-gray-600 w-1/2">
          {teacher
            ? teacher?.social?.map((media) => {
                return (
                  <a
                    key={media?.id}
                    href={media?.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MyIcons
                      type={media.name}
                      className={`${media?.name === "instagram" ? " hover:text-pink-700 " : media?.name === "linkedin" ? "hover:text-blue-700" : "hover:text-blue-400"} transition`}
                    />
                  </a>
                );
              })
            : Array.from({ length: skeletonCount }).map((_, index) => (
                <li key={index} className="relative xl:min-h-5 w-1/16">
                  <div className="skeleton" />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}
