import { useMemo } from 'react';

const useFilteredNewsList = (articles, searchText) => {
  const filteredList = useMemo(() => {
    if (!articles) return [];

    return articles.filter((article) => {
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
        const titleLower = article.title.toLowerCase();
        const descLower = article.description.toLowerCase();
        const searchLower = searchText.toLowerCase();

        if (!titleLower.includes(searchLower) && !descLower.includes(searchLower)) {
          return false;
        }
      }

      return true;
    });
  }, [articles, searchText]);

  return filteredList;
};

export default useFilteredNewsList;
