import type { Offer } from '../types'

const base = import.meta.env.BASE_URL

export const OFFERS: Offer[] = [
  {
    id: 1,
    title: 'Nike Air Max 270',
    category: 'Products',
    subcategory: 'Footwear',
    points: 75,
    image: `${base}images/offer-1.png`,
    imageBgClass: 'offer-card__image-wrap--dark',
  },
  {
    id: 2,
    title: 'Get Free Rides across city',
    category: 'Services',
    subcategory: 'Transport',
    points: 150,
    image: `${base}images/offer-2.png`,
    imageBgClass: 'offer-card__image-wrap--light',
  },
  {
    id: 3,
    title: 'Philips - Flat 40% off',
    category: 'Discounts',
    subcategory: 'Kitchenware',
    points: 125,
    image: `${base}images/offer-3.png`,
    imageBgClass: 'offer-card__image-wrap--white',
  },
  {
    id: 4,
    title: 'Philips - Flat 40% off',
    category: 'Discounts',
    subcategory: 'Kitchenware',
    points: 125,
    image: `${base}images/offer-4.png`,
    imageBgClass: 'offer-card__image-wrap--white',
  },
  {
    id: 5,
    title: 'Huda Beauty - Flat 30% off',
    category: 'Products',
    subcategory: 'Beauty',
    points: 150,
    image: `${base}images/offer-5.png`,
    imageBgClass: 'offer-card__image-wrap--peach',
  },
  {
    id: 6,
    title: 'Get Free Rides across city',
    category: 'Services',
    subcategory: 'Transport',
    points: 150,
    image: `${base}images/offer-6.png`,
    imageBgClass: 'offer-card__image-wrap--light',
  },
]
