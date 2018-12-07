import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'publish', loadChildren: './publish/publish.module#PublishPageModule' },
  { path: 'office', loadChildren: './office/office.module#OfficePageModule' },
  { path: 'follow', loadChildren: './follow/follow.module#FollowPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
