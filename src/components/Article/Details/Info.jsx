//! ---------------------------------------- Import
import MyIcons from "/src/components/Icons/MyIcons";
//! ---------------------------------------- Component (Info)
export default function Info({ article = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="flex flex-col gap-3">
      <div className="relative text-3xl font-bold text-gray-800 xl:min-h-10">
        {article ? <h2>{article?.title}</h2> : <div className="skeleton" />}
      </div>
      <div className="flex w-3/6 gap-1 text-sm text-gray-600 items-center">
        <div className="flex items-center gap-2 w-full">
          <MyIcons type={"user"} />
          <div className="relative xl:min-h-5 w-full">
            {article ? (
              <span className="w-full flex">{article?.author?.name}</span>
            ) : (
              <div className="skeleton" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 w-full">
          <MyIcons type={"date"} />
          <div className="relative xl:min-h-5 w-full">
            {article ? (
              <span className="w-full flex">{article?.date}</span>
            ) : (
              <div className="skeleton" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 w-full">
          <MyIcons type={"category"} />
          <div className="relative xl:min-h-5 w-full">
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
