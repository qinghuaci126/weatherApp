import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { OrderPage } from '../order/order.page';
import {PublishPage} from '../publish/publish.page';
import {OfficePage} from '../office/office.page';
import {FollowPage} from '../follow/follow.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'order',
        outlet: 'order',
        component: OrderPage
      },
      {
        path: 'publish',
        outlet: 'publish',
        component: PublishPage
      },
      {
        path: 'office',
        outlet: 'office',
        component: OfficePage
      },
      {
        path: 'follow',
        outlet: 'follow',
        component: FollowPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
