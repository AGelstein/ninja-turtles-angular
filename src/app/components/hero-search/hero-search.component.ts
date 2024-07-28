import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchHeroService } from '../../api/search-hero-name.service';
import { Subscription } from 'rxjs';
import { HeroesStore } from './hero.store';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [HeroesStore],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent implements OnDestroy {
  searchForm: FormGroup;
  subscriptions = new Subscription();
  heroes$ = this.heroesStore.heroes$;

  constructor(
    private fb: FormBuilder,
    private searchNameService: SearchHeroService,
    private heroesStore: HeroesStore
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
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
