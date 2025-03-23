import React from "react";
import useFetch from "./hooks/useFetch";
import NewsCard from "./components/NewsCard";
import LoadingState from "./components/LoadingState";

function App() {
  // Point to your serverless function
  const { data, error, isLoading } = useFetch("/api/news");

  if (isLoading) {
    const arr = [1, 1, 1, 1, 1, 1];
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%]">
          {arr.map((_, idx) => (
            <LoadingState key={idx} />
          ))}
        </section>
      </main>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%]">
        {data.map((article) => (
          <NewsCard
            key={article.id}
            title={article.title}
            author={article.author}
            urlToImage={article.urlToImage}
            description={article.description}
            publishedAt={article.publishedAt}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
