import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchHeroService } from '../../api/search-hero-name.service';
import { AsyncPipe } from '@angular/common';
import { HeroRepository } from '../../repository/hero.repository';
import { HeroSearchResultsComponent } from "../hero-search-results/hero-search-results.component";

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, HeroSearchResultsComponent],
  providers: [],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent {
  heroRepository = inject(HeroRepository)
  searchNameService = inject(SearchHeroService);

  searchForm: FormGroup;
  hasSearchedOnce = signal(false);

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const queryValue = this.searchForm.get('query')?.value;
      this.searchNameService.searchHeroes(queryValue);
      this.hasSearchedOnce.set(true);
    }
  }

  resetHeroResults() {
    this.heroRepository.clearStore();
    this.hasSearchedOnce.set(false);
    this.searchForm.reset({ query: '' });
  }
}
