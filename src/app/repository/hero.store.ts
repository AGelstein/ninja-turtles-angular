import { createStore } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { Hero } from '../models/Hero';

export const heroStore = createStore({ name: 'hero' }, withEntities<Hero>());
