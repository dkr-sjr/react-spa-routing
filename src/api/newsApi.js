import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const getNewsListByCategory = async (category) => {
  const categoryQuery = category === 'all' ? '' : `&category=${category}`;
  try {
    const response = await axios.get(
      `${BASE_URL}?country=us${categoryQuery}&apiKey=${API_KEY}`,
    );

    return response.data.articles;
  } catch (error) {
    throw new Error(`Failed to load News List: ${error.message}`);
  }
};
export default getNewsListByCategory;
