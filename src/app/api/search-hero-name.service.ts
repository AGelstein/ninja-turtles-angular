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
  constructor(private heroRepository: HeroRepository) {}
  private httpClient = inject(HttpClient);
  BobbyHill: Hero = {
    id: 0,
    name: '',
  };

  searchHeroes(query: string) {
    this.BobbyHill = {
      id: 2,
      name: 'Bobby Hill',
    };

    return this.httpClient
      .get<Hero[]>(
        `https://www.superheroapi.com/api.php/${environment.apiKEY}/search/${query}`
      )
      .pipe(map((response) => this.transformToHero(response)))
      .subscribe((heroes) => {
        this.heroRepository.update(this.BobbyHill);
      });
  }

  private transformToHero(apiData: any): Hero {
    return {
      id: apiData.id,
      name: apiData.name,
    };
  }
}
