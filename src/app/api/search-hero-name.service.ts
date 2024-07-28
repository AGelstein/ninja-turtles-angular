import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/Hero';
import { ComponentStore } from '@ngrx/component-store';
import { HeroState } from '../components/hero-search/heroes.store';
import { map, Observable } from 'rxjs';

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

  searchHeroes(query: string): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(
        `https://www.superheroapi.com/api.php/${environment.apiKEY}/search/${query}`
      )
      .pipe(map((response) => this.ensureArray(response)));
  }

  private ensureArray(data: Hero[] | Hero): Hero[] {
    return Array.isArray(data) ? data : [data];
  }
}
