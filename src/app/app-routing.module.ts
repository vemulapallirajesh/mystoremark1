import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { staticPage } from './main/staticPage/staticPage.component'
import { CmsPageGuard } from '@spartacus/storefront';


const routes: Routes = [
  {
    path: 'static',
    component: staticPage,
    canActivate: [CmsPageGuard]
      // path with dynamic param:
      // path: 'order/:orderCode',

      // // page label without param, starting with slash:
      // data: { pageLabel: '/order' },

      // // those are needed to display slots and components from CMS:
      // component: PageLayoutComponent,
      // canActivate: [CmsPageGuard]
  },
  // {
  //   path: 'sale',
  //   component: staticPage,
  //   canActivate: [CmsPageGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
