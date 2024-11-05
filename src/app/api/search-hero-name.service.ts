import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/Hero';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HeroRepository } from '../repository/hero.repository';
import { AuditLogRepository } from '../repository/audit-log.repository';

@Injectable({
  providedIn: 'root',
})
export class SearchHeroService {
  constructor(
    private auditLogRepository: AuditLogRepository,
    private heroRepository: HeroRepository,
    private httpClient: HttpClient
  ) {}

  searchHeroes(query: string) {
    this.fetchHeroes(query).subscribe({
      next: (heroes) => {
        this.heroRepository.clearStore();
        this.heroRepository.updateHero(heroes);
        this.auditLogRepository.log(`"${query}" Hero Search Executed`);
      },
      error: (error) => {
        this.auditLogRepository.log(`ERROR: ${error.message}`);
      }
    });
  }

  private fetchHeroes(query: string) {
    return this.httpClient
      .get<any>(`https://www.superheroapi.com/api.php/${environment.apiKEY}/search/${query}`)
      .pipe(
        map((response) => {
          if (Array.isArray(response.results)) {
            return response.results.map(this.transformToHero);
          } else {
            throw new Error('Invalid API response: results is not an array');
          }
        }),
        catchError(() => {
          this.auditLogRepository.log('ERROR: No hero found by that name');
          return of([]);
        })
      );
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
