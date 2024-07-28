import { Component } from '@angular/core';
import { HeroDetailsComponent } from '../hero-details/hero-details/hero-details.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroDetailsComponent, AvatarComponent, HeroSearchComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Title = 'Room of Really Really Strong Dudes';

  constructor() {}
}
