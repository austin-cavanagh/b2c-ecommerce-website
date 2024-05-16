// customizationOptions: [
//   {
//     label: 'Background Color',
//     description: 'Choose from available colors: Red, Blue, Green',
//     inputType: 'dropdown',
//     choices: ['Red', 'Blue', 'Green'],
//   },
// ],

// Teacher Sticky Note

const products = [
  // American Flag Sign
  {
    name: 'American Flag Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/american-flag-sign-1.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Baby Name Sign
  {
    name: 'Baby Name Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baby-name-sign-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baby-name-sign-2.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Barbie Sign
  {
    name: 'Barbie Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/barbie-sign-1.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Baseball Team Ornament
  {
    name: 'Baseball Team Ornament',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-ornament-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-ornament-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-ornament-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Baseball Team Sign
  {
    name: 'Baseball Team Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Be Mine Sign
  {
    name: 'Be Mine Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/be-mine-sign-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/be-mine-sign-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/be-mine-sign-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Bear Cutout
  {
    name: 'Bear Cutout',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/bear-cutout-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/bear-cutout-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/bear-cutout-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Book Stand
  {
    name: 'Book Stand',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/book-stand-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/book-stand-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/book-stand-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // College Baseball Sign
  {
    name: 'College Baseball Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/college-baseball-sign-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/college-baseball-sign-2.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Cutting Board
  {
    name: 'Cutting Board',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/cutting-board-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/cutting-board-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/cutting-board-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Easter Display
  {
    name: 'Easter Display',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/easter-display-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/easter-display-2.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Faith and Freedom Sign
  {
    name: 'Faith and Freedom Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/faith-and-freedom-sign-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/faith-and-freedom-sign-2.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Family Name Sign
  {
    name: 'Family Name Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/family-name-sign-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/family-name-sign-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/family-name-sign-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Fourth of July Piece
  {
    name: 'Fourth of July Piece',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/fourth-of-july-piece-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/fourth-of-july-piece-2.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Gas Money Ornament
  {
    name: 'Gas Money Ornament',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/gas-money-ornament-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/gas-money-ornament-2.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Graduation Sign
  {
    name: 'Graduation Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/graduation-sign-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/graduation-sign-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/graduation-sign-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Grinch Christmas Ornaments
  {
    name: 'Grinch Christmas Ornaments',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/grinch-christmas-ornament-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/grinch-christmas-ornament-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/grinch-christmas-ornament-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Grinch Ornament
  {
    name: 'Grinch Ornament',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/grinch-ornament-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/grinch-ornament-2.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Hello Fall Sign
  {
    name: 'Hello Fall Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-fall-sign-1.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-fall-sign-2.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-fall-sign-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Hello Kitty Sign
  {
    name: 'Hello Kitty Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-kitty-sign-3.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-kitty-sign-3.jpeg',
        alt: 'Description',
      },
      {
        src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-kitty-sign-3.jpeg',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },

  //
  //
  //
  // Hello Spring Sign
  {
    name: 'Hello Spring Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Mickey Ornament
  {
    name: 'Mickey Ornament',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Mom Puzzle Sign
  {
    name: 'Mom Puzzle Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Mummy Decoration
  {
    name: 'Mummy Decoration',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Name Plate
  {
    name: 'Name Plate',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Named Keychain
  {
    name: 'Named Keychain',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Named Ornament
  {
    name: 'Named Ornament',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // NFL Team Sign
  {
    name: 'NFL Team Football Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // No Soliciting Sign
  {
    name: 'No Soliciting Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Soccer Name Sign
  {
    name: 'Soccer Name Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Stanley Cup Name Plate
  {
    name: 'Stanley Cup Name Plate',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Star Wars Earings
  {
    name: 'Star Wars Earings',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Sweethearts Family Display
  {
    name: 'Sweethearts Family Display',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Tassle
  {
    name: 'Tassle',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Tooth Fairy Sign
  {
    name: 'Tooth Fairy Sign',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Tree Stump Ornament
  {
    name: 'Tree Stump Ornament',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // Vase Holder
  {
    name: 'Vase Holder',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
  // You Complete Me Earings
  {
    name: 'You Complete Me Earings',
    longDescription: ``,
    prices: [
      {
        dimension: '10x10',
        price: 1000,
      },
      {
        dimension: '15x15',
        price: 2000,
      },
      {
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        src: '',
        alt: 'Description',
      },
    ],

    customizationOptions: [],
    categories: [],
    shortDescription: 'HIDE SHORT DESCRIPTION',
    craftingTime: 0,
  },
];

// const products = [
//   // Teacher Pencil Sign
//   {
//     name: 'Teacher Pencil Sign',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Teacher Sticky Note
//   {
//     name: 'Teacher Sticky Note',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Stanley Name Plates
//   {
//     name: 'Stanley Name Plates',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Baseball Sign
//   {
//     name: 'Custom Baseball Sign',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-baseball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Basketball Sign
//   {
//     name: 'Custom Basketball Sign',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-basketball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Baseball Team Sign
//   {
//     name: 'Baseball Team Sign',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Basketball Team Sign
//   {
//     name: 'Basketball Team Sign',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/basketball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Circle Cutting Board
//   {
//     name: 'Circle Cutting Board',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },

//   // FAKE PRODUCTS 1
//   // FAKE PRODUCTS 1
//   // FAKE PRODUCTS 1

//   // Teacher Pencil Sign
//   {
//     name: 'Teacher Pencil Sign 1',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Teacher Sticky Note
//   {
//     name: 'Teacher Sticky Note 1',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Stanley Name Plates
//   {
//     name: 'Stanley Name Plates 1',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Baseball Sign
//   {
//     name: 'Custom Baseball Sign 1',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-baseball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Basketball Sign
//   {
//     name: 'Custom Basketball Sign 1',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-basketball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Baseball Team Sign
//   {
//     name: 'Baseball Team Sign 1',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Basketball Team Sign
//   {
//     name: 'Basketball Team Sign 1',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/basketball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Circle Cutting Board
//   {
//     name: 'Circle Cutting Board 1',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },

//   // FAKE PRODUCTS 2
//   // FAKE PRODUCTS 2
//   // FAKE PRODUCTS 2

//   // Teacher Pencil Sign
//   {
//     name: 'Teacher Pencil Sign 2',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Teacher Sticky Note
//   {
//     name: 'Teacher Sticky Note 2',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Stanley Name Plates
//   {
//     name: 'Stanley Name Plates 2',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Baseball Sign
//   {
//     name: 'Custom Baseball Sign 2',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-baseball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Basketball Sign
//   {
//     name: 'Custom Basketball Sign 2',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-basketball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Baseball Team Sign
//   {
//     name: 'Baseball Team Sign 2',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Basketball Team Sign
//   {
//     name: 'Basketball Team Sign 2',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/basketball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Circle Cutting Board
//   {
//     name: 'Circle Cutting Board 2',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // FAKE PRODUCTS 3
//   // FAKE PRODUCTS 3
//   // FAKE PRODUCTS 3

//   // Teacher Pencil Sign
//   {
//     name: 'Teacher Pencil Sign 3',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Teacher Sticky Note
//   {
//     name: 'Teacher Sticky Note 3',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Stanley Name Plates
//   {
//     name: 'Stanley Name Plates 3',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Baseball Sign
//   {
//     name: 'Custom Baseball Sign 3',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-baseball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Basketball Sign
//   {
//     name: 'Custom Basketball Sign 3',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-basketball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Baseball Team Sign
//   {
//     name: 'Baseball Team Sign 3',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Basketball Team Sign
//   {
//     name: 'Basketball Team Sign 3',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/basketball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Circle Cutting Board
//   {
//     name: 'Circle Cutting Board 3',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },

//   // FAKE PRODUCTS 4
//   // FAKE PRODUCTS 4
//   // FAKE PRODUCTS 4

//   // Teacher Pencil Sign
//   {
//     name: 'Teacher Pencil Sign 4',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Teacher Sticky Note
//   {
//     name: 'Teacher Sticky Note 4',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Stanley Name Plates
//   {
//     name: 'Stanley Name Plates 4',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Baseball Sign
//   {
//     name: 'Custom Baseball Sign 4',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-baseball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Custom Basketball Sign
//   {
//     name: 'Custom Basketball Sign 4',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-basketball-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Baseball Team Sign
//   {
//     name: 'Baseball Team Sign 4',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Basketball Team Sign
//   {
//     name: 'Basketball Team Sign 4',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/basketball-team-sign-1.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
//   // Circle Cutting Board
//   {
//     name: 'Circle Cutting Board 4',
//     shortDescription: 'Short Description how long is',
//     longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
//     categories: ['Teacher', 'Signs', 'Kitchen'],
//     craftingTime: 14,
//     customizationOptions: [
//       {
//         label: 'Background Color',
//         description: 'Choose from available colors: Red, Blue, Green',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name Color',
//         description: 'Specify the size of the sign',
//         inputType: 'dropdown',
//         choices: ['Red', 'Blue', 'Green'],
//       },
//       {
//         label: 'Name',
//         description: 'Add a personalized message or name',
//         inputType: 'textfield',
//         maxLength: 20,
//       },
//     ],
//     prices: [
//       {
//         dimension: '12x12',
//         price: 1000,
//       },
//       {
//         dimension: '15x15',
//         price: 2000,
//       },
//       {
//         dimension: '20x20',
//         price: 3000,
//       },
//     ],
//     imageUrls: [
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-1.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-2.JPG',
//         alt: 'Description',
//       },
//       {
//         src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-3.JPG',
//         alt: 'Description',
//       },
//     ],
//   },
// ];

module.exports = { products };
