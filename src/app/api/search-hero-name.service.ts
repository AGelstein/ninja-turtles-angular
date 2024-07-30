import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/Hero';
import { heroStore } from '../components/state/hero.store';
import { map } from 'rxjs';
import { setEntities } from '@ngneat/elf-entities';

@Injectable({
  providedIn: 'root',
})
export class SearchHeroService {
  constructor() {}
  private httpClient = inject(HttpClient);

  searchHeroes(query: string) {
    return this.httpClient
      .get<Hero[]>(
        `https://www.superheroapi.com/api.php/${environment.apiKEY}/search/${query}`
      )
      .pipe(
        // todo use response dynamically to populate. right now we are hardcoding 1 to see if store works
        map((response) =>
          heroStore.update(
            setEntities([
              { id: 1, name: 'Superman' },
              { id: 2, name: 'Bateman' },
            ])
          )
        )
      );
  }

  private ensureArray(data: Hero[] | Hero): Hero[] {
    return Array.isArray(data) ? data : [data];
  }
}
