import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/Hero';
import { heroStore } from '../repository/hero.store';
import { map } from 'rxjs';
import { addEntities } from '@ngneat/elf-entities';

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
        // we're shoving all the entities in but it's not discerning by hero
        // currently it sees only one large entity
        map((response) => {
          let heros = this.transformData(response);
          heroStore.update(addEntities(heros));
        })
      );
  }

  // the data is coming in as an array of objects and we're not parsing that right yet
  private transformData(apiData: any): Hero {
    console.log('transformData: ', apiData);

    return {
      id: apiData.id,
      name: apiData.name,
    };
  }
}
