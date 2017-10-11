import { I18nService } from 'app/services/shared/i18n.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-breadcrumbs',
  template: `
  <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
    <li class="breadcrumb-item"
        *ngIf="breadcrumb.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.title&&last"
        [ngClass]="{active: last}">
      <a *ngIf="!last" [routerLink]="breadcrumb.url">{{translate(breadcrumb.title)}}</a>
      <span *ngIf="last" [routerLink]="breadcrumb.url">{{translate(breadcrumb.title)}}</span>
    </li>
  </ng-template>`
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Array<Object>;

  constructor(private router: Router, private route: ActivatedRoute, private i18n: I18nService) {}

  ngOnInit(): void {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
      url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            this.breadcrumbs.push({
              title: route.snapshot.data.title,
              url:   url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }

  translate(title): string {
    return this.i18n.instant('routing.' + title);
  }
}
