import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared-module/shared-module.module';
import {ThreeMenuComponent} from './left-menu/three-menu/three-menu.component';
import {MenuComponent} from './left-menu/menu/menu.component';

@NgModule({
  declarations: [ThreeMenuComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [ThreeMenuComponent, MenuComponent]
})
export class MenuModule {
}
