const categoryImages = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    alt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
    alt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
    alt: "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    alt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
    alt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
    alt: "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
];

export default function CategoryImages() {
  return (
    <section aria-labelledby="favorites-heading">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="favorites-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Our Favorites
          </h2>
          {/* <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a> */}
        </div>

        {/* Category Cards */}
        <div className="scrolling-touch scrollbar-hide -mx-4 mt-6 flex space-x-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {categoryImages.map((image, index) => (
            <div key={index} className="min-w-[16rem] shrink-0">
              <div className="group relative h-96 overflow-hidden rounded-lg shadow-lg hover:opacity-75">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* <h3 className="mt-4 text-base font-semibold text-gray-900">
                {image.name}
              </h3> */}
            </div>
          ))}
        </div>

        {/* Browse all imagse button - mobile */}
        {/* <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all images
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}
