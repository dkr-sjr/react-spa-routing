import { useQuery } from '@tanstack/react-query';
import { getNewsListByCategory } from '../api/newsApi';

export const useNewsListQuery = (category) => {
  const categoryKey = category === '' ? 'all' : category;
  return useQuery({
    queryKey: ['news', categoryKey],
    queryFn: () => getNewsListByCategory(category),

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 20,
    refetchOnWindowFocus: false,
  });
}