import { heroStore } from './hero.store';
import { selectAllEntities } from '@ngneat/elf-entities';

export const heroQuery = heroStore.pipe(selectAllEntities());
