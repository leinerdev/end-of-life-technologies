import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EndOfLifeService } from 'src/app/core/services/end-of-life.service';
import { ProductDetail } from '../../interfaces/product-detail.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styles: [
  ]
})
export class AdvancedSearchComponent implements OnInit {

  technlogyForm!: FormGroup;
  isLoading = false;
  notResults = false;
  formSubmitted = false;
  results: ProductDetail[] = [];

  constructor(
    protected fb: FormBuilder,
    protected endOfLifeService: EndOfLifeService
  ) {}

  ngOnInit(): void {
    this.technlogyForm = this.fb.group({
      technology_name: ['', [Validators.required]],
      technology_version: ['']
    });
  }

  search() {
    this.technlogyForm.markAllAsTouched();
    if (this.technlogyForm.invalid) return;

    this.formSubmitted = true;
    this.isLoading = true;
    const { technology_name, technology_version } = this.technlogyForm.value;
    this.endOfLifeService.getAllDetailsByProduct(technology_name, technology_version.toString()).subscribe({
      next: (data) => {
        if (data.length === 0) {
          this.formSubmitted = false;
          this.isLoading = false;
          this.notResults = true;
        } else {
          this.notResults = false;
          this.results = data;
          this.isLoading = false;
          this.formSubmitted = true;
        }
      },
      error: (err: HttpErrorResponse) => {
        this.formSubmitted = false;
        this.isLoading = false;
        if (err.status === 404) {
          this.notResults = true;
        }
      }
    });
  }

}
