import { heroStore } from './hero.store';
import { selectAllEntities, selectEntitiesCount } from '@ngneat/elf-entities';

export const SelectAllHeroQuery = heroStore.pipe(selectAllEntities());

export const SelectHeroCountQuery = heroStore.pipe(selectEntitiesCount());
