import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/Hero';
import { map } from 'rxjs';
import { HeroRepository } from '../repository/hero.repository';
import { AuditLogRepository } from '../repository/audit-log.repository';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SearchHeroService {
  private auditLogRepository = inject(AuditLogRepository)
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
            return response.results.map(this.transformToHero);
          } else {
            throw new Error('Invalid API response: results is not an array');
          }
        })
      )
      .subscribe((heroes) => {
        this.heroRepository.clearStore();
        this.heroRepository.update(heroes);
        this.auditLogRepository.log(`"${query}" Hero Search Executed`)
      });
  }

  private transformToHero(apiData: any): Hero {
    return {
      id: apiData.id,
      name: apiData.name,
      img: decodeURIComponent(apiData.image.url),
      powerstats: apiData.powerstats,
    };
  }
}
