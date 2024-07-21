import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Hero } from '../models/turtle';
import { map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchNameService {
  constructor() {}
  private httpClient = inject(HttpClient);

  searchName() {
    return this.httpClient.get<Hero>(
      `https://www.superheroapi.com/api.php/${environment.apiKEY}/search/donatello`
    );
  }

  getNinjaTurtle(): Observable<Hero> {
    return this.httpClient.get<Hero>(
      `https://www.superheroapi.com/api.php/${environment.apiKEY}/search/donatello`
    );
  }
}
