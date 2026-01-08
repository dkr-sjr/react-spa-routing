import { Link, useLocation } from 'react-router-dom';

const categoryList = [
  { category: 'all', text: 'All' },
  { category: 'business', text: 'Business' },
  { category: 'entertainment', text: 'Entertainment' },
  { category: 'health', text: 'Health' },
  { category: 'science', text: 'Science' },
  { category: 'sports', text: 'Sports' },
  { category: 'technology', text: 'Technology' },
];

export default function Header() {
  const location = useLocation();
  const currentCategory = location.pathname === '/' ? 'all' : location.pathname.substring(1);

  return (
    <>
      <div className="flex bg-white my-5 mx-25 gap-2">
        <Link to="/">
          <h1 className="flex text-5xl text-center font-bold bg-blue-300 p-2 shadow-sm m-5">
            <span className="text-blue-300 bg-white px-3">
              WORLD
            </span>
            <span className="text-white bg-blue-300 px-3">
              NEWS
            </span>
          </h1>
        </Link>
      </div>

      <div className="flex justify-center border-b border-t border-gray-300 px-10 py-2">
        {categoryList.map(({ category, text }) => {
          const isCurrentCategory = category === currentCategory;
          const path = category === 'all' ? '/' : `/${category}`;
          return (
            <Link
              key={category}
              to={path}
              className={`text-2xl font-bold text-center px-10 hover:underline ${
                isCurrentCategory ? 'text-blue-300' : 'text-black'
              }`}
            >
              {text}
            </Link>
          );
        })}
      </div>
    </>
  );
}
