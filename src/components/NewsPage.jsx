import { useParams, useSearchParams } from 'react-router-dom';
import useNewsListFetch from '../hooks/useNewsListFetch';
import useFilteredNewsList from '../hooks/useFilteredNewsList';
import NewsItem from './NewsItem';
import LoadingLayout from './Layouts/LoadingLayout';
import ErrorLayout from './Layouts/ErrorLayout';
import NotFoundLayout from './Layouts/NotFoundLayout';
import NoArticleLayout from './Layouts/NoArticleLayout';

const categories = ['all', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

export default function NewsPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const currentCategory = category || 'all';
  const searchText = searchParams.get('q') || '';

  const {
    data: articles,
    isLoading,
    error,
    refetch,
  } = useNewsListFetch(currentCategory);

  const articleList = useFilteredNewsList(articles, searchText);

  if (currentCategory && !categories.includes(currentCategory)) {
    return <NotFoundLayout />;
  }
  if (isLoading) {
    return <LoadingLayout />;
  }
  if (error) {
    return <ErrorLayout error={error} onRetry={refetch} />;
  }
  if (!articleList.length) {
    return <NoArticleLayout />;
  }

  return (
    <div className="flex flex-col gap-1 mt-5 mx-[7%]">
      {articleList.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}
