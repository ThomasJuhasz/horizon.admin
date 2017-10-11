import { DishCategory } from './dishCategory.model';
import { Rating } from './rating.model';

export class Dish {
  id: number;
  name: string;
  price: number; // ActualPrice
  currency: string; // not yet
  description: string;
  rating: Rating; // not yet
  image: string;
  salePercent?: number;
  category: any;
  // allergens: Array<Allergen>;

  constructor() {
    this.rating = new Rating();
  }
}
