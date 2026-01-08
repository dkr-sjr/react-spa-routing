import { Link } from 'react-router-dom';

const categoryList = [
  'all',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

export default function Header() {
  return (
    <>
      <div className="flex bg-white my-5 mx-25 gap-2">
        <h1 className="flex text-5xl text-center font-bold bg-blue-300 p-2 shadow-sm m-5">
          <span className="text-blue-300 bg-white px-3">
            WORLD
          </span>
          <span className="text-white bg-blue-300 px-3">
            NEWS
          </span>
        </h1>
      </div>
      <div className="flex justify-center border-b border-t border-gray-300 px-10 py-2">
        {categoryList.map((category) => (
          <Link key={category} to={category} className="text-2xl font-bold text-center mx-10">
            {category}
          </Link>
        ))}
      </div>
    </>
  );
}
