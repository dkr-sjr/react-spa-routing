import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import NewsPage from './components/NewsPage';

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/:category?" element={<NewsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
