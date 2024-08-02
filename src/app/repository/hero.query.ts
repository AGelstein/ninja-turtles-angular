import { selectAllEntities, selectEntitiesCount } from '@ngneat/elf-entities';
import { HeroStore } from './hero.store';

export const SelectAllHeroQuery = HeroStore.pipe(selectAllEntities());
export const SelectHeroCountQuery = HeroStore.pipe(selectEntitiesCount());
