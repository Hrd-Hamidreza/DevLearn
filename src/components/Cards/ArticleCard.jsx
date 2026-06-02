//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Article)
export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl min-h-110">
      <Link to={`/article/${article.id}`}>
        <img
          alt={article.title}
          className="w-full h-48 object-cover"
          src={article.cover}
        />
      </Link>

      <div className="p-5 flex flex-col gap-2">
        <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full w-fit font-semibold">
          {article.category}
        </span>
        <Link
          title={article.title}
          to={`/article/${article.id}`}
          className="font-bold text-lg text-gray-800 hover:text-indigo-600 transition truncate"
        >
          {article.title}
        </Link>
        <p className="text-sm text-gray-500 line-clamp-3">{article.content}</p>
        <div className="text-xs text-gray-400 mt-3">
          <span>{article.author.name}</span> | <span>{article.date}</span>
        </div>
        <Link
          to={`/article/${article.id}`}
          className="flex gap-2 text-sm text-indigo-600 mt-2 hover:underline font-medium w-fit"
        >
          مطالعه مقاله
        </Link>
      </div>
    </div>
  );
}
