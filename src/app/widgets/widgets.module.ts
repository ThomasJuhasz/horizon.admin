import { AsideToggleDirective } from './from-theme/aside.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './from-theme/sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './from-theme/nav-dropdown.directive';
import { BreadcrumbsComponent } from './from-theme/breadcrumb';
import { AjaxButtonComponent } from './ajax-button/ajax-button.component';
import { PipesModule } from './../pipes/pipes.module';
import { HttpService } from 'app/services/shared/httpService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule
  ],
  declarations: [
    AjaxButtonComponent,
    BreadcrumbsComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  exports: [
    AjaxButtonComponent,
    BreadcrumbsComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ]
})
export class WidgetsModule { }
