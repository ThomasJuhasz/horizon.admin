import { DishComponent } from './dish/dish.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishesComponent } from './dishes.component';
import { DishListComponent } from './list/dishList.component';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'dishes'
    },
    component: DishesComponent,
    children: [
      {
        path: '',
        component: DishListComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add',
        component: DishComponent,
        data: {
          title: 'newDish'
        }
      },
      {
        path: ':id',
        component: DishComponent,
        data: {
          title: 'updateDish'
        }
      }
    ]
  }
];

export const eagerlyLoadedComponents = [
  DishesComponent,
  DishListComponent,
  DishComponent
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DishesRoutingModule { }
