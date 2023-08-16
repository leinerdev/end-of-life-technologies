import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EndOfLifeService } from 'src/app/core/services/end-of-life.service';

@Component({
  selector: 'app-all-technologies',
  templateUrl: './all-technologies.component.html',
  styles: [
  ]
})
export class AllTechnologiesComponent {

  isLoading: boolean = false;
  products: string[] = [];

  constructor(
    protected endOfLifeService: EndOfLifeService,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.endOfLifeService.getAllProducts().subscribe({
      next: (products) => {
        this.isLoading = false;
        this.products = products;
      }
    });
  }

  goToTechnology(product: string){
    this.router.navigateByUrl(`/technology/${product}`);
  }

}
