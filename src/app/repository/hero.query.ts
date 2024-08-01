import { selectAllEntities, selectEntitiesCount } from '@ngneat/elf-entities';
import { heroStore } from './hero.store';

export const SelectAllHeroQuery = heroStore.pipe(selectAllEntities());
export const SelectHeroCountQuery = heroStore.pipe(selectEntitiesCount());
