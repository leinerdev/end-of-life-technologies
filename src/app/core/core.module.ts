import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ThemeToggleComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ThemeToggleComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
