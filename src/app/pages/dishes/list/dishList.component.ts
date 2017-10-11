import { Dish } from './../../../models/dish.model';
import { Observable } from 'rxjs/Observable';
import { DishFilters } from './filterModels/Dishfilters';
import { Filter } from './filterModels/Filter';
import { DishCategory } from './../../../models/dishCategory.model';
import { DishService } from './../../../services/dish/dish.service';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dishList.component.html',
  styleUrls: ['./dishList.component.less']
})
export class DishListComponent implements OnInit {
  categories: Array<DishCategory> = [];

  newCategory: DishCategory;
  filteredCategories: Array<DishCategory>;
  filters: DishFilters;

  constructor(private dishService: DishService) {
    this.filters = new DishFilters();
    this.filteredCategories = [];
  }

  ngOnInit() {
    const dishesStream = this.dishService.getDishes();
    const categoriesStream = this.dishService.getDishCategories();

    Observable.zip(dishesStream.toArray(), categoriesStream.toArray())
      .subscribe(([dishes, categories]) => {
        this.categories = categories;

        dishes.forEach(dish => {
          this.categories.forEach(category => {
            if (dish.category.id === category.id) {
              if (!category.dishes) {
                category.dishes = [];
              }
              category.dishes.push(dish);
            };
          });
        });

        this.runFilter();
      }).unsubscribe();

    categoriesStream
      .map(category => new Filter(category.id, category.name, true))
      .toArray()
      .subscribe(categoryFilters => {
        this.filters.categories = categoryFilters;
        this.runFilter();
      }).unsubscribe();
  }

  addCategory() {
    this.newCategory = new DishCategory();
  }

  runFilter() {
    this.filteredCategories = this.categories.filter(cat => this.categoryFilter(cat));
  }

  private categoryFilter(dishCategory: DishCategory) {
    for (let i = 0; i < this.filters.categories.length; i++) {
      if (this.filters.categories[i].name === dishCategory.name) {
        return this.filters.categories[i].checked;
      }
    }
  }
}
