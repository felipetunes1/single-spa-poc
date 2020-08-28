import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'music/:musicId', component: ProductDetailsComponent },
  { path: 'music', component: ProductListComponent },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ]
})
export class AppRoutingModule { }
