import { Dish } from './dish.model';

export class DishCategory {
  id: number|null;
  name: string;
  dishes?: Array<Dish>;

  constructor(id?: number, name?: string) {
    this.dishes = [];
    this.id = id;
    this.name = name;
  }
}
