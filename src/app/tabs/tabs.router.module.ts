import { HomePageModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
         
          {
            path: 'fashion',
            loadChildren: () => import('../fashion/listing/fashion-listing.module').then(m => m.FashionListingPageModule)
          },
          {
            path: 'fashion/:productId',
            loadChildren: () => import('../fashion/details/fashion-details.module').then(m => m.FashionDetailsPageModule)
          },
          {
            path: 'food',
            loadChildren: () => import('../food/listing/food-listing.module').then(m => m.FoodListingPageModule)
          },
          {
            path: 'food/:productId',
            loadChildren: () => import('../food/details/food-details.module').then(m => m.FoodDetailsPageModule)
          },
          {
            path: 'travel',
            loadChildren: () => import('../travel/listing/travel-listing.module').then(m => m.TravelListingPageModule)
          },
          {
            path: 'travel/:productId',
            loadChildren: () => import('../travel/details/travel-details.module').then(m => m.TravelDetailsPageModule)
          },
          {
            path: 'deals',
            loadChildren: () => import('../deals/listing/deals-listing.module').then(m => m.DealsListingPageModule)
          },
          {
            path: 'deals/:productId',
            loadChildren: () => import('../deals/details/deals-details.module').then(m => m.DealsDetailsPageModule)
          },
          {
            path: 'real-state',
            loadChildren: () => import('../real-state/listing/real-state-listing.module').then(m => m.RealStateListingPageModule)
          },
          {
            path: 'real-state/:productId',
            loadChildren: () => import('../real-state/details/real-state-details.module').then(m => m.RealStateDetailsPageModule)
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
          },
          {
            path: 'friends',
            loadChildren: () => import('../user/friends/user-friends.module').then(m => m.UserFriendsPageModule)
          }
        ]
      },
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
      },
      
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
