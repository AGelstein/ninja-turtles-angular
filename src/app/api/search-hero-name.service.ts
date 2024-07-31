import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/Hero';
import { heroStore } from '../components/state/hero.store';
import { map } from 'rxjs';
import { addEntities, setEntities, setEntitiesMap } from '@ngneat/elf-entities';

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
        // we're shoving all the entities in but it's not discerning by hero object
        map((response) => {
          heroStore.update(addEntities(response));
        })
      );
  }

  private ensureArray(data: Hero[] | Hero): Hero[] {
    return Array.isArray(data) ? data : [data];
  }
}
