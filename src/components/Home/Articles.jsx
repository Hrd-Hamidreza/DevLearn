//! ---------------------------------------- Import
import articles from "/src/data/articles";
import ArticleCard from "../Cards/ArticleCard";
//! ---------------------------------------- Component (Articles)
export default function Articles() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">جدیدترین مقالات آموزشی</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
