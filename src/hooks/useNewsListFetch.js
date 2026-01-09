import { useState, useEffect, useCallback } from 'react';
import getNewsListByCategory from '../api/newsApi';

const STALE_TIME = 1000 * 60 * 5;

const useNewsListFetch = (category) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewsList = useCallback(async (forceUpdate = false) => {
    const storageKey = `news_cache_${category}`;
    const storedData = localStorage.getItem(storageKey);

    const cachedData = (() => {
      if (!storedData) return null;

      try {
        return JSON.parse(storedData);
      } catch {
        return null;
      }
    })();

    const nowTime = Date.now();
    if (
      !forceUpdate
      && cachedData
      && nowTime - cachedData.time < STALE_TIME
    ) {
      setData(cachedData.data);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await getNewsListByCategory(category);
      const cacheValue = {
        data: result,
        time: Date.now(),
      };

      try {
        localStorage.setItem(storageKey, JSON.stringify(cacheValue));
      } catch {
        // ignore
      }

      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchNewsList();
  }, [fetchNewsList]);

  return {
    data,
    isLoading,
    error,
    refetch: () => fetchNewsList(true),
  };
};

export default useNewsListFetch;
