export type ImageType = {
  image: string;
  alt: string;
};

// model Product {
//   id               Int            @id @default(autoincrement())
//   name             String
//   shortDescription String?
//   longDescription  String?
//   categoryId       Int?
//   prices           ProductPrice[] // Updated relation to product prices
//   Category         Category?      @relation(fields: [categoryId], references: [id])
//   imageUrls        ImageUrl[]
//   createdAt        DateTime       @default(now())
//   updatedAt        DateTime       @updatedAt
// }

// categoryId

export type ProductPriceType = {
  id: number;
  productId: number;
  dimension: string;
  price: number;
};

export type ProductDetailsType = {
  name: String;
  items: string[];
};

export type ProductType = {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  imageUrls: ImageType[];
  prices: ProductPriceType[];
  categories: string[];
  craftingTime: number;
  customizationOptions: string;
  // details: ProductDetailsType[];
};

export const products: ProductType[] = [
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    categories: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
];

export const products1: ProductType[] = [
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: 'Long Description',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
    prices: [
      {
        id: 1,
        productId: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        productId: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        productId: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Shipping',
        items: ['Shipping is free for orders above $50'],
      },
    ],
  },
  {
    id: 2,
    name: 'Teacher Sticky Note',
    shortDescription: 'Short Description',
    longDescription: 'Long Description',
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-sticky-note-3.JPG',
        alt: 'Description',
      },
    ],
    price: 100,
    dimensions: '5x5',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
  },
  {
    id: 3,
    name: 'Circle Cutting Board',
    shortDescription: 'Short Description',
    longDescription: 'Long Description',
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-3.JPG',
        alt: 'Description',
      },
    ],
    price: 100,
    dimensions: '5x5',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
  },
  {
    id: 4,
    name: 'Baseball Team Sign',
    shortDescription: 'Short Description',
    longDescription: 'Long Description',
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-sign-1.JPG',
        alt: 'Description',
      },
    ],
    price: 100,
    dimensions: '5x5',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
  },
  {
    id: 5,
    name: 'Basketball Team Sign',
    shortDescription: 'Short Description',
    longDescription: 'Long Description',
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/basketball-team-sign-1.JPG',
        alt: 'Description',
      },
    ],
    price: 100,
    dimensions: '5x5',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
  },
  {
    id: 6,
    name: 'Custom Baseball Sign',
    shortDescription: 'Short Description',
    longDescription: 'Long Description',
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-baseball-sign-1.JPG',
        alt: 'Description',
      },
    ],
    price: 100,
    dimensions: '5x5',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
  },
  {
    id: 7,
    name: 'Custom Baseball Sign',
    shortDescription: 'Short Description',
    longDescription: 'Long Description',
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/custom-basketball-sign-1.JPG',
        alt: 'Description',
      },
    ],
    price: 100,
    dimensions: '5x5',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
  },
  {
    id: 8,
    name: 'Custom Stanley Name Plates',
    shortDescription: 'Short Description',
    longDescription: 'Long Description',
    imageUrls: [
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-1.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-2.JPG',
        alt: 'Description',
      },
      {
        image:
          'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-name-plate-3.JPG',
        alt: 'Description',
      },
    ],
    price: 100,
    dimensions: '5x5',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
  },
];
