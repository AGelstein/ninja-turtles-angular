import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchNameService } from '../../api/search-hero-name.service';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent {
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private searchNameService: SearchNameService
  ) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const queryValue = this.searchForm.get('query')?.value;
      this.searchNameService
        .getHeroByName(queryValue)
        // leaky subscription
        .subscribe((response) => {
          console.log('Response:', response);
        });
    }
  }
}
