import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsPage from './components/NewsPage';

function App() {
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
