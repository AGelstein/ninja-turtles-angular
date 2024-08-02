import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchHeroService } from '../../api/search-hero-name.service';
import { AsyncPipe } from '@angular/common';
import { Hero } from '../../models/Hero';
import { HeroRepository } from '../../repository/hero.repository';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  providers: [],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent {
  searchForm: FormGroup;
  heroes: Hero[] = [];

  constructor(
    private fb: FormBuilder,
    private searchNameService: SearchHeroService,
    private heroRepository: HeroRepository
  ) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const queryValue = this.searchForm.get('query')?.value;
      this.searchNameService.searchHeroes(queryValue);
    }
    this.heroRepository.getAll().subscribe((hero) => {
      console.log(hero);
    });
  }
}
