import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { EndOfLifeService } from 'src/app/core/services/end-of-life.service';
import { ProductDetail } from '../../interfaces/product-detail.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit {

  isLoading: boolean = false;
  productData?: ProductDetail[] = [];

  constructor(
    protected route: ActivatedRoute,
    protected navigator: Router,
    protected endOfLifeService: EndOfLifeService
  ) {}

  ngOnInit(): void {
    this.loadParams();
  }

  loadParams() {
    this.isLoading = true;
    this.route.params
    .pipe(map(params => params['product']))
    .subscribe(product => {
      if (product == '') {
        this.navigator.navigateByUrl('/not-found');
        this.isLoading = false;
      } else {
        this.loadProduct(product);
      }
    });
  }

  loadProduct(product: string){
    this.endOfLifeService.getAllDetailsByProduct(product).subscribe({
      next: (data) => {
        this.isLoading = false;
        console.log(data);  
        this.productData = data;
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        if (err.status == 404) {
          this.navigator.navigateByUrl('/not-found');
        }
      }
    });
  }

}
