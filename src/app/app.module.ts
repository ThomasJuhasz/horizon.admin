import { WidgetsModule } from './widgets/widgets.module';
import { PipesModule } from './pipes/pipes.module';
import { HttpService } from './services/shared/httpService.service';
import { DishService } from './services/dish/dish.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

// TODO: this is 500kb without gzip, need to import separately
import 'rxjs/Rx';

import { AppRoutingModule, eagerlyLoadedComponents } from './app.routing';

import { AppComponent } from './app.component';
import { I18nService } from 'app/services/shared/i18n.service';
import { RouterModule } from '@angular/router';

import { LoginComponent } from 'app/pages/login/login.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { AuthenticationService } from 'app/services/authentication/authentication.service';
import { BsDropdownModule } from 'ng2-bootstrap';
import { DishesComponent } from './pages/dishes/dishes.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { BillingComponent } from './pages/billing/billing.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DishComponent } from './pages/dishes/dish/dish.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    PipesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule,
    WidgetsModule
  ],
  declarations: [
    AppComponent,
    eagerlyLoadedComponents,
    FullLayoutComponent,
    SimpleLayoutComponent,
    RegistrationComponent
  ],
  providers: [
    I18nService,
    AuthenticationService,
    DishService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
