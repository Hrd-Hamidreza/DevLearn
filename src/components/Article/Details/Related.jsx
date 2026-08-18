//! ---------------------------------------- Import
import { Link } from "react-router-dom";
import RelationCard from "/src/components/Cards/RelationCard";
//! ---------------------------------------- Variables
const skeletonCount = 2;
//! ---------------------------------------- Component (Related)
export default function Related({ article = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="border-t pt-6 mt-6 flex flex-col gap-3">
      <h3 className="text-xl font-bold text-blue-700">Related articles</h3>
      <ul className="flex justify-between items-center gap-3 w-full">
        {article
          ? article?.related?.map((relation) => (
              <RelationCard key={relation?.id} {...{ relation }} />
            ))
          : Array.from({ length: skeletonCount }).map((_, index) => (
              <RelationCard key={index} />
            ))}
      </ul>
    </div>
  );
}
