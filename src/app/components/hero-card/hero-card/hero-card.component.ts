import { Component, input, OnInit } from '@angular/core';
import { Hero } from '../../../models/Hero';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {
  public hero = input.required<Hero>()

  ngOnInit(): void {}
}
