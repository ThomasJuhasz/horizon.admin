import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { I18nService, I18nPipe } from 'app/services/i18n';
import { BsDropdownModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { routes } from 'app/app.routes';
import { LoginComponent } from 'app/pages/login/login.component';
import { AuthenticationService } from 'app/services/authentication/authentication.service';
import { AjaxButtonComponent } from 'app/components/ajax-button/ajax-button.component';
import { ProfileComponent } from 'app/pages/profile/profile.component';
import { ReportsComponent } from 'app/pages/reports/reports.component';
import { BillingComponent } from 'app/pages/billing/billing.component';
import { DeliveryComponent } from 'app/pages/delivery/delivery.component';
import { DishesComponent } from 'app/pages/dishes/dishes.component';
import { NAV_DROPDOWN_DIRECTIVES } from 'app/components/from-theme/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from 'app/components/from-theme/sidebar.directive';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
      BsDropdownModule.forRoot(),
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes),
    ],
    declarations: [
      AppComponent,
      DashboardComponent,
      I18nPipe,
      LoginComponent,
      AjaxButtonComponent,
      SIDEBAR_TOGGLE_DIRECTIVES,
      NAV_DROPDOWN_DIRECTIVES,
      DishesComponent,
      DeliveryComponent,
      BillingComponent,
      ReportsComponent,
      ProfileComponent
    ],
    providers: [
      I18nService,
      AuthenticationService,
      { provide: APP_BASE_HREF, useValue: '/' }
    ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
