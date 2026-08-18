//! ---------------------------------------- Import
import { useQuery } from "@tanstack/react-query";
import CategoriesCard from "/src/components/Cards/CategoriesCard";
import { getCategoriesDataFn } from "/src/services/categoryService";
//! ---------------------------------------- Variables
const skeletonCount = 5;
//! ---------------------------------------- Component (Slider)
export default function Slider() {
  //! ---------------------------------------- Query
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesDataFn,
  });
  //! ---------------------------------------- Return
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-blue-50 text-center py-20 px-4 flex gap-5 flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Learn programming from basic to advanced
        </h2>
        <p className="text-lg text-gray-600">
          Join the learning journey with the best Iranian instructors{" "}
        </p>
        <button className="btn-primary px-6 py-2">Start learning</button>
      </section>
      {/* Categories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {isLoading
            ? Array.from({ length: skeletonCount }).map((_, index) => (
                <CategoriesCard key={index} />
              ))
            : categories?.map((category) => (
                <CategoriesCard key={category?.id} {...{ category }} />
              ))}
        </div>
      </section>
    </>
  );
}
