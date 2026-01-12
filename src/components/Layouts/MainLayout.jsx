import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
