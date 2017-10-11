import { WidgetsModule } from './../../widgets/widgets.module';
import { PipesModule } from './../../pipes/pipes.module';
import { DishService } from '../../services/dish/dish.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DishesRoutingModule, eagerlyLoadedComponents } from './dishes.routing';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DishesRoutingModule,
    PipesModule,
    WidgetsModule,
    StarRatingModule
  ],
  declarations: [
    eagerlyLoadedComponents
  ]
})
export class DishesModule { }
