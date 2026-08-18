//! ---------------------------------------- Import
import ArticleCard from "/src/components/Cards/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getArticlesDataFn } from "/src/services/articleService";
//! ---------------------------------------- Variables
const skeletonCount = 3;
//! ---------------------------------------- Component (Articles)
export default function Articles() {
  //! ---------------------------------------- Query
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticlesDataFn,
  });
  //! ---------------------------------------- Return
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">جدیدترین مقالات آموزشی</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: skeletonCount }).map((_, index) => (
                <ArticleCard key={index} />
              ))
            : articles
                ?.slice(0, 3)
                .map((article) => (
                  <ArticleCard key={article.id} {...{ article }} />
                ))}
        </div>
      </div>
    </section>
  );
}
