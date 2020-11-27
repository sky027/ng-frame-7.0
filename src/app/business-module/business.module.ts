import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './business.routes';
import {SharedModule} from '../shared-module/shared-module.module';
import {BusinessComponent} from './business.component';
import {MenuModule} from './menu/menu.module';

@NgModule({
  declarations: [BusinessComponent],
  imports: [
    CommonModule,
    MenuModule,
    SharedModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  providers: []
})
export class BusinessModule {
}
