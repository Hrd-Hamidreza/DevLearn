//! ---------------------------------------- Import
import { useParams } from "react-router-dom";
import Head from "/src/components/Article/Details/Head";
import Info from "/src/components/Article/Details/Info";
import Context from "/src/components/Article/Details/Context";
import Tags from "/src/components/Article/Details/Tags";
import Related from "/src/components/Article/Details/Related";
import NotFound from "/src/pages/Main/NotFound";
import { useQuery } from "@tanstack/react-query";
import { getArticleDataByIdFn } from "/src/services/articleService";
//! ---------------------------------------- Component (ArticleDetails)
export default function ArticleDetails() {
  //! ---------------------------------------- Hooks
  const { id } = useParams();
  //! ---------------------------------------- Query
  const { data: article, isLoading } = useQuery({
    queryKey: ["article"],
    queryFn: () => getArticleDataByIdFn(id),
  });
  //! ---------------------------------------- Return
  return isLoading || article ? (
    <div className="bg-gray-200 shadow-md w-6xl mx-auto rounded-3xl overflow-hidden my-15 flex flex-col">
      {/* Head */}
      <Head {...(!isLoading && { article })} />
      <div className="p-8 gap-5 flex flex-col">
        {/* Info */}
        <Info {...(!isLoading && { article })} />
        {/* Article */}
        <Context {...(!isLoading && { article })} />
        {/* Tags */}
        <Tags {...(!isLoading && { article })} />
        {/* Related */}
        <Related {...(!isLoading && { article })} />
      </div>
    </div>
  ) : (
    <NotFound />
  );
}
