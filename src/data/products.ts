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

export type ProductPrice = {
  id: number;
  productId: number;
  dimension: string;
  price: number;
};

export type ProductType = {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  imageUrls: ImageType[];
  prices: ProductPrice[];
  dimensions: string;
  category: string;
  craftingTime: number;
  custimizatoinOptions: string;
};

export const products: ProductType[] = [
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: 'Long Description',
    price: 100,
    dimensions: '5x5',
    category: 'Test',
    craftingTime: 14,
    custimizatoinOptions:
      'Explanation of what can be changed and what should be specified in directions',
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
