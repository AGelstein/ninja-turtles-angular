import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchHeroService } from '../../api/search-hero-name.service';
import { AsyncPipe } from '@angular/common';
import { Hero } from '../../models/Hero';
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
  heroes: Hero[] = [];
  // this is imperative code. this is not ideal
  hasSearched: boolean = false;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const queryValue = this.searchForm.get('query')?.value;
      this.searchNameService.searchHeroes(queryValue);
      this.hasSearched = true;
    }
  }

  resetHeroResults() {
    this.heroRepository.clearStore();
    this.hasSearched = false;
  }
}
