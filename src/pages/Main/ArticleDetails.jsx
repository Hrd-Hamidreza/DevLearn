//! ---------------------------------------- Import
import { useParams } from "react-router-dom";
import articles from "/src/data/articles";
import Head from "/src/components/Article/Details/Head";
import Info from "/src/components/Article/Details/Info";
import Context from "/src/components/Article/Details/Context";
import Tags from "/src/components/Article/Details/Tags";
import Related from "/src/components/Article/Details/Related";
import NotFound from "/src/pages/Main/NotFound";
//! ---------------------------------------- Component (Article)
const ArticleDetails = () => {
  const { id } = useParams();
  const chosen = articles.find((article) => +article.id === +id);
  if (!chosen) {
    return <NotFound />;
  } else {
    return (
      <div className="min-h-fit bg-gray-200 rounded-3xl flex-grow w-6xl flex flex-col mx-auto text-gray-800 my-15">
        {/* Head */}
        <Head chosen={chosen} />
        <div className="p-5">
          {/* Info */}
          <Info chosen={chosen} />
          {/* Article */}
          <Context chosen={chosen} />
          {/* Tags */}
          <Tags chosen={chosen} />
          {/* Related */}
          <Related chosen={chosen} />
        </div>
      </div>
    );
  }
};

export default ArticleDetails;
