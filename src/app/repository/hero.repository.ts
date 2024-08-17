import { createStore } from '@ngneat/elf';
import {
  addEntities,
  selectAllEntities,
  withActiveId,
  withEntities,
} from '@ngneat/elf-entities';
import { Hero } from '../models/Hero';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const store = createStore(
  { name: 'heroes' },
  withEntities<Hero>(),
  withActiveId()
);

@Injectable({ providedIn: 'root' })
export class HeroRepository {
  constructor() {}

  update(hero: Hero) {
    store.update(addEntities(hero));
  }

  getAll(): Observable<Hero[]> {
    return store.pipe(selectAllEntities());
  }

  clearStore() {
    store.reset();
  }
}
