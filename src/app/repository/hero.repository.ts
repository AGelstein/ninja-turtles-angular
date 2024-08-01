import { createStore } from '@ngneat/elf';
import {
  selectFirst,
  selectLast,
  withActiveId,
  withEntities,
} from '@ngneat/elf-entities';
import { Hero } from '../models/Hero';

const store = createStore(
  { name: 'heroes' },
  withEntities<Hero>(),
  withActiveId()
);

export const first$ = store.pipe(selectFirst());
export const last$ = store.pipe(selectLast());
