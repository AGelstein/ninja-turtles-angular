import { createStore } from '@ngneat/elf';
import {
  addEntities,
  selectAllEntities,
  selectFirst,
  withActiveId,
  withEntities,
} from '@ngneat/elf-entities';
import { Hero } from '../models/Hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const store = createStore(
  { name: 'heroes' },
  withEntities<Hero>(),
  withActiveId()
);

@Injectable({ providedIn: 'root' })
export class HeroRepository {
  constructor() {}

  first$ = store.pipe(selectFirst());

  update(hero: Hero) {
    store.update(addEntities(hero));
  }

  getAll(): Observable<Hero[]> {
    return store.pipe(selectAllEntities());
  }
}
