import { useEffect, useState } from 'react';
import {
  NavLink,
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import searchIcon from '../assets/images/search.svg';

const categoryList = [
  { id: 'all', label: 'All' },
  { id: 'business', label: 'Business' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'health', label: 'Health' },
  { id: 'science', label: 'Science' },
  { id: 'sports', label: 'Sports' },
  { id: 'technology', label: 'Technology' },
];

export default function Header() {
  const navigate = useNavigate();
  const { category } = useParams();
  const currentCategory = category || 'all';

  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${inputValue}`);
  };

  useEffect(() => {
    setInputValue('');
  }, [currentCategory]);

  return (
    <>
      <div className="flex mx-[7%] pt-5 justify-end">
        <DarkModeToggle />
      </div>
      <div className="flex justify-between mb-5 mt-3 mx-[7%] gap-10">
        <div className="w-7/11 flex ">
          <Link to="/">
            <h1 className="text-4xl text-center font-bold bg-blue-300 shadow-sm ">
              <span className="inline-block text-blue-300 bg-white px-3 m-1 dark:bg-gray-900">
                NEWS
              </span>
              <span className="inline-block text-white bg-blue-300 px-3 m-1 dark:text-gray-900">
                WORLD
              </span>
            </h1>
          </Link>
        </div>
        <form
          onSubmit={handleSearch}
          className="border border-gray-300 rounded-4xl px-4 w-4/11 flex items-center gap-2"
        >
          <button type="submit">
            <img
              src={searchIcon}
              alt="Search"
              className="w-6 h-6"
            />
          </button>
          <input
            className="my-2 w-full outline-none"
            type="text"
            name="name"
            placeholder="Search Article."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b border-t border-gray-300 dark:bg-gray-900">
        <ul className="flex justify-between px-25 py-2 overflow-x-auto xl:px-35">
          {categoryList.map(({ id, label }) => {
            const path = id === 'all' ? '/' : `/${id}`;
            return (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) => `text-xl font-bold text-center hover:underline ${
                    isActive ? 'text-blue-300' : 'text-black dark:text-white'
                  }`}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
