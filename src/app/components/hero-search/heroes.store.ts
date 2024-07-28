import { Injectable } from '@angular/core';
import { Hero } from '../../models/Hero';
import { ComponentStore } from '@ngrx/component-store';

export interface HeroState {
  heroes: Hero[];
}

@Injectable()
export class HeroesStore extends ComponentStore<HeroState> {
  constructor() {
    super({ heroes: [] });
  }

  readonly heroes$ = this.select((state) => state.heroes);
  readonly heroById$ = (id: number) =>
    this.select((state) => state.heroes.find((hero) => hero.id === id));

  readonly addHero = this.updater((state, newHero: Hero) => ({
    ...state,
    heroes: [...state.heroes, newHero],
  }));

  readonly updateHero = this.updater((state, updatedHero: Hero) => ({
    ...state,
    heroes: state.heroes.map((hero) =>
      hero.id === updatedHero.id ? updatedHero : hero
    ),
  }));
}
