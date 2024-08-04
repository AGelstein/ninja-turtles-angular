import { Component, Input } from '@angular/core';
import { Hero } from '../../../models/Hero';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent {
  // todo remove bang
  @Input() hero!: Hero;
}
