import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import NewsPage from './components/NewsPage';
import NotFound from './components/NotFound';

function App() {
  const [searchText, setSearchText] = useState('');

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
