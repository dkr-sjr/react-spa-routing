import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const categoryList = [
  { category: 'all', text: 'All' },
  { category: 'business', text: 'Business' },
  { category: 'entertainment', text: 'Entertainment' },
  { category: 'health', text: 'Health' },
  { category: 'science', text: 'Science' },
  { category: 'sports', text: 'Sports' },
  { category: 'technology', text: 'Technology' },
];

export default function Header({ searchText, setSearchText }) {
  const location = useLocation();
  const currentCategory = location.pathname === '/' ? 'all' : location.pathname.substring(1);

  return (
    <>
      <div className="flex mx-[7%] pt-5 justify-end">
        <DarkModeToggle />
      </div>
      <div className="flex justify-between mb-5 mt-3 mx-[7%] gap-10">
        <div className="w-7/11 flex">
          <Link to="/">
            <h1 className="flex text-4xl text-center font-bold bg-blue-300 p-1 shadow-sm my-3">
              <span className="text-blue-300 bg-white px-3  dark:bg-gray-900">
                NEWS
              </span>
              <span className="text-white bg-blue-300 px-3  dark:text-gray-900">
                WORLD
              </span>
            </h1>
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-4xl my-3 px-5 w-4/11 flex"
        />
      </div>

      <nav className="sticky top-0 z-50 bg-white flex justify-between
        border-b border-t border-gray-300 px-35 py-2 overflow-x-auto dark:bg-gray-900"
      >
        {categoryList.map(({ category, text }) => {
          const isCurrentCategory = category === currentCategory;
          const path = category === 'all' ? '/' : `/${category}`;
          return (
            <Link
              key={category}
              to={path}
              className={`text-xl font-bold text-center hover:underline ${
                isCurrentCategory ? 'text-blue-300' : 'text-black  dark:text-white'
              }`}
            >
              {text}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
