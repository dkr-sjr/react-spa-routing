import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useThemeStore from './store/useThemeStore';
import Header from './components/Header';
import NewsPage from './components/NewsPage';
import NotFound from './components/NotFound';

function App() {
  const [searchText, setSearchText] = useState('');
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <main>
        <Routes>
          <Route path="/:category?" element={<NewsPage searchText={searchText} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
