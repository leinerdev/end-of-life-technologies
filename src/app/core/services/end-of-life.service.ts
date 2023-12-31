import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductDetail } from 'src/app/modules/home/interfaces/product-detail.interface';
@Injectable({
  providedIn: 'root'
})
export class EndOfLifeService {

  private API_URL = 'https://endoflife.date/api';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/all.json`);
  }

  getAllDetailsByProduct(product: string, version?: string): Observable<ProductDetail[]> {
    return this.http.get<ProductDetail[]>(`${this.API_URL}/${product}.json`).pipe(
      map((data: ProductDetail[]) => {
        if (version) {
          return data.filter((productDetail: ProductDetail) => productDetail.cycle == version)
        }
        return data;
      })
    );
  }
}
