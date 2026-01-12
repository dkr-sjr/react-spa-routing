import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import NewsPage from './components/NewsPage';
import NotFoundLayout from './components/Layouts/NotFoundLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/:category?" element={<NewsPage />} />
        <Route path="*" element={<NotFoundLayout />} />
      </Route>
    </Routes>
  );
}

export default App;
