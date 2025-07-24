// Articles.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../client";

const articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const query = `*[_type == "article"] | order(date desc){
      _id, title, date, excerpt, slug, image
    }`;
    client.fetch(query)
      .then(setArticles)
      .catch((err) => console.error("Sanity Fetch Error (Articles):", err));
  }, []);

  return (
    <div className="px-4 md:px-12 mt-10 min-h-screen max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Articles</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div
              key={article._id}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.01]"
            >
              {article.image?.asset && (
                <img
                  src={urlFor(article.image).width(600).url()}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-4 flex flex-col flex-grow">
                <p className="text-gray-500 text-sm mb-1">
                  {new Date(article.date).toDateString()}
                </p>

                <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>

                <Link
                  to={`/articles/${article.slug.current}`}
                  className="text-blue-600 hover:underline mt-auto text-sm font-medium"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default articles;
