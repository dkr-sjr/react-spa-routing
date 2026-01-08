import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-20 text-xl">
      <p>존재하지 않는 페이지입니다. 😅</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
