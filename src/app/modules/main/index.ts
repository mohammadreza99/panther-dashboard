import {Type} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MainPage} from "@modules/main/main.page";
import {MainRoutingModule} from "@modules/main/main-routing.module";
import {PrimeDialogModule, PrimeScrollTopModule} from "@powell/primeng";
import {LoadingComponent} from "@modules/layout/loading/loading.component";
import {LogoComponent} from "@modules/layout/logo/logo.component";
import {NavbarMenuComponent} from "@modules/layout/navbar-menu/navbar-menu.component";
import {DashboardPage} from "@modules/main/pages/dashboard/dashboard.page";
import {ManagerPage} from "@modules/main/pages/manager/manager.page";
import {TableModule} from "@powell/components/table";
import {ButtonModule} from "@powell/components/button";

export const DECLARATIONS: Type<any>[] = [
  MainPage,
  DashboardPage,
  ManagerPage
];

export const IMPORTS: Type<any>[] = [
  CommonModule,
  LoadingComponent,
  LogoComponent,
  NavbarMenuComponent,
  MainRoutingModule,
  PrimeScrollTopModule,
  TableModule,
  PrimeDialogModule,
  ButtonModule
];
