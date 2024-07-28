import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/Hero';
import { ComponentStore } from '@ngrx/component-store';
import { HeroState } from '../components/hero-search/hero.store';

@Injectable({
  providedIn: 'root',
})
export class SearchHeroService extends ComponentStore<HeroState> {
  constructor() {
    super({ heroes: [] });
  }
  private httpClient = inject(HttpClient);
  readonly heroes$ = this.select((state) => state.heroes);
  readonly setHeroes = this.updater((state, heroes: Hero[]) => ({
    ...state,
    heroes,
  }));

  searchHeroes(query: string) {
    this.httpClient
      .get<Hero[]>(
        `https://www.superheroapi.com/api.php/${environment.apiKEY}/search/${query}`
      )
      .subscribe((res) => this.setHeroes(res));
  }
}
