import { useState } from 'react';

export default function NewsItem({ article }) {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
  } = article;

  const [isImageValid, setIsImageValid] = useState(!!urlToImage);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="mt-8.5">
      <div className="w-full flex justify-between gap-10">
        <div className="w-7/11 flex flex-col">
          <h3 className="text-2xl font-bold hover:underline">
            {title}
          </h3>
          <div className="flex text-xs text-gray-400 gap-2 my-1.5">
            <span className="font-semibold">
              {source.name}
            </span>
            <span>•</span>
            <time dateTime={publishedAt}>
              {publishedAt.split('T')[0]}
            </time>
          </div>
          <p className="text-base font-medium">
            {description}
          </p>
        </div>

        <div className="w-4/11">
          {isImageValid && (
            <img
              src={urlToImage}
              alt={title}
              className="w-full"
              onError={() => setIsImageValid(false)}
            />
          )}

          {!isImageValid && (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-lg text-gray-400">
              No Image Available
            </div>
          )}
        </div>
      </div>

      <div className="flex border-b border-gray-300 py-5" />
    </a>
  );
}
