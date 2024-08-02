import { createStore } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { Hero } from '../models/Hero';

export const HeroStore = createStore({ name: 'hero' }, withEntities<Hero>());
