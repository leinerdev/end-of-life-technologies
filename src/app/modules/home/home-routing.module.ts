import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { AllTechnologiesComponent } from './pages/all-technologies/all-technologies.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'all-technologies', component: AllTechnologiesComponent },
      { path: 'technology/:product', component: ProductDetailComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'all-technologies' },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
