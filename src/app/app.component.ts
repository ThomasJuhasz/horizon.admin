import { I18nService } from './services/shared/i18n.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication/authentication.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.less'],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    document.getElementById('full-page-loader').className += 'hide-full-page-loader';
  }
}
