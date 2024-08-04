import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/Hero';
import { map } from 'rxjs';
import { HeroRepository } from '../repository/hero.repository';

@Injectable({
  providedIn: 'root',
})
export class SearchHeroService {
  private heroRepository = inject(HeroRepository);
  private httpClient = inject(HttpClient);

  searchHeroes(query: string) {
    return this.httpClient
      .get<any>(
        `https://www.superheroapi.com/api.php/${environment.apiKEY}/search/${query}`
      )
      .pipe(
        map((response) => {
          if (Array.isArray(response.results)) {
            const x = response.results.map(this.transformToHero);
            return response.results.map(this.transformToHero);
          } else {
            throw new Error('Invalid API response: results is not an array');
          }
        })
      )
      .subscribe((heroes) => {
        this.heroRepository.clearStore();
        this.heroRepository.update(heroes);
      });
  }

  private transformToHero(apiData: any): Hero {
    return {
      id: apiData.id,
      name: apiData.name,
    };
  }
}
