export default function NewsItem({ article }) {
  const { title, description, url, urlToImage, source, publishedAt } = article;
  return (
    <div>
      {title}
      {description}
    </div>
  );
}