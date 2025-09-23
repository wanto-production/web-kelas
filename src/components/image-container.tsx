
import Image from 'next/image';
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
          <Image
            src={src}
            alt={`Memories ${i + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      ))}

    </div>
  );
};
