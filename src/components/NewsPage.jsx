import { useParams } from 'react-router-dom';
import useNewsListQuery from '../hooks/useNewsListQuery';
import NewsItem from './NewsItem';

export default function NewsPage() {
  const { category } = useParams();
  const currentCategory = category || 'all';

  const { data: articles, isLoading, error } = useNewsListQuery(currentCategory);

  const articleList = articles || [];

  if (isLoading) {
    return (
      <>
      </>
    );
  }

  if (error) {
    return (
      <>
      </>
    );
  }

  return (
    <div className="flex">
      {articleList.map((article) => (<NewsItem key={article.url} article={article} />))}
    </div>
  );
}
