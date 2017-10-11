import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Pipe } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dishes',
  template: '<router-outlet></router-outlet>'
})
export class DishesComponent {
  constructor() { }
}
