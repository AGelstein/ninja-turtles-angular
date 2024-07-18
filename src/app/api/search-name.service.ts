import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SearchNameService {
  constructor() {}
  private httpClient = inject(HttpClient);

  searchName() {
    return this.httpClient.get(
      `https://www.superheroapi.com/api.php/${environment.apiKEY}/search/donatello`
    );
  }
}
