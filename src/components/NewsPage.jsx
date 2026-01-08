import { useParams } from 'react-router-dom';
import useNewsListQuery from '../hooks/useNewsListQuery';
import NewsItem from './NewsItem';

export default function NewsPage({ searchText }) {
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

    if (searchText) {
      const titleLower = article.title?.toLowerCase();
      const searchLower = searchText.toLowerCase();

      if (!titleLower.includes(searchLower)) {
        return false;
      }
    }

    return true;
  });

  if (isLoading) {
    return (
      <div className="">
        Loading Article!
      </div>
    );
  }

  if (error) {
    return (
      <>
      </>
    );
  }

  if (!articleList.length) {
    return (
      <div>
        No Results Found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 mt-5 mx-[7%]">
      {articleList.map((article) => (<NewsItem key={article.url} article={article} />))}
    </div>
  );
}
