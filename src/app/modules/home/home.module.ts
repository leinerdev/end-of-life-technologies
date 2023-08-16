import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { AllTechnologiesComponent } from './pages/all-technologies/all-technologies.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdvancedSearchComponent } from './pages/advanced-search/advanced-search.component';


@NgModule({
  declarations: [
    HomeComponent,
    AllTechnologiesComponent,
    ProductDetailComponent,
    NotFoundComponent,
    AdvancedSearchComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
