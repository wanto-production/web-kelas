'use client'
import { useState } from 'react';
import Image from 'next/image';

// Create a simple blur placeholder using a base64 encoded image
const blurPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9IlR1cmJ1bGVuY2UiYmFzZUZyZXF1ZW5jeT0iMSIgbnVtT2N0YXZlcz0iMSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgc2VlZD0iMSIvPjxmZURpc3BlcnNlVG9Db2xvcnMgaW49IlNvdXJjZUdyYXBoaWMiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+';

export const GalleryContainer = () => {
  const gallery = [
    '/memo/agasa.png',
    '/memo/agasa2.png',
    '/memo/depan.png',
    '/memo/guwe.png',
    '/memo/hamak.png',
    '/memo/juang.png',
    '/memo/juang2.png',
    '/memo/juang3.png',
    '/memo/mukbang.png',
    '/memo/mukbang2.png',
  ];

  return (
    <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6 w-full max-w-6xl mx-auto">
      {gallery.map((src, i) => (
        <div
          key={i}
          className="relative aspect-square max-h-64 sm:max-h-80 md:max-h-96 w-full rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
        >
          <ImageWithBlur
            src={src}
            alt={`Memories ${i + 1}`}
            fill={true}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

interface ImageWithBlurProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

const ImageWithBlur = ({ src, alt, fill, sizes, className }: ImageWithBlurProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={`${className} ${isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'} transition-all duration-500 ease-in-out object-cover`}
        loading="lazy"
        placeholder="blur"
        blurDataURL={blurPlaceholder}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ filter: 'blur(5px)' }}
        />
      )}
    </div>
  );
};
