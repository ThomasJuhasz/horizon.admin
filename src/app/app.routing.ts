import { ReportsComponent } from './pages/reports/reports.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { BillingComponent } from './pages/billing/billing.component';
import { AuthGuard } from './services/authentication/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'app/pages/registration/registration.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: ''
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'dashboard'
        }
      },
      {
        path: 'dishes',
        loadChildren: './pages/dishes/dishes.module#DishesModule'
      },
      { path: 'billing', component: BillingComponent, data: { title: 'billing' } },
      { path: 'delivery', component: DeliveryComponent, data: { title: 'delivery' } },
      { path: 'profile', component: ProfileComponent, data: { title: 'profile' } },
      { path: 'reports', component: ReportsComponent, data: { title: 'reports' } },

      // These will be the final routes once all routes are modules
      // {
      //   path: 'billing',
      //   loadChildren: './pages/billing/billing.module#BillingModule'
      // },
      // {
      //   path: 'delivery',
      //   loadChildren: './pages/delivery/delivery.module#DeliveryModule'
      // },
      // {
      //   path: 'dishes',
      //   loadChildren: './pages/dishes/dishes.module#DishesModule'
      // },
      // {
      //   path: 'reports',
      //   loadChildren: './pages/reports/reports.module#ReportsModule'
      // }
    ]
  },
  {
    path: 'login',
    component: SimpleLayoutComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: 'registration',
    component: SimpleLayoutComponent,
    children: [{ path: '', component: RegistrationComponent }]
  }
];

export const eagerlyLoadedComponents = [
    LoginComponent,
    DashboardComponent,
    BillingComponent,
    DeliveryComponent,
    ProfileComponent,
    ReportsComponent,
    RegistrationComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [AuthGuard],
    exports: [RouterModule]
})
export class AppRoutingModule { }
