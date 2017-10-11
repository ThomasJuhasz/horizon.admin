import { DishCategory } from './../../../models/dishCategory.model';
import { DishService } from './../../../services/dish/dish.service';
import { Dish } from './../../../models/dish.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.less']
})
export class DishComponent implements OnInit {
  categories: DishCategory[];
  dish: Dish;

  constructor(private route: ActivatedRoute, private dishService: DishService) {
    this.dish = new Dish();
  }

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    const id = paramId ? parseInt(paramId, 0) : null;

    this.dishService.getDishCategories()
                    .toArray()
                    .subscribe(categories => this.categories = categories);

    if (id) {
      this.dishService.getDish(id).subscribe(dish => this.dish = dish);
    }
  }
}
