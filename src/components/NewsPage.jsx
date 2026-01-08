import { useParams } from 'react-router-dom';
import useNewsListQuery from '../hooks/useNewsListQuery';
import NewsItem from './NewsItem';
import NotFound from './NotFound';

const categories = ['all', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

export default function NewsPage({ searchText }) {
  const { category } = useParams();
  const currentCategory = category || 'all';

  const {
    data: articles,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useNewsListQuery(currentCategory);

  if (currentCategory && !categories.includes(currentCategory)) {
    return <NotFound />;
  }

  const articleList = (articles || []).filter((article) => {
    if (!article.url) {
      return false;
    }
    if (article.title === '[removed]') {
      return false;
    }
    if (!article.description || article.description === '') {
      return false;
    }

    if (searchText) {
      const titleLower = article.title?.toLowerCase();
      const descriptionLower = (article.description || '').toLowerCase();
      const searchLower = searchText.toLowerCase();

      if (!titleLower.includes(searchLower) && !descriptionLower.includes(searchLower)) {
        return false;
      }
    }

    return true;
  });

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-xl">
        <h2>
          Loading Articles..!
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-xl">
        <h2>
          Failed Load Articles..!
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {`error message :${error.message}`}
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="mt-4 border border-gray-300 rounded-xl px-4 py-2"
          disabled={isFetching}
        >
          {isFetching ? 'Loading...' : 'Try Load Again'}
        </button>
      </div>
    );
  }

  if (!articleList.length) {
    return (
      <div className="text-center mt-20 text-xl">
        No news found. 🕵️‍♂️
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 mt-5 mx-[7%]">
      {articleList.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}
