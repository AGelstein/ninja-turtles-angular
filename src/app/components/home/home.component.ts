import { Component, inject } from '@angular/core';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroCardComponent } from '../hero-card/hero-card/hero-card.component';
import { HeroRepository } from '../../repository/hero.repository';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSearchComponent, HeroCardComponent, AsyncPipe, NgFor],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Title = 'Room of Really Really Strong Dudes';
  heroRepository = inject(HeroRepository);

  Heroes$ = this.heroRepository.getAll().subscribe((heroes) => {
    console.log(heroes);
  });
}
