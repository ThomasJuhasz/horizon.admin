import { Title } from '@angular/platform-browser';
import { I18nService } from './../../services/shared/i18n.service';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.less']
})
export class FullLayoutComponent implements OnInit {
  user: any;

  constructor(private i18n: I18nService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private titleService: Title,
              private activatedRoute: ActivatedRoute) {

      this.user = this.authenticationService.getUser();
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => {
        let route: ActivatedRoute = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle('Horizon Admin | ' + this.i18n.instant('routing.' + event['title']));

        window.scrollTo(0, 0);
      });

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        this.user = this.authenticationService.getUser();
      });
  }

  navClicked() {
    document.querySelector('.app').classList.toggle('sidebar-mobile-show');
  };
}
