import holidaysImgage from './categories/holidays-1.jpeg';
import seasonsImage from './categories/seasons-1.jpeg';

export type CategoryImage = {
  name: string;
  link: string;
  src: string;
  alt: string;
};

export const categoryImages = [
  {
    name: 'Holidays',
    link: '',
    src: holidaysImgage,
    alt: '',
  },
  {
    name: 'Seasons',
    link: '',
    src: seasonsImage,
    alt: '',
  },
  // {
  //   name: 'Family',
  //   link: '',
  //   src: '',
  //   alt: '',
  // },
  // {
  //   name: 'Sports',
  //   link: '',
  //   src: '',
  //   alt: '',
  // },
  // {
  //   name: 'Ornaments',
  //   link: '',
  //   src: '',
  //   alt: '',
  // },
  // {
  //   name: 'Newborn Gifts',
  //   link: '',
  //   src: '',
  //   alt: '',
  // },
  // {
  //   name: 'Romantic',
  //   link: '',
  //   src: '',
  //   alt: '',
  // },
];
