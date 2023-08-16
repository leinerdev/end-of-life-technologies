import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { EndOfLifeService } from 'src/app/core/services/end-of-life.service';
import { ProductDetail } from '../../interfaces/product-detail.interface';
import { IconfinderService } from 'src/app/core/services/iconfinder.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit {

  isLoading: boolean = false;
  productData?: ProductDetail[] = [];
  technologyImage: string = '';

  constructor(
    protected route: ActivatedRoute,
    protected navigator: Router,
    protected endOfLifeService: EndOfLifeService,
    protected iconfinderService: IconfinderService
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

  loadProduct(product: string) {
    this.endOfLifeService.getAllDetailsByProduct(product).subscribe({
      next: (data) => {
        this.iconfinderService.getIconByParam(product).subscribe({
          next: (res: any) => {
            this.technologyImage = res.icons[0].raster_sizes[5].formats[0].preview_url;
            this.isLoading = false;
            console.log(res);
          }
        })
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
