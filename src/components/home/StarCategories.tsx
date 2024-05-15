import Image from 'next/image';
import familyImage from '../../data/categories-images/family-1.jpeg';
import sportsImage from '../../data/categories-images/sports-1.jpeg';
import romanticImage from '../../data/categories-images/romantic-1.jpeg';
import seasonsImage from '../../data/categories-images/seasons-1.jpeg';
import ornamentsImage from '../../data/categories-images/ornaments.jpeg';

export default function StarCategories() {
  return (
    <div className="my-40 flex items-center justify-center space-x-24">
      <h2 className="text-5xl font-semibold text-gray-900">Favorites</h2>
      <div className="flex items-center justify-center space-x-6">
        <div className="space-y-6">
          <div className="relative h-44 w-44 overflow-hidden rounded-[44px]">
            <Image
              src={sportsImage}
              alt="Sports"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-44 w-44 overflow-hidden rounded-[44px]">
            <Image
              src={romanticImage}
              alt="Romantic"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative h-44 w-44 overflow-hidden rounded-[44px]">
            <Image
              src={familyImage}
              alt="Family"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-44 w-44 overflow-hidden rounded-[44px]">
            <Image
              src={seasonsImage}
              alt="Seasons"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-44 w-44 overflow-hidden rounded-[44px]">
            <Image
              src={ornamentsImage}
              alt="Ornaments"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative h-44 w-44 overflow-hidden rounded-[44px]">
            <Image
              src={familyImage}
              alt="Family"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-44 w-44 overflow-hidden rounded-[44px]">
            <Image
              src={sportsImage}
              alt="Sports"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
