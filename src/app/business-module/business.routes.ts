/**
 * Created by wh1709040 on 2019/1/3.
 */
import {Routes} from '@angular/router';
import {BusinessComponent} from './business.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: BusinessComponent,
    children: [
      {path: 'index', loadChildren: './index/index.module#IndexModule'},
      {path: 'work-order', loadChildren: './work-order/work-order.module#WorkOrderModule'},
      {path: 'trouble', loadChildren: './trouble/trouble.module#TroubleModule'},
    ]
  },
];
