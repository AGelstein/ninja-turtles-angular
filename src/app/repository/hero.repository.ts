import { createStore, select } from '@ngneat/elf';
import {
  addEntities,
  selectAllEntities,
  selectFirst,
  selectLast,
  updateEntities,
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

export const first$ = store.pipe(selectFirst());
export const last$ = store.pipe(selectLast());

@Injectable({ providedIn: 'root' })
export class HeroRepository {
  constructor() {}

  update(hero: Hero) {
    store.update(addEntities(hero));
  }

  getAll(): Observable<Hero[]> {
    return store.pipe(selectAllEntities());
  }
}
