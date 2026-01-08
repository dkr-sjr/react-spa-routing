import { useParams } from 'react-router-dom';
import useNewsListQuery from '../hooks/useNewsListQuery';
import NewsItem from './NewsItem';

export default function NewsPage() {
  const { category } = useParams();
  const currentCategory = category || 'all';

  const { data: articles, isLoading, error } = useNewsListQuery(currentCategory);

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

    return true;
  });

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
    <div className="flex flex-col gap-1 mt-5">
      {articleList.map((article) => (<NewsItem key={article.url} article={article} />))}
    </div>
  );
}
