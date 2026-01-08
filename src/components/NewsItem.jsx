export default function NewsItem({ article }) {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
  } = article;

  const hasImageUrl = urlToImage !== null;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="mx-30 p-5 my-2">
      <div className="flex gap-10">
        <div className="flex flex-7 flex-col">
          <h3 className="text-2xl font-bold hover:text-blue-300">
            {title}
          </h3>
          <div className="flex text-xs text-gray-400 gap-2 my-1.5">
            <span className="font-semibold">
              {source.name}
            </span>
            <span>•</span>
            <time className="">
              {publishedAt.split('T')[0]}
            </time>
          </div>
          <p className="text-base font-medium">
            {description}
          </p>
        </div>

        <div className="flex-4">
          {hasImageUrl && <img src={urlToImage} alt={title} />}
        </div>
      </div>

      <div className="flex border-b border-gray-300 py-5" />
    </a>
  );
}
