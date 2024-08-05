import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../models/Hero';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {
  // todo remove bang
  @Input() hero: Hero | null = null;

  ngOnInit(): void {}
}
